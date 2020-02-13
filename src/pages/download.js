import React from "react";

const DownloadPage = ({ location }) => {
  const user = (location.state || {}).email;
  if (!user || !document) document.location.href = "/";
  if (user) {
    return <h1>Download the book</h1>;
  }
};

export default DownloadPage;
