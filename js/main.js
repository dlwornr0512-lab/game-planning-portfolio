const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const projectSections = $("[data-project-sections]");
const timelineEl = $("[data-timeline]");
const modal = $("[data-modal]");
const modalTitle = $("[data-modal-title]");
const modalEyebrow = $("[data-modal-eyebrow]");
const modalBody = $("[data-modal-body]");

function imageUrl(project) {
  return project.image || project.fallbackImage;
}

function projectStory(project) {
  return project.storyIntro || project.summary || "";
}

function renderProjectSections() {
  projectSections.innerHTML = PROJECTS.map((project, index) => `
    <section
      class="project-page simplified-project-page"
      id="${project.id}"
      data-align="left"
      data-color="${project.color}"
    >
      <div
        class="project-bg"
        style="background-image: linear-gradient(90deg, rgba(9,10,13,.72), rgba(9,10,13,.30), rgba(9,10,13,.54)), url('${imageUrl(project)}');"
        aria-hidden="true"
      ></div>

      <div class="container project-layout simplified-project-layout">
        <article class="project-copy simplified-project-copy reveal">
          <span class="project-index">${String(index + 1).padStart(2, "0")} / ${project.category}</span>
          <h2>${project.title}</h2>

          <div class="project-simple-info">
            <span>${project.category}</span>
            <span>${project.genre}</span>
          </div>

          <p class="project-subtitle">${project.theme}</p>
          <p class="project-summary">${projectStory(project)}</p>

          <div class="project-actions">
            <button class="btn primary" type="button" data-open-detail="${project.id}">상세 보기</button>
            <button class="btn document" type="button" data-open-docs="${project.id}">문서 보기</button>
            <button class="btn ghost" type="button" data-open-video="${project.id}">영상 보기</button>
          </div>
        </article>
      </div>
    </section>
  `).join("");
}

function renderTimeline() {
  if (!timelineEl || !Array.isArray(TIMELINE)) return;

  // Detailed timeline structure support:
  // 1) Array with projectId items
  // 2) Object keyed by project id
  if (!Array.isArray(TIMELINE)) return;

  const hasProjectTabs = TIMELINE.some((item) => item.projectId || item.items);
  if (!hasProjectTabs) {
    timelineEl.innerHTML = TIMELINE.map((item) => `
      <article class="timeline-item reveal">
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-card">
          <small>${item.project}</small>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      </article>
    `).join("");
    return;
  }

  const grouped = PROJECTS.map((project) => ({
    project,
    items: TIMELINE.filter((item) => item.projectId === project.id || item.project === project.title)
  }));

  timelineEl.innerHTML = `
    <div class="timeline-tabs reveal" data-timeline-tabs>
      ${grouped.map((group, index) => `
        <button class="timeline-tab ${index === 0 ? "active" : ""}" type="button" data-timeline-target="${group.project.id}">
          ${group.project.title}
        </button>
      `).join("")}
    </div>

    ${grouped.map((group, index) => `
      <div class="timeline-panel ${index === 0 ? "active" : ""}" data-timeline-panel="${group.project.id}">
        ${group.items.map((item) => `
          <article class="timeline-detail-card reveal">
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-card">
              <small>${group.project.title}</small>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>

              ${item.works ? `
                <div class="timeline-columns">
                  <div>
                    <strong>작업 내용</strong>
                    <ul>${item.works.map((work) => `<li>${work}</li>`).join("")}</ul>
                  </div>
                  <div>
                    <strong>결과물</strong>
                    <ul>${(item.outputs || []).map((output) => `<li>${output}</li>`).join("")}</ul>
                  </div>
                </div>
              ` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    `).join("")}
  `;
}

function renderProfile() {
  const intro = $("[data-profile-intro]");
  const github = $("[data-github]");
  const notion = $("[data-notion]");
  const youtube = $("[data-youtube]");

  if (intro) intro.textContent = PROFILE.intro;
  if (github) github.textContent = PROFILE.github;
  if (notion) notion.textContent = PROFILE.notion;
  if (youtube) youtube.textContent = PROFILE.youtube;
}

function renderSkills() {
  const skillsEl = $("[data-skills]");
  if (!skillsEl) return;

  skillsEl.innerHTML = SKILLS.map((skill, index) => `
    <article class="skill-card reveal">
      <span class="number">${String(index + 1).padStart(2, "0")}</span>
      <h3>${skill.title}</h3>
      <p>${skill.desc}</p>
    </article>
  `).join("");
}

function renderTools() {
  const toolsEl = $("[data-tools]");
  if (!toolsEl) return;

  toolsEl.innerHTML = TOOLS.map((tool) => `
    <article class="tool-card reveal">
      <h3>${tool.title}</h3>
      <ul>
        ${tool.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function openModal(title, eyebrow, html) {
  modalTitle.textContent = title;
  modalEyebrow.textContent = eyebrow;
  modalBody.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.hidden = true;
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
}

function getProject(id) {
  return PROJECTS.find((project) => project.id === id);
}

function openProjectDetail(id) {
  const project = getProject(id);
  if (!project) return;

  openModal(project.title, "Project Detail", `
    <div class="detail-project">
      <div class="detail-hero">
        <p class="eyebrow">${project.category} · ${project.genre}</p>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
      </div>

      <div class="detail-grid">
        <article class="detail-box">
          <h3>프로젝트 정보</h3>
          <ul class="detail-info-list">
            <li><strong>프로젝트</strong><span>${project.category}</span></li>
            <li><strong>장르</strong><span>${project.genre}</span></li>
            <li><strong>테마</strong><span>${project.theme}</span></li>
            <li><strong>담당</strong><span>${project.role}</span></li>
          </ul>
        </article>

        <article class="detail-box">
          <h3>핵심 기획 포인트</h3>
          <ul>
            ${project.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      </div>

      <div class="detail-actions">
        <button class="btn document" type="button" data-open-docs="${project.id}">문서 보기</button>
        <button class="btn ghost" type="button" data-open-video="${project.id}">영상 보기</button>
      </div>
    </div>
  `);
}

function openDocuments(id) {
  const project = getProject(id);
  if (!project) return;

  openModal(`${project.title} 문서 보기`, "Project Documents", `
    <div class="document-grid">
      ${project.documents.map((doc) => `
        <article class="document-card">
          <small>${project.title}</small>
          <h3>${doc.title}</h3>
          <div class="document-actions">
            <button class="btn ghost" type="button" data-open-pdf="${doc.file}" data-pdf-title="${project.title} · ${doc.title}">
              미리보기
            </button>
            <a class="btn ghost" href="${doc.file}" target="_blank" rel="noopener">
              새 탭 열기
            </a>
          </div>
        </article>
      `).join("")}
    </div>
  `);
}

function openPdf(file, title) {
  openModal(title, "PDF Preview", `
    <iframe class="pdf-frame" src="${file}" title="${title}"></iframe>
  `);
}

function youtubeEmbedUrl(id) {
  if (!id || id === "REPLACE_WITH_YOUTUBE_ID") return "";
  return `https://www.youtube.com/embed/${id}`;
}

function openVideo(id) {
  const project = getProject(id);
  if (!project) return;

  const src = youtubeEmbedUrl(project.video.youtubeId);

  if (!src) {
    openModal(project.video.title, "Prototype Video", `
      <div class="video-placeholder">
        <h3>YouTube 영상 ID를 입력하면 이곳에 영상이 표시됩니다.</h3>
        <p>
          <strong>js/projects.js</strong> 파일에서
          <code>${project.title}</code> 프로젝트의 <code>video.youtubeId</code> 값을 실제 YouTube 영상 ID로 교체하세요.
        </p>
        <p>
          예시: <code>https://www.youtube.com/watch?v=abc123</code> 주소라면
          <code>abc123</code>만 입력하면 됩니다.
        </p>
      </div>
    `);
    return;
  }

  openModal(project.video.title, "Prototype Video", `
    <iframe
      class="video-frame"
      src="${src}"
      title="${project.video.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const detailBtn = event.target.closest("[data-open-detail]");
    const docsBtn = event.target.closest("[data-open-docs]");
    const videoBtn = event.target.closest("[data-open-video]");
    const pdfBtn = event.target.closest("[data-open-pdf]");
    const closeBtn = event.target.closest("[data-modal-close]");
    const timelineTab = event.target.closest("[data-timeline-target]");

    if (detailBtn) openProjectDetail(detailBtn.dataset.openDetail);
    if (docsBtn) openDocuments(docsBtn.dataset.openDocs);
    if (videoBtn) openVideo(videoBtn.dataset.openVideo);
    if (pdfBtn) openPdf(pdfBtn.dataset.openPdf, pdfBtn.dataset.pdfTitle);
    if (closeBtn) closeModal();

    if (timelineTab) {
      const target = timelineTab.dataset.timelineTarget;
      $$("[data-timeline-target]").forEach((tab) => tab.classList.toggle("active", tab === timelineTab));
      $$("[data-timeline-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.timelinePanel === target));
      observeReveals();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  const navToggle = $("[data-nav-toggle]");
  const navLinks = $("[data-nav-links]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const opened = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(opened));
    });

    $$("[data-nav-links] a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function observeReveals() {
  const targets = $$(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((target) => observer.observe(target));
}

function observeActiveNav() {
  const links = $$("[data-nav-links] a");
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === id));
    });
  }, {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0
  });

  sections.forEach((section) => observer.observe(section));
}

function setYear() {
  const year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

function init() {
  renderProjectSections();
  renderTimeline();
  renderProfile();
  renderSkills();
  renderTools();
  bindEvents();
  observeReveals();
  observeActiveNav();
  setYear();
}

init();
