import React, { Component } from "react";
import styled from 'styled-components';
import ContentBox from "components/Commons/ContentBox";
import { Dropdown } from "semantic-ui-react"
import { InputTagNew,InputPriceNew,InputCalendar,InputFile } from "components/Commons/InputItem"
import { RedButton, GrayButton } from "components/Commons/CustomButton"
import { TextControllerClassic } from "components/Commons/InputItem/TextControllerClassic";
import { FileUploadRequest } from "actions/Uploads";
import category_icon from "source/category_icon.svg";

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

const CustomIcon=styled.div`
  width:${props => props.width}px;
  height:${props => props.height}px;
  background-image:url(${props=>props.imgURL});
  background-repeat: no-repeat;
  background-size: contain;
  padding:${props => props.padding}px;
  margin-right:${props=>props.marginRight==null?"13":props.marginRight}px;
  margin-left:${props=>props.marginLeft==null?"13":props.marginLeft}px;
  display:${props=>props.isNon==true?"none":"block"}
`
const Wrapper = styled(ContentBox)`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 100px;
  z-index: 3;
`;
const MainBox = styled.div`
  width:100%;
  .title{
    width:170px;
    height:29px;
    font-family:Noto Sans CJK KR, Medium;
    font-size:20px;
    font-weight:500;
    margin-left:130px;

  }
  .contentsBox{
    position: relative;
    width:100%;
    display:flex;
    padding:36px 130px 36px 136px;
  }
  .centering_{
    width:100%;
    display:flex;
    padding:36px 130px 36px 136px;
    justify-content:center;
  }

`;
const FormBox = styled.div`

  font-family:Noto Sans KR;
  font-weight:500;
  font-size:20px;
  width:100%;
  box-shadow: 5px 5px 10px #00000029;
  border-radius: 20px;
  padding-left:59px;
  padding-right:59px;
  padding-top:49px;

  .wrapper{
    width:100%;
    margin-bottom:70px;
  }
  .margin_zero{
    margin:0px;
  }
  .flex{
    display:flex;
  }
  .centering{
    align-items:center;
  }
  .innerWraper{
    width:100%;
    margin-bottom:26px;
    display:flex;
  }
  .label{
    font-family:Noto Sans CJK KR, Regular;
    font-size:20px;
    min-width:157px;
    height:29px;
  }
  .text_small{
    font-family:Noto Sans CJK KR, Regular;
    font-size:17px;
  }
  .label_centering{
    text-align:center;
  }
  .index{
    width:30px;
    height:30px;
    color:#707070;
  }
  .faded-text {
    border-radius: 15px;
    background-color: #EAEAEA;
    padding: 15px 15px;
  }
  .information {
    color: red;
    font-size: 16px;
    margin-left: 10px;
  }
`;
const InputText = styled.input.attrs({ type: "text" })`
  width:${props => props.width == null ? 100 + "%" : props.width + "px"};
  height:52px;
  border-radius:26px;
  font-family:Noto Sans KR;
  font-size:20px;
  background-color:#E9E9E9;
  margin-right:21px;
  outline:none;
  border:0px;
  padding: 0.67857143em 1em;

`;
const DropBox = styled(Dropdown)`
    min-width:254px !important;
    min-height:52px !important;
    background-color:#E9E9E9 !important;
    margin-right:10px;

    border-radius:26px !important;
`;
const HRLine = styled.div`
    width:93%;
    height:3px;
    background-color:#E9E9E9;
    margin-top:35px;
    margin-bottom:35px;
`;

class RequestToMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_level1: null, category_level2: null,
      title: "", tag: [], price: 0, content: "", location: 15, offline: 0, amount: 0, resale: 0,
      ownership: 1, startDate: null, endDate: null, dayDate: null,
    }
    this.onClickCategorylevel1 = this.onClickCategorylevel1.bind(this);
    this.onClickCategorylevel2 = this.onClickCategorylevel2.bind(this);
    this.onClickItemType = this.onClickItemType.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.getTagValue = this.getTagValue.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeResale = this.onChangeResale.bind(this);
    this.onChangeOffline = this.onChangeOffline.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.getPriceValue = this.getPriceValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getStartDateValue = this.getStartDateValue.bind(this);
    this.getEndDateValue = this.getEndDateValue.bind(this);
    this.getDayDateValue = this.getDayDateValue.bind(this);
    this.onFileChange=this.onFileChange.bind(this);
  }
  async onClickCategorylevel1(event, { value }) {
    await this.setState({ category_level1: { value }.value });
  };
  async onClickCategorylevel2(event, { value }) {
    await this.setState({ category_level2: { value }.value });
  };
  onClickItemType(event, { value }) {
    this.setState({ itemType: { value }.value });
  }
  onChangeTitle(event) {
    this.setState({
      title: event.target.value,
    })
  }
  async getStartDateValue(value) {
    // await console.log("startDate",value);
    await this.setState({ startDate: value });
  }
  async getEndDateValue(value) {
    // await console.log("endDate",value);
    await this.setState({ endDate: value });
  }
  async getDayDateValue(value) {
    await this.setState({ dayDate: value })
  }
  getTagValue(data) {
    this.setState({
      tag: data.slice(),
    })
  }
  onChangePrice(event) {
    this.setState({
      price: event.target.value,
    })
  }
  onChangeAmount(event) {
    this.setState({
      amount: event.target.value,
    })
  }
  onChangeLocation(event, { value }) {
    this.setState({ location: { value }.value });
  }
  async onChangeContent(data) {
    await this.setState({ content: data.content });
    // this.setState({
    //   content: event.target.value,
    // })
  }
  onChangeOffline(event, { value }) {
    this.setState({
      offline: { value }.value,
    })
  }
  onChangeResale(event, { value }) {
    this.setState({
      resale: { value }.value,
    })
  }

  handleAddTag(tag) {
    this.setState({
      tag: tag.slice(),
    })
  }
  async getPriceValue(value) {
    await this.setState({ price: value });
  }
  async onFileChange(file){
    // const file = event.currentTarget.files;
    this.setState({
      file_url: file.file_url,
      filename: file.filename,
    });
    await console.log(file);
  }

  onSubmit() {
    const data = {
      type: "maker", // designer, maker
      status: "request",
      expert_id: this.props.id || null,
      personal: this.props.id || null,
      title: this.state.title,
      category_level1: this.state.category_level1,
      category_level2: this.state.category_level2,
      tag: this.state.tag.join(","),
      price: this.state.price,
      content: this.state.content,
      amount: this.state.amount,
      location: this.state.location,
      resale: this.state.resale,
      offline_consultation: this.state.offline,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      file_url: this.state.file_url,
      filename: this.state.filename,
    }
    this.props.CreateRequestRequest(data, this.props.token)
      .then(res => {
        if (res.success) {
          if (res.id)
            window.location.href = `/makerDetail/${res.id}`;
          else
            window.location.href = `/request/maker`;
        }
      })
      .catch(err => alert("의뢰 중 에러가 발생했습니다.\n" + err));
  }


  render() {
    console.log(this.props);
    const category1 = this.props.category1 || [{ text: "_", value: -1 }];
    const category2 = (this.state.category_level1 && this.props.category2 && this.props.category2.filter(item => item.parent === this.state.category_level1)) || [{ text: "_", value: -1 }];

    return (
      <React.Fragment>
        <Wrapper>
          <MainBox>
            <div className="title">제작 의뢰</div>
            <div className="contentsBox">
              <FormBox>

                <div className="wrapper flex centering" >
                  <div className="label">의뢰자</div>
                  <div>{this.props.userInfo.nickName || null}</div>
                </div>

                <div className="wrapper flex centering">
                  <div className="label">제목</div>
                  <InputText onChange={this.onChangeTitle} value={this.state.title} width={483} />
                </div>

                <div className="wrapper flex centering">
                  <div className="label">카테고리</div>
                  <DropBox id="category_level1"
                    value={this.state.category_level1}
                    selection
                    options={category1}
                    placeholder="대분류"
                    onChange={this.onClickCategorylevel1} />
                    <CustomIcon width="25" height="25" imgURL={category_icon} marginRight="21" marginLeft="21"/>
                  <DropBox id="category_level2"
                    value={this.state.category_level2}
                    selection
                    options={category2}
                    placeholder="소분류"
                    onChange={this.onClickCategorylevel2} />
                </div>

                <div className="wrapper flex centering">
                  <div className="label">태그</div>
                  <div>
                    <InputTagNew getValue={this.handleAddTag} placeholder="태그를 입력하고 [enter]키를 누르세요" width={483} />
                  </div>
                </div>

                <div className="wrapper flex centering">
                  <div className="label">의뢰 내용</div>
                  {/* <InputTextarea onChange={this.onChangeContent} value={this.state.content} width={551} height={344} /> */}
                  <TextControllerClassic
                    item={{ content: this.state.content, height: 500 }}
                    name={"comment"}
                    getValue={this.onChangeContent}
                    width="820"
                    editheight="770"
                  />
                </div>

                <div className="wrapper flex centering">
                  <div className="label">파일 등록</div>
                  <InputFile width={533} getValue={this.onFileChange}/>
                  {/* <div className="faded-text" >
                    <input
                      type="file"
                      name="source"
                      ref={ref => (this.input = ref)}
                      onChange={this.onFileChange}
                      accept=".pdf" />
                  </div>
                  <div className="information">
                    * pdf파일만 등록이 가능합니다.
                      </div> */}
                </div>

                <div className="wrapper flex centering">
                  <div className="label ">희망 비용</div>
                  <InputPriceNew name="price" getValue={this.getPriceValue} />
                </div>

                <div className="wrapper flex centering">
                  <div className="label ">기간</div>
                  <InputCalendar startDate={this.state.startDate} endDate={this.state.endDate} name="calendar"
                    getStartDateValue={this.getStartDateValue} getEndDateValue={this.getEndDateValue} getDayDateValue={this.getDayDateValue} />
                </div>

                <HRLine />
                <div className="wrapper flex centering">
                  <div className="label">수량</div>
                  <InputText onChange={this.onChangeAmount} value={this.state.amount} width={80} />
                </div>

                <div className="wrapper flex centering">
                  <div className="label">메이커 위치</div>
                  {/* <DropBox id="country" disabled selection options={[{ value: 0, text: "대한민국" }]} value={0} /> */}
                  <DropBox id="location" value={isNaN(parseInt(this.state.location, 10)) === true ? null : parseInt(this.state.location, 10)}
                    selection options={LocationList} placeholder="시/도"
                    onChange={this.onChangeLocation} />
                </div>

                <div className="wrapper flex centering">
                  <div className="label">메이커 재판매</div>
                  <DropBox id="resale" selection options={[{ text: "가능", value: 0 }, { text: "불가능", value: 1 }]}
                    onChange={this.onChangeResale} value={this.state.resale} placeholder="선택" />
                </div>

                {/* <div className="wrapper flex centering">
                  <div className="label">오프라인 상담</div>
                  <DropBox id="offline" selection options={[{ text: "가능", value: 0 }, { text: "불가능", value: 1 }]}
                    onChange={this.onChangeOffline} value={this.state.offline} placeholder="선택" />
                </div> */}

              </FormBox>
            </div>
            <div className="centering_">
              <RedButton value={"등록하기"} onClick={this.onSubmit} isConfirm={true} />
              <GrayButton value={"취소하기"} onClick={() => { window.history.back() }} isConfirm={true} />
            </div>
          </MainBox>
        </Wrapper>
      </React.Fragment>
    );
  };
}
export default RequestToMaker;