import React from "react";
import info from "../../bookInfo";

const Layout = ({ children }) => (
  <div className="wrapper">
    <header>
      <h1 className="title">{info.title}</h1>
    </header>
    <main>{children}</main>
  </div>
);

export default Layout;
