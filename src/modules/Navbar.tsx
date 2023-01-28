import React, { useState } from "react";
import { Input } from "antd";
import { useSearchParams } from "react-router-dom";
import YoutubeIcon from "../assets/images/youtube-icon.svg";

const Navbar: React.FC = () => {
  const [searchTxt, setSearchTxt]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function onSearch(): void {
    console.log("search searchText: ", searchTxt);
    setSearchParams({ txt: searchTxt });
  }

  function onChangeSearchTxt(e: React.FormEvent<HTMLInputElement>): void {
    setSearchTxt(e.currentTarget.value);
  }

  return (
    <>
      <div className="progress-bar">
        <div
          className="active"
          style={{
            width: "25%",
          }}
        />
      </div>
      <header className="nav">
        <div className="container">
          <div className="navbar">
            <img
              className="navbar__logo"
              src={YoutubeIcon}
              role="button"
              alt="youtube"
            />
            <Input.Search
              allowClear
              className="navbar__input"
              value={searchTxt}
              onChange={onChangeSearchTxt}
              onSearch={onSearch}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
