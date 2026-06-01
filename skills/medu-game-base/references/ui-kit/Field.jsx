// Field.jsx — labeled text input

const Field = ({ label, type = "text", value, onChange, placeholder, hint }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: "Fieldwork Geo, sans-serif", fontWeight: 600, fontSize: 13, color: "#000048" }}>
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: "Fieldwork Geo, sans-serif",
          fontSize: 15,
          color: "#000048",
          padding: "12px 14px",
          borderRadius: 10,
          border: `1.5px solid ${focused ? "#141484" : "rgba(0,0,72,0.2)"}`,
          background: "#fff",
          outline: "none",
          boxShadow: focused ? "0 0 0 4px rgba(20,20,132,0.12)" : "none",
          transition: "all 140ms cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      {hint && (
        <span style={{ fontFamily: "Fieldwork Geo, sans-serif", fontSize: 12, color: "rgba(0,0,72,0.6)" }}>
          {hint}
        </span>
      )}
    </label>
  );
};

window.Field = Field;
