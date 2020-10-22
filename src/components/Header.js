import React from "react";

function Header({ name }) {
  return (
    <>
      <div className="Title">
        <a href="./">
          <h1>
            COVID <span>|</span> Headline
          </h1>
        </a>
        <nav>
          <a href="./?country=US">US</a>
          <a href="./?country=GB">UK</a>
          <a href="./?country=CN">China</a>
          <a href="./?country=RU">Russia</a>
          <a href="./?country=JP">Japan</a>
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
