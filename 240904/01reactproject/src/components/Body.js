import React from "react";
import "./Body.css";

// const Body = ({ name, location, favorList }) => {
//   const num = 19;
//   // console.log({ name, location, favorList });
//   return (
//     <div>
//       <h1>Body</h1>
//       <h2>
//         {name}은 {location}에 거주하고 있습니다.
//       </h2>
//       <br />
//       {name}은 {favorList.length}개의 음식을 좋아합니다!
//       {/* <h2>
//         {num}는 {num % 2 === 0 ? "짝수" : "홀수"} 입니다!
//       </h2> */}
//     </div>
//   );
// };

const Body = ({ children }) => {
  console.log(children);
  return (
    <div>{children}</div>
  );
};

Body.defaultProps = {
  favorList: [],
};

export default Body;


