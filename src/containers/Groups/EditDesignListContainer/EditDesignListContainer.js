import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DesignInGroupClear, GetDesignInGroupRequest, DeleteDesignInGroupRequest } from "redux/modules/group";
import ScrollList from "components/Commons/ScrollList";
import opendesign_style from 'opendesign_style';
import styled from 'styled-components';
import osdstyle from "opendesign_style";
import Loading from 'components/Commons/Loading';
import { confirm } from 'components/Commons/Confirm/Confirm';

const DesignBox = styled.div`
  & .boxTitle {
    margin-left: 1rem;
    padding-bottom: 1rem;
    font-size: ${opendesign_style.font.size.heading4};
  }
`;

class EditDesignListContainer extends Component {
  state = { reload: false };
  componentWillMount() {
    this.props.GetDesignInGroupRequest(this.props.id, null, null);
  }
  handleReload = () => {
    this.setState({ reload: !this.state.reload });
  }
  setOut = async (target) => {
    const isconfirm = await confirm("이 디자인을 그룹에서 삭제하시겠습니까?", "예", "아니오");
    if (!isconfirm) {
      return;
    }
    this.props.DeleteDesignInGroupRequest(this.props.id, target)
      .then(res => {
        if (res.data.success === true) {
          this.props.GetDesignInGroupRequest(this.props.id, null, null)
            .then(() => { this.handleReload(); })
        }
      }).catch(err => {
        console.error(err);
      });
  }

  render() {
    const { reload } = this.state;
    return (
      <DesignBox>
        <div className="boxTitle">등록된 디자인 ({this.props.EditDesignList.length})</div>
        {this.props.status === "INIT" ?
          <Loading /> :
          <ScrollList
            {...osdstyle.design_margin}
            reload={reload}
            handleReload={this.handleReload}
            type="design"
            dataListAdded={this.props.EditDesignList}
            getListRequest={null}
            handleReject={this.setOut} />}
      </DesignBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.Group.MyExistList,
    EditDesignList: state.Group.status.DesignInGroup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DesignInGroupClear: (data) => {
      return dispatch(DesignInGroupClear(data))
    },
    GetDesignInGroupRequest: (id, page, sort) => {
      return dispatch(GetDesignInGroupRequest(id, page, sort))
    },
    DeleteDesignInGroupRequest: (id, designId) => {
      return dispatch(DeleteDesignInGroupRequest(id, designId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDesignListContainer);
