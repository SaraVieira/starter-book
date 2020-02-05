import React from "react";
import info from "../../bookInfo";

const Layout = ({ children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: "42rem",
      padding: `2.625rem 1.3125rem`
    }}
  >
    <header>
      <h1
        className="title"
        style={{
          fontSize: "3.95285rem",
          lineHeight: "4.375rem",
          marginBottom: "2.625rem",
          marginTop: 0
        }}
      >
        {info.title}
      </h1>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
