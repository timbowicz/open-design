// Card.jsx — base white surface

const Card = ({ children, hoverable, onClick, style }) => {
  const [hovered, setHovered] = React.useState(false);
  const isClickable = Boolean(onClick) || hoverable;
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: hovered && isClickable
          ? "0 20px 36px -18px rgba(0,0,72,0.22), 0 3px 8px -2px rgba(0,0,72,0.08)"
          : "0 12px 28px -16px rgba(0,0,72,0.18), 0 2px 6px -2px rgba(0,0,72,0.06)",
        padding: 24,
        cursor: isClickable ? "pointer" : "default",
        transform: hovered && isClickable ? "translateY(-2px)" : "none",
        transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

window.Card = Card;
