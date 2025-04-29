import React from "react";

const InternalBanner = ({ title, textColor = "#000000", bgColor = "#faf7f2", isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="internal-banner" style={{ backgroundColor: bgColor}}>
      <h1 className="banner-title" style={{ color: textColor}}>
        {title}
      </h1>
    </div>
  );
};

export default InternalBanner;
