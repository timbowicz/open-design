// Badge.jsx — pill tags

const Badge = ({ variant = "pink", children, dot }) => {
  const variants = {
    pink: { background: "#FFE0E0", color: "#000048" },
    pinkSolid: { background: "#FFC8C7", color: "#000048" },
    blue: { background: "#141484", color: "#fff" },
    blueDark: { background: "#000048", color: "#fff" },
    outline: { background: "transparent", color: "#000048", border: "1.5px solid rgba(0,0,72,0.2)" },
    success: { background: "#E0F4EA", color: "#0F6B3F" },
    danger: { background: "#FFE0E0", color: "#A8002B" },
  };
  return (
    <span
      style={{
        fontFamily: "Fieldwork Geo, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        padding: "5px 12px",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        ...variants[variant],
      }}
    >
      {dot && (
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
      )}
      {children}
    </span>
  );
};

window.Badge = Badge;
