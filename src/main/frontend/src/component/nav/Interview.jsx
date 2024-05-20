import React from 'react';
import './Interview.css'; // CSS 파일을 가져옴
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ questionIds, hashtags }) => {
  const navigate = useNavigate();

  const handleLinkClick = async (questionIds) => {
    try {
      const response = await fetch(`http://localhost:8080/interview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ questionIds })
      });
      const data = await response.json();
      localStorage.setItem('questions', JSON.stringify(data));
      navigate('/Interview_Real');
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
      <div className="card">
        {hashtags.map((tag, index) => (
            <div
                key={index}
                className="tag"
                onClick={() => handleLinkClick(tag.questionIds)}
            >
              {tag.content}
            </div>
        ))}
      </div>
  );
};

const Interview = () => {
  const data = [
    {
      hashtags: [
        { content: <p>Personal Background</p>,},
        { content: <span>#성격 및 개인적인 경험</span>, questionIds: [100, 101, 102, 103] },
        { content: <span>#가족과 친구</span>, questionIds: [200, 201, 202, 203] },
        { content: <span>#집과 동네</span>, questionIds: [300, 301, 302, 303] },
      ],
    },
    {
      hashtags: [
        { content: <p>School</p>,},
        { content: <span>#전공, 부전공</span>, questionIds: [500, 501, 502, 503] },
        { content: <span>#학교 , 캠퍼스</span>, questionIds: [400, 401, 402, 403] },
        { content: <span>#과목, 교수, 동문</span>, questionIds: [600, 601, 602, 603] },
        { content: <span>#동아리와 과외 활동</span>, questionIds: [700, 701, 702, 703] },
      ],
    },
    {
      hashtags: [
        { content: <p>Free Time</p>,},
        { content: <span>#여가 활동, 취미 및 관심사</span>, questionIds: [800, 801, 802, 803] },
        { content: <span>#스포츠 페이지 공부한 날</span>, questionIds: [900, 901, 902, 903] },
        { content: <span>#선호하는 것들</span>, questionIds: [1000, 1001, 1002, 1003] },
        { content: <span>#여행</span>, questionIds: [1100, 1101, 1102, 1103] },
      ],
    },
    {
      hashtags: [
        { content: <p>Opinions</p>,},
        { content: <span>#현황에 관한 의견</span>, questionIds: [1200, 1201, 1202, 1203] },
        { content: <span>#제시하는 방향</span>, questionIds: [1300, 1301, 1302, 1303] },
        { content: <span>#장단점, 비교</span>, questionIds: [1400, 1401, 1402, 1403] },
      ],
    },
    {
      hashtags: [
        { content: <p>Suitability</p>,},
        { content: <span>#조직과의 적합성</span>, questionIds: [1500, 1501, 1502, 1503] },
        { content: <span>#지원 동기</span>, questionIds: [1600, 1601, 1602, 1603] },
        { content: <span>#업무 경험</span>, questionIds: [1700, 1701, 1702, 1703] },
      ],
    },
    {
      hashtags: [
        { content: <p>Qualifications</p>,},
        { content: <span>#성취</span>, questionIds: [1800, 1801, 1802, 1803] },
        { content: <span>#교훈</span>, questionIds: [1900, 1901, 1902, 1903] },
        { content: <span>#문제 해결 능력</span>, questionIds: [2000, 2001, 2002, 2003] },
        { content: <span>#장단점</span>, questionIds: [2100, 2101, 2102, 2103] },
        { content: <span>#리더십</span>, questionIds: [2200, 2201, 2202, 2203] },
        { content: <span>#관점</span>, questionIds: [2300, 2301, 2302, 2303] },
        { content: <span>#계획과 포부</span>, questionIds: [2400, 2401, 2402, 2403] },
      ],
    },

    {
      hashtags: [
        { content: <p>Explaining & Asking Questions</p>,},
        { content: <span>#개념,사물 묘사하기</span>, questionIds: [2500, 2501, 2502, 2503] },
        { content: <span>#What 설명하기</span>, questionIds: [2600, 2601, 2602, 2603] },
        { content: <span>#Why 설명하기</span>, questionIds: [2700, 2701, 2702, 2703] },
        { content: <span>#가상의 질문</span>, questionIds: [2800, 2801, 2802, 2803] },
        { content: <span>#질문 확인하기</span>, questionIds: [2900, 2901, 2902, 2903] },
      ],
    },
    {
      hashtags: [
        { content: <p>Extra</p>,},
        { content: <span>#면접관에게 질문하기</span>, questionIds: [3000, 3001, 3002, 3003] },
      ],
    },
  ];

  return (
      <div className="container">
        {data.map((card, index) => (
            <Card key={index} questionIds={card.questionIds} hashtags={card.hashtags}/>
        ))}
      </div>
  );
};

export default Interview;