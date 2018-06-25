import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const theme =
  {
    brandColor: "#00205B",
    pageHeadingBackground: "#000000",
    sidebarColorActive: "#505DCD",
    sidebarColorText: "#00205B",
    sidebarColorTextActive: "#505DCD",
    sidebarColorHeading: "#00205B",
    codeColor: "#00205B",
    linkColor: "#505DCD",
    textMedium: "#00205B",
    bgDark: "#000000",
    bgLight: "#FFFFFF"
  };
  
const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
