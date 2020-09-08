import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from "react-redux";
import styled from 'styled-components';
import arrow from "source/arrow.svg";
import Cross from "components/Commons/Cross";
import DateFormat from "modules/DateFormat";
import { GetDesignDetailRequest, } from "actions/Design";
import {
    UpdateCardImagesRequest, UpdateCardContentRequest, UpdateCardTitleRequest,
    GetCardDetailRequest
} from "actions/Designs/DesignCard";
import { GetDesignBoardRequest, } from "actions/Designs/DesignBoard";
import { UpdateDesignTime } from "actions/Designs/UpdateDesign";

import { GetItemStepsRequest, UpdateCardSourceRequest, DeleteItemCardRequest } from "actions/Item";

import CardSourceDetailContainer from 'containers/Items/CardSourceDetailContainer';
import CardComment from './CardComment';

import { FormThumbnailEx } from "components/Commons/FormItems";
import { ValidationGroup } from "modules/FormControl";
import TextFormat from 'modules/TextFormat';
import Loading from "components/Commons/Loading";

import {confirmAlert} from "react-confirm-alert";
import {options,optionsAlter} from "components/Commons/InputItem/AlertConfirm"

const ContentBorder = styled.div`
   height: 29px;
   font-family: Noto Sans KR;
   font-size: 20px;
   color: #707070;
   font-weight: 500;
   line-height: 29px;
   margin-left: 50px;
   margin-top: 30px;
   padding-right: 25px;
   .border-line {
       border-bottom: 1px solid #707070;
   }
`;
const CommentWrapper = styled.div`
   .comment-title {
       margin-left: 45px;
   }
   .comment-body{
       margin-left: 52px;
       margin-top: 15px;
       color: #707070;
       font-size: 20px;
       font-weight: 500;
       font-family: Noto Sans KR;
       line-height: 29px;
   }
`;
const CardDialog = styled(Modal)`

        margin-top: 50px !important;
        margin-bottom: 50px !important;
        height: max-content;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #000000;
        border: 1px solid #EFEFEF;
        border-radius: 10px;
        opacity: 1;
    ::-webkit-scrollbar {
        position: absolute;
        width: 3.9px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(112, 112, 112, 0.45) !important;
    } 
    .content{
        padding: 45px;
        margin-left: auto;
        line-height: 17px;
    }
    .prevPane {
        width: 115px;
        height: 813.28px;
        position: absolute;
        left: 0%;
        margin-left: -195px;
        margin-top: 75.7px;
        border-radius: 0px 10px 10px 0px;
        background-color: #FFFFFF;
    }
    .prevArrow {
        width: 14px;
        height: 47px;
        position: absolute;
        left: 0%;
        margin-top: 409.81px;
        margin-left: -47px;
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .nextPane {
        width: 115px;
        height: 813.28px;
        position: absolute;
        left: 100%;
        margin-left: 80px;
        margin-top: 75.7px;
        border-radius: 10px 0px 0px 10px;
        background-color: #FFFFFF;
    }
    .nextArrow {
        width: 14px;
        height: 47px;
        position: absolute;
        left: 100%;
        margin-top: 409.81px;
        margin-left: 33px;
        background-image: url(${arrow});
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .close-box {
        width: max-content;
        cursor: pointer;
        position: relative;
        margin-left: auto;
        margin-right: 10px;
        margin-top: 10px; 
    }
    .content-wrapper {
        position: relative;
        .card-header-first {
            display: flex;
            justify-content: space-between;
            height: 29px;
            margin-top: 30px;
            margin-left: 52px;
            .header-title {
                font-family: Noto Sans KR;
                font-size: 20px;
                color: #707070;
                font-weight: 500;
                line-height: 29px;
            }
            .header-edit-button {
                font-family: Noto Sans KR;
                font-size: 17px;
                color: #707070;
                font-weight: 900;
                line-height: 29px;
                margin-right: 75px;
                .edit-btn {
                    border: none;
                    background: none;
                    width: max-content;
                    height: 40px;
                    line-height: 40px;
                    color: #FF0000;
                    padding-bottom: 1.5px;
                    border-bottom: 1.5px solid #FF0000;
                    font-size: 20px;
                    font-weight: 500;
                    font-family: Noto Sans KR;
                    text-align: left;
                    cursor: pointer;
                }
                .cancel-btn {
                    margin-left: 25px;
                    border: none;
                    background: none;
                    width: max-content;
                    height: 40px;
                    line-height: 40px;
                    color: #707070;
                    padding-bottom: 1.5px;
                    border-bottom: 1.5px solid #707070;
                    font-size: 20px;
                    font-weight: 500;
                    font-family: Noto Sans KR;
                    text-align: left;
                    cursor: pointer;
                }
            }
        }
        .card-header-second {
            width: 100%;
            height: 29px;
            display: flex;
            justify-content: flex-start;
            padding-left: 52px;
            margin-top: 30px;
            .contents {
                font-size: 20px;
                color: #707070;
                font-weight: 300;
                font-family: Noto Sans KR;
                line-height: 29px;   
            }
            .nick-name {
                width: max-content;
                margin-left: auto;
                margin-right: 5px;
                font-size: 20px;
                color: #707070;
                font-weight: 300;
                font-family: Noto Sans KR;
                line-height: 29px;   
            }
            .update-time {
                width: max-content;
                margin-right: 75px;
                color: #707070;
                font-size: 17px;
                font-weight: 300;
                font-family: Noto Sans KR;
                line-height: 29px;
            }
        }
    }
`
const EditCardHeaderContainer = styled.div`
   .edit-header-container {
       display: flex;
       margin-top: 15px;
       margin-left: 45px;
       width: max-content;
       .edit-card-info {
           width: max-content;
           height: 29px;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           line-height: 40px;
           color: #707070;
       }
   }
   .edit-header-thumbnail {
       display: flex;
       margin-top: 25px;
       margin-left: 65px;
       .thumbnail-txt {
           width: 97px;
           height: 29px;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           line-height: 40px;
           color: #707070;
       }

   }
   .edit-header-title {
       display: flex;
       margin-top: 15px;
       margin-left: 65px;
       .title-txt {
           width: 97px;
           height: 29px;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           line-height: 40px;
           color: #707070;
       }
       .title-input-container{
           margin-left: 31px;
           width: 500px;
           height: 56px;
           background-color: #EFEFEF;
           border-radius: 5px;
       }
       .title-input-style{
           border-radius: 5px;
           width: 100%;
           border: none;
           background: transparent;
           font-size: 20px;
           font-weight: 500;
           color: #707070;
           height: 100%;
           padding: 16px 23px 16px 23px;
       }
   }
   .edit-header-description{
       display: flex;
       margin-top: 15px;
       margin-left: 65px;
       .description-txt{
           width: 97px;
           height: 29px;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           line-height: 40px;
           color: #707070;
       }
       .description-input-container{
           margin-left: 31px;
           width: 505px;
           height: 56px;
           background-color: #EFEFEF;
           border-radius: 5px;
       }
       .description-input-style{
           border-radius: 5px;
           width: 100%;
           border: none;
           background: transparent;
           font-size: 20px;
           font-weight: 500;
           color: #707070;
           height: 100%;
           padding: 16px 23px 16px 23px;
       }
   }
   .edit-header-button-container {
       width: max-content;
       margin-left: auto;
       margin-right: 25px;
       .edit-header-submit-button {
           border: none;
           background: none;
           width: max-content;
           height: 40px;
           line-height: 40px;
           color: #FF0000;
           padding-bottom: 1.5px;
           border-bottom: 1.5px solid #FF0000;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           cursor: pointer;
       }
       .edit-header-cancel-button {
           margin-left: 10px;
           border: none;
           background: none;
           width: max-content;
           height: 40px;
           line-height: 40px;
           color: #707070;
           padding-bottom: 1.5px;
           border-bottom: 1.5px solid #707070;
           font-size: 20px;
           font-weight: 500;
           font-family: Noto Sans KR;
           text-align: left;
           cursor: pointer;
       }
   }
`;
const BlankSpace = styled.div`
    width: 250px;
    height: 250px;
    background-color: "white";
    borderRadius: 15px
`;
class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = { sroll: false, edit: false, title: "", description: "", content: [], }
    };
    componentDidMount() {

        const { card } = this.props;
        this.setState({ thumbnail: card.thumbnail, title: card.title, description: card.description });
    };
    componentDidUpdate(prevProps) {
        if (prevProps.card !== this.props.card) {
            alert("card");
            return true;
        }
    };
    onChangeValueThumbnail = async data => {
        let obj = {};
        if (data.target) {
            obj[data.target.name] = data;
            await this.setState(obj);
        }
    };
    onChangeTitle = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.title);
    };
    onChangeDescription = event => {
        if (event.target) {
            this.setState({ description: event.target.value });
        }
    };
    handleHeaderSubmit = passingContent => {
        console.log("20200312", passingContent, this.state);
        let files = null;
        ValidationGroup(this.state, false)
            .then(async data => {
                files = data && data.files;
                // let thumbnail = { img: files && files[0].value, file_name: files && files[0].name };
                const pack = {
                    title: this.state.title,
                    // thumbnail: files && thumbnail, 
                    files: files,
                    description: this.state.description,
                    data: {
                        deleteContent: passingContent.deleteContent || [],
                        newContent: passingContent.newContent || [],
                        updateContent: passingContent.updateContent || []
                    }
                };
                // console.log(pack);
                // return;
                await this.props.UpdateCardSourceRequest(pack, this.props.card.uid, this.props.token)
                    .then(this.props.GetItemStepsRequest(this.props.itemId, this.props.token))
                    .catch(err => alert(err + '와 같은 이유로 카드수정에 실패하셨습니다. 관리자에게 문의해주시기 바랍니다.'));
                this.onClose();
            }).catch(err => alert(err + '와 같은 이유로 카드수정에 실패하셨습니다. 관리자에게 문의해주시기 바랍니다.'));
        this.setState({ edit: !this.state.edit })
    };
    onCloseEditMode = () => {
        if ((this.state.title !== this.props.card.title) || (this.state.content !== this.props.card.content)) {
            if (!window.confirm("변경된 내용이 저장되지 않습니다. 계속하시겠습니까?")) {
                return;
            }
        }
        this.setState({ edit: false });
    };
    onChangeEditMode = () => {
        this.setState({ edit: this.state.edit })
    };
    removeCard = e => {
        e.stopPropagation();
        const confirm = window.confirm("컨텐츠를 삭제하시겠습니까?");
        if (confirm) {
            this.props.DeleteItemCardRequest(this.props.itemId, this.props.card.uid, this.props.token)
                .then(res => {
                    if (res.success) {
                        this.props.GetItemStepsRequest(this.props.itemId, this.props.token);
                        this.setState({ edit: false });
                        this.onClose();
                    }
                })
                .catch(err => alert(err))
        }
    };
    onClose = async (event) => {
        // confirmAlert(options("모든 내용이 저장되지 않고 닫힙니다. 그래도 계속 진행하시겠습니까?"
        // ,async()=>{
        //     await this.setState({ sroll: false, edit: false, title: "", content: "" });
        //     this.props.close();
        // }
        // ,event));
        if (this.state.edit && !window.confirm("수정된 사항이 저장되지 않습니다, 계속 하시겠습니까?")) {
            return;
        }
        await this.setState({ sroll: false, edit: false, title: "", content: "" });
        this.props.close();
    };
    render() {
        const { card } = this.props;
        console.log(this.state, this.props);

        return (
            !card ? (
                <div>{card}loading</div>
            ) :
                <React.Fragment>
                    <div style={{ zIndex: 100 }}>
                        <CardDialog open={this.props.open} onClose={this.onClose}>
                            {this.state.loading && <Loading />}

                        <div className="close-box" onClick={this.onClose} >
                            <Cross angle={45} color={"#000000"} weight={3} width={33} height={33} />
                        </div>

                        <div className="content-wrapper" >
                            {this.state.edit
                                ? <React.Fragment>
                                    <EditCardHeaderContainer>
                                        <div className="edit-header-container">
                                            <div className="edit-card-info">컨텐츠 정보수정</div>
                                        </div>
                                        <div className="edit-header-thumbnail">
                                            <div className="thumbnail-txt">이미지</div>
                                            <FormThumbnailEx style={{ width: "210px", height: "210px", marginLeft: "30px", borderRadius: "10px", backgroundColor: "#EFEFEF" }}
                                                name="thumbnail" image={this.state.thumbnail} placeholder="썸네일 등록" getValue={this.onChangeValueThumbnail} validates={["OnlyImages", "MaxFileSize(10000000)"]} />
                                        </div>
                                        <div className="edit-header-title">
                                            <div className="title-txt">제목</div>
                                            <div className="title-input-container">
                                                <input className="title-input-style" name="title" onChange={this.onChangeTitle} value={this.state.title} maxLength="20" placeholder="제목을 입력해주세요." />
                                            </div>
                                        </div>
                                        <div className="edit-header-description">
                                            <div className="description-txt">설명</div>
                                            <div className="description-input-container">
                                                <input className="description-input-style" name="description" onChange={this.onChangeDescription} value={this.state.description} maxLength="1000" placeholder="설명을 입력해주세요." />
                                            </div>
                                        </div>
                                    </EditCardHeaderContainer>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="card-header-first">
                                        <div className="header-title">{card.title}</div>
                                        <div className="header-edit-button">
                                            {this.props.edit ?
                                                <React.Fragment>
                                                    <button className="edit-btn" onClick={() => this.setState({ edit: !this.state.edit, title: card.title, content: card.content })} >수정하기</button>
                                                    <button className="cancel-btn" onClick={(event) => this.removeCard(event)} >삭제하기</button>
                                                </React.Fragment> : undefined}
                                        </div>
                                    </div>
                                    <div className="card-header-second" >
                                        <div className="contents"><TextFormat txt={card.content || ""} chars={25} /></div>
                                        <div className="nick-name">{card.nick_name}</div>
                                        <div className="update-time">(업데이트&nbsp;:&nbsp;{DateFormat(card.update_time)})</div>
                                    </div>
                                </React.Fragment>}

                            <ContentBorder>
                                <div className="border-line" />
                            </ContentBorder>

                            <div className="content">
                                <CardSourceDetailContainer
                                    bought={this.props.bought}
                                    isTeam={this.props.isTeam}
                                    submit={this.handleHeaderSubmit}
                                    handleCancel={this.onCloseEditMode}
                                    edit={this.state.edit}
                                    card={card}
                                    cardId={card.uid}
                                    closeEdit={this.onCloseEditMode}
                                    openEdit={this.onChangeEditMode}
                                    isCancel
                                />
                            </div>
                        </div>
                        </CardDialog>
                        <BlankSpace />
                    </div>
                </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    userInfo: state.Authentication.status.userInfo,
    token: state.Authentication.status.token,
    detail: state.ItemContent.status.ItemContent,
});

const mapDispatchToProps = dispatch => ({
    DeleteItemCardRequest: (board_id, card_id, token) => dispatch(DeleteItemCardRequest(board_id, card_id, token)),
    GetItemStepsRequest: (id, token) => dispatch(GetItemStepsRequest(id, token)),

    UpdateCardSourceRequest: (data, card_id, token) => { return dispatch(UpdateCardSourceRequest(data, card_id, token)); },
    UpdateCardTitleRequest: (data, token, id) => { return dispatch(UpdateCardTitleRequest(data, token, id)); },
    UpdateCardContentRequest: (data, token, id) => { return dispatch(UpdateCardContentRequest(data, token, id)); },
    UpdateCardImagesRequest: (data, token, id) => { return dispatch(UpdateCardImagesRequest(data, token, id)); },
    GetDesignBoardRequest: (id) => { return dispatch(GetDesignBoardRequest(id)); },
    GetCardDetailRequest: id => { return dispatch(GetCardDetailRequest(id)); },
    UpdateDesignTime: (id, token) => { return dispatch(UpdateDesignTime(id, token)); },
    GetDesignDetailRequest: (id, token) => { return dispatch(GetDesignDetailRequest(id, token)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);