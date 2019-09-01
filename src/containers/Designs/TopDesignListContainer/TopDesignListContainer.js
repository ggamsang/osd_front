import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetTopDesignListRequest } from "redux/modules/design"
import ScrollList from "components/Commons/ScrollList"
import Design from "components/Designs/Design"
import Loading from "components/Commons/Loading"
import opendesign_style from 'opendesign_style';

class TopDesignListContainer extends Component {
    componentDidMount() {
        this.props.GetTopDesignListRequest(0)
    }
    getList = async (page) => {
        return this.props.GetTopDesignListRequest(page);
    }

    render() {
        return (<>{this.props.status === "INIT" ?
            <Loading /> :
            <ScrollList
                {...opendesign_style.design_margin}
                ListComponent={Design} dataList={this.props.dataList} dataListAdded={this.props.dataListAdded} getListRequest={this.getList} />
        }</>)
    }
}

const mapStateToProps = (state) => {
    return {
        dataList: state.DesignList.status.TopList,
        dataListAdded: state.DesignList.status.TopListAdded,
        status: state.DesignList.TopList.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetTopDesignListRequest: (page) => {
            return dispatch(GetTopDesignListRequest(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopDesignListContainer)
