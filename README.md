# Boxscores

This full-stack web app uses the Express framework (API), TypeScript, MongoDB, Next.js, and a simple caching mechanism for the purposes of fetching and displaying various sports boxscores.

## Start The Backend Server
- `cd backend`
- `npm run start`
- Endpoints are located at `localhost:3000/api/scores/[mlb, nba, or nhl]

### How To Access MongoDB

- Install `mongosh`
- Check the logs for MongoDB Memory Server's URI
- Run `mongosh [uri]`

## Start the Frontend
- `cd frontend`
- `npm run start`
- `localhost:4000`