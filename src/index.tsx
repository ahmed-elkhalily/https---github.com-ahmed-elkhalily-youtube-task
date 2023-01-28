import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AntdConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF0000",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AntdConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
