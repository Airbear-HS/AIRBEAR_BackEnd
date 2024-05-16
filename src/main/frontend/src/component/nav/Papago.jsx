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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
          >
            <g clip-path="url(#clip0_348_6)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M181.429 16.6142L196.743 21.8142C197.816 22.2454 198.714 23.0216 199.296 24.0202C199.878 25.0188 200.111 26.1829 199.957 27.3285L186.172 69.7285C185.271 72.2784 183.4 74.3694 180.965 75.5465C178.531 76.7237 175.73 76.8918 173.172 76.0142L134.129 63.3H131.529L135.5 82.4428C135.652 83.4003 135.556 84.3808 135.221 85.2906C134.886 86.2003 134.323 87.0091 133.587 87.6395C132.85 88.27 131.965 88.7011 131.014 88.8918C130.064 89.0824 129.08 89.0262 128.157 88.7285L110.086 82.9C109.201 82.6219 108.401 82.1253 107.76 81.4561C107.118 80.7869 106.655 79.9667 106.415 79.0714L98.9145 53.3571L94.9288 51.9714L54.9716 39.1142C53.5485 38.7544 52.2175 38.0977 51.0659 37.1872C49.9144 36.2768 48.9684 35.1332 48.2898 33.8315C47.6113 32.5297 47.2157 31.0993 47.1288 29.6339C47.042 28.1685 47.2659 26.7013 47.7859 25.3285C49.6709 20.0379 52.7019 15.2293 56.662 11.2466C60.622 7.26391 65.4133 4.20564 70.6931 2.29055C75.9729 0.375459 81.6107 -0.349112 87.2032 0.168668C92.7957 0.686449 98.2046 2.43378 103.043 5.28567L164.286 35.9L175.457 18.6C176.097 17.6594 177.027 16.9545 178.106 16.5932C179.184 16.232 180.352 16.2343 181.429 16.6V16.6142ZM0.143074 118.857C0.137221 105.052 3.66898 91.4765 10.4014 79.4247C17.1338 67.3729 26.8422 57.2474 38.6002 50.0142C41.8432 52.9318 45.7148 55.0631 49.9145 56.2428L65.9002 61.3857C57.9916 63.4614 50.5963 67.1468 44.1771 72.2113C37.7579 77.2758 32.4528 83.6105 28.5938 90.8191C24.7347 98.0276 22.4047 105.955 21.7495 114.105C21.0943 122.255 22.128 130.453 24.7859 138.186H49.1431C54.1443 138.186 58.9407 136.199 62.4771 132.663C66.0135 129.126 68.0002 124.33 68.0002 119.329V103.757C67.9159 101.228 68.3413 98.7085 69.2511 96.3476C70.1609 93.9867 71.5366 91.833 73.2961 90.0149C75.0556 88.1967 77.163 86.7512 79.4928 85.7645C81.8227 84.7778 84.3272 84.27 86.8574 84.2714C87.6859 84.2714 88.4859 84.2142 89.2859 84.1285C90.3527 87.8208 92.3135 91.193 94.9947 93.9465C97.6759 96.6999 100.995 98.7497 104.657 99.9142L122.629 105.7H122.657C125.793 106.716 129.106 107.063 132.384 106.716C135.661 106.369 138.829 105.337 141.682 103.687C144.535 102.037 147.01 99.8054 148.945 97.1374C150.88 94.4694 152.232 91.4244 152.915 88.2L156.243 89.2857C160.585 100.352 162.433 112.24 161.656 124.102C160.878 135.965 157.494 147.51 151.744 157.915C145.994 168.32 138.021 177.328 128.391 184.299C118.762 191.27 107.713 196.032 96.0331 198.244C84.353 200.457 72.3286 200.066 60.8167 197.101C49.3047 194.135 38.5885 188.666 29.4316 181.085C20.2747 173.504 12.9023 163.997 7.83987 153.241C2.77741 142.485 0.149396 130.745 0.143074 118.857ZM85.7859 178.086C94.9376 177.349 103.794 174.5 111.659 169.763C119.524 165.026 126.184 158.53 131.115 150.786L129.686 149.743C124.767 147.201 119.323 145.842 113.786 145.771H92.7716C89.0997 146.109 85.6314 147.61 82.8709 150.055C80.1105 152.5 78.2019 155.761 77.4228 159.365C76.6436 162.97 77.0345 166.728 78.5386 170.095C80.0427 173.462 82.5815 176.261 85.7859 178.086Z"
                fill="#00D8FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_348_6">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p>채용 일정</p>
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
              <th>항공사</th>
              <th>채용 일정</th>
              <th>내용 (클릭 시에 지원 사이트로 이동)</th>
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

export default Papago;
