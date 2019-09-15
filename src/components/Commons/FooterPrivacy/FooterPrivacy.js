import React, { Component } from "react";
import styled from "styled-components";
import { Header, Grid } from "semantic-ui-react";
import StyleGuide from "StyleGuide";

const FromFieldCard = styled.div`  
  border:3px solid #EFEFEF;  
  margin-left:0.7rem;
  margin-top: 2rem;
  margin-bottom: 5rem;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
  padding: 40px;
  & .para {
    font-size: ${StyleGuide.font.size.paragraph};
    color: ${StyleGuide.color.geyScale.scale7};
  }
`;

const FormHeader = styled(Header) `
  position: relative;
  padding-right: 2.5rem !important;
  &::after{
    position: absolute;
    display: block;
    right: 2rem;
    content: "";
    height: 20px;
    border-right: 3px solid #191919;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class FooterPrivacy extends Component {
  render() {
    return(
      <div style={{width:"83%"}}>
        <FromFieldCard>
          <Grid>
            <Grid.Column width={4}>
              <FormHeader as="h2">개인정보 보호정책</FormHeader>
            </Grid.Column>
            <Grid.Column width={12}>
              <div className="para">
                개인정보처리방침<br></br>

                <br></br>[차례]<br></br>
                제1조 총칙
                제2조 개인정보의 수집방법 및 항목
                제3조 개인정보의 수집 및 이용목적
                제4조 개인정보 수집, 이용, 제공에 대한 동의
                제5조 개인정보의 목적 외 이용 및 제3자 제공
                제6조 개인정보의 보유기간 및 파기
                제7조 이용자 및 법정대리인의 권리와 그 행사방법
                제8조 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항
                제9조 개인정보의 기술적/관리적 보호 대책
                제10조 개인정보관리책임자
                제11조 고지의 의무<br></br>

                <br></br>[현행] 2017년 1월 2일 시행안<br></br>

                제1조 (총칙)<br></br>
                (주)오픈디자인 (이하 "회사")는 회원의 개인정보보호를 소중하게 생각하고, 회원의 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고 있습니다.
                1. 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 모든 개인정보보호 관련 법률규정을 준수하고 있으며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용 자 권익 보호에 최선을 다하고 있습니다.
                2. 회사는 「개인정보처리방침」을 제정하여 이를 준수하고 있으며, 이를 인터넷사이트 및 모바일 어플리케이션에 공개하여 이용자가 언제나 용이하게 열람할 수 있도록 하고 있습니다.<br></br>

                제2조 (개인정보의 수집방법 및 항목)<br></br>
                회사는 회원가입, 원활한 상담, 각종 서비스의 제공 등을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.
                1. 회원가입 시점에서 수집하는 항목
                - 이메일 주소, 휴대폰 번호(혹은 대표번호) 및 비밀번호(단, 프로 회원의 경우 업체명(혹은 건축가명), 대표연락처, 사업자등록번호, 업체주소, 홈페이지주소, 대표자 정보 등 업체와 관련된 사항을 추가로 수집합니다)
                2. 서비스 이용과정에서 수집될 수 있는 개인정보의 범위
                - 서비스 이용과정에서 이용자가 입력한 정보 및 작성한 저작물
                - 신고기능을 이용하는 경우 휴대폰 번호
                3. 개인정보의 수집방법
                - 모바일 어플리케이션, 웹페이지, 서면양식, 팩스, 고객센터를 통한 전화와 온라인 상담, 이벤트 응모
                - 생성정보 수집 툴을 통한 수집
                <br></br>
                제3조 (개인정보의 수집 및 이용목적)<br></br>
                1. 서비스의 원활한 제공 및 운영
                2. 회원관리
                회원관리 회원제 서비스 이용에 따른 본인 확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달
                3) 마케팅 및 광고에의 활용 고객별 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 정기 간행물 발송, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계
                <br></br>
                제4조 (개인정보 수집, 이용, 제공에 대한 동의)<br></br>
                회사는 이용자가 최초 회원가입 시 또는 서비스 이용과 관련해 개인정보를 입력할 시 개인정보처리방침 및 이용약관 등의 내용에 대해 동의 여부를 체크할 수 있는 절차를 마련하여, 이를 체크하면 개인정보수집에 대해 동의한 것으로 취급합니다.
                <br></br>
                제5조 (개인정보의 목적 외 이용 및 제3자 제공)<br></br>
                1. 회사는 이용자의 개인정보를 “3. 개인정보의 수집 및 이용목적” 에서 고지한 범위 내에서 사용하며 동 범위를 초과하여 이용하거나 원칙적으로 제3자에게 제공하지 않습니다.
                2. 다만 다음의 경우에는 합당한 절차를 통한 회원의 동의를 얻어 개인정보를 제공 또는 이용할 수 있습니다.
                ① 제휴관계: 보다 나은 서비스 제공을 위하여 당사는 회원의 개인정보를 제휴사에 제공할 수 있습니다. 이 경우 사전에 회원에게 제휴사, 제공되는 개인정보의 항목, 개인정보 제공목적, 제공기간, 개인정보보호방안 등에 대해서 개별적으로 동의를 구하는 절차를 거치게 되며, 회원의 동의가 없는 경우에는 제휴사에게 이를 제공하지 않으며, 제휴관계의 변화 또는 종결될 경우에도 고지합니다. 또한 제휴관계가 종결될 경우 제공된 개인정보에 대해서는 회원님의 동의가 없는 경우 지체 없이 파기하도록 조치하며 개인정보 제공에 동의하더라도 언제든지 그 동의를 철회할 수 있습니다.
                ② 위탁처리: 원활한 업무처리와 회원에게 보다 나은 서비스 제공을 위하여 회원의 개인정보를 위탁하여 처리할 수 있으며, 이 경우 반드시 사전에 위탁처리 업체명과 목적, 위탁처리 되는 개인정보의 범위, 위탁기간 등에 대해 상세하게 고지합니다.
                <br></br>

                제6조 (개인정보의 보유기간 및 파기)<br></br>
                1. 회사가 회원의 개인정보를 수집하는 경우 그 보유기간은 원칙적으로 회원가입 후 약관 제10조에 의한 ‘계약기간 및 이용계약의 종료시’까지며, 이용계약 종료의 경우 회사는 회원의 개인정보를 즉시 파기하며 제3자에게 기 제공된 정보에 대해서도 지체 없이 파기하도록 조치합니다. (단, 재가입유예기간 동안의 재가입 방지 등을 위해 이용계약이 종료한 날로부터 2개월 경과 후에 파기하도록 합니다.)
                또한, 다음의 경우 각각 명시한 기간 동안 개인정보를 보유합니다.
                ① 상법 등 법령의 규정에 의하여 보존할 필요성이 있는 경우 법령에서 규정한 보존기간 동안 거래내역과 최소한의 기본정보를 보유
                ② 보유기간을 미리 공지하고 그 보유기간이 경과하지 아니한 경우와 개별적으로 회원의 동의를 받을 경우에는 약정한 기간 동안 보유
                <br></br>
                2. 회사는 고객의 개인정보를 보호하여 개인정보 유출로 인한 피해가 발생하지 않도록 하기 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.
                - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                - 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                3. 회원의 동의를 받아 보유하고 있는 개인정보에 대한 당해 회원의 열람요구가 있을 경우 회사는 지체 없이 이를 열람, 확인할 수 있도록 조치합니다.
                4. 정보통신망법에 의한 개인정보 보유
                회원이 1년간 서비스 이용기록이 없는 경우(2017년 01월 02일 이전 회원 가입한 자가 2017년 01월 02일 이전부터 서비스 이용기록이 없는 경우 2017년 01월 02일을 기산점으로 함), [정보통신망 이용촉진 및 정보보호 등에 관한 법률] 제 29조에 근거하여 회원에게 사전 통 지하고 별도로 분리하여 저장합니다. 단, 관계 법령의 규정에 의한 보존이 필요한 경우 관 계 법령에서 규정한 기간 동안 보관합니다.
                <br></br>
                제7조 (이용자 및 법정대리인의 권리와 그 행사방법)<br></br>
                1. 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 또는 대리자의 개인정보를 조회 하거나 수정할 수 있으며 가입 해지를 요청할 수도 있습니다.
                2. 이용자 혹은 대리인의 개인정보 조회, 수정을 위해서는 ‘내 정보’를, 가입 해지(동의철회)를 위해서는 고객센터를 통해 본인확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴 요청이 가능합니다.
                3. 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하여 개인정보의 조회, 수정 및 가입 해지 요청이 가능합니다.
                4. 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 통지합니다.
                5. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 6조 “개인정보의 보유기간 및 파기”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용 할 수 없도록 처리하고 있습니다.
                <br></br>
                제8조 (개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항)<br></br>
                1. 쿠키란?
                - 회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                - 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다. 이후 이용자가 웹 사이트에 방문할 경우 웹 사이트 서버는 이용자의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 맞춤화된 서비스를 제공하기 위해 이용됩니다.
                - 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 이용자는 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
                2. 회사의 쿠키 사용 목적
                - 이용자들이 방문한 오픈디자인의 각 서비스의 접속여부, 컨텐츠 열람여부, 컨설팅 의뢰, 문의하기 등에 사용합니다.
                3. 회사의 쿠키 사용 목적
                - 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
                - 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 오픈디자인 일부 서비스는 이용에 어려움이 있을 수 있습니다.
                <br></br>
                제9조 (개인정보의 기술적/관리적 보호 대책)<br></br>
                회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다. 단, 이용자 본인의 부주의나 인터넷 또는 통신상의 문제로 ID, 비밀번호 등 개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.
                1. 비밀번호 암호화 회원 아이디(ID)의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다.
                2. 해킹 등에 대비한 대책 회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호화통신등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.
                3. 취급 직원의 최소화 및 교육 회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 오픈디자인 개인정보처리방침의 준수를 항상 강조하고 있습니다.
                <br></br>
                제10조 (개인정보관리책임자)<br></br>
                1. 개인정보관리책임자는 고객의 개인정보를 보호하고 유출을 방지하는 책임자로서 이용자가 안심하고 회사가 제공하는 서비스를 이용할 수 있도록 도와드리며, 개인정보를 보호하는데 있어 이용자에게 고지한 사항들에 반하여 사고가 발생할 시에는 이에 관한 책임을 집니다.
                2. 기술적인 보완조치를 취하였음에도 불구하고 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 멸실, 이용자가 작성한 게시물에 의한 각종 분쟁 등에 관해서는 책임이 없습니다.
                3) 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률에서 규정한 관리책임자를 다음 과 같이 지정합니다.
                <br></br>
                [고객센터]<br></br>
                대표번호 : <br></br>
                E-mail : opensrcdesign@gmail.com
                <br></br>
                [개인정보관리 책임자]<br></br>
                성명 : 한광수<br></br>
                직위 : 실장<br></br>
                E-mail : kshahn@kookmin.ac.kr<br></br>
                전화번호 :
                <br></br>
                기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br></br>
                - 개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)<br></br>
                -대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)<br></br>
                - 경찰청 사이버안전국 (www.ctrc.go.kr / 국번없이 182)<br></br>

                제11조 (고지의 의무)<br></br>
                현 개인정보처리방침은 2017년 1월 2일에 제정되었으며, 정부 및 회사의 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 경우에는 개정 최소 7일 전부터 서비스의 ’공지사항’란을 통해 고지하며, 본 정책은 공지한 날로부터 시행됩니다.<br></br>
                가. 공고일자 : 2017년 01월 02일<br></br>
                나. 시행일자 : 2017년 01월 02일
              </div>
            </Grid.Column>
          </Grid>
        </FromFieldCard>
      </div>
    );
  }
}

export default FooterPrivacy;
