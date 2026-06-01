// TopBar.jsx — header with search + profile

const TopBar = ({ user, onProfile }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 32px",
      borderBottom: "1px solid rgba(0,0,72,0.08)",
      background: "#fff",
    }}>
      {/* Search */}
      <div style={{
        flex: 1,
        maxWidth: 480,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#FFF4F4",
        padding: "10px 16px",
        borderRadius: 999,
      }}>
        <i data-lucide="search" style={{ width: 16, height: 16, color: "rgba(0,0,72,0.5)" }} />
        <input
          placeholder="zoek scenario, casus, vaardigheid..."
          style={{
            border: 0,
            background: "transparent",
            outline: "none",
            fontFamily: "Fieldwork Geo, sans-serif",
            fontSize: 14,
            color: "#000048",
            flex: 1,
          }}
        />
      </div>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
        <button style={{ background: "transparent", border: 0, cursor: "pointer", color: "#000048", padding: 6 }}>
          <i data-lucide="bell" style={{ width: 20, height: 20 }} />
        </button>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "transparent",
              border: 0,
              cursor: "pointer",
              padding: 4,
              borderRadius: 999,
            }}
          >
            <Avatar initials={user.initials} size={36} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 13, color: "#000048", lineHeight: 1.2 }}>
                {user.name}
              </div>
              <div style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 300, fontSize: 11, color: "rgba(0,0,72,0.6)" }}>
                {user.role}
              </div>
            </div>
            <i data-lucide="chevron-down" style={{ width: 14, height: 14, color: "rgba(0,0,72,0.5)" }} />
          </button>
          {open && (
            <div style={{
              position: "absolute",
              right: 0,
              top: "calc(100% + 6px)",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 24px 48px -20px rgba(0,0,72,0.25)",
              padding: 6,
              minWidth: 180,
              zIndex: 50,
            }}>
              <button onClick={onProfile} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", background: "transparent", border: 0, fontFamily: "Fieldwork Geo, sans-serif", fontSize: 14, color: "#000048", borderRadius: 8, cursor: "pointer" }}>
                uitloggen
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

window.TopBar = TopBar;
