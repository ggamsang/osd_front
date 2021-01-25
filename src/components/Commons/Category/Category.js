import React, { Component } from 'react';
import styled from "styled-components";
// import StyleGuide from 'StyleGuide';
// import { geturl } from 'config';

const Container = styled.div`
  width:100%;
  font-family: Noto Sans KR;
  cursor: default;
  .over {
    display: flex;
    flex-direction: row;
    height:22px;
  }
  .under {
    margin-top: 5px;
    margin-bottom:35px;
    height:22px;
  }
`;
const CategoryItem =styled.div`
  cursor:pointer;
  &:hover{
    opacity:0.7;
  }
`
const CurrentCategory = styled.div`
  width: 180px;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  line-height: 29px;
`;
const CategoryMenu = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  flex-direction: row;
  font-size: 15px;
  text-align: left;
  font-weight: 300;
  .element {
    margin-right: 10px;
  }
  .active {
    font-weight:700;
  }
  &.fly {
  }
`;
class Category extends Component {
  onChangeCategory1 = async value => {
    if (value === 0) {
      value = null;
    }
    await this.props.handleCate1(value);
  }
  onChangeCategory2 = async (e, cate1, value) => {
    e.stopPropagation();
    console.log("onChangeCategory",cate1,value);
    await this.props.handleCate2(cate1, value);
  };
  resetCate = () => {
    this.props.resetCate();
  }

  render() {
    const { category1, cate1, cate2 } = this.props;
    const category2 = cate1 && this.props.category2 && this.props.category2.filter(item => item.parent === parseInt(cate1, 10));
    return (
      <Container>
        <div className="over">
          {/* <CurrentCategory onClick={this.resetCate}>{this.props.which}</CurrentCategory> */}
          <CategoryMenu>
            {category1.map((cate, i) => cate.value !== 0 &&
              <CategoryItem
                onClick={() => this.onChangeCategory1(cate.value)}
                key={i} className={`element ${cate.value === parseInt(cate1, 10) ? "active" : ""}`}>
                {cate.text}</CategoryItem>)}
          </CategoryMenu></div>
        <div className="under">
          <CategoryMenu className="fly">
            {cate1 && category2 ? (
              category2.map((cate, i) => cate.value !== 0 &&
                <CategoryItem
                  onClick={(e) => this.onChangeCategory2(e, cate.parent, cate.value)}
                  key={i} className={`element ${cate.value === parseInt(cate2, 10) ? "active" : ""}`}>{cate.text}</CategoryItem>)) : null}
          </CategoryMenu>
        </div>
      </Container>
      // <CateColumn className="category"
      //   widescreen={this.props.widescreen ? this.props.widescreen : null}
      //   largeScreen={this.props.largeScreen ? this.props.largeScreen : null}
      //   computer={this.props.computer ? this.props.computer : null}
      //   tablet={this.props.tablet ? this.props.tablet : null}
      //   mobile={this.props.mobile ? this.props.mobile : null}>
      //   <ul className="cateUl">
      //     {this.props.category1.map((cate, i) => (
      //       cate.value !== 0 &&
      //       <CateItem key={i}
      //         className={cate.value === this.props.cate1 ||
      //           (cate.value === 0 && this.props.cate1 === null) ||
      //           (cate.value === 0 && this.props.cate1 === "null")
      //           ? "active" : ""}
      //         {cate.text}
      //         <Cate2List parentNum={i} />
      //       </CateItem>
      //     ))}
      //   </ul>
      // </CateColumn>
    );
  }
}

export default Category;
