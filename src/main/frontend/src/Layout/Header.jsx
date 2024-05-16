import React, {useEffect} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 변수와 setIsLoggedIn 상태 설정 함수 정의

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 로컬 스토리지에서 userId 삭제
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    window.location.reload();
    window.location.href = '/';
  };

  return (
    <header>
      <div className="top-bar">
        {isLoggedIn ? (
          // 로그인 후의 상단 바
          <>
            <Link to="/Advice" className="mypage-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M16.953 10.9375C16.8467 10.9375 16.7428 10.9684 16.6538 11.0264C16.5649 11.0845 16.4948 11.1673 16.452 11.2645C16.3941 11.3969 16.463 11.5423 16.5658 11.6441L17.1127 12.1909C17.1635 12.2419 17.2238 12.2823 17.2903 12.3098C17.3567 12.3374 17.4279 12.3516 17.4999 12.3516C17.5718 12.3516 17.643 12.3374 17.7095 12.3098C17.7759 12.2823 17.8362 12.2419 17.887 12.1909L18.4339 11.6441C18.5356 11.5423 18.6056 11.3969 18.5477 11.2645C18.505 11.1673 18.4348 11.0845 18.3459 11.0264C18.2569 10.9684 18.153 10.9375 18.0467 10.9375H16.953Z"
                  fill="#00D8FF"
                />
                <path
                  d="M9.84369 4.99844C9.84369 5.5836 10.0274 6.1261 10.3403 6.57125C9.37009 7.84657 8.74994 9.38875 8.74994 11.1038C8.74994 13.5275 9.73541 15.1484 11.3279 16.1623L3.93525 20.4302C3.19928 20.8543 2.65649 21.5474 2.42104 22.3636C2.1856 23.1797 2.27585 24.0554 2.67281 24.8064C3.06977 25.5574 3.74251 26.1252 4.54952 26.3903C5.35653 26.6555 6.23492 26.5973 6.99994 26.2281C6.74396 26.8411 6.65201 27.5102 6.73313 28.1696C6.81426 28.8289 7.06566 29.4558 7.46259 29.9884L8.4415 31.3042C8.79799 31.7836 9.26171 32.1729 9.79558 32.4409C10.3295 32.709 10.9187 32.8484 11.516 32.8479C12.1134 32.8475 12.7024 32.7073 13.2359 32.4385C13.7694 32.1697 14.2326 31.7797 14.5884 31.2999C15.5237 31.6291 16.5083 31.7966 17.4999 31.7953C18.5248 31.7953 19.5081 31.6203 20.4213 31.2955C20.7768 31.776 21.2398 32.1667 21.7733 32.4361C22.3068 32.7056 22.896 32.8464 23.4937 32.8472C24.0914 32.8481 24.681 32.709 25.2152 32.441C25.7495 32.1731 26.2136 31.7838 26.5704 31.3042L27.5504 29.9884C27.9482 29.4546 28.1998 28.8263 28.2803 28.1654C28.3609 27.5046 28.2676 26.8342 28.0098 26.2205C28.767 26.602 29.6425 26.6756 30.4528 26.4258C31.2631 26.176 31.9452 25.6222 32.3562 24.8806C32.7672 24.1389 32.8751 23.267 32.6574 22.4475C32.4397 21.628 31.9131 20.9247 31.1882 20.4848L23.8787 16.0245C25.3487 15.0063 26.2499 13.4214 26.2499 11.1038C26.2499 9.38875 25.6298 7.84657 24.6596 6.57125C25.0762 5.98584 25.2456 5.26001 25.1312 4.5507C25.0168 3.84138 24.6278 3.20559 24.0484 2.78078C23.469 2.35597 22.7456 2.17629 22.0347 2.28059C21.3239 2.38489 20.6826 2.76478 20.2496 3.33813C19.3243 2.99579 18.3826 2.81094 17.4999 2.81094C16.6173 2.81094 15.6756 2.99579 14.7502 3.33813C14.403 2.88398 13.9222 2.55009 13.3753 2.38341C12.8285 2.21672 12.2431 2.22563 11.7016 2.40887C11.1601 2.59212 10.6896 2.94048 10.3564 3.40498C10.0231 3.86948 9.8438 4.42676 9.84369 4.99844ZM12.5781 3.35782C13.0112 3.35782 13.4049 3.52625 13.6981 3.79969C12.7342 4.28991 11.8553 4.93173 11.0949 5.70063C10.9765 5.45054 10.9232 5.17455 10.9401 4.89835C10.957 4.62215 11.0435 4.35471 11.1915 4.1209C11.3395 3.88709 11.5442 3.69452 11.7867 3.56111C12.0291 3.42769 12.3013 3.35776 12.5781 3.35782ZM22.9687 24.185C22.349 24.4503 21.8108 24.8753 21.409 25.4166L20.429 26.7323C19.9072 27.4312 19.6408 28.2879 19.6743 29.1594C19.0071 29.4481 18.2721 29.6078 17.4999 29.6078C16.7321 29.6078 16.0015 29.4503 15.3387 29.1649C15.3734 28.2915 15.1069 27.4327 14.584 26.7323L13.604 25.4166C13.1993 24.8714 12.6563 24.4444 12.0312 24.1795V24.1391C12.0312 22.6887 12.6074 21.2977 13.6329 20.2721C14.6585 19.2465 16.0495 18.6703 17.4999 18.6703C18.9503 18.6703 20.3413 19.2465 21.3669 20.2721C22.3925 21.2977 22.9687 22.6887 22.9687 24.1391V24.185ZM24.0624 4.99844C24.0624 5.25001 24.0056 5.48844 23.9049 5.70063C23.1446 4.93173 22.2657 4.28991 21.3018 3.79969C21.5354 3.58142 21.8278 3.43618 22.1428 3.38181C22.4579 3.32745 22.782 3.36633 23.0753 3.49367C23.3685 3.62102 23.6182 3.83129 23.7936 4.09862C23.969 4.36596 24.0624 4.67871 24.0624 4.99844ZM14.7656 9.84375C14.6205 9.84375 14.4814 9.78614 14.3789 9.68358C14.2763 9.58102 14.2187 9.44192 14.2187 9.29688C14.2187 9.15184 14.2763 9.01274 14.3789 8.91018C14.4814 8.80762 14.6205 8.75 14.7656 8.75C14.9106 8.75 15.0497 8.80762 15.1523 8.91018C15.2548 9.01274 15.3124 9.15184 15.3124 9.29688C15.3124 9.44192 15.2548 9.58102 15.1523 9.68358C15.0497 9.78614 14.9106 9.84375 14.7656 9.84375ZM17.4999 15.8594C15.3857 15.8594 13.6718 14.0875 13.6718 12.5781C13.6718 11.0688 15.3857 9.84375 17.4999 9.84375C19.6142 9.84375 21.3281 11.0688 21.3281 12.5781C21.3281 14.0875 19.6142 15.8594 17.4999 15.8594ZM20.7812 9.29688C20.7812 9.44192 20.7236 9.58102 20.621 9.68358C20.5185 9.78614 20.3794 9.84375 20.2343 9.84375C20.0893 9.84375 19.9502 9.78614 19.8476 9.68358C19.7451 9.58102 19.6874 9.44192 19.6874 9.29688C19.6874 9.15184 19.7451 9.01274 19.8476 8.91018C19.9502 8.80762 20.0893 8.75 20.2343 8.75C20.3794 8.75 20.5185 8.80762 20.621 8.91018C20.7236 9.01274 20.7812 9.15184 20.7812 9.29688ZM12.3199 26.4141L13.2999 27.7309C13.4715 27.9614 13.596 28.2234 13.6663 28.502C13.7366 28.7805 13.7514 29.0702 13.7098 29.3545C13.6681 29.6388 13.5709 29.9121 13.4236 30.1588C13.2764 30.4055 13.082 30.6208 12.8515 30.7923C12.621 30.9639 12.359 31.0884 12.0805 31.1587C11.8019 31.229 11.5122 31.2438 11.2279 31.2022C10.9436 31.1605 10.6704 31.0633 10.4236 30.916C10.1769 30.7688 9.96166 30.5744 9.79009 30.3439L8.81009 29.027C8.46374 28.5616 8.31646 27.9776 8.40066 27.4036C8.48486 26.8296 8.79364 26.3125 9.25908 25.9662C9.72451 25.6198 10.3085 25.4725 10.8825 25.5567C11.4565 25.6409 11.9736 25.9486 12.3199 26.4141ZM22.6931 26.4152C22.8647 26.1848 23.08 25.9904 23.3268 25.8433C23.5735 25.6961 23.8468 25.599 24.1311 25.5575C24.4154 25.5159 24.7051 25.5308 24.9836 25.6012C25.2621 25.6716 25.5241 25.7962 25.7545 25.9678C25.9849 26.1395 26.1792 26.3548 26.3263 26.6015C26.4735 26.8483 26.5706 27.1216 26.6122 27.4059C26.6537 27.6902 26.6389 27.9798 26.5684 28.2584C26.498 28.5369 26.3735 28.7988 26.2018 29.0292L25.2229 30.345C25.0513 30.5755 24.8361 30.7699 24.5893 30.9171C24.3426 31.0644 24.0694 31.1616 23.7851 31.2033C23.5008 31.2449 23.2111 31.2301 22.9325 31.1598C22.654 31.0895 22.392 30.965 22.1615 30.7934C21.931 30.6219 21.7366 30.4066 21.5894 30.1599C21.4421 29.9132 21.3449 29.6399 21.3032 29.3556C21.2616 29.0713 21.2764 28.7816 21.3467 28.5031C21.417 28.2245 21.5415 27.9625 21.7131 27.732L22.6931 26.4152Z"
                  fill="#00D8FF"
                />
              </svg>
            </Link>
            <button
                onClick={handleLogout}
              className="logout-button"
            >
              로그아웃
            </button>
          </>
        ) : (
          // 로그인 전의 상단 바
          <>
            <Link to="/login" className="login-button">
              로그인
            </Link>
            <Link to="/signup" className="signup-button">
              회원가입
            </Link>
          </>
        )}
      </div>
      <div className="header-content">
        <div className="logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 90 90"
              fill="none"
            >
              <path
                d="M63.3725 67.4275H54.8625C54.8625 67.4275 54.4025 62.5375 58.085 62.145C61.7675 61.7525 60.675 56.435 60.675 56.435H69.8337V67.4275H63.3725Z"
                fill="#D0CFCE"
              />
              <path
                d="M9.13 36.575C9.13 36.575 11.1837 37.585 9.9925 39.0062C9.88319 39.1935 9.72643 39.3486 9.53802 39.4559C9.34961 39.5632 9.13622 39.6189 8.9194 39.6174C8.70259 39.6159 8.49 39.5572 8.30312 39.4473C8.11623 39.3373 7.96166 39.18 7.855 38.9912C7.855 38.9912 6.485 38.5237 9.13 36.575Z"
                fill="#00D8FF"
              />
              <path
                d="M69.8337 63.2887C69.8337 63.2887 61.58 63.8387 63.565 68.57H75.25C75.25 68.57 78.3212 68.57 77.7125 61.2712C77.7125 61.2712 79.85 41.4462 77.0912 40.4112L80.6562 42.6725C80.8416 42.7871 81.0546 42.8494 81.2725 42.8528C81.4904 42.8563 81.7052 42.8008 81.8941 42.6922C82.0831 42.5835 82.2391 42.4258 82.3458 42.2358C82.4524 42.0457 82.5057 41.8304 82.5 41.6125V40.6462C81.9212 38.4512 70.7312 28.9288 61.4087 28.9288C59.3349 28.9232 57.2735 29.249 55.3025 29.8938C55.3025 29.8938 55.2475 29.9075 55.165 29.9363C54.2675 30.1638 49.46 31.4275 48.315 31.5413C47.0437 31.6538 26.3112 30.7938 26.3112 30.7938C23.3775 30.7463 22.825 29.7913 20.855 30.3475C15.75 31.7913 6.58875 37.0975 7.855 38.99C9.2025 41.005 10.445 44.7875 21.0475 40.6275H21.1025C21.4762 40.6275 23.81 40.8837 29.57 46.505C29.5711 46.5159 29.576 46.526 29.5837 46.5338C33.355 50.2113 44.63 65.1087 45.6625 65.9287C46.695 66.7487 52.9762 68.5688 52.1125 62.1663C50.9001 62.0423 49.6929 61.8714 48.4937 61.6538L48.3487 57.4937C54.6825 59.2137 63.27 56.1812 63.27 56.1812"
                fill="white"
              />
              <path
                d="M29.0525 46.4463C29.2175 47.1138 33.1425 61.5025 29.0387 62.0788C24.935 62.655 24.3012 63.5263 24.4112 66.4225H35.3512L40.5575 61.6238C40.5575 61.6238 35.8825 49.3863 29.0525 46.4463Z"
                fill="#D0CFCE"
              />
              <path
                d="M48.4937 61.6563C48.4937 61.6563 50.185 61.975 52.1125 62.1675C52.975 68.57 46.6937 66.75 45.6625 65.93C44.6312 65.11 33.355 50.2125 29.5837 46.535C29.5763 46.5272 29.5718 46.517 29.5712 46.5063C23.81 40.885 21.4762 40.6288 21.1037 40.6288H21.0475C10.445 44.7888 9.2025 41.0063 7.855 38.9913C6.58875 37.0988 15.75 31.7925 20.855 30.35C22.825 29.7925 23.3787 30.7488 26.3112 30.795C26.3112 30.795 47.0437 31.6563 48.3137 31.5425C49.46 31.4288 54.2675 30.165 55.165 29.9375C55.2475 29.9088 55.3025 29.895 55.3025 29.895C57.2735 29.2502 59.3349 28.9244 61.4087 28.93C70.7312 28.93 81.9212 38.4525 82.5 40.6475V41.6138C82.5056 41.8317 82.4522 42.0471 82.3454 42.2372C82.2386 42.4273 82.0824 42.5849 81.8933 42.6934C81.7042 42.8019 81.4892 42.8573 81.2712 42.8536C81.0533 42.8499 80.8403 42.7873 80.655 42.6725L77.09 40.41"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.5838 46.535C29.75 47.2025 33.675 61.5913 29.5713 62.1675C25.4675 62.7438 24.8338 63.615 24.9438 66.5113H35.8825L41.09 61.7125M63.27 67.4275H54.76C54.76 67.4275 54.2988 63.01 57.9825 62.655C61.6663 62.3 60.5725 57.495 60.5725 57.495C56.56 58.505 52.36 58.505 48.3488 57.495M69.8338 63.2888C69.8338 63.2888 60.7888 55.3488 60.055 49.5813"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M69.8338 63.2888C69.8338 63.2888 61.58 63.8388 63.565 68.57H75.25C75.25 68.57 78.1387 68.4375 77 61.25C77 61.25 81.4075 49.8438 78.7475 41.445M21.4713 32.73C21.4713 32.73 24.3488 32.255 23.1975 36.575"
                stroke="#00D8FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <div className="bear">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <p
              style={{
                fontSize: 40,
                fontWeight: 800,
                textAlign: 'left',
                color: '#00d8ff',
              }}
            >
              AIRBEAR
            </p>
          </Link>
        </div>

        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="/service">서비스 소개</Link>
            </li>
            <li>
              <Link to="/process">프로세스</Link>
            </li>
            <li>
              <Link to="/techniques">핵심기술</Link>
            </li>
            <li>
              <Link to="/interview">인터뷰 연습</Link>
            </li>
            <li>
              <Link to="/recruiting">채용 일정</Link>
            </li>
            <li>
              <Link to="/test">시험 일정</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
