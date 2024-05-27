import React from 'react';
import './Bottom.css';
import FortuneCookie from '../tune/FortuneCookie';

function Bottom() {
  return (
    <div>
      <div className="mobile">
        <img
          src="https://i.pinimg.com/564x/a2/33/4f/a2334fb12182c4bf43ec80f522d73212.jpg"
          style={{
            width: 600,
            height: 500,
            borderRadius: 30,
            objectFit: 'cover',
          }}
          alt="Mobile"
        />

        <div className="mob">
          AIRBEAR
          <br />
          모바일 웹사이트
        </div>
        <div className="mob_2">
          언제 어디서나
          <br />
          에어베어와 함께
          <br />
          승무원의 꿈에
          <br />
          가까워지세요
        </div>

        <div className="rectangle">
          <FortuneCookie />
        </div>
      </div>
    </div>
  );
}

export default Bottom;
