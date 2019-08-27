import React, { Component } from "react";

import iDelete from "source/deleteItem.png"
import BasicInfo from "components/Groups/ModifyGroupInfo/BasicInfo"
import AdditionalInfo from "components/Groups/ModifyGroupInfo/AdditionalInfo"
import { Modal } from "semantic-ui-react";

const scrollmenu = [{ txt: "기본 정보", tag: "#basics" }, { txt: "부가 정보", tag: "#additional" }]




const modify_Main_Banner ={ width: "1920px", display: "flex", justifyContent: "center" }
const modify_Main_Banner_text = { marginTop: "45px", width: "196px", height: "37px", fontFamily: "Noto Sans KR", fontSize: "25px", fontWeight: "700", lineHeight: "37px", textAlign: "center", color: "#707070" }
const modify_Main_Section = {display: "flex", marginTop: "60px", marginBottom: "111px" }
const modify_Menu_Delete={position:"fixed", top:"349px",left:"100px",width:"150px",height:"29px",fontFamily: "Noto Sans KR",fontWeight:"500",fontSize:"20px",color:"#FF0000"}
const modify_Btn_Back = { position:"absolute",right:"54px",bottom:"35px",border:"1px solid black",cursor: "pointer", width: "104.5px", height: "44px", borderRadius: "5px", backgroundColor: "#FF0000", paddingTop: "6px", paddingLeft: "15px"}
const modify_Btn_text ={ width: "74px", padding: "0px", fontFamilty: "Noto Sans KR", fontWeight: "500", lineHeight: "29px", textAlign: "center", fontSize: "20px", color: "#FFFFFF" }
const modify_Btn_Next ={ width: "74px", padding: "0px", fontFamilty: "Noto Sans KR", fontWeight: "500", lineHeight: "29px", textAlign: "center", fontSize: "20px", color: "#FFFFFF" }

class ModifyGroup extends Component {

  constructor(props)
  {
    super(props);
    this.state = {deleteDialog:false,isDelete:false,thumbnail:"",designTitle:"",designExplain:"", loading: false, isPossibleNextStep: false, step: 0, /* 0: basics, 1: additional, 2: contents*/ selectedCate1: null,
     selectedCate2: null, cate1: null,cate2: null}
    this.handleInputDesignExplain = this.handleInputDesignExplain.bind(this);
    this.handleInputDesignTitle = this.handleInputDesignTitle.bind(this);
    this.handleChangeThumbnail=this.handleChangeThumbnail.bind(this);
    this.handleOnClickDeleteGroup=this.handleOnClickDeleteGroup.bind(this);
  }
  // setLoader = () => { this.setState({ loading: !this.state.loading }) }
  componentDidMount()
  {
  }
  handleOnClickDeleteGroup()
  {
    if(this.state.isDelete == true)
    {
      this.setState({ isDelete: !this.state.isDelete,deleteDialog:false })
    }
    else
    {
      this.setState({ isDelete: !this.state.isDelete, deleteDialog: true })
     // setTimeout(() => { this.setState({ deleteDialog: false }) }, 1500)
    }

    return(
      <Modal open={true} style={{width:"626px",height:"200px",opacity:"0"}}>
        <div style={{width:"576px",height:"200px",border:"1px solid black"}}>
        </div>
        </Modal>
    );
  }
  shouldComponentUpdate(nextProps)
  {
      // if(this.props.DesignDetail.title!=nextProps.DesignDetail.title) this.setState({designTitle:nextProps.DesignDetail.title});
      // if(this.props.DesignDetail.explanation!=nextProps.DesignDetail.explanation) this.setState({designExplain:nextProps.DesignDetail.explanation});
      // if(this.props.DesignDetail.img!=nextProps.DesignDetail.img) this.setState({thumbnail:nextProps.DesignDetail.img.m_img});
    
      return true;
  }
  handleInputDesignTitle(title)
  {
    console.log("titleinput");
    this.setState(state=>({designTitle:title}))
  }
  handleInputDesignExplain(explain)
  {
    this.setState(state=>({designExplain:explain}))
  }
  handleChangeThumbnail(imgurl)
  {
    this.setState(state=>({thumbnail:imgurl}));
  }
  
  checkIsPossibleToGoNextStep = (step) => {

  }

  gotoStep=(menu,index)=>
  {
    this.setState({ step: index });
  }
  gotoPrevStep = () => {
    if (this.state.step === 0) {
      window.history.go(-1);
    }
    this.setState({ step: this.state.step - 1 });
  }
  gotoNextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }
  completeCreateDesign = () => {
    this.submit();
  }
  submit = () => {
    console.log("!!!");
  }

  completed = () => {
    this.setState({ isPossibleNextStep: true })
  }
  render() {
    // const myInfo = this.props.MyDetail


    const SectionContentEditor = () => {
     
    }
    const { step } = this.state
    const DeleteWariningModal = ()=>
    {
      return(
        <Modal open={this.state.deleteDialog} style={{boxShadow:"0px 3px 6px #000000",position:"fixed",width:"576px",height:"160px",textAlign:"center",top:"40px"}}>
        <div style = {{width:"100%",height:"29px",fontFamily:"Noto Sans KR",fontSize:"20px",color:"#707070",lineHeight:"29px",marginTop:"40px",marginBottom:"10px"}}>
          그룹 캡스톤 디자인 2019를 삭제하지 못했습니다.</div>
        <div style = {{width:"100%",height:"29px",fontFamily:"Noto Sans KR",fontSize:"20px",textDecoration:"none",color:"#FF0000"}}>
          그룹의 개설자만 삭제할 권한이 주어집니다.</div>
      </Modal>
      );
    }
    const DeleteGroupModal=()=>
    {
      return(
        <Modal open={this.state.deleteDialog} style={{boxShadow:"0px 3px 6px #000000",position:"relative",width:"576px",height:"200px",textAlign:"center",bottom:"318px"}}>
        <div style = {{width:"100%",height:"69px",fontFamily:"Noto Sans KR",fontSize:"20px",color:"#707070",lineHeight:"40px",marginTop:"35px",marginBottom:"31px"}}>그룹 캡스톤 디자인 2019를<br/>삭제하시겠습니까?</div>
        <div style = {{width:"100%",height:"29px",fontFamily:"Noto Sans KR",fontSize:"20px",color:"#707070",textDecoration:"underline",color:"#FF0000"}}>네, 삭제합니다</div>
        <div onClick = {this.handleOnClickDeleteGroup} style={{position:"absolute",right:"-50px",top:"0px",width:"22px",height:"22px",
                    backgroundImage: `url(${iDelete})`,backgroundSize: "cover", backgroundPosition: "center center",}}>
        </div>
      </Modal>
      );
    }
    const DeleteGroupComplete = ()=>
    {
      return(
        <Modal open={this.state.deleteDialog} style={{boxShadow:"0px 3px 6px #000000",position:"fixed",width:"576px",height:"160px",textAlign:"center",top:"40px"}}>
        <div style = {{width:"100%",height:"29px",fontFamily:"Noto Sans KR",fontSize:"20px",color:"#707070",lineHeight:"29px",marginTop:"40px",marginBottom:"10px"}}>
          사용자 매뉴얼 디자인 등록01을 삭제했습니다.</div>
        <div style = {{width:"100%",height:"29px",fontFamily:"Noto Sans KR",fontSize:"20px",textDecoration:"underline",color:"#FF0000"}}>
          되돌리기</div>
        <div onClick = {this.handleOnClickDeleteDesign} style={{position:"absolute",right:"-50px",top:"0px",width:"22px",height:"22px",
                    backgroundImage: `url(${iDelete})`,backgroundSize: "cover", backgroundPosition: "center center",}}>
        </div>
      </Modal>
      );
    }
    return (<>

    {/* delete modal */}
      <DeleteGroupModal/>

      <div style={modify_Main_Banner}>
        <div style={modify_Main_Banner_text}>그룹 수정하기</div>
      </div>

      <div style={modify_Main_Section}>
        {/* scroll - menu */}
        <div style={{width:"433px"}}>
              <div style={{ width: "325px", marginLeft: "64px" }}>
                  <div style={{ position: "fixed", top: "197px", width: "325px", height: "127px", backgroundColor: "#F5F4F4", borderRadius: "5px" }}>
                    {scrollmenu.map((menu, index) => {
                      return (<div onClick={() => this.gotoStep(menu, index)} style={{ cursor: "pointer", height: "62px", lineHeight: "29px", borderBottom: index + 1 === scrollmenu.length ? "none" : "2px solid #FFFFFF", paddingTop: "18px", paddingLeft: "36px" }} key={menu.txt}>
                        <div style={{ color: this.state.step === index ? "#FF0000" : "#707070", fontSize: "20px", fontFamily: "Noto Sans KR", fontWeight: "300", textAlign: "left" }}>{menu.txt}</div>
                      </div>)
                    })}
                  </div>
              </div>
              <div style={modify_Menu_Delete} onClick = {this.handleOnClickDeleteGroup}>그룹 삭제하기</div>
        </div>
        {/* form */}
        <div style={{position:"relative", width: "1422px", height: "925px", borderRadius: "5px", border: "8px solid #F5F4F4", paddingTop: "45px" }}>
          <form>
             
             {step ===0 && <BasicInfo 
             onChangeExplain={this.handleInputDesignExplain} onChangeTitle = {this.handleInputDesignTitle} onChangeThumbnail = {this.handleChangeThumbnail}
             designExplain={this.state.designExplain} designTitle ={this.state.designTitle} designThumbnail = {this.state.thumbnail} {...this.props}/> }
             {step ===1 &&<AdditionalInfo {...this.props}/>}
            {/* buttons*/}
            <div style={{ marginTop: "20.54px", justifyContent: "flex-end", display: "flex" }}>

            {step === 1? 
            <div onClick={this.state.isPossibleNextStep ? this.completeCreateDesign : null} style={{ position:"absolute", right:"9px",bottom:"35px",cursor: "pointer", width: "104.5px", height: "44px", borderRadius: "5px", backgroundColor: this.state.isPossibleNextStep ? "#FF0000" : "#707070", paddingTop: "6px", paddingLeft: "15px", marginRight: "53px" }}>
            <p style={modify_Btn_text}>완료</p></div>
            : <div onClick={this.state.isPossibleNextStep ? this.gotoNextStep : null} style={{ position:"absolute", right:"9px",bottom:"35px",cursor: "pointer", width: "104.5px", height: "44px", borderRadius: "5px", backgroundColor: this.state.isPossibleNextStep ? "#FF0000" : "#707070", paddingTop: "6px", paddingLeft: "15px", marginRight: "53px" }}>
            <p style={modify_Btn_text}>다음</p>
            </div>
            }


            </div>
          </form>
        </div>
      </div>
           
    </>)
  }
}

export default ModifyGroup;
