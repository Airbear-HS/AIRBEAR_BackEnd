import React from 'react';
import './Neck.css';

function Neck() {
  return (
    <div className="back">
      <img
        alt="airplane"
        src="https://wallpapersmug.com/download/3840x2400/7c3c4d/buildings-facade-aeroplane.jpg"
        style={{
          width: 1300,
          height: 450,
          borderRadius: 50,
          objectFit: 'cover',
        }}
      />
      <br />
      <br />
      <br />
      <div className="text_1">
        AIRBEAR가 제공하는
        <br />
        쉽고 빠른 승무원 합격의 길
      </div>
      <div className="introduce">
        <p>
          실전 면접에서 나오지 않는 질문들로 소중한 시간을 버리실 건가요?
          <br />
          AIRBEAR는 가장 빠르고 쉬운 면접 도우미입니다.
          <br />
          <br />
          베어를 믿고 꾸준히 따라와 주세요.
          <br />
          <br />
          에어베어는 늘 당신을 응원합니다.
        </p>
      </div>
    </div>
  );
}

export default Neck;
