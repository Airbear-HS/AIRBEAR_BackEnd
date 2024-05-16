import React, { useState } from 'react';
import styled from 'styled-components';

const fortunes = [
  '오늘은 대한항공에 도전해보세요!',
  '오늘은 영어 단어 50개를 외워볼까요?',
  '취업만큼 건강도 중요합니다.',
  '당신은 할 수 있어요!',
  '행운을 빕니다!',
];

const getRandomFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};

const FortuneCookie = () => {
  const [fortune, setFortune] = useState('');

  const crackCookie = () => {
    const randomFortune = getRandomFortune();
    setFortune(randomFortune);
  };

  return (
    <Section>
      <Container>
        <h2>포춘 쿠키</h2>
        {fortune ? <p>{fortune}</p> : <p>쿠키를 깨보세요!🥠</p>}
        <button onClick={crackCookie}>쿠키 깨기</button>
      </Container>
    </Section>
  );
};

export default FortuneCookie;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: var(--border);

  & > div {
    max-width: 1264px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  & > div > div {
    padding: 100px 100px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    font-size: 18px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;
