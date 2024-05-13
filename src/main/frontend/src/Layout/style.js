import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // 뷰포트의 전체 높이를 차지하도록 설정
`;

export const Header = styled.header`
  min-height: 30px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: var(--border);
  backdrop-filter: blur(5px);
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    width: 100%;
    gap: 24px;

    & > a:not(:first-child) {
      @media (max-width: 764px) {
        display: none;
      }
    }
  }

  & > div:last-child {
    gap: 12px;

    & > button:last-child {
      display: none;
      @media (max-width: 764px) {
        display: inline-block;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  flex: 1; // 나머지 공간을 모두 차지하도록 설정
  padding: 20px; // 내용과 경계 사이에 간격 추가
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  margin: 12px 24px;
  gap: 6px;

  @media (max-width: 764px) {
    display: flex;
  }
`;
