import React, { Component } from 'react';
import styled, { keyframes } from "styled-components";
import noface from "source/thumbnail.png";
import DateFormat from "modules/DateFormat";
import { confirm } from "components/Commons/Confirm/Confirm";
import { alert } from "components/Commons/Alert/Alert";

import opendesign_style from "opendesign_style"

const CommentBox = styled.div`
    *{
        font-family: Noto Sans KR;
        font-weight: 500;
        font-size: 16px;
        color: #707070;
    }
`;
const blinker = keyframes`
  0% {
    background-color: #fffafa; 
  }
  50% {
    background-color: #FFFFFF; 
  }
  100% {
    background-color: #fffafa; 
  }
`;
const Comments = styled.div`
    margin-bottom: 20px;
    min-height: 50px;
`;
const CommentInner = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  &.blinking {
    animation: ${blinker} 1.15s 5;
  }
  &.reply {
    margin-left: 55px;
  };
  .face {
    min-width: 45px;
    min-height: 45px;
    max-width: 45px;
    max-height: 45px;
    border-radius: 50%;
    background-image: url(${props => props.face});
    background-size: cover;
    background-position:center;
    border: 1px solid #EFEFEF;
  };
    .text-wrapper {
        margin-left: 10px;
        width: max-content;
        // min-width: 150px;
        // max-width: 473px;
        // height:40px;
        .nick {
            display: flex;
            flex-direction: row;
            font-size: 18px;
            font-weight: 500;
            .name {
                width: max-content;
            };
            .create-time {
                margin-left: auto;
                margin-right: 10px;
                width: max-content;
                font-size: 13px;
                font-weight: 500;
            };
        };
        .comment {
            // min-width: 120px;
            // width: max-content;
            // font-weight: 300;
            // font-size: 16px;
            // max-width: 560px;
            // margin-top: 5px;
        };
    };

    .button-wrapper {
        display: flex;
        flex-direction: row;
        margin-left: 7px;
        
        .reply {
            width: max-content;
            height: 16px;
            font-size: 14px;
            font-weight: 500;
            margin-left: 5px;
            cursor: pointer;
       }
        .del {
            font-size: 14px;
            color: red;
            cursor: pointer;
        }
    };

    @media only screen and (min-width : ${opendesign_style.resolutions.SmallMinWidth}px) and (max-width : ${opendesign_style.resolutions.SmallMaxWidth}px){
        display:flex;
        flex-wrap:wrap;
        .text-wrapper{
            min-width:100%;
            .nick{
                min-width:100%;
                display:flex;
                flex-wrap:wrap;
                .name{
                    width:100%;
                    white-space: nowrap; 
                    overflow: hidden; 
                    text-overflow: ellipsis; 
                }
                .create-time{
                    margin-left:0px;
                }
            }
        }
        .button-wrapper{
            .del{
                margin-top:5px;
                margin:3px;
            }
        }
    }
`;
const CommentInputTextContainer = styled.div`
   height:max-content;
   margin-bottom: 30px;
   margin-top: 15px;
   display: flex;
    &.reply {
        margin-left: 50px;
    }
    .writeBox {

        font-size: 15px;
        line-height: 22px;
        color: #707070;
        font-weight: 500;
        font-family: Noto Sans KR;
        margin-bottom:5px;
    }
   .face {
       max-width: 58px;
       max-height: 58px;
       min-width: 58px;
       min-height: 58px;
       background-image: url(${props => props.face});
       background-repeat: no-repeat;
       background-size: cover;
       background-position: center;
       background-color: #D6D6D6;
       border-radius: 50%;
   }
   .wrapper {
       width:75%;
       height:max-content;
       margin-left: 24px;

       textarea {
           width: 100%;
           min-width: 100px;
           height: 100%;
           padding: 7px;
           outline: none;
           border: none;
           resize: none;
           color: #707070;
           font-size: 20px;
           font-weight: 300;
           font-family: Noto Sans KR;
           line-height: 22px;
           background: #EFEFEF;
           background-repeat: no-repeat;
           border-radius: 5px;
       }
       .marginBottom{
           margin-bottom:30px;
       }
   }
   .flex_Input{
       width:100%;
       display:flex;
   }
   .another-wrapper { 
    //    margin-left: auto;
    //    margin-right: 20px;
    //    margin-top: 41px;
       display: flex;
       align-items:flex-end;
       padding:5px;
       textarea {
           width: 560px;
           min-width: 100px;
           height: 100%;
           padding: 7px;
           outline: none;
           border: none;
           resize: none;
           color: #707070;
           font-size: 20px;
           font-weight: 300;
           font-family: Noto Sans KR;
           line-height: 22px;
           background: #EFEFEF;
           background-repeat: no-repeat;
           border-radius: 5px;
       }
       .submit {
           width: max-content;
           height:max-content;
        //    height: 22px;
           margin-left: 18px;
           font-size: 20px;
           font-weight: 500;
           text-align: left;
           color: #707070;
           cursor: pointer;
           letter-spacing: 0;
       }
       .cancel {
           width: max-content;
           height:max-content;
        //    height: 22px;
           margin-left: 18px;
           font-size: 20px;
           font-weight: 300;
           text-align: left;
           color: #707070;
           cursor: pointer;
       }
   }
   @media only screen and (min-width : ${opendesign_style.resolutions.SmallMinWidth}px) and (max-width : ${opendesign_style.resolutions.SmallMaxWidth}px){
       display:flex;
       .wrapper{
           margin-left:0px;
           width:100%;
       }
       .flex_Input{
           flex-direction:column;
           align-items:flex-end;
       }
       .another-wrapper{
           .cancel{
               margin-left:0px;
           }
       }
   }
`;
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { reply: false, targetId: undefined, this_comment: "", this_reply: "", ing: false };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.reset = this.reset.bind(this);
        this.checkPermission = this.checkPermission.bind(this);
        this.reply = this.reply.bind(this);
        this.undoReply = this.undoReply.bind(this);
        this.undoComment = this.undoComment.bind(this);
        this.requestReply = this.requestReply.bind(this);
        this.requestComment = this.requestComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.removeReply = this.removeReply.bind(this);
    };
    onChangeValue(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value, ing: true });
        setTimeout(() => { this.setState({ ing: false }) }, 750);
    };
    reset() {
        this.setState({ reply: false, targetId: undefined, this_comment: "", this_reply: "", ing: false });
    };
    async checkPermission() {
        if (this.props.my == null) {
            await alert("로그인 해주세요.", "확인");
            return false;
        }
        return true
    };
    reply(itemId) {
        if (this.checkPermission() === false) {
            return;
        }
        this.setState({ reply: true, targetId: itemId });
    };
    undoReply() { this.setState({ reply: false, this_reply: "" }); };
    undoComment() { this.setState({ this_comment: "" }); };
    requestReply(where) {
        if (this.checkPermission() === false)
            return;
        if (this.state.this_reply.length > 0) {
            const comment = this.state.this_reply.replace(/\n/g, "<br/>");
            this.props.comment({ comment: comment, d_flag: where });
        }
        // this.props.comment({ comment: this.state.this_reply, d_flag: where });
        this.reset();
    };
    requestComment() {
        if (this.checkPermission() === false)
            return;
        if (this.state.this_comment.length > 0) {
            const comment = this.state.this_comment.replace(/\n/g, "<br/>");
            this.props.comment({ comment: comment, d_flag: null });
        }
        this.reset();
    };
    async removeComment(commentId) {
        if (await confirm("선택하신 댓글을 삭제하시겠습니까?", "예", "아니오") === false) {
            return;
        }
        const comm = this.props.comments.find(comm => { return (comm.uid === commentId) });
        if (comm.replies && comm.replies.length > 0) {
            await alert("답변이 있는 댓글은 삭제할 수 없습니다.", "확인");
        }
        else {
            this.props.removeComment(commentId);
        }
    };
    async removeReply(commentId) {
        if (await confirm("선택하신 댓글을 삭제하시겠습니까?", "예", "아니오") === false) {
            return;
        }
        this.props.removeComment(commentId);
    };

    render() {
        const { reply, this_comment, this_reply } = this.state;
        const { comments, my, disabledReply, disabledBlink } = this.props;
        const myface = my && my.thumbnail && my.thumbnail.s_img !== null ? my.thumbnail.s_img : noface;

        return (<CommentBox>
            {comments && comments.length > 0 && comments.map((item, index) => {
                const face = item && item.s_img ? item.s_img : noface;
                return (<Comments key={item.nick_name + index}>
                    {/* comments */}
                    <CommentInner face={face} className={!disabledBlink && item.read === 0 ? "blinking" : ""} >

                        <div className="face" />
                        <div className="text-wrapper">
                            <div className="nick">
                                <div className="name">{item.nick_name}</div>
                                <div className="create-time">({DateFormat(item.create_time)})</div>
                                <div className="button-wrapper">
                                    {!disabledReply && !reply && <div onClick={() => this.reply(item.uid)} className="reply">답글달기</div>}
                                    {my && my.uid === item.user_id && <div onClick={() => this.removeComment(item.uid)} className="reply del">삭제하기</div>}
                                </div>
                            </div>
                            <div className="comment"
                                dangerouslySetInnerHTML={{ __html: item.comment }}></div>
                            {/* <div className="comment">{item.comment}</div> */}
                        </div>
                    </CommentInner>

                    {/* replies of comment */}
                    {item.replies && item.replies.length > 0 && item.replies.map((repli, repli_index) => {
                        const repli_face = repli && repli.s_img !== null ? repli.s_img : noface
                        return (<CommentInner className={!disabledBlink && repli.read === 0 ? "reply blinking" : "reply"} key={repli.nick_name + repli.uid + repli_index} face={repli_face} >
                            <div className="face" />
                            <div className="text-wrapper">
                                <div className="nick">
                                    <div className="nick">{repli.nick_name}</div>
                                    <div className="create-time">({DateFormat(item.create_time)})</div>
                                </div>
                                <div className="comment" dangerouslySetInnerHTML={{ __html: repli.comment }}></div>
                            </div>
                            <div className="button-wrapper">
                                {my && my.uid === repli.user_id && <div onClick={() => this.removeReply(repli.uid)} className="del">삭제하기</div>}
                            </div>
                        </CommentInner>)
                    })}

                    {/* input-text of replie */}
                    {reply && item.uid === this.state.targetId &&
                        <React.Fragment>
                            <CommentInputTextContainer className="reply" style={{ flexDirection: "column" }} face={myface}>
                                <div className="writeBox" >{this.state.ing ? "답글 다는 중..." : my.nickName}</div>
                                <div className="flex_Input">
                                    {/* <div className="face" /> */}
                                    <div className="wrapper ">
                                        <textarea value={this_reply || ""} onChange={this.onChangeValue} name="this_reply" />
                                    </div>
                                    <div className="another-wrapper">
                                        <div className="cancel" onClick={this.undoReply}>취소</div>
                                        <div className="submit" onClick={() => this.requestReply(item.uid)}>게시</div>
                                    </div>
                                </div>
                            </CommentInputTextContainer>
                        </React.Fragment>
                    }
                </Comments>)
            })
            }

            {/* input-text of comment */}
            <CommentInputTextContainer face={myface}>
                <div className="face" />
                <div className="flex_Input">
                    <div className="wrapper">
                        <textarea value={this_comment || ""} onChange={this.onChangeValue} name="this_comment" />
                    </div>
                    <div className="another-wrapper">
                        <div className="submit" onClick={this.requestComment}>게시</div>
                        <div className="cancel" onClick={this.undoComment}>취소</div>
                    </div>
                </div>
            </CommentInputTextContainer>
        </CommentBox >)
    }
};

export default Comment;

