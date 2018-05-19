import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Icon, Dropdown } from "semantic-ui-react";
import Sorting from "components/Commons/Sorting";
import ContentList from "components/Commons/ContentList";

// css styling

const Wrapper = styled.div`
  min-width: 660px;
  padding: 20px 0;
  position: relative;
  & .ui.grid {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const HeadContainer = styled(Grid)`
  min-height: 100px;
  font-size: 13px;
  border-bottom: 1px solid #e6ebf1;
  & button.btnIssue {
    margin-left: 10px;
    width: 80px;
    height: 24px;
    margin-top: 6px;
    background: transparent;
    border-radius: 3px;
    font-size: 13px;
  }
  & .title {
    font-size: 24px;
    font-weight: bold;
  }
  & .explanation {
    margin-top: 20px;
  }
`;

const Cate = styled.div`
  font-size: 13px;
  & span {
    margin-right: 15px;
    max-width: 33%;
  }
  & .cate {
    color: #EB3324;
    margin-right: 30px;
  }
`;

const SubInfo = styled.div`
  border: 1px solid rgba(27,31,35,0.35);
  float: right;
  border-radius: 3px;
  & span {
    color: dimgray;
    font-weight: 400;
    float: left;
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  & span.text {
    border-right: 1px solid rgba(27,31,35,0.35);
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    width: 70px;
    font-weight: bold;
  }
  & span.number {
    border-right: 1px solid rgba(27,31,35,0.35);
    width: 40px;
  }
  & span.more {
    width: 80px;
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    cursor: pointer;
    font-weight: bold;
    position: relative;
  }
  & span.more:hover {
    background-image: linear-gradient(-180deg, #eff3f6 0%, #eff3f6 100%);
  }
`;

const BtnModal = styled.ul`
  position: absolute;
  top: 35px;
  left: 0;
  text-align: left;
  width: 140px;
  border: 1px solid rgba(27,31,35,0.15);
  box-shadow: 0 3px 12px rgba(27,31,35,0.15);
  border-radius: 3px;
  font-weight: normal;
  background-color: #fff;
  z-index: 2;
  & li {
    padding: 0 10px;
  }
  & li:hover {
    background-image: linear-gradient(-180deg, #eff3f6 0%, #eff3f6 100%);
  }
  & li.activeStep {
    color: #EB3324;
  }
`;

const TabContainer = styled.div`
  min-height: 300px;
  position: relative;
  width: 100%;
  padding: 1rem 3rem 5rem;
  min-width: 660px;
  & ul {
    margin-top: 30px;
  }
`;

const MenuContainer = styled(Grid)`
  font-size: 13px;
  & .typeSelect {
    text-align: right;
  }
  & .sorting {
    text-align: center;
  }
  & .ui.default.dropdown:not(.button)>.text,
  & .ui.dropdown:not(.button)>.default.text {
    color: inherit;
  }
  & h3 {
    float: left;
    font-size: 20px;
    font-weight: 400;
  }
`;

const type = [
  { key: "design", value: "design", text: "디자인" },
  { key: "group", value: "group", text: "그룹" }
];


class GroupDetail extends Component {
  state = {
    id: this.props.id,
    activeMoreBtn: false,
    activeIssue: false,
    type: this.props.type,
    sort: this.props.sort,
    designData: this.props.DesignInGroup,
    groupData: this.props.GroupInGroup
  };

  // 렌더링 직전에 한번 도는 코드
  componentWillMount() {
    //그룹에 대한 기본 정보 불러오기
    this.props.GetGroupDetailRequest(this.props.id);

    //그룹에 있는 컨텐츠 불러오기 -> 일단 무조건 디자인 리스트부터 불러옴
    this.props.GetDesignInGroupRequest(this.props.id, this.state.sort);

    //새로고침 했을 경우에 적용 -> url에 맞게 값 불러옴
    if (this.props.type === "design" || this.props.type === null || this.props.type === "null") {
      this.props.GetDesignInGroupRequest(this.props.id, this.props.sort).then(()=>{
        this.setState({
          designData: this.props.DesignInGroup
        });
      });
    } else if (this.props.type === "group") {
      this.props.GetGroupInGroupRequest(this.props.id, this.props.sort).then(()=>{
        this.setState({
          groupData: this.props.GroupInGroup
        });
      });
    }
  }

  onActiveMoreBtn = (e) => {
    this.setState({
      activeMoreBtn: !(this.state.activeMoreBtn)
    });
  }

  onActiveIssue = (e) => {
    this.setState({
      activeIssue: !(this.state.activeIssue)
    });
    if (this.state.activeIssue === true) {
      e.target.innerHTML = "★ 공지보기";
    } else if (this.state.activeIssue === false) {
      e.target.innerHTML = "★ 공지닫기";
    }
  }

  typeChange = (e, {value}) => {
    let sort = this.props.sort;
    if (value === "design") {
      this.props.GetDesignInGroupRequest(this.props.id, sort).then(()=>{
        this.setState({
          designData: this.props.DesignInGroup,
          type: value
        });
      });
    } else if (value === "group") {
      this.props.GetGroupInGroupRequest(this.props.id, sort).then(()=>{
        this.setState({
          groupData: this.props.GroupInGroup,
          type: value
        });
      });
    }
    let url = (this.props.history.location.pathname).split("/")[1]+"/"+(this.props.history.location.pathname).split("/")[2];
    this.props.history.replace(`/${url}/${value}/${sort}`);
  }

  sortChange = (e, {value}) => {
    let type = this.props.type;
    if (type === "design" || type === "null") {
      this.props.GetDesignInGroupRequest(this.props.id, value).then(()=>{
        this.setState({
          designData: this.props.DesignInGroup,
          sort: value
        });
      });
    } else if (type === "group") {
      this.props.GetGroupInGroupRequest(this.props.id, value).then(()=>{
        this.setState({
          groupData: this.props.GroupInGroup,
          sort: value
        });
      });
    }
    let url = (this.props.history.location.pathname).split("/")[1]+"/"+(this.props.history.location.pathname).split("/")[2];
    this.props.history.replace(`/${url}/${type}/${value}`);
  }

  render(){
    let groupDetail = this.props.GroupDetail;
    let designList = this.state.designData;
    let groupList = this.state.groupData;
    let count;
    if (groupDetail.count != null) {
      count = groupDetail.count;
    } else {
      count = {
        member: 0,
        like: 0,
        design: 0
      };
    }
    return(
      <div>
        {groupDetail.length !== 0 &&
          <Wrapper>
            <HeadContainer divided="vertically" padded={true}>
              <Grid.Row columns={2}>
                <Grid.Column computer={8} tablet={6} mobile={6}>
                  <h3 className="title">{groupDetail.title}
                    <button className="btnIssue" onClick={this.onActiveIssue}>★ 공지보기</button>
                  </h3>
                  <Cate>
                    <span className="owner">
                      <Icon name="user" size="tiny"></Icon>
                      {groupDetail.userName}
                    </span>
                  </Cate>
                  <div className="explanation">{groupDetail.explanation}</div>
                </Grid.Column>
                <Grid.Column computer={8} tablet={10} mobile={10}>
                  <SubInfo>
                  <span className="text">
                    <Icon name="heart" color="grey" size="tiny"></Icon>
                    좋아요
                  </span>
                  <span className="number">{count.like}</span>
                  <span className="text">
                    <Icon name="signup" color="grey" size="tiny"></Icon>
                    디자인
                  </span>
                  <span className="number">{count.design}</span>
                  <span className="text">
                    <Icon name="window restore" color="grey" size="tiny"></Icon>
                    그룹
                  </span>
                  <span className="number">0</span>
                  <span className="more" onClick={this.onActiveMoreBtn}>더보기 +
                    {this.state.activeMoreBtn === true &&
                      <BtnModal>
                        <li>가입신청</li>
                        <li>수정</li>
                        <li>삭제</li>
                      </BtnModal>
                    }
                  </span>
                </SubInfo>
                </Grid.Column>
              </Grid.Row>
            </HeadContainer>
            <TabContainer>
              <MenuContainer devided="vertically" padded={true} columns={2}>
                <Grid.Row>
                  <Grid.Column computer={13} tablet={12} mobile={10} className="typeSelect">
                    {this.props.type === "design" || this.props.type === null || this.props.type === "null" ?
                      <h3>디자인 총 {designList.length}건</h3>
                      :
                      <h3>그룹 총 {groupList.length}건</h3>
                    }
                    <Dropdown selection placeholder="디자인" options={type} onChange={this.typeChange} value={this.state.type}/>
                  </Grid.Column>
                  <Sorting computer={3} tablet={4} mobile={6} handleChange={this.sortChange} value={this.state.sort}/>
                </Grid.Row>
              </MenuContainer>
              {this.props.type === "design" || this.props.type === null || this.props.type === "null" ?
              <ContentList data={designList} type="design"/>
              : <ContentList data={groupList} type="group"/>
              }
            </TabContainer>
          </Wrapper>
        }
      </div>
    );
  }
}

export default GroupDetail;




