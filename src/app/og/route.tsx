import { DATA } from "@/data/resume";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? DATA.name;
  const subtitle =
    searchParams.get("subtitle") ??
    "Full-Stack Developer | Django, React & Python | Learning AI/ML";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 36,
            color: "#94a3b8",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              color: "#0f172a",
              fontWeight: 700,
            }}
          >
            {DATA.initials}
          </div>
          <div style={{ display: "flex" }}>{DATA.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#cbd5e1" }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#38bdf8",
            alignItems: "center",
          }}
        >
          {new URL(DATA.url).host}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
