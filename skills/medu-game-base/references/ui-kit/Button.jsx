// Button.jsx

const buttonBase = {
  fontFamily: "Fieldwork Geo, Nunito, sans-serif",
  fontWeight: 600,
  fontSize: 15,
  borderRadius: 999,
  padding: "12px 24px",
  border: 0,
  cursor: "pointer",
  transition: "all 140ms cubic-bezier(0.22,1,0.36,1)",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  whiteSpace: "nowrap",
};

const Button = ({ variant = "primary", children, onClick, disabled, style, ...rest }) => {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const variants = {
    primary: {
      background: pressed ? "#000048" : hovered ? "#0A0A66" : "#000048",
      color: "#fff",
      transform: pressed ? "translateY(1px)" : "none",
    },
    secondary: {
      background: hovered ? "#1A1AA0" : "#141484",
      color: "#fff",
    },
    pink: {
      background: hovered ? "#FFB8B7" : "#FFC8C7",
      color: "#000048",
    },
    outline: {
      background: hovered ? "#FFE0E0" : "transparent",
      color: "#000048",
      border: "1.5px solid #FFC8C7",
    },
    ghost: {
      background: hovered ? "rgba(0,0,72,0.05)" : "transparent",
      color: "#000048",
    },
  };

  return (
    <button
      type="button"
      style={{
        ...buttonBase,
        ...variants[variant],
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

window.Button = Button;
