# News Portal Application

This is a News Portal application that uses custom backend server API for fetching news.

# Table of contents

- [News Portal Application](#news-portal-application)
- [Table of contents](#table-of-contents)
- [Important information](#important-information)
  - [News fetching](#news-fetching)
  - [Favorites task](#favorites-task)
- [Folder Structure](#folder-structure)
- [Installing, running and building the application](#installing-running-and-building-the-application)
  - [Checking and linting](#checking-and-linting)
- [Structure](#structure)
  - [Structure of src/](#structure-of-src)
    - [types](#types)
    - [routes](#routes)
    - [pages](#pages)
    - [layouts](#layouts)
    - [components](#components)
    - [assets](#assets)
    - [api](#api)

---

# Important information

[Back to Table of contents](#table-of-contents)

## News fetching

News are fetched from the custom backend server which use top stories NewYork Times API. API allows only 5 requests per minute or 500 per day so the app may appear to not be working after 5 requests.

Every category has a main section where news are fetched by relevant section. The latest news widget shows news queried accordinlgly but no extra functionality for latest news is implemented.

The news grid has a infinite scroll functionality made possible by the _react-infinite-scroll-component_ package that allows easy implementation of infinite scroll. That is why it can be easy to get stuck on loading, because the API allows only 5 request per minute. As we are not managing the pagination so we call same API with same params again and again for a preview of infinite scroll.

---

[Back to Table of contents](#table-of-contents)

## Favorites task

Favorites part of the assignment was implemented as follows.
All the newsCard components have a star icon that is clickable. When clicked it turns red to know that the news story was saved as favorite.

The categories have a star icon for the Favorites page. The Favorites page has the newsCards that were saved in the same grid layout as the regular news. The saved news can be clicked again and removed from the favorites page, however the page has to be reloaded because _localStorage_ was used for storing the favorite stories, hence not being reactive.

---

# Folder Structure

Thr mail code is located in the [src](./src/) folder. The root holds all the project configuration and setup such as _packeae.json_, _tsconfig.json_, _vite.config.ts_ etc. It also hold the entry point into the application, [inex.html](./index.html).

---

[Back to Table of contents](#table-of-contents)

# Installing, running and building the application

To install all the dependencies tun the command

```
npm install
```

and all the dependencies will be installed.

Running the application is done with a command

```
npm run dev
```

which runs the application in development mode.

Building is done with the command:

```
npm run build
```

which builds the application.

---

[Back to Table of contents](#table-of-contents)

## Checking and linting

To check the application for patterns ESLint is setup and runs right before the _npm run dev_ command. Also prettier runs on every _on save_ action.

[Back to Table of contents](#table-of-contents)

# Structure

## Structure of src/

[Back to Table of contents](#table-of-contents)

### types

Directory containing the types used in the app. Used for the api calls. Also contains enums used in the app such as available categories.

---

[Back to Table of contents](#table-of-contents)

### routes

Directory containing the routes setup. Contains the all available routes, routes config holding the route and according page.

---

[Back to Table of contents](#table-of-contents)

### pages

Directory holding all the pages in the app. Pages are divided by category.

---

[Back to Table of contents](#table-of-contents)

### layouts

Directory holding the default layout. Layout provides a header and a navbar.

[Back to Table of contents](#table-of-contents)

### components

Directory that holds all the components used in the pages. Made to be reusable for future development. Components are further divided into directories ([icons](./src/components/icons/), [navigation](./src/components/navigation/), [newsCards](./src/components/newsCards/) etc.)

---

[Back to Table of contents](#table-of-contents)

### assets

Directory that holds all the styles and other assets such as images and svg's. Styles are divided in same directories as the components to follow it more clearly.

---

[Back to Table of contents](#table-of-contents)

### api

Directory holding the api calls to the Backend server.

---
