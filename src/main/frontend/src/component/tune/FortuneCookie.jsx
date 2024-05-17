import React, { useState } from 'react'; // React와 useState 훅을 가져옵니다.
import styled from 'styled-components'; // styled-components 라이브러리를 가져옵니다.

const fortunes = [
  // 포춘 쿠키 메시지를 배열로 정의합니다.
  '너의 꿈을 향해 힘차게 나아가길 바랄게!',
  '모든 비행은 첫 발걸음에서 시작돼, 힘내!',
  '포기하지 않으면 꼭 이룰 수 있어.',
  '너라면 분명 최고의 승무원이 될 수 있어.',
  '언제나 긍정적인 마인드로 도전해!',
  '어려운 순간도 너의 성장의 밑거름이 될 거야.',
  '작은 성공도 소중히 여겨, 그것들이 모여 큰 성과가 될 거야.',
  '열심히 준비한 만큼 좋은 결과가 있을 거야.',
  '너의 열정은 반드시 빛을 발할 거야.',
  '도전하는 너의 모습이 정말 멋져!',
  '항상 웃음을 잃지 말고 밝게 지내!',
  '힘들 땐 잠시 쉬어가도 괜찮아.',
  '네가 가진 능력을 믿어!',
  '매일 조금씩 성장하는 너를 응원해.',
  '너의 꿈을 응원하는 사람들이 항상 곁에 있어.',
  '긍정적인 마음가짐이 너를 더 강하게 만들어줄 거야.',
  '하늘을 나는 너의 모습을 상상하며 힘내!',
  '모든 준비는 결국 너를 성공으로 이끌 거야.',
  '네가 원하는 것을 이룰 수 있다고 믿어.',
  '네 열정은 그 누구도 막을 수 없을 거야.',
  '항상 최선을 다하는 너의 모습이 정말 자랑스러워.',
  '네가 가는 길에 항상 행운이 함께하길!',
  '노력은 절대 배신하지 않아.',
  '너의 꿈을 향한 열정이 언제나 너를 빛나게 할 거야.',
  '자신감을 가지고 도전해!',
  '어려운 순간이 오더라도 절대 포기하지 마.',
  '너의 목표를 잊지 말고 끝까지 나아가길 바랄게.',
  '항상 자신을 믿고 나아가!',
  '네가 이루고 싶은 모든 것을 이룰 수 있을 거야.',
  '하루하루를 소중히 여기며 준비해.',
  '넌 이미 반 이상 왔어, 조금만 더 힘내!',
  '언제나 긍정적인 에너지를 유지해.',
  '네가 가진 잠재력을 모두 발휘해봐.',
  '꾸준히 노력하면 언젠가 꿈은 현실이 될 거야.',
  '너의 꿈을 이루기 위해 항상 응원할게.',
  '스스로를 믿고 당당하게 나아가!',
  '작은 실수도 배움의 기회로 삼아.',
  '네가 하는 모든 노력은 결코 헛되지 않아.',
  '목표를 향해 흔들림 없이 나아가길 바랄게.',
  '너의 열정과 노력이 멋져!',
  '언제나 응원할게, 힘내!',
  '꿈을 향해 달려가는 너의 모습이 정말 아름다워.',
  '너의 끈기와 열정이 결국 큰 성과를 이끌어낼 거야.',
  '네가 하고 싶은 일을 할 수 있는 용기를 가져!',
  '승무원이 되기 위한 너의 모든 노력이 빛을 발할 거야.',
  '언제나 꿈을 잃지 말고 도전해!',
  '너의 노력은 결국 보답받을 거야.',
  '최고의 승무원이 되기를 응원할게!',
];

const getRandomFortune = () => {
  // 배열에서 무작위 메시지를 반환하는 함수입니다.
  const randomIndex = Math.floor(Math.random() * fortunes.length); // 무작위 인덱스를 생성합니다.
  return fortunes[randomIndex]; // 무작위 인덱스에 해당하는 메시지를 반환합니다.
};

const FortuneCookie = () => {
  // 포춘 쿠키 컴포넌트를 정의합니다.
  const [fortune, setFortune] = useState(''); // fortune 상태와 이를 업데이트하는 setFortune 함수를 useState 훅으로 정의합니다.

  const crackCookie = () => {
    // 쿠키를 깨는 버튼이 클릭될 때 호출되는 함수입니다.
    const randomFortune = getRandomFortune(); // 무작위 포춘 메시지를 가져옵니다.
    setFortune(randomFortune); // fortune 상태를 무작위 메시지로 업데이트합니다.
  };

  return (
    // 컴포넌트의 JSX를 반환합니다.
    <Section>
      {' '}
      {/* 전체 화면을 중앙에 정렬하는 섹션입니다. */}
      <Container>
        {' '}
        {/* 내용이 들어가는 중앙 컨테이너입니다. */}
        <Title>🐻‍❄️에어베어가 응원하곰🐻‍❄️</Title> {/* 포춘 쿠키 타이틀입니다. */}
        {fortune ? ( // fortune 상태가 비어 있지 않으면 무작위 메시지를 표시합니다.
          <FortuneText>{fortune}</FortuneText>
        ) : (
          // fortune 상태가 비어 있으면 쿠키를 깨보라는 메시지를 표시합니다.
          <FortuneText>🐻‍❄️</FortuneText>
        )}
        <Button onClick={crackCookie}>눌러보라곰🐻‍❄️</Button>{' '}
        {/* 클릭 시 crackCookie 함수가 호출되는 버튼입니다. */}
      </Container>
    </Section>
  );
};

export default FortuneCookie; // FortuneCookie 컴포넌트를 기본으로 내보냅니다.

const Section = styled.section`
  // Section 컴포넌트를 스타일링합니다.
  width: 100%; // 섹션의 너비를 100%로 설정합니다.
  height: 100vh; // 섹션의 높이를 100vh로 설정합니다.
  display: flex; // 플렉스박스를 사용하여 내용 정렬을 설정합니다.
  justify-content: center; // 가로축 중앙 정렬합니다.
  align-items: center; // 세로축 중앙 정렬합니다.
  background-color: #fffff; // 배경색을 연한 회색으로 설정합니다.
`;

const Container = styled.div`
  // Container 컴포넌트를 스타일링합니다.
  width: 90%; // 컨테이너의 너비를 90%로 설정합니다.
  max-width: 600px; // 최대 너비를 600px로 설정합니다.
  padding: 20px; // 내부 여백을 20px로 설정합니다.
  border: 2px solid #00d8ff; // 테두리를 연한 회색으로 설정합니다.
  border-radius: 10px; // 모서리를 둥글게 설정합니다.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 그림자를 추가하여 입체감을 줍니다.
  text-align: center; // 텍스트를 중앙 정렬합니다.
  background-color: #fffff; // 배경색을 흰색으로 설정합니다.
`;

const Title = styled.h2`
  // Title 컴포넌트를 스타일링합니다.
  margin-bottom: 20px; // 아래쪽 여백을 20px로 설정합니다.
  font-size: 24px; // 폰트 크기를 24px로 설정합니다.
  color: #333; // 글자 색상을 어두운 회색으로 설정합니다.
`;

const FortuneText = styled.p`
  // FortuneText 컴포넌트를 스타일링합니다.
  margin-bottom: 20px; // 아래쪽 여백을 20px로 설정합니다.
  font-size: 18px; // 폰트 크기를 18px로 설정합니다.
  color: #555; // 글자 색상을 중간 회색으로 설정합니다.
`;

const Button = styled.button`
  // Button 컴포넌트를 스타일링합니다.
  padding: 10px 20px; // 내부 여백을 상하 10px, 좌우 20px로 설정합니다.
  font-size: 16px; // 폰트 크기를 16px로 설정합니다.
  color: #fff; // 글자 색상을 흰색으로 설정합니다.
  background-color: #00d8ff; // 배경색을 파란색으로 설정합니다.
  border: none; // 테두리를 제거합니다.
  border-radius: 20px; // 모서리를 둥글게 설정합니다.
  cursor: pointer; // 커서를 포인터로 변경합니다.
  transition: background-color 0.3s ease; // 배경색 변화에 트랜지션을 추가합니다.

  &:hover {
    // 버튼에 마우스를 올렸을 때의 스타일을 정의합니다.
    background-color: #0056b3; // 배경색을 어두운 파란색으로 변경합니다.
  }
`;
