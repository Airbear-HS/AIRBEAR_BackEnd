import styled from 'styled-components';

// 전체 레이아웃을 담당하는 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향으로 정렬
  min-height: 100vh; // 뷰포트의 전체 높이를 차지하도록 설정
`;

// 헤더 스타일
export const Header = styled.header`
  min-height: 30px; // 최소 높이 설정
  position: sticky; // 스크롤 시에도 상단에 고정
  top: 0; // 상단에 위치
  display: flex; // Flexbox 레이아웃 사용
  justify-content: space-between; // 양쪽 끝에 요소 배치
  padding: 0 10px; // 좌우 패딩 추가
  border-bottom: var(--border); // 하단 경계선 설정
  backdrop-filter: blur(5px); // 배경 블러 처리
`;

// 푸터 스타일
export const Footer = styled.footer`
  position: fixed; // 스크롤 시에도 하단에 고정
  bottom: 0; // 하단에 위치
  left: 0; // 왼쪽에 위치
  width: 100%; // 전체 너비 차지
`;

// 네비게이션 바 스타일
export const NavBar = styled.nav`
  display: flex; // Flexbox 레이아웃 사용

  & > div {
    display: flex; // Flexbox 레이아웃 사용
    align-items: center; // 수직 가운데 정렬
  }

  & > div:first-child {
    width: 100%; // 전체 너비 차지
    gap: 24px; // 아이템 사이에 간격 추가

    & > a:not(:first-child) {
      @media (max-width: 764px) {
        // 화면 너비가 764px 이하일 때
        display: none; // 숨김 처리
      }
    }
  }

  & > div:last-child {
    gap: 12px; // 아이템 사이에 간격 추가

    & > button:last-child {
      display: none; // 기본적으로 숨김 처리
      @media (max-width: 764px) {
        // 화면 너비가 764px 이하일 때
        display: inline-block; // 인라인 블록으로 표시
      }
    }
  }
`;

// 버튼 스타일
export const Button = styled.button`
  display: flex; // Flexbox 레이아웃 사용
  gap: 12px; // 아이템 사이에 간격 추가
`;

// 메인 컨텐츠 영역 스타일
export const Main = styled.main`
  width: 100%; // 전체 너비 차지
  height: auto; // 자동 높이 설정
  display: flex; // Flexbox 레이아웃 사용
  flex-direction: column; // 세로 방향으로 정렬

  flex: 1; // 나머지 공간을 모두 차지하도록 설정
  padding: 20px; // 내용과 경계 사이에 간격 추가
`;
