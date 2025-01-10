import { useEffect, useState } from "react";

export const useTheme = () => {
  // Define theme styles
  const themes = [
    {
      title: "--background-color",
      light: "#fff",
      dark: "#222",
    },
    {
      title: "--modal-background",
      light: "#fff",
      dark: "#2c2c2c",
    },
    {
      title: "--text-color",
      light: "#000",
      dark: "#eee",
    },
    {
      title: "--accent-color",
      light: "#4b0082",
      dark: "#980efa",
    },
    {
      title: "--input-border-color",
      light: "rgba(0, 0, 0, 0.5)",
      dark: "rgba(255, 255, 255, 0.5)",
    },
    {
      title: "--border-light",
      light: "rgba(0, 0, 0, 0.3)",
      dark: "rgba(255, 255, 255, 0.3)",
    },
    {
      title: "--dark-button",
      light: "#1e1e1e",
      dark: "#ddd",
    },
  ];

  // Retrieve the saved theme or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Apply theme styles to the document root
    themes.forEach(({ title, light, dark }) => {
      const value = theme === "light" ? light : dark;
      document.documentElement.style.setProperty(title, value);
    });
  }, [theme]);

  const changeTheme = (newTheme) => {
    // const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, changeTheme };
};
