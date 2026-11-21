
export default function Button({
  children,
  onClick,text,
  type = "button",
  className = "",
  disabled = false
}) {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
