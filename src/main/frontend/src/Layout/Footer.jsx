import React from 'react';
import './Footer.css';

function Footer() {
  const handleClick = () => {
    window.location.href =
      'https://theperfectworld.com/save-the-polar-bear-2/?gad_source=1&gclid=Cj0KCQjw_-GxBhC1ARIsADGgDjs8HWOS71Zy93okudaJjHVFd6_w0nwGwKN5AMCE6dK09XE1bsuzJlAaAnejEALw_wcB';
  };

  return (
    <div
      className="footer insta"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M6.25 22.9167C6.25 15.0604 6.25 11.1312 8.69167 8.69167C11.1312 6.25 15.0604 6.25 22.9167 6.25H27.0833C34.9396 6.25 38.8687 6.25 41.3083 8.69167C43.75 11.1312 43.75 15.0604 43.75 22.9167V27.0833C43.75 34.9396 43.75 38.8687 41.3083 41.3083C38.8687 43.75 34.9396 43.75 27.0833 43.75H22.9167C15.0604 43.75 11.1312 43.75 8.69167 41.3083C6.25 38.8687 6.25 34.9396 6.25 27.0833V22.9167Z"
          stroke="white"
          strokeWidth="2" // camelCase로 변경
        />
        <path
          d="M34.375 18.75C36.1009 18.75 37.5 17.3509 37.5 15.625C37.5 13.8991 36.1009 12.5 34.375 12.5C32.6491 12.5 31.25 13.8991 31.25 15.625C31.25 17.3509 32.6491 18.75 34.375 18.75Z"
          fill="white"
        />
        <path
          d="M25 31.25C28.4518 31.25 31.25 28.4518 31.25 25C31.25 21.5482 28.4518 18.75 25 18.75C21.5482 18.75 18.75 21.5482 18.75 25C18.75 28.4518 21.5482 31.25 25 31.25Z"
          stroke="white"
          strokeWidth="2" // camelCase로 변경
        />
      </svg>
    </div>
  );
}

export default Footer;
