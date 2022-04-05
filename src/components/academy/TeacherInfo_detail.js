import React from "react";
import { Link } from "react-router-dom";
import Menu_title from "./Menu_title";
import "./TeacherInfo_detail.css";

export default function TeacherInfo_detail({ name, edu, src, expertise }) {
  function href(e) {
    window.open("https://youtu.be/w-HAjo8PhVo"); //새탭으로 열기
  }

  const moveUrl = (value) => {
    window.location.href = value;
  };

  return (
    <div className="t_infoContainer">
      <div className="t_img-box">
        <a href="#" target="_blank">
          <img src={src} alt="강사이미지" className="t_img" />
        </a>
        <h2 className="t_name">{name}</h2>
        <button className="t_btn" onClick={href}>
          강사인터뷰
        </button>
      </div>
      <div className="t_content-box">
        <div className="t_titleInfo">
          <div className="t_historyBox">
            <h3>학력 및 경력</h3>
            <p className="t_history">{edu.one}</p>
            <p className="t_history">{edu.two}</p>
            <p className="t_history">{edu.three}</p>
          </div>
          <p className="t_expertise">
            강의분야 : <span>{expertise}</span>
          </p>
        </div>
        <div className="t_lectureBox">
          <h3>대표강의</h3>
          <select
            name="lectureList"
            id="lectureList"
            onChange={(e) => moveUrl(e.target.value)}
          >
            <option selected disabled="disabled">
              --------------- 일정선택 ---------------
            </option>
            <option value="/programDetail">HTML</option>
            <option value="/programDetail">CSS</option>
            <option value="/programDetail">javascript</option>
            <option value="/programDetail">react</option>
          </select>
        </div>
      </div>
    </div>
  );
}
