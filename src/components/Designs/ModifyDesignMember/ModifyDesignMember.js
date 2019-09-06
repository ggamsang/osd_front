import React, { Component } from "react";
import styled from "styled-components";
import { Modal } from "semantic-ui-react";
//import Button from "components/Commons/Button";
import StyleGuide from "StyleGuide";
import noface from "source/thumbnail.png";
import Cross from "components/Commons/Cross";
import SearchDesignMemverContainer from "containers/Commons/SearchDesignMemberContainer";

const ModalContent = styled(Modal.Content)`
  & .ui.grid {
    margin: 0;
  }
  & ul {
    margin: 1rem 0 2rem 0;
  }
  & .newMember {
    & > button {
      float: right;
      width: 10%;
      height: 38px;
      padding: 0;
      margin-right: 1rem;
    }
    &::after {
      clear: both;
      display: block;
      content: "";
    }
  }
`;
const Label = styled.div`
  margin: 0 0 0.8rem 0;
  display: block;
  color: rgba(0,0,0,.87);
  font-size: ${StyleGuide.font.size.paragraph};
  font-weight: 700;
  text-transform: none;
`;


class ModifyDesignMember extends Component {
  constructor(props) {
    super(props);
    this.state = { showSearch: false, members: [] }
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
  }
  componentDidMount() {
    this.props.DesignWaitingListRequest(this.props.match.params.id, this.props.token);
  }
  addMember(email, s_img, nick_name, uid) {
    let member = { email: email, s_img: s_img, nick_name: nick_name, uid: uid };
    this.setState({ members: this.state.members.concat(member) });
    console.log("members[]====", this.state.members);
  }
  removeMember(index) {
    this.setState({ members: this.state.members.filter((member, memberindex) => { return index !== memberindex }) });
  }
  onChangeValue = async data => {
    let obj = {};
    if (data.target) {
      obj[data.target.name] = data;
    }
    await this.setState(obj);
  };

  getMember = data => {
    this.props.SearchMemberRequest(this.props.match.params.id, { key: data }, this.props.token);
  }

  getoutMember = (flag, id) => {
    const msg = flag === "DesignGetout" ? "이 회원을 탈퇴 처리 하시겠습니까?" : "가입을 거절하시겠습니까?";
    if (!window.confirm(msg)) return;

    this.props.GetoutDesignRequest(this.props.match.params.id, id, this.props.token, flag)
      .then(res => {
        console.log("res:", res);
        if (res.data && res.data.success) {
          if (flag === "DesignGetout") {
            alert("탈퇴 처리되었습니다.");
            this.props.GetDesignDetailRequest(this.props.match.params.id, this.props.token)
              .then(this.props.GetDesignCountRequest(this.props.match.params.id));
          } else if (flag === "DesignRefuse") {
            alert("가입 요청을 거절하였습니다.");
            this.props.DesignWaitingListRequest(this.props.match.params.id, this.props.token);
          }
        } else {
          alert("다시 시도해주세요.");
        }
      });
  }

  acceptMember = (id) => {
    const confirm = window.confirm("가입을 승인하시겠습니까?");
    if (confirm) {
      this.props.AcceptDesignRequest(this.props.match.params.id, id, this.props.token)
        .then(res => {
          if (res.data && res.data.success) {
            alert("승인되었습니다.");
            this.props.GetDesignDetailRequest(this.props.match.params.id, this.props.token)
              .then(this.props.GetDesignCountRequest(this.props.match.params.id))
              .then(this.props.DesignWaitingListRequest(this.props.match.params.id, this.props.token));
          } else {
            alert("다시 시도해주세요.");
          }
        });
    } else {
      return;
    }
  }

  joinMember = () => {
    const data = this.state.members;
    console.log("data:", data);
    // return;
    this.props.JoinDesignRequest(this.props.match.params.id, data, 1, this.props.token)
      .then(res => {
        if (res.data && res.data.success) {
          alert("가입 요청을 보냈습니다.");
          this.props.GetDesignDetailRequest(this.props.match.params.id, this.props.token);
        } else {
          alert("다시 시도해주세요.");
        }
      });
  }

  render() {
    const currentDesign = this.props.DesignDetail;

    return (
      <ModalContent>
        {currentDesign.length === 0 ?
          <div></div>
          :
          <>
            <h2>멤버 관리</h2>
            <form>
              <Label>현재 멤버</Label>
              <div style={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                {currentDesign.member && currentDesign.member.length > 0 &&
                  currentDesign.member.map((mem, i) =>
                    <div key={i} style={{ marginBottom: "15px", alignItems: "center", padding: "5px", width: "max-content", background: "#EFEFEF", borderRadius: "15px", cursor: "pointer", display: "flex", marginRight: "50px" }}>
                      <div style={{ backgroundImage: `url(${mem.thumbnail ? mem.thumbnail.s_img : noface})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#D6D6D6", width: "30px", height: "30px", borderRadius: "50%" }} />
                      <div style={{ marginTop: "1px", marginLeft: "10px", fontSize: "20px", lineHeight: "29px", textAlign: "left", fontWeight: "500", fontFamily: "Noto Sans KR", color: "#707070", width: "max-content", height: "29px" }}>{mem.nick_name}</div>
                      {this.props.mine && this.props.DesignDetail.user_id !== mem.user_id &&
                        <div title={"내보내기"} onClick={() => this.getoutMember("DesignGetout", mem.user_id)} style={{ marginTop: "7.34px", marginLeft: "13.86px" }}><Cross angle={45} color={"#707070"} weight={5} width={16} height={16} /></div>}
                      {this.props.DesignDetail.user_id === mem.user_id &&
                        <div title={"팀장"} style={{ display: "flex", justifyContent: "center", width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "none" }}><i className="star icon" style={{ marginLeft: "auto", marginRight: "auto", color: "#707070" }} /></div>}
                    </div>
                  )
                }
              </div>
            </form>
            {this.props.WaitingList && this.props.WaitingList.length > 0 &&
              <form>
                <Label>가입 신청중인 멤버</Label>
                <div style={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                  {this.props.WaitingList.map((mem, i) =>
                    <div key={i} style={{ marginBottom: "15px", alignItems: "center", padding: "5px", width: "max-content", background: "#EFEFEF", borderRadius: "15px", cursor: "pointer", display: "flex", marginRight: "50px" }}>
                      <div style={{ backgroundImage: `url(${mem.thumbnail ? mem.thumbnail.s_img : noface})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#D6D6D6", width: "30px", height: "30px", borderRadius: "50%" }} />
                      <div style={{ marginTop: "1px", marginLeft: "10px", fontSize: "20px", lineHeight: "29px", textAlign: "left", fontWeight: "500", fontFamily: "Noto Sans KR", color: "#707070", width: "max-content", height: "29px" }}>{mem.nick_name}</div>
                      <div onClick={() => this.getoutMember("DesignRefuse", mem.user_id)} title={"가입 요청을 거절합니다"} style={{ marginLeft: "25px", fontWeight: "500", fontSize: "15px", lineHeight: "20px", textAlign: "left", color: "#707070" }}>거절</div>
                      <div onClick={() => this.acceptMember(mem.user_id)} title={"가입 요청을 승인합니다"} style={{ marginLeft: "7px", fontWeight: "500", fontSize: "15px", lineHeight: "20px", textAlign: "left", color: "#FF0000" }}>승인</div>
                    </div>
                  )}
                </div>
              </form>
            }
            <form widths="equal" className="newMember">
              <Label>새 멤버 초대</Label>
              <SearchDesignMemverContainer className="searchRect" addMember={this.addMember} />
              {this.state.members && this.state.members.length > 0 && <>
                <div style={{ width: "100%", display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                  {this.state.members.map((mem, i) =>
                    <div key={i} style={{ marginBottom: "15px", alignItems: "center", padding: "5px", width: "max-content", background: "#EFEFEF", borderRadius: "15px", cursor: "pointer", display: "flex", marginRight: "50px" }}>
                      <div style={{ backgroundImage: `url(${mem.thumbnail ? mem.thumbnail.s_img : noface})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#D6D6D6", width: "30px", height: "30px", borderRadius: "50%" }} />
                      <div style={{ marginTop: "1px", marginLeft: "10px", fontSize: "20px", lineHeight: "29px", textAlign: "left", fontWeight: "500", fontFamily: "Noto Sans KR", color: "#707070", width: "max-content", height: "29px" }}>{mem.nick_name}</div>
                      <div title={"취소하기"} onClick={() => this.removeMember(i)} style={{ marginTop: "7.34px", marginLeft: "13.86px" }}><Cross angle={45} color={"#707070"} weight={5} width={16} height={16} /></div>
                    </div>
                  )}
                </div></>}
              <div style={{ paddingBottom: "2px", borderBottom: "1.5px solid red", width: "max-content", cursor: "pointer", marginLeft: "auto", marginRight: "65px", fontWeight: "500", fontSize: "23px", lineHeight: "20px", textAlign: "left", color: "#FF0000" }} onClick={this.joinMember}>초대</div>
            </form>
          </>
        }
      </ModalContent>
    );
  }
}
export default ModifyDesignMember;
