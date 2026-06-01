// Sidebar.jsx — left vertical nav for the app shell

const Icon = ({ name, size = 20 }) => (
  <i data-lucide={name} style={{ width: size, height: size }} />
);

const NavItem = ({ icon, label, active, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        borderRadius: 999,
        border: 0,
        background: active ? "#FFE0E0" : hovered ? "rgba(0,0,72,0.04)" : "transparent",
        color: "#000048",
        fontFamily: "Fieldwork Geo, sans-serif",
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
        transition: "all 140ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </button>
  );
};

const Sidebar = ({ active, onNavigate, onLogout }) => {
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  const nav = [
    { id: "dashboard", icon: "layout-dashboard", label: "dashboard" },
    { id: "scenarios", icon: "stethoscope", label: "scenario's" },
    { id: "library", icon: "book-open", label: "bibliotheek" },
    { id: "progress", icon: "trending-up", label: "voortgang" },
    { id: "team", icon: "users", label: "mijn team" },
  ];
  return (
    <aside style={{
      width: 240,
      background: "#fff",
      borderRight: "1px solid rgba(0,0,72,0.08)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      flexShrink: 0,
    }}>
      <div style={{ marginBottom: 18, padding: "0 6px" }}>
        <MeduLockup size={28} />
      </div>
      {nav.map(n => (
        <NavItem key={n.id} icon={n.icon} label={n.label} active={active === n.id} onClick={() => onNavigate?.(n.id)} />
      ))}
      <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid rgba(0,0,72,0.08)" }}>
        <NavItem icon="settings" label="instellingen" />
        <NavItem icon="log-out" label="uitloggen" onClick={onLogout} />
      </div>
    </aside>
  );
};

window.Sidebar = Sidebar;
window.NavIcon = Icon;
