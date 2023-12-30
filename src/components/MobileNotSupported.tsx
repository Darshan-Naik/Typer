import React from "react";

const MobileNotSupported = () => {
  return (
    <div className="sm:hidden block text-primary">
      Sorry, this App is not supported on mobile devices. 😔
    </div>
  );
};

export default MobileNotSupported;
