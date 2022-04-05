import Menu_title from "./Menu_title";
import "./TeacherInfo.css";
import TeacherInfo_detail from "./TeacherInfo_detail";

export default function TeacherInfo() {
  const info = [
    {
      name: "강재성 소장",
      src: "http://www.excacademy.co.kr/images/instructor_img/kang.jpg",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
    {
      name: "김미주 책임강사",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EC%BA%A1%EC%B2%98_1.PNG",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
    {
      name: "문제연 강사",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EC%BA%A1%EC%B2%98.JPG",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
    {
      name: "한주미 책임강사",
      src: "http://www.excacademy.co.kr/images/instructor_img/%ED%95%9C%EC%A3%BC%EB%AF%B8-%EA%B0%95%EC%82%AC%EC%86%8C%EA%B0%9C.jpg",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
    {
      name: "박민우 소장",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EB%B0%95%EB%AF%BC%EC%9A%B0-%EA%B0%95%EC%82%AC%EC%86%8C%EA%B0%9C.jpg",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
    {
      name: "배요한 강사",
      src: "http://www.excacademy.co.kr/images/instructor_img/%EB%B0%B0%EC%9A%94%ED%95%9C%20(2).PNG",
      edu: {
        one: "한양 대학교 대학원 박사과정(산업 교육) 수료",
        two: "LG 경영 개발원 인화원 팀장(경영, 진단, 임원)",
        three: " 엑스퍼트컨설팅 책임 컨설턴트",
      },
      expertise: "직무/업무성과 영역",
    },
  ];

  const namelist = info.map((data, idx) => (
    <TeacherInfo_detail
      key={idx}
      name={data.name}
      edu={data.edu}
      src={data.src}
      expertise={data.expertise}
    />
  ));

  return (
    <div className="teacherinfo-content">
      <div className="t_bigTitle">
        <div className="inner-box">
          <h3 className="t_h3">
            <b>강사소개</b>
          </h3>
          <span className="t_span">
            __교육에 필요한 옵션 및 상품정보를 제공합니다.
          </span>
        </div>
      </div>
      <div className="inner-box">
        <ul class="cont-navi">
          <li>
            <a href="#none" class="nav-home">
              HOME
            </a>
          </li>
          <li>
            <span class="nav-sub">아카데미</span>
          </li>
          <li>
            <span class="nav-sub">강사소개</span>
          </li>
        </ul>
        <ul className="teacher-list">{namelist}</ul>
        <div className="bottomBoxBanner">
          <img src="/images/academy/배너배너.png" alt="#" />
        </div>
      </div>
    </div>
  );
}
