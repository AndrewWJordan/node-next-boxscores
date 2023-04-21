# Boxscores

This full-stack web app uses the Express framework (API), TypeScript, Next.js, an in-memory MongoDB instance (non-production), and a basic caching mechanism for the purposes of fetching and displaying various sports boxscores. Concurrently is being used to start both apps in one fell swoop.

## To Start

```
nvm use
npm run build:start
```

## Frontend

```
localhost:4000
```

## APIs

```
localhost:3000/api/scores/[mlb, nba, or nhl]`
```

## How To Access MongoDB

- Install `mongosh`
- MongoDB Memory Server's URI is logged at startup
- Run `mongosh [uri]`
