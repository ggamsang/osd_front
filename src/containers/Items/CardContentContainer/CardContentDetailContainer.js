import React, { Component } from 'react';
import { connect } from "react-redux";
// import { GetItemContentsRequest, UpdateItemContentsRequest } from "actions/Item";
// import CardSourceDetail from "components/Items/ItemDetail/CardSourceDetail";

class CardContentContainer extends Component {
  // componentDidMount() {
  // this.props.cardId && this.props.GetItemContentsRequest(this.props.cardId, this.props.token);
  // }
  render() {
    return (
      <CardContent />
      // <CardSourceDetail {...this.props} handlerModifyContent={() => this.props.handlerModifyContent && this.props.handlerModifyContent()} upDateRequest={this.props.UpdateItemContentsRequest} />
    )
  }
}

const mapStateToProps = (state) => ({
  // userInfo: state.Authentication.status.userInfo,
  // token: state.Authentication.status.token,
  // content: state.ItemContent.status.content,
  // ItemDetail: state.ItemDetail.status.ItemDetail,
  // status: state.ItemContent.ItemContentEdit.status,
  // editStatus: state.ItemContent.ItemContentEdit.status
});

const mapDispatchToProps = (dispatch) => ({
  // GetItemContentsRequest: (id) => dispatch(GetItemContentsRequest(id)),
  // UpdateItemContentsRequest: (data, card_id, token) => dispatch(UpdateItemContentsRequest(data, card_id, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContentContainer)
