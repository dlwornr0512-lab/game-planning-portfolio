const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

const projectSections = $('[data-project-sections]');
const timelineEl = $('[data-timeline]');
const modal = $('[data-modal]');
const modalTitle = $('[data-modal-title]');
const modalEyebrow = $('[data-modal-eyebrow]');
const modalBody = $('[data-modal-body]');

let activeTimelineProject = TIMELINE[0]?.projectId || 'leonard';

function getProject(id) {
  return PROJECTS.find((project) => project.id === id);
}

function getTimelineGroup(id) {
  return TIMELINE.find((group) => group.projectId === id) || TIMELINE[0];
}

function renderProjectSections() {
  projectSections.innerHTML = PROJECTS.map((project, index) => `
    <section class="project-page simplified-project-page" id="${project.id}" data-align="left" data-color="${project.color}">
      <div
        class="project-bg"
        style="background-image: linear-gradient(90deg, rgba(9,10,13,.72), rgba(9,10,13,.30), rgba(9,10,13,.54)), url('${project.image}');"
        aria-hidden="true"
      ></div>

      <div class="container project-layout simplified-project-layout">
        <article class="project-copy simplified-project-copy reveal">
          <span class="project-index">${String(index + 1).padStart(2, '0')} / ${project.category}</span>
          <h2>${project.title}</h2>

          <div class="project-simple-info">
            <span>${project.category}</span>
            <span>${project.genre}</span>
          </div>

          <p class="project-subtitle">${project.theme}</p>
          <p class="project-summary">${project.cardSummary || project.storyIntro || project.summary}</p>

          <div class="project-actions">
            <button class="btn primary" type="button" data-open-detail="${project.id}">상세 보기</button>
            <button class="btn document" type="button" data-open-docs="${project.id}">문서 보기</button>
            ${project.simulator
              ? `<a class="btn ghost" href="${project.simulator.url}" target="_blank" rel="noopener">게임 시뮬레이터</a>`
              : `<button class="btn ghost" type="button" data-open-video="${project.id}">영상 보기</button>`
            }
          </div>
        </article>
      </div>
    </section>
  `).join('');
}

function renderTimeline() {
  const activeGroup = getTimelineGroup(activeTimelineProject);

  timelineEl.innerHTML = `
    <div class="timeline-tabs reveal" role="tablist" aria-label="프로젝트별 작업 히스토리">
      ${TIMELINE.map((group) => `
        <button
          class="timeline-tab ${group.projectId === activeGroup.projectId ? 'active' : ''}"
          type="button"
          role="tab"
          aria-selected="${group.projectId === activeGroup.projectId}"
          data-timeline-tab="${group.projectId}"
        >
          <strong>${group.project}</strong>
          <span>${group.subtitle}</span>
        </button>
      `).join('')}
    </div>

    <div class="timeline-panel reveal" data-active-timeline="${activeGroup.projectId}">
      <div class="timeline-panel-head">
        <p class="eyebrow">${activeGroup.project}</p>
        <h3>${activeGroup.subtitle}</h3>
        <p>작업 내용과 결과물을 프로젝트별로 분리해 정리했습니다. 항목은 나중에 실제 날짜와 산출물명에 맞춰 수정하면 됩니다.</p>
      </div>

      <div class="timeline-list">
        ${activeGroup.entries.map((entry) => `
          <article class="timeline-item reveal">
            <div class="timeline-date">${entry.date}</div>
            <div class="timeline-card">
              <h3>${entry.title}</h3>
              <p class="timeline-desc">${entry.desc}</p>
              <div class="timeline-detail">
                <div>
                  <strong>작업 내용</strong>
                  <ul>${entry.works.map((work) => `<li>${work}</li>`).join('')}</ul>
                </div>
                <div>
                  <strong>결과물</strong>
                  <ul>${entry.outputs.map((output) => `<li>${output}</li>`).join('')}</ul>
                </div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  observeReveals();
}

function renderProfile() {
  const intro = $('[data-profile-intro]');
  if (intro) intro.textContent = PROFILE.intro;
  $('[data-github]').textContent = PROFILE.github;
  $('[data-notion]').textContent = PROFILE.notion;
  $('[data-youtube]').textContent = PROFILE.youtube;
}

function renderSkills() {
  $('[data-skills]').innerHTML = SKILLS.map((skill, index) => `
    <article class="skill-card reveal">
      <span class="number">${String(index + 1).padStart(2, '0')}</span>
      <h3>${skill.title}</h3>
      <p>${skill.desc}</p>
    </article>
  `).join('');
}

function renderTools() {
  $('[data-tools]').innerHTML = TOOLS.map((tool) => `
    <article class="tool-card reveal">
      <h3>${tool.title}</h3>
      <ul>${tool.items.map((item) => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function openModal(title, eyebrow, html) {
  modalTitle.textContent = title;
  modalEyebrow.textContent = eyebrow;
  modalBody.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.hidden = true;
  modalBody.innerHTML = '';
  document.body.classList.remove('modal-open');
}

function openProjectDetail(id) {
  const project = getProject(id);
  if (!project) return;

  openModal(project.title, 'Project Detail', `
    <div class="detail-project">
      <div class="detail-hero">
        <p class="eyebrow">${project.category} · ${project.genre}</p>
        <h2>${project.title}</h2>
        <p>${project.detailSummary || project.summary}</p>
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
          <ul>${project.points.map((point) => `<li>${point}</li>`).join('')}</ul>
        </article>
      </div>

      <div class="detail-actions">
        <button class="btn document" type="button" data-open-docs="${project.id}">문서 보기</button>
        ${project.simulator
          ? `<a class="btn ghost" href="${project.simulator.url}" target="_blank" rel="noopener">게임 시뮬레이터</a>`
          : `<button class="btn ghost" type="button" data-open-video="${project.id}">영상 보기</button>`
        }
      </div>
    </div>
  `);
}

function openDocuments(id) {
  const project = getProject(id);
  if (!project) return;

  openModal(`문서 보기`, 'Project Documents', `
    <div class="document-grid">
      ${project.documents.map((doc) => `
        <article class="document-card">
          <small>${project.title}</small>
          <h3>${doc.title}</h3>
          <div class="document-actions">
            <button class="btn ghost" type="button" data-open-pdf="${doc.file}" data-pdf-title="${project.title} · ${doc.title}">미리보기</button>
            <a class="btn ghost" href="${doc.file}" target="_blank" rel="noopener">새 탭 열기</a>
          </div>
        </article>
      `).join('')}
    </div>
  `);
}

function openPdf(file, title) {
  openModal(title, 'PDF Preview', `<iframe class="pdf-frame" src="${file}" title="${title}"></iframe>`);
}

function youtubeEmbedUrl(id) {
  if (!id || id === 'REPLACE_WITH_YOUTUBE_ID') return '';
  return `https://www.youtube.com/embed/${id}`;
}

function openVideo(id) {
  const project = getProject(id);
  if (!project) return;
  const src = youtubeEmbedUrl(project.video.youtubeId);

  if (!src) {
    openModal(project.video.title, 'Prototype Video', `
      <div class="video-placeholder">
        <h3>YouTube 영상 ID를 입력하면 이곳에 영상이 표시됩니다.</h3>
        <p><strong>js/projects.js</strong> 파일에서 <code>${project.title}</code> 프로젝트의 <code>video.youtubeId</code> 값을 실제 YouTube 영상 ID로 교체하세요.</p>
        <p>예시: <code>https://www.youtube.com/watch?v=abc123</code> 주소라면 <code>abc123</code>만 입력하면 됩니다.</p>
      </div>
    `);
    return;
  }

  openModal(project.video.title, 'Prototype Video', `
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
  document.addEventListener('click', (event) => {
    const detail = event.target.closest('[data-open-detail]');
    const docs = event.target.closest('[data-open-docs]');
    const video = event.target.closest('[data-open-video]');
    const pdf = event.target.closest('[data-open-pdf]');
    const close = event.target.closest('[data-modal-close]');
    const timelineTab = event.target.closest('[data-timeline-tab]');

    if (detail) openProjectDetail(detail.dataset.openDetail);
    if (docs) openDocuments(docs.dataset.openDocs);
    if (video) openVideo(video.dataset.openVideo);
    if (pdf) openPdf(pdf.dataset.openPdf, pdf.dataset.pdfTitle);
    if (close) closeModal();
    if (timelineTab) {
      activeTimelineProject = timelineTab.dataset.timelineTab;
      renderTimeline();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  const navToggle = $('[data-nav-toggle]');
  const navLinks = $('[data-nav-links]');

  navToggle.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(opened));
  });

  $$('[data-nav-links] a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function observeReveals() {
  const targets = $$('.reveal:not(.visible)');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((target) => target.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((target) => observer.observe(target));
}

function observeActiveNav() {
  const links = $$('[data-nav-links] a');
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === id));
    });
  }, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  });

  sections.forEach((section) => observer.observe(section));
}

function setYear() {
  const year = $('[data-year]');
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
