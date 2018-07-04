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
    title: "Introduction",
    content: pageLoader(() => import("./pages/intro.md"))
  },
  {
    title: "Style",
    pages: [
      {
        path: 'principles',
        title: "Principles",
        component: require('./pages/style/principles.md'),
      },
      {
        path: 'colors',
        title: "Colors",
        component: require('./pages/style/colors.md'),
      },
      {
        path: 'typography',
        title: "Typography",
        component: require('./pages/style/typography.md'),
      },
    ]
  },
  {
  title: "Layout",
  pages: [
    {
      path: 'layout',
      title: "Grids & Spacing",
      component: require('./pages/style/layout.md'),
    },
  ]
  },
  {
  title: "Charts",
  pages: [
    {
      path: 'basic-charts',
      title: "Basic Charts",
      component: require('./pages/style/basic-charts.md'),
    },
    {
      path: 'dots-arrows',
      title: "Dot & Arrow",
      component: require('./pages/style/dots-arrows.md'),
    },
    {
      path: 'scatter-slope',
      title: "Scatter & Slope",
      component: require('./pages/style/scatter-slope.md'),
    },
    {
      path: 'elections',
      title: "Election",
      component: require('./pages/style/elections.md'),
    },
    {
      path: 'maps',
      title: "Maps",
      component: require('./pages/style/maps.md'),
    },
  ]
},
{
title: "Assets",
pages: [
  {
    path: 'assets',
    title: "Print",
    component: require('./pages/style/print-assets.md'),
  },
  {
    path: 'online-assets',
    title: "Online",
    component: require('./pages/style/online-assets.md'),
  },
]
},
];

ReactDOM.render(
  <Catalog
  title="Storytelling Styleguide"
  logoSrc="nzz-storytelling_logo.svg"
  pages={pages}
  theme={theme}
  styles={["/theme.css"]}
  />,
  document.getElementById("catalog")
);
