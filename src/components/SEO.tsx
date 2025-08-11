import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Build Match Pro | Trusted Utah Subcontractors";
const defaultDescription =
  "Find reliable, vetted subcontractors across Utah. Quality-first pros without bloated marketing costs.";

export function SEO({ title = defaultTitle, description = defaultDescription }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    const desc = ensureMeta("description");
    desc.setAttribute("content", description);

    // OpenGraph/Twitter
    const ensureOG = (property: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      return el as HTMLMetaElement;
    };

    ensureOG("og:title").setAttribute("content", title);
    ensureOG("og:description").setAttribute("content", description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.origin + "/";

    // JSON-LD Organization & WebSite
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Build Match Pro",
      url: window.location.origin + "/",
      description: description,
      areaServed: [
        "Utah"
      ],
    };

    const scriptId = "jsonld-organization";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(jsonLd);
  }, [title, description]);

  return null;
}
