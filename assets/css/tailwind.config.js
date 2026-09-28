tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#D4AF37",
        "primary-dark": "#B8941F",
        "primary-light": "#E8C97A",
        "background-light": "#FAF7F2",
        "background-dark": "#1A1A1A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#262626",
        "text-light": "#1A1A1A",
        "text-dark": "#FAF7F2",
        "text-muted-light": "#6B6B6B",
        "text-muted-dark": "#B5B5B5",
        "border-light": "#E8E2D5",
        "border-dark": "#3A3A3A",
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
};
