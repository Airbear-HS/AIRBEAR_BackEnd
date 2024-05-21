import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Cabin from './Cabin';
import Papago from './Papago';
import Intern from './Intern';
import './Recruiting.css';

function Recruiting() {
  return (
      <div>
        <div className="recruiting-container">
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
            {/* Route 설정을 nav 바로 아래에 배치하여 선택된 링크에 따라 컨텐츠가 변경되도록 합니다. */}
            <Routes>
              <Route path="/cabin" element={<Cabin />} />
              <Route path="/papago" element={<Papago />} />
              <Route path="/intern" element={<Intern />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Recruiting;