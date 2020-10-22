import React from "react";

function Article({ data, locale }) {
  if (data) {
    return (
      <a href={data["url"]} className="Article">
        <div className={`ArticleInfo${data["urlToImage"] ? "" : " no-image"}`}>
          <h4>{data["title"]}</h4>
          {data["description"] && !data["description"].includes("�") ? (
            <p>{data["description"]}</p>
          ) : null}
          <p className="ArticleDate">
            {new Date(data["publishedAt"]).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>

        {data["urlToImage"] ? (
          <>
            <img
              className="ArticleImg"
              src={data["urlToImage"]}
              alt={data["title"]}
              onLoad={(e) => {
                if (!e.target.parentNode.lastChild.style.backgroundImage) {
                  e.target.parentNode.firstChild.classList.add("no-image");
                  e.target.parentNode.lastChild.style.display = "none";
                  e.target.style.display = "none";
                }
              }}
              onError={(e) => {
                e.target.parentNode.firstChild.classList.add("no-image");
                e.target.parentNode.lastChild.style.display = "none";
                e.target.style.display = "none";
              }}
            />
            <div
              className="ArticleImgContainer"
              style={{ backgroundImage: `url(${data["urlToImage"]})` }}
            ></div>
          </>
        ) : null}
      </a>
    );
  } else {
    return null;
  }
}

export default Article;
