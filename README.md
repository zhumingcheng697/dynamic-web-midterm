# [COVID | Headline](https://zhumingcheng697.github.io/dynamic-web-midterm)

**McCoy Zhu’s Midterm Project for Fall 2020 Dynamic Web App (DM-UY 3193)**

## Sources of Data

This website uses three REST APIs to [estimate your location](https://ipapi.co) using your IP address, [load latest COVID-19 statistics](https://about-corona.net) in a specific country or area, and [load latest top headlines](https://newsapi.org) in the same country or area. Another node module is used to work with [ISO country codes, country names, languages, and locales](https://www.npmjs.com/package/country-locale-map).

## Displaying Sources of Data

The website either extract the `country` parameter from the URL query, or use the first REST API to get an estimated user’s location, then load the COVID-19 statistics and top headlines in that country or area using the second and third REST APIs and display the data side by side, in an effort to examine if there is any correlation between a country or area’s COVID severity and its top headlines.

> Due to API constraints, COVID statistics may be inaccurate and headlines may be unavailable for certain countries and areas. For the [deployed GitHub Pages site](https://zhumingcheng697.github.io/dynamic-web-midterm), it is known that the headline API does not work _at all_ ~~on macOS Chrome and macOS Firefox but seems to work fine on macOS Safari, iOS Safari, and iOS Chrome. Other browsers and envrionments have not been fully tested yet~~.

## Interactive UI

The five links in the `<nav>` bar as well as the `<h1>` title of tha website are all implemented using React’s `<Link>` element and can let the user choose which country’s or area’s information to display, or use the user’s estimated location, without a full site refresh. Browser back and forward functionalities should also be fully supported.

## Data-dependent UI

The website’s accent color, which is used on the verticle bar in the website’s title, the name of the country or area whose information is being displayed, and labels like “Loading More Headlines…” and “All Top Headlines Loaded”, is dependent on the death per million population of COVID in that country or area. The less death per million population a location has, the greener the accent color will be. I used this piece of information because I believe it is more representative of a country’s or area’s severity of COVID than fatality rate or case number.

> Logarithmic operations are involved in calculating the accent color, so the correlation between the hue of the color and death per million population is actually exponential, not linear.

## Style

Reflects my usual clean, minimalistic taste. Mobile responsive. Supports `prefers-color-scheme` and `safe-area-inset`.

## Additional Features

- Automatically hides images that failed to load and readjusts layout.

- Falls back the location to the user’s estimated location or United States if no COVID data is found for the current country or area.

- Automatically loads more headlines, if there is any, when the user scrolls to the bottom of the page.

- Automatcially reloads COVID data every 15 minutes without a full site refresh.
