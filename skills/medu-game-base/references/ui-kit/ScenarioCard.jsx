// ScenarioCard.jsx — large clickable card for a scenario

const ScenarioCard = ({ scenario, onOpen }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen?.(scenario)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 20,
        boxShadow: hovered
          ? "0 20px 36px -18px rgba(0,0,72,0.22), 0 3px 8px -2px rgba(0,0,72,0.08)"
          : "0 12px 28px -16px rgba(0,0,72,0.18), 0 2px 6px -2px rgba(0,0,72,0.06)",
        cursor: "pointer",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero strip — pink with pattern + scenario eyebrow */}
      <div style={{
        height: 96,
        background: `${scenario.bg || "#FFE0E0"} url(../../assets/brand/logos/pattern-pink.svg)`,
        backgroundSize: "180px 180px",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
      }}>
        <div style={{ position: "absolute", top: 14, left: 16 }}>
          <Badge variant="blueDark">{scenario.category}</Badge>
        </div>
        {scenario.isNew && (
          <div style={{ position: "absolute", top: 14, right: 16 }}>
            <Badge variant="pinkSolid" dot>nieuw</Badge>
          </div>
        )}
      </div>

      <div style={{ padding: "18px 22px 22px" }}>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 18, color: "#000048", lineHeight: 1.25 }}>
          {scenario.title}
        </div>
        <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 14, color: "rgba(0,0,72,0.6)", lineHeight: 1.5, marginTop: 6, minHeight: 42 }}>
          {scenario.summary}
        </div>

        <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
          <Badge variant="pink">{scenario.duration}</Badge>
          <Badge variant="pink">niveau {scenario.level}</Badge>
          {scenario.completed != null && scenario.completed > 0 && (
            <Badge variant="outline">{scenario.completed}× gespeeld</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

window.ScenarioCard = ScenarioCard;
