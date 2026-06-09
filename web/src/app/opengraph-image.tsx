import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BukuCloud — Cloud accounting for Malaysian SMEs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "#faf7f2",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "ui-serif, Georgia, serif",
          color: "#1a1a1a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 18px",
            border: "1.5px solid #c0492e",
            borderRadius: 999,
            color: "#c0492e",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Made in KL · MY
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#5a554c",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: "#c0492e",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              fontFamily: "ui-serif, Georgia, serif",
            }}
          >
            B
          </div>
          BukuCloud
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Cloud accounting</span>
            <span>&nbsp;</span>
            <span>for Malaysian </span>
            <span style={{ color: "#c0492e", fontStyle: "italic" }}>
              SMEs.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 36,
            color: "#5a554c",
            fontSize: 22,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>SST · MyInvois ready</span>
            <span>Practice console</span>
            <span>From RM 49/mo</span>
          </div>
          <span style={{ color: "#1a1a1a", fontWeight: 600 }}>
            bukucloud.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
