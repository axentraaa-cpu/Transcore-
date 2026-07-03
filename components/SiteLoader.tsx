"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLeaving(true);
      window.setTimeout(() => setIsVisible(false), 260);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`site-loader ${isLeaving ? "site-loader--leave" : ""}`}>
      <div className="site-loader__brand">
        <span className="site-loader__logo">
          <span className="text-accent-500">Trans</span>
          <span className="text-white">core</span>
        </span>
        <span className="site-loader__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  );
}
