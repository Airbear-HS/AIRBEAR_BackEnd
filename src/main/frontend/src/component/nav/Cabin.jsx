import React from 'react';
import './Cabin.css';

import { Routes, Route, Link } from 'react-router-dom';

import Papago from './Papago';
import Intern from './Intern';

function Cabin() {
  return (
    <>
      <div className="cmon">
        <div className="newmember">
          <Link to={'/Recruiting'}></Link>
          <Link to={'/Recruiting'}>
            <p>✈️채용 일정</p>
          </Link>
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
              <td>Air Seoul</td>
              <td>상시 모집</td>
              <td>
                <a href="https://recruit.flyairseoul.com/">
                  2024 에어서울 객실승무원 신입 채용
                </a>
              </td>
            </tr>

            <tr>
              <td>Emirates Airline</td>
              <td>~3/23</td>
              <td>
                <a href="https://www.emiratesgroupcareers.com/">
                  2024 에미레이트 항공 객실승무원 채용공고
                </a>
              </td>
            </tr>

            <tr>
              <td>Cathay Pacific</td>
              <td>~3/31</td>
              <td>
                <a href="https://www.cathaypacific.com/cx/ko_KR.html?utm_medium=SEM&utm_source=GBL-NAVER&utm_campaign=20220615-WW-PURE_BRAND_NEA&utm_content=BRAND-DESKTOP-V1&dclid=CKrc0OSpjIYDFdKN6QUduU8ElQ">
                  2024 상반기 케세이퍼시픽 승무원 채용공고
                </a>
              </td>
            </tr>

            <tr>
              <td>Singapore Airlines</td>
              <td>~6/2</td>
              <td>
                <a href="https://www.singaporeair.com/ko_KR/kr/home#/book/bookflight">
                  2024 상반기 싱가폴 항공 채용공고
                </a>
              </td>
            </tr>

            <tr>
              <td>Jin Air</td>
              <td>~2/23</td>
              <td>
                <a href="https://jinair.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=170655">
                  2024년 상반기 진에어 객실승무원 신입 모집
                </a>
              </td>
            </tr>

            <tr>
              <td>t'way Airlines</td>
              <td>~2/29</td>
              <td>
                <a href="https://recruit.twayair.com/WiseRecruitWeb/">
                  2024년 상반기 티웨이항공 채용 공고
                </a>
              </td>
            </tr>

            <tr>
              <td>Jeju Airlines</td>
              <td>~2/14</td>
              <td>
                <a href="https://recruit.jejuair.net/">
                  2024년 상반기 제주항공 신입 객실승무원 채용
                </a>
              </td>
            </tr>

            <tr>
              <td>AeroK</td>
              <td>~1/14</td>
              <td>
                <a href="https://aerok.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=149631">
                  2024년 상반기 에어로케이 항공 신입 객실승무원 채용
                </a>
              </td>
            </tr>

            <tr>
              <td>Korean Airlines</td>
              <td>~12/4</td>
              <td>
                <a href="https://koreanair.recruiter.co.kr/app/jobnotice/view?systemKindCode=MRS2&jobnoticeSn=163240">
                  2024년 대한항공 신입 객실승무원 모집
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

export default Cabin;
