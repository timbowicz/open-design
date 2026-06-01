// ProgressBar.jsx + Avatar.jsx

const ProgressBar = ({ value, max = 100, label, showCount }) => {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div>
      {(label || showCount) && (
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Fieldwork Geo, sans-serif", fontSize: 13, color: "#000048", fontWeight: 600, marginBottom: 8 }}>
          {label && <span>{label}</span>}
          {showCount && <span>{value} / {max}</span>}
        </div>
      )}
      <div style={{ height: 8, background: "#FFE0E0", borderRadius: 999, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "#000048", borderRadius: 999, transition: "width 420ms cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
    </div>
  );
};

const Avatar = ({ initials, size = 40, color = "#FFC8C7", textColor = "#000048" }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      color: textColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Fieldwork Geo, sans-serif",
      fontWeight: 600,
      fontSize: size * 0.4,
      flexShrink: 0,
    }}
  >
    {initials}
  </div>
);

window.ProgressBar = ProgressBar;
window.Avatar = Avatar;
