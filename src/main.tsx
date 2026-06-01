import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import type { BeforeSendEvent } from "@vercel/analytics";
import App from "./app/App.tsx";
import "./styles/index.css";

/** In DevTools: localStorage.setItem("portfolio_analytics_opt_out", "1") */
function beforeSend(event: BeforeSendEvent): BeforeSendEvent | null {
  try {
    if (localStorage.getItem("portfolio_analytics_opt_out") === "1") {
      return null;
    }
  } catch {
    /* ignore */
  }
  return event;
}

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Analytics beforeSend={beforeSend} />
  </>,
);
  