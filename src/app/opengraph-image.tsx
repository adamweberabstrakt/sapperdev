import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B1B30",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", height: 10, width: 140, backgroundColor: "#B6F22B" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#6B829E", textTransform: "uppercase" }}>
            B2B Appointment Setting
          </div>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, color: "#F5F7FA", lineHeight: 1, marginTop: 20, textTransform: "uppercase" }}>
            {siteConfig.shortName}<span style={{ color: "#B6F22B" }}>.</span>
          </div>
          <div style={{ fontSize: 34, color: "rgba(245,247,250,0.72)", marginTop: 28, maxWidth: 900 }}>
            One coordinated pursuit of the accounts you&apos;ve always wanted.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#6B829E", textTransform: "uppercase" }}>
          {siteConfig.name} · {siteConfig.location.city}
        </div>
      </div>
    ),
    { ...size }
  );
}
