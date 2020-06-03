# JavaScript

## Torsdag - förmiddag

-   Mattias - Utvecklare (DICE, King, Embark, bwin, Ongame mfl) i 20+ år
-   Upplägg - Verktyg, Modern JavaScript - ES6/ES2015+, REST/CRUD/API:er, Ramverk överblick
-   JavaScript - Förväntningar
-   JavaScript - Browser, Server, Verktyg
-

## Upplägg

-   Lära sig grundläggande verktyg (Git, Node, NPM)
-   Sätta upp en basic utvecklingsmiljö som passar modern JS-utveckling
-   Gå genom nyare tillägg till JavaScript (ES6, ES2015+ osv)
-   Asynkron vs synkron kod. Callback, Promises eller async/await? - Race conditions

-   Vad är en CRUD-applikation?
-   Vad är REST? GET, POST, PUT, DELETE, OPTIONS
-   Kommunicera med ett REST-API via fetch
-   CORS
-   API-säkerhet - Never trust the client - oAuth, JSON Web Token
-   Ramverk? Vad löser React?

### Grundläggande verktyg

-   Terminal - lär dig jobba i terminalen (Tips: GitBash om ni kör Windows)
-   Git - versionshantering.
-   Node - En JavaScript-runtime (jmf Java Runtime) byggd på Chromes V8 JavaScript-motor
-   NPM - Node Package Manager - Bundlad med node för att hantera beroenden
-   Webpack - node/npm-modulhantering/paketerare för webbläsare - bundla kod, utvecklingsmiljö
-   BabelJS - Skriv ES2015+ kod och låt BabelJS hantera problematik med äldre webbläsare
-   NPM Script - Skapa script för att förenkla ditt liv när du utvecklar
-   Behöver man allt det här? Det beror på.

## Verktyg du kommer stöta på (som vi inte använder här)

-   Test Tools - Jest, E2E-tests, Mocha etc
-   NVM - Node Version Manager - Hantera olika versioner av node/npm per projekt
-   Containers & Virtualisering - Docker/Vagrant/Kubernetes
-   TypeScript - typat JavaScript - vanligt förekommande i stora kodbaser
-   Linters - ESLint, TSLint - följ guidelines, hittar småfel
-   Formatters - Prettier - "Så här ska koden se ut"
-   .dotenv - Hantera konfiguration baserat på miljö (utvecklingsmiljö eller live)
-   Continous Integration - Github Actions, CircleCI etc
-   Commit Hooks - Husky etc

## Modern JavaScript

-   ES6, ES2015 (och nyare)
-   Funkar det i alla browsers? Nja. Därför BabelJS
-   let, const, export, import, default;
-   String, Array, Objects
-   Functions, Desctructuring, Spread, Templates

## Asynkron kod

-   Vad är skillnaden mellan synkron och asynkron kod?
-   Vilka sätt finns det att köra asynkron kod i JavaScript?
-   Callback(-hell)
-   Promises
-   Async/await
-   Race Condition
-   Hur hantera ett UI när all data kommer asynkront?

## Ramverk

-   Ramverk (överblick) - React, Angular, Svelte, Vue, Express, Next.js
-   State (ex React, Flux)
-   Browserstöd
    -   Http Requests / DOM / Events etc
    -   Can I Use \_\_\_ ? - https://caniuse.com/
    -   BabelJS
    -   Polyfills

## Öppna API:er

-   https://github.com/awesomedata/awesome-public-datasets
-   https://github.com/jdorfman/awesome-json-datasets

## REST

-   JSON
-   Stateless (ingen session, inga cookies etc) - URL-baserat (och headers)
-   CRUD -
-   CORS - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
-   Fördelar / Nackdelar
-   Alternativa metoder
-   Säkerhet - oAuth, JSON Web Token, Basic HTTP authentication

## Anropa API:er via JavaScript (från webbläsare)

-   Ajax (gammalt ord som hängt med)
-   Asynkront/Synkront (Callback, Promises, async-await)
-   Hackigt förut, nu väldigt standardiserat
-   Axios, Superagent etc
-   Fetch - https://caniuse.com/#feat=fetch

## Lära sig mer

-   MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript
-   Web Dev Blog - Google - https://web.dev/blog/
-   30 Seconds of Code - https://www.30secondsofcode.org/js/p/1
-   You Dont Know JS - https://github.com/getify/You-Dont-Know-JS
-   Node Best Practices - https://github.com/goldbergyoni/nodebestpractices
-   Project Guidelines (Best practice for JavaScript projects) - https://github.com/elsewhencode/project-guidelines
-   Firebase Official Functions Samples - https://github.com/firebase/functions-samples
-   Github Trending - https://github.com/trending/javascript?since=daily
-   HackerNews - https://news.ycombinator.com/
-   StackOverflow - https://stackoverflow.com/

## Vad vi inte täcker här

-   En sund och bra utvecklingsmiljö (Node, NVM, NPM/Yarn, Github, Tooling, IDE)
-   Server-side JavaScript (NodeJS)
-   Packagers (Webpack, Parcel etc)
-   Ramverk (React, Vue, Svelte, Angular)
-   Komponent-bibliotek (Material UI, Ant Design, VueX etc)
-   Styling (CSS in JS etc)
-   Testning (unit, end-to-end, integration)
-   Linting (ex eslint)
-   Formatting (ex Prettier)
-   Build/Deploy and Continous Integration (ex CircleCI alt. Github Actions)
-   Hosting (Netlify, VPS, Firebase, Cloud)
-   Server-Side Rendering (SSR)
-   Workflows (Pull Requests, Forks etc)
