import React from "react";

function Stats({ data, locale }) {
  if (data) {
    const fatalityRate =
      data["latest_data"]["deaths"] / data["latest_data"]["confirmed"];

    const recoveryRate =
      data["latest_data"]["recovered"] / data["latest_data"]["confirmed"];

    const activeRate = 1 - fatalityRate - recoveryRate;

    return (
      <section className="Stats">
        <div className="NumberRow">
          <div>
            <h4>Cases</h4>
            <p className="Total">
              {data["latest_data"]["confirmed"].toLocaleString(locale)} Total
            </p>
            {data["today"]["confirmed"] || data["today"]["deaths"] ? (
              <p className="Today">
                +{data["today"]["confirmed"].toLocaleString(locale)} Today
              </p>
            ) : null}
          </div>

          <div>
            <h4>Deaths</h4>
            <p className="Total">
              {data["latest_data"]["deaths"].toLocaleString(locale)} Total
            </p>
            {data["today"]["confirmed"] || data["today"]["deaths"] ? (
              <p className="Today">
                +{data["today"]["deaths"].toLocaleString(locale)} Today
              </p>
            ) : null}
          </div>
        </div>

        <div className="PercentageRow">
          <div>
            <h4>Active</h4>
            <p>
              {activeRate.toLocaleString(locale, {
                style: "percent",
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div>
            <h4>Fatality</h4>
            <p>
              {fatalityRate.toLocaleString(locale, {
                style: "percent",
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <div>
            <h4>Recovered</h4>
            <p>
              {recoveryRate.toLocaleString(locale, {
                style: "percent",
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>

        <p className="UpdatedAt">
          Last updated at{" "}
          <span>
            {new Date(data["updated_at"]).toLocaleString(locale, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZoneName: "short",
            })}
          </span>
        </p>
      </section>
    );
  } else {
    return null;
  }
}

export default Stats;
