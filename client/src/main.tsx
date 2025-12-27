import { createRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

const base =
  import.meta.env.MODE === "production" ? "/Vision" : "/";

createRoot(document.getElementById("root")!).render(
  <Router base={base}>
    <App />
  </Router>
);
