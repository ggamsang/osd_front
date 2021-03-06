import React, { Component } from 'react'
import styled from 'styled-components'
import zoom from "source/zoom.svg"
// import { confirm } from "components/Commons/Confirm/Confirm";
import { alert } from "components/Commons/Alert/Alert";

const flag_MaxWidth = 1440;
const flag_MinWidth = 480;
const SearchContainer = styled.div`
    display: ${props => props.visible};
    background-color: #FFFFFF;
    border-radius: 20px;
    border: 1.5px solid #707070;
    position:relative;
    overflow:hidden;
    width: 350px;
    min-width:150px;
    height: 36px;
    @media only screen and (min-width : ${flag_MinWidth}px) and (max-width : ${flag_MaxWidth}px) {
        width:${props => (350 - (flag_MaxWidth - props.formSize)) > 36 ? (350 - (flag_MaxWidth - props.formSize)) : 36}px;
    }
    @media only screen and (max-width : 1024px) {
        min-width:90%;
    }
    @media only screen and (max-width : ${flag_MinWidth}px) {
        width: 90%;
    }
    @media only screen and (min-width : ${flag_MaxWidth}px) {
        width: 350px;
    }

    &:focus{
        outline: 1.5px solid red;
    }
    input {
        outline: none;
        width: 80%;
        border: none;
        margin: 5px 10px;
    }
    .shadow_button{
        width:21px;
        height:21px;
        position: absolute;
        top:3px;
        right:12px;

        background: url(${zoom});
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
    }
`;
class SearchForm extends Component {
    state = {
        searchKeyword: "",
    };
    goSearch = () => {
        window.location.href = `/search/update/${this.state.searchKeyword}`;
    };

    submitEnter = async (e) => {
        if (e.keyCode === 13) {
            document.getElementById("searchbox").blur();
            if (this.state.searchKeyword.trim() === "") {
                await alert("검색할 내용을 입력하세요.", "확인");
                await document.getElementById("searchbox").focus();
            }else{
                this.goSearch();
            }
        }
    };
    onClickedIcon = async (e) => {
        if (this.state.searchKeyword.trim() === "") {
            await alert("검색할 내용을 입력하세요.", "확인");
            return;
        }
        this.goSearch();
    }
    handleKeyDown = async (e) => {
        if (e.keyCode === 13) {
            this.goSearch();
        }
        const target = e.target;
        const value = target.value;
        console.log(e.keyCode);
        // let regExp = /^[a-zA-Zㄱ-힣0-9"_-]*$/i;
        let regExp = /^[a-zA-Zㄱ-힣0-9"_-\s]*$/;
        if (!value.match(regExp)) {
            await alert("특수문자는 사용할 수 없습니다.", "확인");
            target.value = "";
            return;
        } else {
            this.setState({ searchKeyword: value });
        }
    }
    render() {
        return (
            <SearchContainer formSize={this.props.formWidth} visible={this.props.visible === 1 ? "block" : "none"} >
                <div className="shadow_button" onClick={this.onClickedIcon} />
                <input id="searchbox" type="text" placeholder={this.props.formWidth > 1200 ? "Search..." : ""} maxLength="100" onChange={this.handleKeyDown} onKeyDown={this.submitEnter} value={this.state.searchKeyword} />
            </SearchContainer>)
    }
}


export default SearchForm