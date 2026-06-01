// Logo.jsx — inline SVG of the medu mark + wordmark, scalable

const MeduLogomark = ({ size = 40 }) => (
  <svg viewBox="0 0 200 240" width={size} height={size * 1.2} aria-hidden="true">
    <g fill="none" strokeWidth="20" strokeLinecap="round">
      <g stroke="#FFC8C7">
        <path d="M20 130 V200" />
        <path d="M60 130 V200" />
        <path d="M100 130 V200" />
        <path d="M140 130 V200" />
        <path d="M180 130 V200" />
        <path d="M20 200 a20 20 0 0 0 40 0" />
        <path d="M100 200 a20 20 0 0 0 40 0" />
      </g>
      <g stroke="#000048">
        <path d="M20 120 V40 a20 20 0 0 1 40 0 V120" />
        <path d="M60 120 V40" />
        <path d="M100 120 V40 a20 20 0 0 1 40 0 V120" />
        <path d="M140 120 V70 a15 15 0 0 1 30 0 V120" />
        <path d="M20 120 a20 20 0 0 0 40 0" />
        <path d="M100 120 a20 20 0 0 0 40 0" />
      </g>
    </g>
  </svg>
);

const MeduLockup = ({ size = 32 }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <MeduLogomark size={size} />
    <span
      style={{
        fontFamily: "MuseoModerno, Quicksand, sans-serif",
        fontWeight: 500,
        fontSize: size * 0.75,
        color: "#000048",
        lineHeight: 1,
        letterSpacing: "-0.01em",
      }}
    >
      medu<span style={{ color: "#FFC8C7" }}>.</span>game
    </span>
  </div>
);

window.MeduLogomark = MeduLogomark;
window.MeduLockup = MeduLockup;
