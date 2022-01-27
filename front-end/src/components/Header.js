import React from "react";
import { Link } from "react-router-dom";

function Header({ name, resetCountry }) {
  return (
    <>
      <div className="Title">
        <Link to="./" onClick={resetCountry}>
          <h1>
            COVID <span>|</span> Headline
          </h1>
        </Link>

        <nav>
          <Link to="./?country=US" onClick={resetCountry}>
            US
          </Link>

          <Link to="./?country=GB" onClick={resetCountry}>
            UK
          </Link>

          <Link to="./?country=CN" onClick={resetCountry}>
            China
          </Link>

          <Link to="./?country=RU" onClick={resetCountry}>
            Russia
          </Link>

          <Link to="./?country=JP" onClick={resetCountry}>
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
