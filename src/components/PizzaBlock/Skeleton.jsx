import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={470}
    viewBox="0 0 300 532"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="150" cy="140" r="140" />
    <rect x="0" y="300" rx="10" ry="10" width="300" height="30" />
    <rect x="0" y="350" rx="10" ry="10" width="300" height="88" />
    <rect x="0" y="460" rx="10" ry="10" width="90" height="30" />
    <rect x="145" y="460" rx="10" ry="10" width="151" height="45" />
  </ContentLoader>
);

export default Skeleton;
