import { css } from '@emotion/react';

export const App = () => {
  console.log(32);

  return (
    <div className="container py-4 bg-white h-full shadow-inner">
      <div className="text-amber-700 text-x1.5">Hi bro!</div>
      <div css={myClass}>Is styled components ok?</div>
    </div>
  );
};

const myClass = css`
  color: green;
`;
