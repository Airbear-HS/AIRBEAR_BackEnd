import React from 'react';
import './Service.css';

function Service() {
  return (
    <div className="servicebody">
      <div className="mountain_container">
        <div className="mountain">
          <p>
            학원에 등록하기엔 <span class="highlight">금액</span>이 부담되고{' '}
            <span class="highlight">시간</span>도 없지만 승무원에{' '}
            <span class="highlight">도전</span>해보고 싶은 사람
          </p>

          <img
            src="https://i.pinimg.com/564x/37/db/23/37db234afec6b51d2a638ee72c9dacdd.jpg"
            alt="success"
          ></img>
        </div>
      </div>
      <div className="community_container">
        <div className="community">
          <p>
            <span class="highlight">면접 답변을 공유</span>하고,{' '}
            <span class="highlight">피드백</span>을 주고받을 수 있는 커뮤니티
            공간
          </p>
          <img
            src="https://i.pinimg.com/564x/98/af/d3/98afd311deed7e32e46be5ce84c44c57.jpg"
            alt="feedback"
          ></img>
        </div>
      </div>
      <div className="pencil_container">
        <div className="pencil">
          <p>
            면접, 시험 일정을 기록할 수 있는{' '}
            <span class="highlight">My page</span>
          </p>
          <img
            src="https://i.pinimg.com/564x/cc/09/62/cc0962abbace5c338a92681befdd3eef.jpg"
            alt="mmmmmmmmypage"
          ></img>
        </div>
      </div>
      <div className="idea_container">
        <div className="idea">
          <p>
            승무원 기초 지식, 각종 자격증과 시험 일정, 항공사별{' '}
            <span class="highlight">자료 제공</span>
          </p>
          <img
            src="https://i.pinimg.com/564x/20/16/6c/20166c9c996f4e9771b6c414d37e2eb0.jpg"
            alt="whysame"
          ></img>{' '}
        </div>
      </div>
    </div>
  );
}

export default Service;
