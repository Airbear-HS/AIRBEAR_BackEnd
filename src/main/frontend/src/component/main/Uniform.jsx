import React from 'react';
import './Uniform.css';

function Uniform() {
  return (
    <>
      <div className="Uniform_title">퍼스널 컬러 별 유니폼</div>
      <div className="spring_warm_container">
        <div className="spring_warm">집에</div>
      </div>

      <div className="summer_cool_container">
        <div className="summer_cool">존나게</div>
      </div>

      <div className="fall_warm_container">
        <div className="fall_warm">가고싶다</div>
      </div>

      <div className="winter_cool_container">
        <div className="winter_cool">시벌</div>
      </div>
    </>
  );
}

export default Uniform;
