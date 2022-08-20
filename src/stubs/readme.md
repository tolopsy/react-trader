# Setting up a server to test
- Install  json-server - `npm install -g json-server`
- Run server to serve API data as stored in db.json
    `json-server --watch /path/to/react-trader/src/stubs/db.json -p 4000`
- Run server with dynamism: node /path/to/react-trader/src/stubs/server.js

This way, we serve our stub data (as stored in db.json for testing purposes) at `http://localhost:4000`
