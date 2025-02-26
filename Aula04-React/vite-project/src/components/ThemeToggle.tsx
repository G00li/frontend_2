import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "claro" ? "#fff" : "#333",
        color: theme === "claro" ? "#000" : "#fff",
        border: "1px solid #ccc",
        cursor: "pointer",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      Alterar para {theme === "claro" ? "escuro" : "claro"}
    </button>
  );
}
