const DEFAULT_PROJECTS = [
    {
        "title": "High-Power RF Amplifier & RF Filter Bank",
        "org": "Star Aerospace • Feb 2026 – Present",
        "desc": "Engineered a high-power RF amplifier and switched filter bank on Rogers RO4350B substrate paired with AMD Xilinx Zynq UltraScale+ MPSoC / RFSoC platforms compliant with MIL-STD-810, DO-254, and VITA 46/65.",
        "tags": [
            "Rogers RO4350B",
            "Zynq UltraScale+ RFSoC",
            "MIL-STD-810",
            "DO-254"
        ],
        "image": "assets/images/rf-amplifier.jpg",
        "repo": "https://github.com/moneshrathod"
    },
    {
        "title": "BotSDR — Software-Defined Radio Transceiver",
        "org": "BotLab Dynamics • Oct 2025 – Jan 2026",
        "desc": "Architected and brought up a dual-channel agile RF transceiver board integrating Analog Devices AD9361 (2x2 RF Agile Transceiver) with a Xilinx Zynq-7000 FPGA SoC, controlled-impedance RF routing, and NanoVNA validation.",
        "tags": [
            "AD9361 2x2 RF",
            "Xilinx Zynq-7000",
            "Controlled Impedance",
            "NanoVNA"
        ],
        "image": "assets/images/botsdr.jpg",
        "repo": "https://github.com/moneshrathod"
    },
    {
        "title": "Dual-Platform Industrial Ethernet Gateway",
        "org": "Pinetics Pvt Ltd • Swiss Industrial Client",
        "desc": "Developed a 5-port industrial Ethernet gateway combining an STM32H563x (176-UFBGA) controller board with Hilscher netX 90 and an NXP i.MX8QP SOM carrier board with Anybus B40.",
        "tags": [
            "STM32H563x",
            "NXP i.MX8QP SOM",
            "Hilscher netX 90",
            "Signal Integrity"
        ],
        "image": "assets/images/ethernet-gateway.jpg",
        "repo": "https://github.com/moneshrathod"
    },
    {
        "title": "10-Inch Android Instrument Cluster for EV Scooters",
        "org": "Pinetics Pvt Ltd • Indian EV OEM",
        "desc": "Engineered a cost-optimized 10-inch capacitive touch Android 10 instrument cluster powered by Neoway S720 SiP, achieving a production BOM under ₹4,000 with high-volume DFx guidelines.",
        "tags": [
            "Neoway S720 SiP",
            "MIPI DSI",
            "BOM < ₹4,000",
            "High-Volume DFx"
        ],
        "image": "assets/images/ev-cluster.jpg",
        "repo": "https://github.com/moneshrathod"
    },
    {
        "title": "Custom Fall Detection System PCB (2nd Prize Capstone)",
        "org": "Savitribai Phule Pune University • B.E. Project",
        "desc": "Designed, fabricated, soldered, and brought up a custom PCB integrating microcontroller, GPS, and GSM modules for automated emergency fall alerts.",
        "tags": [
            "Custom PCB",
            "GPS / GSM",
            "Board Bring-Up"
        ],
        "image": "assets/images/fall-detection-pcb.jpg",
        "repo": "https://github.com/moneshrathod"
    }
];

const GITHUB_ICON_SVG = `<svg class="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.03 11.03 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35 0.5 12 0.5z"/></svg>`;

function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("bw_theme") || "night";
function applyTheme(theme) {
    if (theme === "day") {
        document.documentElement.setAttribute("data-theme", "day");
        themeToggle.textContent = "🌙 Night";
    } else {
        document.documentElement.removeAttribute("data-theme");
        themeToggle.textContent = "☀️ Day";
    }
    localStorage.setItem("bw_theme", theme);
}
applyTheme(savedTheme);
themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "day" ? "day" : "night";
    applyTheme(current === "day" ? "night" : "day");
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

const confirmModal = document.getElementById("confirm-modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalConfirmBtn = document.getElementById("modal-confirm-btn");
const modalCancelBtn = document.getElementById("modal-cancel-btn");
let pendingConfirmAction = null;
function openConfirmModal(title, message, onConfirm) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    pendingConfirmAction = onConfirm;
    confirmModal.classList.remove("hidden");
}
function closeConfirmModal() {
    confirmModal.classList.add("hidden");
    pendingConfirmAction = null;
}
modalConfirmBtn.addEventListener("click", () => { if (typeof pendingConfirmAction === "function") pendingConfirmAction(); closeConfirmModal(); });
modalCancelBtn.addEventListener("click", closeConfirmModal);

const toastEl = document.getElementById("toast");
let toastTimer = null;
function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}

const STORAGE_KEY = "bw_projects_v3";
let projects = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...DEFAULT_PROJECTS];
let currentSlide = 0;

const container = document.getElementById("projects-container");
const sliderControls = document.getElementById("slider-controls");
const slideCounter = document.getElementById("slide-counter");
const slideDots = document.getElementById("slide-dots");
const prevSlideBtn = document.getElementById("prev-slide-btn");
const nextSlideBtn = document.getElementById("next-slide-btn");
const editorPanel = document.getElementById("project-editor");
const toggleEditorBtn = document.getElementById("toggle-editor-btn");
const projectForm = document.getElementById("project-form");

function saveProjects() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    if (currentSlide >= projects.length) currentSlide = Math.max(0, projects.length - 1);
    renderSlide();
}

function renderSlide() {
    container.innerHTML = "";
    slideDots.innerHTML = "";
    if (projects.length === 0) {
        container.innerHTML = '<div class="project-card"><p>No projects yet. Click "+ Manage / Add Project" to add one.</p></div>';
        sliderControls.style.display = "none";
        return;
    }
    sliderControls.style.display = "flex";
    const p = projects[currentSlide];
    const repoButtonHtml = (p.repo && p.repo.trim())
        ? `<a href="${escapeHtml(p.repo.trim())}" target="_blank" rel="noopener" class="github-repo-btn">${GITHUB_ICON_SVG}<span>GitHub Repo ↗</span></a>`
        : "<span></span>";
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
        <div>
            ${p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy" onerror="this.style.display='none'">` : ""}
            <div class="project-meta">${escapeHtml(p.org)}</div>
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.desc)}</p>
        </div>
        <div>
            <div class="tags">${(p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
            <div class="card-footer-bar">
                ${repoButtonHtml}
                <div class="card-actions">
                    <button type="button" class="text-link-btn" onclick="editProject(${currentSlide})">Edit</button>
                    <button type="button" class="text-link-btn" onclick="deleteProject(${currentSlide})">Delete</button>
                </div>
            </div>
        </div>`;
    container.appendChild(card);
    slideCounter.textContent = `${currentSlide + 1} / ${projects.length}`;
    projects.forEach((_, idx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = `slide-dot${idx === currentSlide ? " active" : ""}`;
        dot.addEventListener("click", () => { currentSlide = idx; renderSlide(); });
        slideDots.appendChild(dot);
    });
}

function goToPrevSlide() { if (projects.length) { currentSlide = (currentSlide - 1 + projects.length) % projects.length; renderSlide(); } }
function goToNextSlide() { if (projects.length) { currentSlide = (currentSlide + 1) % projects.length; renderSlide(); } }
prevSlideBtn.addEventListener("click", goToPrevSlide);
nextSlideBtn.addEventListener("click", goToNextSlide);
document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowLeft") goToPrevSlide();
    if (e.key === "ArrowRight") goToNextSlide();
});

let touchStartX = 0;
container.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
container.addEventListener("touchend", (e) => {
    const diffX = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diffX) > 45) diffX > 0 ? goToPrevSlide() : goToNextSlide();
}, { passive: true });

toggleEditorBtn.addEventListener("click", () => editorPanel.classList.toggle("hidden"));
window.editProject = function(idx) {
    const p = projects[idx];
    document.getElementById("edit-index").value = idx;
    document.getElementById("proj-title").value = p.title;
    document.getElementById("proj-org").value = p.org;
    document.getElementById("proj-tags").value = (p.tags || []).join(", ");
    document.getElementById("proj-image").value = p.image || "";
    document.getElementById("proj-repo").value = p.repo || "";
    document.getElementById("proj-desc").value = p.desc;
    document.getElementById("editor-form-title").textContent = "Edit Project #" + (idx + 1);
    editorPanel.classList.remove("hidden");
    editorPanel.scrollIntoView({ behavior: "smooth" });
};
window.deleteProject = function(idx) {
    openConfirmModal("Delete Project", `Delete "${projects[idx].title}"?`, () => {
        projects.splice(idx, 1);
        saveProjects();
        showToast("Project deleted.");
    });
};
projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const idx = parseInt(document.getElementById("edit-index").value, 10);
    const updatedProj = {
        title: document.getElementById("proj-title").value.trim(),
        org: document.getElementById("proj-org").value.trim(),
        tags: document.getElementById("proj-tags").value.split(",").map(s => s.trim()).filter(Boolean),
        image: document.getElementById("proj-image").value.trim(),
        repo: document.getElementById("proj-repo").value.trim(),
        desc: document.getElementById("proj-desc").value.trim()
    };
    if (idx >= 0) { projects[idx] = updatedProj; currentSlide = idx; showToast("Project updated."); }
    else { projects.unshift(updatedProj); currentSlide = 0; showToast("Project added."); }
    projectForm.reset();
    document.getElementById("edit-index").value = "-1";
    document.getElementById("editor-form-title").textContent = "Add / Edit Project";
    saveProjects();
});
document.getElementById("cancel-edit-btn").addEventListener("click", () => {
    projectForm.reset();
    document.getElementById("edit-index").value = "-1";
    document.getElementById("editor-form-title").textContent = "Add / Edit Project";
});
document.getElementById("reset-default-btn").addEventListener("click", () => {
    openConfirmModal("Reset Defaults", "Reset projects back to default list?", () => {
        projects = [...DEFAULT_PROJECTS];
        currentSlide = 0;
        saveProjects();
        showToast("Projects reset to default.");
    });
});
document.getElementById("export-js-btn").addEventListener("click", () => {
    fetch("script.js").then(r => r.text()).then(code => {
        const updatedCode = code.replace(/const DEFAULT_PROJECTS = \[[\s\S]*?\];/, `const DEFAULT_PROJECTS = ${JSON.stringify(projects, null, 4)};`);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([updatedCode], { type: "application/javascript" }));
        a.download = "script.js";
        a.click();
    });
});
renderSlide();