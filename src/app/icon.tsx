import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08080A",
          borderRadius: "7px",
          border: "1px solid rgba(212, 175, 55, 0.4)",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vGold" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F9E8B2" />
              <stop offset="40%" stopColor="#E5C158" />
              <stop offset="80%" stopColor="#C5A880" />
              <stop offset="100%" stopColor="#9A7B4F" />
            </linearGradient>
          </defs>
          <path
            d="M3 4H8.2L12 16.2L15.8 4H21L14.2 20C13.5 21.5 12.8 22 12 22C11.2 22 10.5 21.5 9.8 20L3 4Z"
            fill="url(#vGold)"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
