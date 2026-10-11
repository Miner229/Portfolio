import { ImageResponse } from "next/og";

export const alt = "Alexei Atlasov, Senior Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#f5f1ea",
          color: "#1a1916",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#35557f" }}>AA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 600, letterSpacing: -2 }}>Alexei Atlasov</div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 16, color: "#5d584f" }}>
            Senior Full Stack Developer
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5d584f" }}>
          C#/.NET · Vue · React · Python · Node.js
        </div>
      </div>
    ),
    { ...size },
  );
}
