import React from 'react';
import './Intern.css';
import { Routes, Route, Link } from 'react-router-dom';

import Cabin from './Cabin';
import Papago from './Papago';

function Intern() {
  return (
    <>
      <div className="cmon">
        <div className="newmember">
          <p>✈️채용 일정</p>
        </div>
      </div>
      <div className="recruit_posting">
        <nav className="recruit_nav">
          <ul className="recruit_nav-links">
            <li>
              <Link to="/cabin">캐빈 승무원</Link>
            </li>
            <li>
              <Link to="/papago">기내 통역원</Link>
            </li>
            <li>
              <Link to="/intern">인턴 승무원</Link>
            </li>
          </ul>
        </nav>
        <table className="recruitment-table">
          <thead>
            <tr>
              <th>✈️항공사</th>
              <th>📆채용 일정</th>
              <th>➡️(클릭 시에 지원 사이트로 이동)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Korean Airlines</td>
              <td>~12/4</td>
              <td>
                <a href="https://koreanair.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=163240">
                  대한항공 2024년 신입 인턴 객실승무원 모집
                </a>
              </td>
            </tr>

            <tr>
              <td>Korean Airlines</td>
              <td>~6/23</td>
              <td>
                <a href="https://koreanair.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=163240">
                  대한항공 2023년 하반기 신입 인턴 객실승무원 모집
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Routes>
        <Route path="/cabin" element={<Cabin />} />
        <Route path="/papago" element={<Papago />} />
        <Route path="/intern" element={<Intern />} />
      </Routes>
    </>
  );
}

export default Intern;
