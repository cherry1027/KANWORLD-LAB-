"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, FlaskConical } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="KANWorld Lab home">
        <span className="brand-mark"><FlaskConical size={18} /></span>
        <span><strong>KANWorld Lab</strong><small>Interpretable Latent Dynamics for Autonomous Networks</small></span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link className={pathname === "/" ? "active" : ""} href="/">01 <span>Playground</span></Link>
        <Link className={pathname === "/inspector" ? "active" : ""} href="/inspector">02 <span>Interpretability</span></Link>
      </nav>
      <div className="prototype-label"><Box size={13} /> Synthetic model v0.3</div>
    </header>
  );
}
