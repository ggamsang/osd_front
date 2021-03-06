import React, { Component } from 'react'
import styled from 'styled-components'

import forked from "source/forked.svg"
import iForked from "source/forked_icon_white.png"
import iThumbUp from "source/thumbup_icon_white.png"
import IconView from "source/IconView"
import noimg from "source/noimg.png"

import DateFormat from "modules/DateFormat"
import TextFormat from "modules/TextFormat"
import NumberFormat from "modules/NumberFormat"
import { geturl } from "config"

// CSS 
const DesignElement = styled.div`
  *{
    cursor:pointer;
  }
  cursor:pointer;
  position: relative;
  z-index: 700;
  width: 330px;
  height: 330px;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.img});
  color: white;
  font-size: 20px;
  font-family: "Noto Sans KR";
  // cursor: default;
  .cover {
    // cursor: default;
    z-index: 701;
    position: absolute;
    border-radius: 15px;
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(32,32,32, 0.7)100%); 
    width: 330px;
    height: 330px;
  }
  .forked {
    position: absolute;
    margin-left: 276px;
    margin-top: 0px;
    width: 32.63px;
    height: 67px;
    background-image: url(${forked});
    background-size:cover;
  }
  .categoryName {
    z-index: 703;
    position: absolute;
    margin-left: 170px;
    margin-top: 285px;
    width: 140px;
    height: 40px;
    color: #FF0000;
    font-size: 20px;
    font-weight: 400;
    text-align: right;
    text-shadow:2px 2px 6px rgb(80,80,80,1);
    // cursor: default;
  }
  .innerbox {
    z-index: 703;
    position: absolute;
    width: 274.08px;
    color: #FFFFFF;
    line-height: 40px;
    height: 35px;
    font-family: Noto Sans KR;
    margin-left: 25px;
    margin-top: 201px;
    .design-title {
      font-size: 20px;
      font-weight: 700;
      text-shadow: 2px 2px 4px #707070;
    }
    .update-time { 
      margin-top: 5px;
      font-weight: 300;
      border: 1px solid red;
      width: max-content;
      height: 25px;
      font-size: 17px;
      font-family: Noto Sans KR;
      line-height: 25px;
      text-align: right;
      text-shadow:2px 2px 6px gray;
      // cursor: default;
    }
    .user-name {
      font-size: 20px;
      font-weight: 300;
      text-shadow:2px 2px 6px gray;
      // cursor: default;
    }  
    .user-update-wrapper {
      width: 285px;
      display: flex;
      justify-content: space-between;
  
    }
  }

  .counter {
    z-index: 703;
    position: absolute;
    left: 24.92px;
    top: 286px;
    display: flex;
    justify-content: space-start;
    width: 291px;
    height: 22px;
    text-align: left;
    line-height: 40px;
    font-size: 15px;
    font-weight: 500;
    align-items: center;
    text-shadow:2px 2px 6px gray;
  }
  .view {
    z-index: 703;
    margin-right: 4.25px;
  }
  .view-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .like {
    z-index: 703;
    margin-right: 4px;
    img{
      width: 13px;
      height: 13px;
    }
  } 
  .like-count {
    z-index: 703;
    margin-right: 6px;
    // cursor: default;
  }
  .fork {
    z-index: 703;
    margin-right: 4px;
    img {
      width: 22px;
      height: 11px;
    }
  }
  .fork-count {
    z-index: 703;
    margin-right: 0px;
    // cursor: default;
  }
  :hover {
    // border-right: 1px solid #707070;
    // border-bottom: 1px solid #707070;
    box-shadow: 2px 1px 5px rgba(112,112,112,0.35);
  }
`;

const DesignEmpty = {
  title: "타이틀", userName: "개설자", categoryName: "분야",
  like_count: 0, children_count: 0, view_count: 0,
  thumbnailUrl: { m_img: null },
}

class Design extends Component {
  gotoDetailPage = () => {
    window.location.href = geturl() + "/designDetail/" + this.props.data.uid
  }
  state = { data: this.props.data || DesignEmpty }
  shouldComponentUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }
    return true;
  }
  render() {
    const data = this.state.data
    const thumbnail = data.thumbnailUrl
    const isForked = this.props.forked || data.parent_design;
    return (
      <DesignElement onClick={this.gotoDetailPage} img={(thumbnail === null ? noimg : thumbnail.l_img === null ? noimg : thumbnail.l_img)}>
        {/* <div className="cover" /> */}
        {isForked && <div className="forked" />}
        <div className="categoryName">{data.categoryName}</div>
        <div className="innerbox">
          <div className="design-title">
            {/* {data.title} */}
            <TextFormat tip width="100%" txt={data.title} single />
          </div>
          <div className="user-update-wrapper">
            <div style={{ textShadow: "1px 1px 2px #707070", fontWeight: "500", fontSize: "1.25rem", width: "200px" }}>
              <TextFormat tip txt={data.userName} width="100%" />
            </div>
            <div style={{ textShadow: "2px 2px 6px gray", fontSize: "1.15rem", width: "max-content" }}>
              {DateFormat(data.update_time)}
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="view"><IconView width="22px" height="11px" fill="white" /></div>
          <div className="view-count">{NumberFormat(data.view_count)}</div>
          <div className="like"><img alt="icon" src={iThumbUp} /></div>
          <div className="like-count">{NumberFormat(data.like_count)}</div>
          <div className="fork"><img alt="icon" src={iForked} /></div>
          <div className="fork-count">{NumberFormat(data.children_count) || 0}</div>
        </div>
      </DesignElement >
    )
  }
}
export default Design

//return (
//  <NavLink to={"/designDetail/" + design.uid}><Designli></Designli></NavLink>
//)
