import React, { useState } from 'react'; // React와 useState 훅을 가져옵니다.
import styled from 'styled-components'; // styled-components 라이브러리를 가져옵니다.

const faces = [
  // 다양한 캐릭터 얼굴을 배열로 정의합니다.
  '🐻‍❄️',
  '🐻',
  '🧸',
  '🐼',
  '🪼',
  '🦦',
  '🐶',
  '🐱',
  '🦁',
  '🐈‍⬛',
  '🐿️',
  '🦌',
  '🦕',
  '🐒',
  '🐯',
  '🐄 ྀི',
  '🐹',
  '🐳',
  '🐣',
  '🐟',
  '🐙',
  '🐬',
  '🦙',
  '🐢',
  '🐕',
  '🐞',
  '🦩',
  '🐌',
  '🐘',
  '🦄',
  '🦀',
  '🐀',
];

const getRandomFace = () => {
  // 배열에서 무작위 얼굴을 반환하는 함수입니다.
  const randomIndex = Math.floor(Math.random() * faces.length); // 무작위 인덱스를 생성합니다.
  return faces[randomIndex]; // 무작위 인덱스에 해당하는 얼굴을 반환합니다.
};

const Facebear = () => {
  // 얼굴 맞추기 게임 컴포넌트를 정의합니다.
  const [selectedFace, setSelectedFace] = useState(''); // selectedFace 상태와 이를 업데이트하는 setSelectedFace 함수를 useState 훅으로 정의합니다.
  const [targetFace, setTargetFace] = useState(getRandomFace); // 목표 얼굴 상태와 이를 업데이트하는 setTargetFace 함수를 useState 훅으로 정의합니다.
  const [result, setResult] = useState(''); // 결과 상태와 이를 업데이트하는 setResult 함수를 useState 훅으로 정의합니다.

  const checkMatch = (face) => {
    // 선택한 얼굴과 목표 얼굴이 일치하는지 확인하는 함수입니다.
    if (face === targetFace) {
      setResult('찾았어요! 🐻‍❄️'); // 일치하면 성공 메시지를 설정합니다.
    } else {
      setResult('힝ㅠㅠ 🐻‍❄️'); // 일치하지 않으면 실패 메시지를 설정합니다.
    }
  };

  const resetGame = () => {
    // 게임을 초기화하는 함수입니다.
    setTargetFace(getRandomFace()); // 새로운 목표 얼굴을 설정합니다.
    setSelectedFace(''); // 선택한 얼굴을 초기화합니다.
    setResult(''); // 결과 메시지를 초기화합니다.
  };

  return (
      // 컴포넌트의 JSX를 반환합니다.
      <Section>
        <Container>
          <Title>베어와 친구들을 찾아보세요!</Title>
          <TargetFace>목표 친구 : {targetFace}</TargetFace>{' '}
          {/* 목표 얼굴을 표시합니다. */}
          <FacesContainer>
            {faces.map((face, index) => (
                <FaceButton
                    key={index}
                    onClick={() => {
                      setSelectedFace(face); // 선택한 얼굴을 설정합니다.
                      checkMatch(face); // 선택한 얼굴이 목표 얼굴과 일치하는지 확인합니다.
                    }}
                    selected={face === selectedFace}
                >
                  {face}
                </FaceButton>
            ))}
          </FacesContainer>
          {result && <Result>{result}</Result>} {/* 결과 메시지를 표시합니다. */}
          <Button onClick={resetGame}>다시 시작</Button>{' '}
          {/* 게임을 초기화하는 버튼입니다. */}
        </Container>
      </Section>
  );
};

export default Facebear; // FaceMatchingGame 컴포넌트를 기본으로 내보냅니다.

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffff;
`;

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 20px;
  border: 2px solid #00d8ff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #ffffff;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const TargetFace = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ff4500;
`;

const FacesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const FaceButton = styled.button`
  padding: 10px;
  font-size: 24px;
  background-color: ${(props) => (props.selected ? '#00d8ff' : '#ffffff')};
  border: 2px solid #00d8ff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00bfff;
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #555;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #00d8ff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;