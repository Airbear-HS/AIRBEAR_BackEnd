import React from 'react';
import './Papago.css';
import { Routes, Route, Link } from 'react-router-dom';

import Cabin from './Cabin';
import Intern from './Intern';
function Papago() {
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
              <td>Air France</td>
              <td>~2/11</td>
              <td>
                <a href="https://wwws.airfrance.co.kr//">
                  [일반공채]에어프랑스 기내통역원 승무원 채용
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

export default Papago;
