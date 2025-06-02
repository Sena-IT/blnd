import React from "react";

const CommonSpacingLayout = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={" px-2 md:px-5 py-3 mt-12"}>{children}</div>;
};

export default CommonSpacingLayout;
