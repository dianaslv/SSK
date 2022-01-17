// scroll bar
import "simplebar/src/simplebar.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

//
import { Neo4jProvider, createDriver } from "use-neo4j";
import App from "./App";

// ----------------------------------------------------------------------
const driver = createDriver("bolt", "localhost", 7687, "neo4j", "em7admin");

ReactDOM.render(
  <HelmetProvider>
    <Neo4jProvider driver={driver}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Neo4jProvider>
  </HelmetProvider>,
  document.getElementById("root")
);
