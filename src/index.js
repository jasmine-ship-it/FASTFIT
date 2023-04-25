import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./routes/home/home.component";
import { ActivitiesProvider } from "./contexts/activities.contexts";
import { TokensProvider } from "./contexts/tokens.contexts";
import { AthleteProvider } from "./contexts/athlete.contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <TokensProvider>
      <AthleteProvider>
        <ActivitiesProvider>
          <App />
        </ActivitiesProvider>
      </AthleteProvider>
    </TokensProvider>
  </Router>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
