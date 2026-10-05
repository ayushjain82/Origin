tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        slate: {
          850: "#1e293b",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "trophy-pulse": "trophy-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "confetti-drift": "confetti-drift 3s ease-out infinite",
        orbit: "orbit 5s linear infinite",
      },
      keyframes: {
        "trophy-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        "confetti-drift": {
          "0%": { transform: "translateY(-20px) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(150px) rotate(360deg)", opacity: "0" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(40px) rotate(-360deg)" },
        },
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("labSearch");
  const cards = document.querySelectorAll(".lab-card");

  searchInput?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach((card) => {
      const cardContent = card.textContent.toLowerCase();
      card.style.display = cardContent.includes(searchTerm) ? "flex" : "none";
    });
  });
});
