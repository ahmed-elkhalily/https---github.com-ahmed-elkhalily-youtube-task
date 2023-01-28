import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { useSearchParams } from "react-router-dom";
import { searchOnYoutube } from "../network";
import { NavbarProps } from "../types";
import YoutubeIcon from "../../assets/images/youtube-icon.svg";
import SearchIcon from "../../assets/images/search.svg";

function Navbar({ setData, setIsLoading }: NavbarProps) {
  const [searchTxt, setSearchTxt]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [progress, setProgress]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0);
  const [showProgress, setShowProgress]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [showInput, setShowInput]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  useEffect(() => {
    let timeToClearProgress: any;
    if (progress === 100) {
      timeToClearProgress = setTimeout(() => {
        setProgress(0);
        setShowProgress(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeToClearProgress);
    };
  }, [progress]);

  function onSearch(): void {
    setSearchParams({ txt: searchTxt });
    setIsLoading(true);
    setShowProgress(true);
    searchOnYoutube(
      searchTxt,
      (progress: any) => {
        setProgress(progress);
      },
      (success: any) => {
        setData(success);
        setIsLoading(false);
      },
      (fail: any) => {
        setIsLoading(false);
      }
    );
  }

  function onChangeSearchTxt(e: React.FormEvent<HTMLInputElement>) {
    setSearchTxt(e.currentTarget.value);
  }

  return (
    <>
      {showProgress && progress !== 0 ? (
        <div className="progress-bar">
          <div
            className="active"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      ) : null}

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
              className={`navbar__input ${showInput ? "" : "remove-on-mobile"}`}
              value={searchTxt}
              onChange={onChangeSearchTxt}
              onSearch={onSearch}
            />
            <div
              className={`navbar__input remove-on-desktop`}
              style={{
                visibility: showInput ? "hidden" : "visible",
              }}
            >
              <img
                src={SearchIcon}
                alt="search"
                role={"button"}
                onClick={() => setShowInput(true)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
