import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonOSD from "./ButtonOSD";
import NoticeDialog from "./NoticeDialog";
import BoardDialog from "./BoardDialog";
import DueDateDialog from "./DueDateDialog";
import ExportExcelFile from './ExportExcelFile';
// import host from "config";
// import { alert } from "components/Commons/Alert/Alert";

const Wrapper = styled.div`
  display: flex;
  font-size: 16px;

  .more {
      margin-left: 25px;
      font-size: 1.2rem;
      color: #F00;
      cursor: pointer;
  }
  .new-notice {
    margin-left: 15px;
    font-size: 0.9rem;
    background-color: #F00;
    border-radius: 10px;
    cursor: pointer; 
    color: white;
    font-weight: 500;
    padding: 2px 5px;
    line-height: 1rem;
  }
`;

export default class GroupNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dialog
      notice: false,
      board: false,
      // export 
      submitStatus: false,
      data: null,
    }
  }
  closeNoticeDialog = () => {
    this.setState({ notice: false });
  }
  closeBoardDialog = () => {
    this.setState({ board: false });
  }
  getExportFile = async () => {
    this.props.loading(true);
    this.props.GetHaveGroupInDesignRequest(this.props.token, this.props.GroupDetail.uid)
      .then(async (data) => {
        console.log(data);
        await this.setState({
          data: data.data.map((item, index) => {
            item.problem_name = JSON.parse(item.content).name;
            return item;
          })
        });
        this.props.loading(false);
        await this.setState({ submitStatus: true });
        setTimeout(() => { this.setState({ submitStatus: false }) }, 500);
      });
  }




  render() {
    const { GroupDetail, userInfo, token, hasProgrammingDesign } = this.props;
    const { /*dialog*/notice, board, /**/submitStatus, data, due } = this.state;
    const user_id = userInfo && userInfo.uid;
    console.log(this.props);
    return (<React.Fragment>
      {notice
        ? <NoticeDialog user_id={user_id} group_owner_id={GroupDetail.user_id} token={token} group_id={GroupDetail.uid} open={notice} close={this.closeNoticeDialog} />
        : null}
      {board
        ? <BoardDialog userInfo={userInfo} token={token} group_id={GroupDetail.uid} open={board} close={this.closeBoardDialog} />
        : null}
      {submitStatus
        ? <ExportExcelFile title={GroupDetail.title} group={GroupDetail} data={data} />
        : null}
      {due
        ? <DueDateDialog id={GroupDetail.uid} token={token} open={due} close={() => this.setState({ due: false })} />
        : null}

      <Wrapper>
        <ButtonOSD onClick={() => this.setState({ notice: true })}>공지사항</ButtonOSD>
        <ButtonOSD onClick={() => this.setState({ board: true })}>게시판</ButtonOSD>

        {user_id === GroupDetail.user_id && hasProgrammingDesign
          ? <ButtonOSD onClick={this.getExportFile}>제출현황보기</ButtonOSD>
          : null}

        {/* {user_id === GroupDetail.user_id && hasProgrammingDesign
          ? <ButtonOSD onClick={() => this.setState({ due: true })}>마감기한설정</ButtonOSD>
          : null} */}

      </Wrapper>

    </React.Fragment>
    )
  }
};
