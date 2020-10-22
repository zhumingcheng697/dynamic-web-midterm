import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as CountryLocaleMap from "country-locale-map";

import Loading from "../components/Loading";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Article from "../components/Article";

function Home() {
  const pageSize = 20;
  const loadingDelay = 0;

  const history = useHistory();
  const [country, setCountry] = useState(
    new URLSearchParams(history.location.search).get("country") || ""
  );
  const [stats, setStats] = useState(null);
  const [statsLoaded, setStatsLoaded] = useState(false);

  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(false);
  const [shouldLoadMoreArticles, setShouldLoadMoreArticles] = useState(false);
  const [loadingMoreArticles, setLoadingMoreArticles] = useState(false);
  const [allArticlesLoaded, setAllArticlesLoaded] = useState(false);

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(null);

  const [allLoaded, setAllLoaded] = useState(false);

  function locale() {
    const result = CountryLocaleMap.getCountryByAlpha2(country.toUpperCase());
    return (result && result.languages && result.languages[0]) || undefined;
  }

  function getLocation() {
    if (!country) {
      axios
        .get(`https://ipapi.co/json`)
        .then((res) => {
          console.log(res.data.country_code);
          setCountry(res.data.country_code);
        })
        .catch((err) => {
          console.log(err);
          setCountry("US");
        });
    }
  }

  function loadStats() {
    if (country) {
      axios
        .get(`https://corona-api.com/countries/${country}`)
        .then((res) => {
          const data = res.data.data;
          console.log(data);
          delete data.timeline;
          setStats(data);

          const logVal = Math.log2(
            (data["latest_data"]["deaths"] / data["population"]) * 1000000 + 1
          );

          const hue = Math.max(140 - 13.5 * logVal, 0);

          document.documentElement.style.setProperty(
            "--light-accent-color",
            `hsl(${hue}, 76%, 60%)`
          );

          document.documentElement.style.setProperty(
            "--dark-accent-color",
            `hsl(${hue}, 66%, 45%)`
          );
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          setStatsLoaded(true);
        });
    }
  }

  function loadArticles() {
    if (
      country &&
      (shouldLoadMoreArticles || articles.length < 1) &&
      !allArticlesLoaded &&
      !loadingMoreArticles
    ) {
      setLoadingMoreArticles(true);
      setShouldLoadMoreArticles(false);

      const pageLoading = Math.ceil(articles.length / pageSize) + 1;
      console.log(pageLoading);

      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&page=${pageLoading}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          console.log(res.data.articles);
          if (
            res.data.articles.length < pageSize ||
            res.data.totalResults <= articles.length + res.data.articles.length
          ) {
            setAllArticlesLoaded(true);
          }
          setArticles(articles.concat(res.data.articles));
        })
        .catch((err) => {
          console.warn(err);
          setAllArticlesLoaded(true);
        })
        .finally(() => {
          setArticlesLoaded(true);
          setLoadingMoreArticles(false);
        });
    } else {
      setShouldLoadMoreArticles(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollBottom =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        document.documentElement.scrollTop;

      if (isFinite(scrollBottom) && scrollBottom < 1) {
        setShouldLoadMoreArticles(true);
      }
    });

    console.log("scroll listner added");
  }, []);

  useEffect(getLocation, [country, history]);
  useEffect(loadStats, [country, history]);
  useEffect(loadArticles, [country, history, shouldLoadMoreArticles]);

  useEffect(() => {
    setTimeout(() => {
      if (statsLoaded && articlesLoaded) {
        document.body.classList.add("Loaded");
      }
      setAllLoaded(statsLoaded && articlesLoaded);
    }, loadingDelay);
  }, [statsLoaded, articlesLoaded]);

  useEffect(() => {
    if (allLoaded) {
      const result =
        !stats &&
        country &&
        !["US", "GB", "CN", "RU", "JP"].includes(country.toUpperCase()) &&
        allLoaded;

      if (result && redirectTimer === null) {
        setRedirectTimer(5);
      }

      setShouldRedirect(result);
    }
  }, [stats, country, allLoaded, redirectTimer]);

  useEffect(() => {
    if (shouldRedirect) {
      // if (redirectTimer > 1 && redirectTimer !== 5) {
      //   setTimeout(() => {
      //     setRedirectTimer(redirectTimer - 1);
      //   }, 1000);
      // }

      if (redirectTimer === 5) {
        setTimeout(() => {
          setInterval(() => {
            setRedirectTimer((redirectTimer) =>
              redirectTimer > 1 ? redirectTimer - 1 : 1
            );
          }, 1000);
        }, 500);

        setTimeout(() => {
          document.body.classList.remove("Loaded");
          setTimeout(() => {
            history.push("./");
            setCountry("");
            setStats(null);
            setStatsLoaded(false);
            setArticles([]);
            setArticlesLoaded(false);
            setShouldLoadMoreArticles(false);
            setLoadingMoreArticles(false);
            setAllArticlesLoaded(false);
            setShouldRedirect(false);
            setRedirectTimer(null);
            setAllLoaded(false);
          }, 1000);
        }, 5000);
      }
    }
  }, [shouldRedirect, redirectTimer, history]);

  return (
    <>
      <Loading />
      {allLoaded ? (
        <>
          <Header
            name={
              stats
                ? (country &&
                    CountryLocaleMap.getCountryNameByAlpha2(
                      country.toUpperCase()
                    )) ||
                  stats.name
                : ""
            }
          />
          <main>
            {stats ? (
              <>
                <Stats
                  data={stats}
                  // locale={`${CountryLocaleMap.getLocaleByAlpha2(country)}`}
                  locale={undefined}
                />
                <section className="Articles">
                  {articles.map((article, i) => {
                    return <Article key={i} data={article} locale={locale()} />;
                  })}
                  {articles.length > 0 && allArticlesLoaded ? (
                    <h3 className="centered AllLoaded">
                      All Top Headlines Loaded
                    </h3>
                  ) : null}
                </section>
              </>
            ) : shouldRedirect ? (
              <h3 className="centered">
                No Statistics Found For{" "}
                {(country &&
                  CountryLocaleMap.getCountryNameByAlpha2(
                    country.toUpperCase()
                  )) ||
                  country.toUpperCase()}
                . Redirecting in {redirectTimer} Seconds.
              </h3>
            ) : (
              <h3 className="centered">
                No Statistics Found For{" "}
                {[
                  "United States",
                  "United Kingdom",
                  "China",
                  "Russian Federation",
                  "Japan",
                ][
                  ["US", "GB", "CN", "RU", "JP"].indexOf(country.toUpperCase())
                ] || country}
                . Please Check Your Connection.
              </h3>
            )}
          </main>
        </>
      ) : null}
    </>
  );
}

export default Home;
