import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as CountryLocaleMap from "country-locale-map";

import Stats from "../components/Stats";
import Article from "../components/Article";

function Home() {
  const history = useHistory();
  const [country, setCountry] = useState(
    new URLSearchParams(history.location.search).get("country") || ""
  );
  const [stats, setStats] = useState(null);
  const [statsLoaded, setStatsLoaded] = useState(false);

  const [articles, setArticles] = useState([]);
  const [articlesLoaded, setArticlesLoaded] = useState(false);

  const [shouldReload, setShouldReload] = useState(false);
  const [reloadTimer, setReloadTimer] = useState(null);

  const [allLoaded, setAllLoaded] = useState(false);

  function locale() {
    const result = CountryLocaleMap.getCountryByAlpha2(country.toUpperCase());
    return (result && result.languages && result.languages[0]) || undefined;
  }

  function getLocation() {
    if (!country) {
      axios
        .get(`http://ip-api.com/json`)
        .then((res) => {
          console.log(res.data.countryCode);
          setCountry(res.data.countryCode);
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
          console.log(res.data.data);
          delete res.data.data.timeline;
          setStats(res.data.data);
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
    if (country) {
      axios
        .get
        // `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        ()
        .then((res) => {
          console.log(res.data.articles);
          setArticles(articles.concat(res.data.articles));
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          setArticlesLoaded(true);
        });
    }
  }

  useEffect(getLocation, [country]);
  useEffect(loadStats, [country]);
  useEffect(loadArticles, [country]);

  useEffect(() => {
    setTimeout(() => {
      setAllLoaded(statsLoaded && articlesLoaded);
    }, 100);
  }, [statsLoaded, articlesLoaded]);

  useEffect(() => {
    if (allLoaded) {
      const result =
        !stats && country && country.toUpperCase() !== "US" && allLoaded;

      if (result && reloadTimer === null) {
        setReloadTimer(5);
      }

      setShouldReload(result);
    }
  }, [stats, country, allLoaded, reloadTimer]);

  useEffect(() => {
    if (shouldReload) {
      if (reloadTimer > 1) {
        setTimeout(() => {
          setReloadTimer(reloadTimer - 1);
        }, 1000);
      }

      if (reloadTimer === 5) {
        setTimeout(() => {
          history.push("./");
          setCountry("");
          setStats(null);
          setStatsLoaded(false);
          setArticles([]);
          setArticlesLoaded(false);
          setShouldReload(false);
          setReloadTimer(null);
          setAllLoaded(false);
        }, 5000);
      }
    }
  }, [shouldReload, reloadTimer, history]);

  if (allLoaded) {
    return (
      <>
        <header className="App-header">
          <h1>COVID | Headline</h1>
          <h2>
            Latest COVID&#8209;19 Statistics and Top Headlines
            {stats && stats.name
              ? ` in ${
                  (country &&
                    CountryLocaleMap.getCountryNameByAlpha2(
                      country.toUpperCase()
                    )) ||
                  stats.name
                }`
              : ``}
          </h2>
        </header>
        <main>
          {stats ? (
            <Stats
              data={stats}
              // locale={`${CountryLocaleMap.getLocaleByAlpha2(country)}`}
              locale={locale()}
            />
          ) : shouldReload ? (
            <h3>
              No Statistics Found For {country.toUpperCase()}. Will Reload in{" "}
              {reloadTimer} Seconds.
            </h3>
          ) : (
            <h3>No Statistics Found For {country}.</h3>
          )}

          <div className="Articles">
            {articles.map((article, i) => {
              return (
                <Article
                  key={i}
                  data={article}
                  locale={locale()}
                  // locale={`${CountryLocaleMap.getLocaleByAlpha2(country)}`}
                />
              );
            })}
          </div>
        </main>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default Home;
