import React from "react";

const DownloadPage = ({ location }) => {
  if (typeof window !== "undefined") {
    const user = (location.state || {}).email;
    if (!user) document.location.href = "/";
    if (user) {
      return <h1>Download the book</h1>;
    }
  }

  return null;
};

export default DownloadPage;
