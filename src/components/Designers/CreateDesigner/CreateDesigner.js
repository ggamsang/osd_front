import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Icon } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react"
import { InputTagNew } from "components/Commons/InputItem/InputTagNew";
import noimg from "source/noimg.png";
import { RedButton, GrayButton } from "components/Commons/CustomButton"
import { alert } from "components/Commons/Alert/Alert";


const LocationList = [
  { value: 0, text: "서울특별시" },
  { value: 1, text: "부산광역시" },
  { value: 2, text: "대구광역시" },
  { value: 3, text: "인천광역시" },
  { value: 4, text: "광주광역시" },
  { value: 5, text: "대전광역시" },
  { value: 6, text: "울산광역시" },
  { value: 7, text: "경기도" },
  { value: 8, text: "강원도" },
  { value: 9, text: "충청북도" },
  { value: 10, text: "충청남도" },
  { value: 11, text: "전라북도" },
  { value: 12, text: "경상북도" },
  { value: 13, text: "경상남도" },
  { value: 14, text: "제주도" },
  { value: 15, text: "제한없음" },
];

const MainBox = styled.div`
// *{
//   border:1px solid black;
// }
  width:100%;
  .title{
    width:170px;
    height:29px;
    font-family:Noto Sans KR, Medium;
    font-size:20px;
    font-weight:500;
  }
    .contentsBox{
      width:100%;
      display:flex;
      padding-left:130px;
      padding-top:36px;
    }
    .centering{
      padding-right:130px;
      justify-content:center;
    }
`;

const ThumbnailBox = styled.div`
  *{
    font-family:Noto Sans KR;
    font-weight:500;
    font-size:20px;
  }
  width:562px;
  height:540px;
  box-shadow: 5px 5px 10px #00000029;
  border-radius: 20px;
  padding-left:42px;
  padding-top:54px;
  margin-right:63px;
  .label{
    width:100%;
    height:29px;
  }
  .thumbnail{
    cursor:pointer;
    width:256px;
    height:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#E9E9E9;
    border-radius:50%;
    margin-left:110px;
  }
`;
const Thumbnail = styled.div`
  cursor:pointer;
  width:256px;
  height:256px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-image: ${props => `url(${props.imageURL == null ? noimg : props.imageURL})`};
  background-size: cover;
  background-position: center center;
  border-radius:50%;
  margin-left:110px;
`;
const ExperienceBox = styled.div`
    width:1560px;
    box-shadow: 5px 5px 10px #00000029;
    border-radius: 20px;
    padding-left:59px;
    padding-top:49px;
    padding:50px;
    .title{
      width:100%;
      font-size:20px;
      font-weight:500;
      margin-bottom:15px;
    }
    .wrapper{
      width:100%;
    }
    .labelBox{
      width:100%;
      display:flex;
      padding-bottom:20px;
      border-bottom:1px solid #E6E6E6;
      margin-bottom:20px;

      .number_label{
        width:10%;
      }
      .text_label{
        width:30%;
      }
    }
    .careerBox{
      display:flex;
      margin-bottom:10px;
      .number_wrapper{
        width:10%;
      }
      .text_wrapper{
        width:30%;
      }
    }
`
const FormBox = styled.div`
  *{
    font-family:Noto Sans KR;
    font-weight:500;
    font-size:20px;
  }
  width:939px;
  box-shadow: 5px 5px 10px #00000029;
  border-radius: 20px;
  padding-left:59px;
  padding-top:49px;

  .wrapper{
    width:100%;
    display:flex;
    align-items:center;
    margin-bottom:50px;
  }
  .wrapper_noflex{
    width:100%;
    margin-bottom:70px;
  }
  .margin_zero{
    margin:0px;
  }
  .margin_bottom{
    margin-bottom:30px;
  }
  .flex{
    display:flex;
  }
  .innerWraper{
    width:100%;
    margin-bottom:26px;
    display:flex;
  }
  .label{
    min-width:157px;
    height:29px;
  }
  .label_centering{
    text-align:center;
  }
  .index{
    width:30px;
    height:30px;
    color:#707070;
  }

`;
const Button = styled.div`
    width:${props => props.width == null ? 100 + "%" : props.width + "px"};
    height:${props => props.height == null ? 100 + "%" : props.height + "px"};
    background-color:white;
    font-family:Noto Sans KR;
    font-size:20px;
    display:flex;
    align-items:center;
    cursor:pointer;
    margin-left:${props => props.margin == null ? 0 + "px" : props.margin + "px"};
    .label{
      margin-left:60px;
    }
    
`;
const InputText = styled.input.attrs({ type: "text" })`
  width:${props => props.width == null ? 100 + "%" : props.width + "px"};
  height:43px;
  border-radius:20px;
  font-family:Noto Sans KR;
  font-size:20px;
  background-color:#E9E9E9;
  margin-right:21px;
  outline:none;
  border:0px;
  padding: 0.67857143em 1em;

`;
const InputTextarea = styled.textarea`
  width:${props => props.width == null ? 100 + "%" : props.width + "px"};
  height:${props => props.height == null ? 100 + "%" : props.height + "px"};
  border-radius:20px;
  font-family:Noto Sans KR;
  font-size:20px;
  background-color:#E9E9E9;
  outline:none;
  border:0px;
  readonly;
  resize:none;
  padding: 0.67857143em 1em;

`;
const Margin = styled.div`
  width:${props => props.width == null ? 100 + "%" : props.width + "px"};
  height:${props => props.height == null ? 100 + "%" : props.height + "px"}
`;
const DropBox = styled(Dropdown)`
    min-width:200px !important;
    background-color:#E9E9E9 !important;
    margin-right:10px;

    border-radius:20px !important;
`;

class CreateDesigner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getready: false,
      thumbnail: null, thumbnail_name: null,
      category_level1: 0, category_level2: -1, location: null,
      explain: "", tag: [],
      career: [{ number: 0, task: "", explain: "", during: "" }],
    }
    this.onChangeCareer = this.onChangeCareer.bind(this);
    this.onClickAddCareer = this.onClickAddCareer.bind(this);
    this.handleOnChangeThumbnail = this.handleOnChangeThumbnail.bind(this);
    this.onChangeExplain = this.onChangeExplain.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickCategorylevel1 = this.onClickCategorylevel1.bind(this);
    this.onClickCategorylevel2 = this.onClickCategorylevel2.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }
  async onClickCategorylevel1(event, { value }) {
    await this.setState({ category_level1: { value }.value });
  }
  async onClickCategorylevel2(event, { value }) {
    await this.setState({ category_level2: { value }.value });
  }
  async onChangeCareer(number, task, explain, during) {
    let arr = this.state.career.slice();
    await arr.splice(number, 1, { number: number, task: task, explain: explain, during: during });
    this.setState({
      career: arr,
    })
  }
  onClickAddCareer(event) {
    this.setState({
      career: this.state.career.concat({ number: this.state.career.length, task: "", explain: "", during: "" }),
    })
  }
  onChangeExplain(event) {
    this.setState({ explain: event.target.value })
  }
  onChangeLocation(event, { value }) {
    this.setState({ location: { value }.value });
  }
  handleAddTag(tag) {
    this.setState({
      tag: tag.slice(),
    });
  }

  async handleOnChangeThumbnail(event) {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({ thumbnail: reader.result, thumbnail_name: file.name })
    }
    if (event.target.files[0]) {
      await reader.readAsDataURL(file);
    }
  }
  onClickCancel(event) {
    window.location.href = "/mypage"
  }
  onSubmit = async e => {

    e.preventDefault();
    let tagList = "";
    this.state.tag.map((item, index) => { // 태그,태그,태그 ...
      return (
        tagList += item + ","
      );
    });
    let experienceList = "";
    this.state.career.map((item, index) => { // 넘버,업무,설명,기간/넘버,업무,설명,기간/넘버, ...
      return (
        experienceList += item.number + "," + item.task + "," + item.explain + "," + item.during + "/"
      );
    })
    const data = {
      files: [],
      user_id: this.props.userInfo.uid,
      // thumbnail:this.state.thumbnail,
      type: "designer",
      description: this.state.explain,
      location: this.state.location,
      category_level1: this.state.category_level1,
      category_level2: this.state.category_level2,
      tag: tagList,
      experience: experienceList,
    }
    let file = { value: this.state.thumbnail, name: this.state.thumbnail_name, key: 0 };
    await data.files.push(file);
    console.log(data);


    if (this.state.thumbnail != null || this.state.thumbnail !== "") {
      await data.files.push(file);
    }

    // 예외처리
    if(data.user_id == "" || data.user_id == null){
      await alert("닉네임을 입력해주세요","확인");
      return;
    }else if(data.category_level1<=0||data.category_level1==null){
      await alert("카테고리를 입력해주세요","확인");
      return;
    }else if(data.files[0]&&(data.files[0].value!=null||data.files[0].name!=null)){
      await alert("썸네일을 등록해주세요","확인");
      return;
    }

    this.props.InsertDesignerDetailRequest(data, this.props.token)
      .then(async res => {
        console.log("res", res.res);
        const result = res.res;
        if (result.success) {
          await alert("정보가 수정되었습니다","확인");
          window.location.href = `/mypage`;
        } else {
          await alert("다시 시도해주세요","확인");
          this.setState({
            loading: false
          });
        }
      })
      // .then(
      //   this.props.CreateDesignRequest(this.props.keep.item, this.props.token)
      //     .then(result => {
      //       if (result.success) {
      //         alert("아이템이 등록되었습니다.");
      //         console.log("result", result);
      //         window.location.href = `/mypage`;
      //       } else {
      //         alert("아이템 등록에 실패했습니다.");
      //       }
      //     })
      // )
      .catch(async e => {
        console.log("실패", e);
        await alert("다시 시도해주세요");
        this.setState({
          loading: false
        });
      });
  };

  componentDidMount() {
    if (this.props.keep) {
      this.setState(this.props.keep.designer);
      this.setState({ getready: true });
    }
  }

  render() {
    const category1 = this.props.category1 || [{ text: "_", value: -1 }];
    const category2 = (this.state.category_level1 && this.props.category2 && this.props.category2.filter(item => item.parent === this.state.category_level1)) || [{ text: "_", value: -1 }];
    console.log("category:", category1, this.state.category_level1, category2, this.props.category2);

    return (
      <React.Fragment>
        {this.props.keep ? "redirected" : null}

        <MainBox>
          <div className="title">디자이너 등록</div>
          <div className="contentsBox">
            <ThumbnailBox>
              <div className="label">썸네일 등록<sup style={{color:"red"}}>*</sup></div>
              <Margin height={70} />
              <input hidden onChange={this.handleOnChangeThumbnail} id="file" type="file" />
              <label htmlFor="file">
                {this.state.thumbnail == null ?
                  <div className="thumbnail"><div>첨부</div></div>
                  :
                  <Thumbnail imageURL={this.state.thumbnail} />
                }
              </label>
            </ThumbnailBox>

            <FormBox>

              <div className="wrapper flex">
                <div className="label">닉네임<sup style={{color:"red"}}>*</sup></div>
                {this.props.userInfo.nickName}
              </div>

              <div className="wrapper flex">
                <div className="label">설명</div>
                <InputTextarea onChange={this.onChangeExplain} value={this.state.explain} placeholder="설명을 입력해주세요" width={483} height={99} />
              </div>

              <div className="wrapper flex">
                <div className="label">카테고리<sup style={{color:"red"}}>*</sup></div>
                <DropBox id="category_level1" value={this.state.category_level1} selection options={category1} placeholder="대분류" onChange={this.onClickCategorylevel1} />
                <DropBox id="category_level2" value={this.state.category_level2} selection options={category2} placeholder="소분류" onChange={this.onClickCategorylevel2} />
              </div>

              <div className="wrapper flex">
                <div className="label">태그</div>
                <div>
                  <InputTagNew taglist={this.state.tag} getValue={this.handleAddTag} placeholder="태그를 입력하고 [enter]키를 누르세요" width={483} />
                </div>
              </div>

              <div className="wrapper flex">
                <div className="label">위치</div>
                {/* <DropBox id="country" disabled selection options={[{ value: 0, text: "대한민국" }]} value={0} /> */}
                <DropBox id="location" value={isNaN(parseInt(this.state.location, 10)) === true ? null : parseInt(this.state.location, 10)}
                  selection options={LocationList} placeholder="시/도"
                  onChange={this.onChangeLocation} />
              </div>

              {/* <div className="wrapper_noflex ">
                {this.state.career.map((item, index) => {
                  console.log("career", item)
                  return (
                    <CreateCareer item={item} number={(item.number) + 1} onChangeCareer={this.onChangeCareer} key={index} />
                  );
                })} */}
              {/* <CreateCareer number={0} onChangeCareer={this.onChangeCareer}/> */}
              {/* <Button onClick={this.onSubmit} width={250} height={30} margin={157} onClick={this.onClickAddCareer}>
                  <Icon name="plus" /><div className="label">경력 추가하기</div>
                </Button> */}
              {/* </div> */}

            </FormBox>


          </div>
          <div className="contentsBox">
            <ExperienceBox>
              <div className="title">경험</div>
              <div className="labelBox">
                <div className="number_label">번호</div>
                <div className="text_label">업무</div>
                <div className="text_label">기간</div>
                <div className="text_label">내용</div>
              </div>
              <div className="wrapper_noflex ">
                {this.state.career.map((item, index) => {
                  console.log("career", item)
                  return (
                    <CreateCareer item={item} number={(item.number) + 1} onChangeCareer={this.onChangeCareer} key={index} />
                  );
                })}
                {/* <CreateCareer number={0} onChangeCareer={this.onChangeCareer}/> */}
                <Button /*onClick={this.onSubmit}*/ width={250} height={30} margin={157} onClick={this.onClickAddCareer}>
                  <Icon name="plus" /><div className="label">경험 추가</div>
                </Button>
              </div>
            </ExperienceBox>
          </div>
          <div className="contentsBox centering">
            {/* <Link to={{
              pathname: `/createProduct/redirected`,
              state: { keep: this.state }
            }}>
              <RedButton value={"아이템 등록"} isConfirm={false} />
            </Link> */}
            {/* </div>
          <div className="contentsBox"> */}
            {/* {this.state.getready ? */}
            <RedButton text={"디자이너를 등록합니다."} okText="확인" cancelText="취소" value={"등록하기"} onClick={this.onSubmit} isConfirm={true} />
            {/*}  : <GrayButton value={"등록"} onClick={() => alert("아이템을 등록해야 진행할 수 있습니다.")} isConfirm={false}></GrayButton>}*/}
            <GrayButton text={"취소하시겠습니까?"} value={"취소하기"} onClick={() => { window.location.href = "/mypage" }} isConfirm={false}></GrayButton>
          </div>
        </MainBox>
      </React.Fragment>
    );
  };
}
export default CreateDesigner;

// 경력 //
class CreateCareer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "", explain: "", during: "",
    }
    this.onChangeTask = this.onChangeTask.bind(this);
    this.onChangeExplain = this.onChangeExplain.bind(this);
    this.onChangeDuring = this.onChangeDuring.bind(this);
  }
  componentDidMount() {

    this.setState({
      task: this.props.item.task,
      explain: this.props.item.explain,
      during: this.props.item.during,
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setState({
        task: this.props.item.task,
        explain: this.props.item.explain,
        during: this.props.item.during,
      })
    }
    return true;
  }
  onChangeTask(event) {
    this.setState({ task: event.target.value, })
    this.props.onChangeCareer(this.props.number - 1, event.target.value, this.state.explain, this.state.during);
  }
  onChangeExplain(event) {
    this.setState({ explain: event.target.value, })
    this.props.onChangeCareer(this.props.number - 1, this.state.task, event.target.value, this.state.during);
  }
  onChangeDuring(event) {
    this.setState({ during: event.target.value, })
    this.props.onChangeCareer(this.props.number - 1, this.state.task, this.state.explain, event.target.value);
  }


  render() {
    const leadingZeros = (n, digits) => { //0채우는 함수
      var zero = '';
      n = n.toString();

      if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++)
          zero += '0';
      }
      return zero + n;
    }
    console.log("careerlog", this.state);
    return (
      <React.Fragment>

        <div className="careerBox">
          <div className="number_wrapper">{leadingZeros(this.props.number, 2)}</div>
          <div className="text_wrapper">
            <InputText value={this.state.task} onChange={this.onChangeTask} width={370} />
          </div>
          <div className="text_wrapper">
            <InputText value={this.state.during} onChange={this.onChangeDuring} width={370} />
          </div>
          <div className="text_wrapper">
            <InputText value={this.state.explain} onChange={this.onChangeExplain} width={370} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
