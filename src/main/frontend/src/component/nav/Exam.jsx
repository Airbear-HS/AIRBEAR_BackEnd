import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Exam.css';

function Exam() {
  return (
    <div className="examdiary">
      <table className="examtable">
        <thead>
          <tr>
            <th>시험 분류</th>
            <th>인터넷 접수 일정</th>
            <th>시험 일자</th>
            <th>성적 발표일</th>
            <th>접수처(클릭)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="English">TOEIC</span>
            </td>
            <td>2024.04.29 ~ 2024.06.03</td>
            <td>2024.06.16 (일)</td>
            <td>2024.06.26 (수)</td>
            <td>
              <a href="https://exam.toeic.co.kr/">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="English">TOEIC</span>
            </td>
            <td>2024.05.13 ~ 2024.06.17</td>
            <td>2024.06.30 (일)</td>
            <td>2024.07.10 (수)</td>
            <td>
              <a href="https://exam.toeic.co.kr//">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="English">TOEIC</span>
            </td>
            <td>2024.05.27 ~ 2024.07.01</td>
            <td>2024.07.13 (토)</td>
            <td>2024.07.24 (수)</td>
            <td>
              <a href="https://exam.toeic.co.kr/">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="English">OPIc</span>
            </td>
            <td>2024.04.30 ~ 2024.05.30</td>
            <td>2024.06.01(토)</td>
            <td>2024.06.06 (목)</td>
            <td>
              <a href="https://www.opic.or.kr/opics/jsp/senior/index.jsp">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="English">OPIc</span>
            </td>
            <td>2024.05.01 ~ 2024.05.31</td>
            <td>2024.06.02 (일)</td>
            <td>2024.06.07 (금)</td>
            <td>
              <a href="https://www.opic.or.kr/opics/jsp/senior/index.jsp">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="English">OPIc</span>
            </td>
            <td>2024.05.02 ~ 2024.06.01</td>
            <td>2024.06.03(월)</td>
            <td>2024.06.08 (토)</td>
            <td>
              <a href="https://www.opic.or.kr/opics/jsp/senior/index.jsp">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="Chinese">HSK</span>
            </td>
            <td>2024.05.09 ~ 2024.06.12</td>
            <td>2024.06.22(토)</td>
            <td>2024.07.08 (월)</td>
            <td>
              <a href="https://new.hsk.or.kr/?c1=100&c2=002">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="Chinese">HSK</span>
            </td>
            <td>2024.06.07 ~ 2024.07.11</td>
            <td>2024.07.21 (일)</td>
            <td>2024.08.05 (월)</td>
            <td>
              <a href="https://new.hsk.or.kr/?c1=100&c2=002">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="Japanese">JPT</span>
            </td>
            <td>2024.05.13 ~ 2024.06.18</td>
            <td>2024.06.23 (일)</td>
            <td>2024.06.28 (금)</td>
            <td>
              <a href="https://www.jpt.co.kr/">🐻‍❄️</a>
            </td>
          </tr>

          <tr>
            <td>
              <span className="Japanese">JPT</span>
            </td>
            <td>2024.06.17 ~ 2024.07.16</td>
            <td>2024.07.21 (일)</td>
            <td>2024.07.26 (금)</td>
            <td>
              <a href="https://www.jpt.co.kr/">🐻‍❄️</a>
            </td>
          </tr>
        </tbody>{' '}
      </table>
    </div>
  );
}

export default Exam;
