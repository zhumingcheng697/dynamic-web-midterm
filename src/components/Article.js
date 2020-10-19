import React from "react";

function Article({ data, locale }) {
  if (data) {
    return (
      <a href={data["url"]} className="Article">
        <div
          className="ArticleInfo"
          style={{
            flexBasis: data["urlToImage"]
              ? "max(calc(70% - 10px), calc(100% - 310px))"
              : "100%",
          }}
        >
          <h4>{data["title"]}</h4>
          {data["description"] && !data["description"].includes("�") ? (
            <p>{data["description"]}</p>
          ) : null}
          <p>
            Published at{" "}
            {new Date(data["publishedAt"]).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <p>{data["source"]["name"] || new URL(data["url"]).hostname}</p>
        </div>

        {data["urlToImage"] ? (
          <div
            className="ArticleImgContainer"
            style={{ backgroundImage: `url(${data["urlToImage"]})` }}
          >
            <img
              className="ArticleImg"
              src={data["urlToImage"]}
              alt={data["title"]}
              style={{ display: "none" }}
              onError={(e) => {
                e.target.parentNode.parentNode.firstChild.style.flexBasis =
                  "100%";
                e.target.parentNode.style.display = "none";
              }}
            />
          </div>
        ) : null}
      </a>
    );
  } else {
    return null;
  }
}

export default Article;
