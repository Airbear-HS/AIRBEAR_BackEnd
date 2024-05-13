import React from 'react';
import { Link } from 'react-router-dom';
import './Butt.css';
import Uniform from './Uniform';
import Advice from './Advice';
import Health from './Health';

function Butt() {
  return (
    <>
      <Link to="/Uniform">
        <div className="tips_1">
          <div className="first_tip">
            <div className="first_tip_text">
              <div>퍼스널 컬러 별 유니폼</div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/Advice">
        <div className="tips_2">
          <div className="second_tip">
            <div className="first_tip_text">
              <div>전/현직 승무원의 조언</div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/Health">
        <div className="tips_3">
          <div className="third_tip">
            <div className="first_tip_text">
              <div>피가되고 살이되는 스트레칭</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Butt;
