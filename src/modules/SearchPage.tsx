import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { DataProps } from "./types";
import StartImgae from "../assets/images/start.png";

const SearchPage: React.FC = () => {
  const [isLoading, setIsLoading]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
  const [data, setData]: [
    DataProps,
    React.Dispatch<React.SetStateAction<DataProps>>
  ] = useState({});

  return (
    <div>
      <Navbar setData={setData} setIsLoading={setIsLoading} />
      {!data.pageInfo && !isLoading ? (
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img src={StartImgae} className="start-img" alt="youtube start" />
          </div>
        </div>
      ) : (
        <Main data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SearchPage;
