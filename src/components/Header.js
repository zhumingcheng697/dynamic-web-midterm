import React from "react";
import { Link } from "react-router-dom";

function Header({ name, changeCountry }) {
  return (
    <>
      <div className="Title">
        <Link
          to="./"
          onClick={() => {
            changeCountry("");
          }}
        >
          <h1>
            COVID <span>|</span> Headline
          </h1>
        </Link>
        <nav>
          <Link
            to="./?country=US"
            onClick={() => {
              changeCountry("US");
            }}
          >
            US
          </Link>
          <Link
            to="./?country=GB"
            onClick={() => {
              changeCountry("GB");
            }}
          >
            UK
          </Link>
          <Link
            to="./?country=CN"
            onClick={() => {
              changeCountry("CN");
            }}
          >
            China
          </Link>
          <Link
            to="./?country=RU"
            onClick={() => {
              changeCountry("RU");
            }}
          >
            Russia
          </Link>
          <Link
            to="./?country=JP"
            onClick={() => {
              changeCountry("JP");
            }}
          >
            Japan
          </Link>
        </nav>
      </div>

      {name ? (
        <h2 className="Subtitle">
          Latest COVID&#8209;19 Statistics and Top Headlines in{" "}
          <span>{name}</span>
        </h2>
      ) : (
        <h2 className="Subtitle">
          Latest COVID&#8209;19 Statistics and Top Headlines
        </h2>
      )}
    </>
  );
}

export default Header;
