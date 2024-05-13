import React from 'react';

import Recruiting from './Recruiting';

function Nav_Layout({ children }) {
  return (
    <>
      <Recruiting />
      {children}
    </>
  );
}

export default Nav_Layout;
