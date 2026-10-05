const answers = {
  launch: {
    title: "Profile API is the primary active launch risk.",
    body: "The formal commitment is Oct 26, but the newer forecast is approximately Nov 15. Production needs the real API by Nov 9 to preserve the planned readiness window. The material issue is not simply that an API is “late” — it is the downstream readiness impact.",
    path: ["Profile API", "Security + QA", "Production Readiness", "Nov 30 Launch"],
  },
  uat: {
    title: "No — UAT remains on track.",
    body: "UAT can use the static mock API and Swagger spec available Oct 10. The real Profile API is required later for production readiness. A dependency slip should not automatically turn every downstream milestone red.",
    path: ["Mock API · Oct 10", "UAT · On Track"],
  },
  blast: {
    title: "The risk propagates through readiness, not through UAT.",
    body: "The latest Profile API signal misses the Nov 9 production need-by by roughly six days, compressing the planned Security/QA/readiness runway. Nexus traces the dependency path to show where that signal becomes material.",
    path: ["Profile API", "Security + QA", "Production Readiness", "Launch"],
  },
  eu: {
    title: "Conditional / Unknown.",
    body: "The evidence says an updated consent schema is required before EU production traffic, but it does not yet establish whether EU traffic is included in the Nov 30 launch. Nexus should preserve that uncertainty rather than invent scope or a required-by date.",
    path: ["EU Consent", "EU scope? · Unknown", "Launch impact · Conditional"],
  },
};
function renderAnswer(key) {
  const a = answers[key];
  document.getElementById("answer").innerHTML =
    `<h3 class="font-bold text-indigo-800">${a.title}</h3><p>${a.body}</p><div class="impact">${a.path.map((x, i) => `<span class="node">${x}</span>${i < a.path.length - 1 ? '<span class="arrow">→</span>' : ""}`).join("")}</div>`;
  document.querySelectorAll(".q").forEach((b) => {
    const on = b.dataset.answer === key;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
}
document.querySelectorAll(".q").forEach((b) => b.addEventListener("click", () => renderAnswer(b.dataset.answer)));
renderAnswer("launch");
const applyBtn = document.getElementById("applyBtn"),
  descopeBtn = document.getElementById("descopeBtn"),
  why = document.getElementById("readinessWhy"),
  msg = document.getElementById("applyMsg");
applyBtn.addEventListener("click", function () {
  why.textContent = "Profile API + EU Consent";
  msg.innerHTML =
    '<strong style="color:#047857">Applied to scenario.</strong> EU Consent is now required; its timing impact remains unknown until a required-by date is known.';
  this.textContent = "Applied ✓";
  this.disabled = true;
  this.style.background = "#047857";
  descopeBtn.classList.remove("hidden");
});
descopeBtn.addEventListener("click", function () {
  why.textContent = "Profile API";
  msg.innerHTML =
    '<strong style="color:#047857">EU descoped.</strong> EU Consent has left the current launch picture; the earlier entry is preserved as history (see next section).';
  this.classList.add("hidden");
  applyBtn.textContent = "Review & Apply Scenario";
  applyBtn.disabled = false;
  applyBtn.style.background = "";
});
