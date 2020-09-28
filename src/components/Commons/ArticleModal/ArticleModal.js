import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import Cross from "components/Commons/Cross";
import { TextControllerClassic } from "components/Commons/InputItem/TextControllerClassic";
import styled from "styled-components";
const WriteNormalArticleModal = styled(Modal)`
  width:988px;
  height:541px;
  min-width:300px;
  min-height:200px;
  // max-width:790px;
  width:45%;
  height:max-height;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
  margin-bottom:10px;
  border-radius:15px !important;
  padding:25px 25px 50px 60px;
  .close-box{
    width: 100%;
    height:max-content;
    display:flex;
    justify-content:flex-end;
    margin-bottom:10px;
  
  }
  .title_label{
    font-size:20px;
    font-weight:500;
    min-width:65px;
    height:max-content;
  }
  .form{
      width:100%;
      height:max-content;
      margin-bottom:30px;
      display:flex;
  }
  .align_item_center{
    align-items:center;
  }
  .form_height{
    height:max-content;
  }
  .redButtonBox{
    padding-top:37px;
    width:95%;
    display:flex;
    justify-content:center;
  }
  .redButton{
    background-color:red;
    width:121px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    .btnText{
      font-size:20px;
      color:white;
    }
  }
  .contents{
      display:flex;
      justify-content:flex-end;
      padding-left:10px;
      padding-right:10px;
      .score{

      }

      .buttonBox{
          .button{
              width:100px;
              padding:10px;
              border-radius:20px;
              background-color:#707070;
              display:flex;
              justify-content:center;
              align-items:center;
              cursor:pointer;
              .text{
                  color:white;
              }
          }

      }
  }
`;
const TitleForm = styled.input`
  padding: 10px;
  resize: none;
  width: 100%;
  height: 30px;
  border: 1px solid #E6E6E6;
  outline: none;
  border-radius: 10px;
`
const CommentForm = styled.textarea`
  padding:10px;
  resize:none;
  width:100%;
  height:100px;
  border:1px solid #E6E6E6;
  outline:none;
  border-radius:10px;
`
class ArticleModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",content:"",
        }
    }
    render(){
        return(
            <React.Fragment>
                <WriteNormalArticleModal open={this.props.write} onClose={() => {this.setState({ title: "", content: "" });this.props.handlerModal(false)}}>
                        <div className="close-box" onClick={() => {this.setState({ title: "", content: "" });this.props.handlerModal(false)}}>
                            <Cross style={{cursor:"pointer"}} angle={45} color={"#000000"} weight={3} width={15} height={15} />
                        </div>
                        <div className="form align_item_center">
                            <div className="title_label">제목</div>
                            <TitleForm
                            value={this.state.title || ""}
                            onChange={event => this.setState({ title: event.target.value })}
                            name="title"
                            />
                            </div>
                            <div className="form form_height">
                            <div className="title_label ">내용</div>
                            <TextControllerClassic
                            item={{content:this.state.content}}
                            name={"content"}
                            getValue={async(data)=>{this.setState({content:data.content})}}
                            width="750"
                            editheight="240"
                            />
                        </div>
                        <div className="form redButtonBox">
                            <div className="redButton" onClick={()=>this.props.createNoneRequest(this.state.title,this.state.content)} >
                                <div className="btnText" >작성하기</div>
                            </div>
                        </div>
                </WriteNormalArticleModal>
            </React.Fragment>
        );
    }
}
export default ArticleModal;
