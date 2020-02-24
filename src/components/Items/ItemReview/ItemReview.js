import React, { Component } from 'react';
import styled from 'styled-components';
import DateFormat from "modules/DateFormat";
import Star from "components/Commons/Star";

const Reviews = styled.div`
  width: 468px;
  height: 1478px;
  background: #FFFFFF;
  box-shadow: 5px 5px 10px #00000029;
  border-radius: 20px;
  opacity: 1;
  // padding: 
  .title {
    font-weight: 500;
  }
`;
const Page = styled.div`
    width: max-content;
    margin-top: 87px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    font-weight: 500;
    text-aglin: left;
    display: flex;
    flex-direction: row;
    line-height: 27px;
    color: #707070;
    .number{
      margin-right: 10px;
    }
    .this{
      color: red;
    }
    .another {}
    .more {}
`;
const ReplyPrefix = styled.div`
    width: max-content;
    padding: 3px 6px 3px 6px;
    border-radius: 25px;
    margin-left: 25px;
    margin-right: 5px;
    background: blue;
    color: white;
`;

class ItemReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reply: false,
            targetId: null,
            this_comment: "",
            this_reply: "",
            page: 0,
            review_writing: false,
            review_selected: -1,
            score: 0,
            // ing: false
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.reset = this.reset.bind(this);
        this.checkPermission = this.checkPermission.bind(this);
        this.reply = this.reply.bind(this);
        this.undoReply = this.undoReply.bind(this);
        this.undoComment = this.undoComment.bind(this);
        this.requestAnswer = this.requestAnswer.bind(this);
        this.requestReview = this.requestReview.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.removeReply = this.removeReply.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    onChangeValue(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value, ing: true });
        setTimeout(() => { this.setState({ ing: false }) }, 750);
    };
    reset() {
        this.setState({
            reply: false,
            targetId: null,
            this_comment: "",
            this_reply: "",
            page: 0,
            review_writing: false,
            review_selected: -1,
            score: 0,
            // ing: false
        });
    };
    checkPermission() {
        if (this.props.userInfo == null) {
            alert("로그인 해주세요.");
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
    requestAnswer(origin) {
        if (this.checkPermission() === false)
            return;
        this.props.request({ comment: this.state.this_reply, group_id: origin.group_id, sort_in_group: origin.sort_in_group });
        this.reset();
    };
    requestReview(id) {
        if (this.checkPermission() === false)
            return;
        if (this.state.this_comment.length > 0)
            this.props.request({ score: this.state.score > 5 ? 5 : this.state.score, comment: this.state.this_comment, payment_id: id });
        this.reset();
    };
    removeComment(commentId) {
        if (window.confirm("선택하신 댓글을 삭제하시겠습니까?") === false) {
            return;
        }
        const comm = this.props.comments.find(comm => { return (comm.uid === commentId) });
        if (comm.replies && comm.replies.length > 0) {
            alert("답변이 있는 댓글은 삭제할 수 없습니다.");
        }
        else {
            this.props.removeComment(commentId);
        }
    };
    removeReply(commentId) {
        if (window.confirm("선택하신 댓글을 삭제하시겠습니까?") === false) {
            return;
        }
        this.props.removeComment(commentId);
    };
    handleKeyDown(event) {
        // ;
    };
    getData(page) {
        this.setState({ page: page });
        this.props.getData(page);
    };

    render() {
        const { review, payment, userInfo, total, score, user_id } = this.props;
        const { reply, this_reply, this_comment, page } = this.state;
        const master = user_id === (userInfo && userInfo.uid);

        const Review = (props) => {
            return (
                // <div className="line element-reply">
                //     {!props.itsmine && props.sort_in_group && master ?
                //         <div onClick={() => this.reply(props.uid)}>[답변하기]</div> : null}
                //     {/* {props.itsmine && !master ?<div >[삭제하기]</div> : null} */}
                //     <div className="line">
                //         {props.is_review ? "" : <ReplyPrefix>판매자 답변</ReplyPrefix>}
                //         {props.comment}</div>
                //     <div style={{ width: "max-content", marginLeft: "auto" }}>{props.nick_name}</div>
                //     <div style={{ width: "max-content", marginLeft: "15px" }}>{props.sort_in_group === 0 ? Star(props.score) : null}</div>
                //     <div style={{ width: "max-content", marginLeft: "75px" }}>{DateFormat(props.create_time)}</div>
                // </div>
                <div className="line list-element">
                    <div className="pics" />
                    <div>
                        <div className="score">{Star(props.score)}({props.score})</div>
                        <div className="comment">{props.comment}</div>
                        <div className="nickname">{props.nick_name}</div>
                    </div>
                </div>
            )
        }

        return (<React.Fragment>
            <Reviews>
                <div className="line">
                    <div className="title">리뷰</div>
                    <div className="score">{Star(score)}({total})</div>
                </div>
                {!master ?
                    payment && payment.length > 0 ?
                        payment.map((pay, index) => {
                            console.log(pay);
                            return <div key={index} onClick={() => this.setState({ review_selected: index, review_writing: true })}>
                                {this.state.review_writing && this.state.review_selected === index ?
                                    <div className="line" style={{ marginTop: "34px", }}>
                                        <div className="input-wrapper">
                                            <textarea
                                                value={this_comment || ""}
                                                onChange={this.onChangeValue}
                                                name="this_comment"
                                                onKeyDown={this.handleKeyDown} />
                                            <input
                                                style={{ width: "25px" }}
                                                value={this.state.score || 0}
                                                onChange={this.onChangeValue}
                                                name="score" />
                                        </div>
                                        <div className="button" onClick={() => this.requestReview(pay.uid)} >
                                            <div className="text" >리뷰작성</div></div>
                                    </div>
                                    : "작성하실 리뷰가 있습니다."}
                            </div>
                        }) : null
                    : null}


                <div>
                    {review && review.length > 0 ?
                        review.map((item, index) =>
                            <div key={index}>
                                <Review
                                    {...item}
                                    key={index}
                                    itsmine={item.user_id === (userInfo && userInfo.uid)}
                                    is_review={item.sort_in_group === 0}
                                />
                                {reply && item.uid === this.state.targetId ?
                                    <div className="line" style={{ marginTop: "34px", }}>
                                        <div className="input-wrapper">
                                            <textarea
                                                value={this_reply || ""}
                                                onChange={this.onChangeValue}
                                                name="this_reply"
                                                onKeyDown={this.handleKeyDown} />
                                        </div>
                                        <div className="button" onClick={() => this.requestAnswer(item)} >
                                            <div className="text" >답변하기</div></div>
                                    </div> : null}
                            </div>) : null}
                </div>
                <Page>
                    {total
                        ? Array(parseInt((total / 10) + 1, 10)).fill().map((_, i) =>
                            <div key={i} onClick={() => this.getData(i)} className={page === i ? "this number" : "another number"}> {i + 1}</div>)
                        : (<React.Fragment>&nbsp;</React.Fragment>)}
                </Page>
            </Reviews>
        </React.Fragment >)
    }
}
export default ItemReview;