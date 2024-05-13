import React from 'react';
import './Bottom.css';

function Bottom() {
  return (
    <div>
      <div className="mobile">
        <img
          src="https://s3-alpha-sig.figma.com/img/98dc/05b4/1cc5bb8acd282ca34b675841f6b7eecf?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TICyJd-nV66K1DY9hMAfQUKwxxdI4RCFi5P9gEhTeaQFvbPjnl3cqxT7aUAEq4FDF4v93oXYLHMHlMBckpUWEx3jtp35V4IqlFDE3ls1l-ysobH6ENpw543l1jnuW3elBAwEqQgnJ3GIiW8mv~bqQWueSQ9oxGBj1nWM7rvNIYxhIfQsXeQsILnmgn12-evFT77s~SSYbd97qBNbV-mhfWybmlTSdx8MkIylBp2BSTNWZCIz2l6YytNqRVN3Lnw9D~6azZL~-hVw6MNCnb3iuq0AGVS2q~0A3qfb0aVRF4P1q8FivJJVrHjkMpxw3rvfTs2Gbe7rnWDJcX60NOXY~g__"
          style={{
            width: 600,
            height: 500,
            borderRadius: 30,
            objectFit: 'cover',
          }}
          alt="Mobile"
        />

        <div className="mob">
          AIRBEAR
          <br />
          모바일 웹사이트
        </div>
        <div className="mob_2">
          언제 어디서나
          <br />
          에어베어와 함께
          <br />
          승무원의 꿈에
          <br />
          가까워지세요
        </div>
      </div>
    </div>
  );
}

export default Bottom;
