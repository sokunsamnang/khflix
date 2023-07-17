import { useEffect } from "react";

export function Sitemap() {
  useEffect(() => {
    window.location.href = "/sitemap.xml";
  }, []);

  return null;
}
