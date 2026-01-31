import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load analytics script if environment variables are configured
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (analyticsEndpoint && analyticsWebsiteId) {
  try {
    // Validate that the endpoint is a proper HTTPS URL
    const url = new URL(analyticsEndpoint);
    if (url.protocol !== 'https:') {
      console.warn('Analytics endpoint must use HTTPS protocol');
    } else {
      const script = document.createElement("script");
      script.defer = true;
      script.src = `${analyticsEndpoint}/umami`;
      script.setAttribute("data-website-id", analyticsWebsiteId);
      document.head.appendChild(script);
    }
  } catch (error) {
    console.error('Invalid analytics endpoint URL:', error);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
