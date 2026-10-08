/**
 * Joel.dev Portfolio & GitHub Customization Suite
 * Complete Certified Software Engineer Profile with Seinen Manga Art & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentUsername = 'RJoel158';

  const usernameInput = document.getElementById('github-username-input');
  const btnUpdateStats = document.getElementById('btn-update-stats');
  const btnCopyReadme = document.getElementById('btn-copy-readme');
  const btnCopyCodeDirect = document.getElementById('btn-copy-code-direct');
  const copyBtnText = document.getElementById('copy-btn-text');
  const markdownOutput = document.getElementById('markdown-output');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const currentYearSpan = document.getElementById('current-year');
  const emailCard = document.getElementById('contact-email-card');
  const heroGithubLink = document.getElementById('hero-github-link');
  const contactGithubLink = document.getElementById('contact-github');
  const contactLinkedin = document.getElementById('contact-linkedin');

  const imgStats = document.getElementById('img-stats');
  const imgLangs = document.getElementById('img-langs');
  const imgStreak = document.getElementById('img-streak');

  if (usernameInput) {
    usernameInput.value = currentUsername;
  }

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  if (contactLinkedin) {
    contactLinkedin.href = 'https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/';
  }

  function generateProfileMarkdown(username) {
    const cleanUser = username.trim() || 'RJoel158';
    return `<div align="center">
  <img src="./assets/manga_coder_banner.jpg" width="100%" alt="Software Engineer Workspace - Seinen Manga Aesthetic" style="border-radius: 10px; border: 1px solid #30363d;" />
  <br /><br />
  <a href="https://github.com/${cleanUser}">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=25&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&width=750&height=70&lines=Hello%2C+I'm+Joel;Software+Engineer+%26+Computer+Science+Student;Full-Stack%2C+AI+Agents+%26+Cross-Platform+Systems;C%23+%7C+TypeScript+%7C+PHP+%2F+Laravel+%7C+Java" alt="Typing Header" />
  </a>
</div>

<p align="center">
  <a href="https://github.com/${cleanUser}">
    <img src="https://img.shields.io/badge/AI%20Engineering-Multi--Agent%20Workflows-0d1117?style=flat-square&logo=openai&logoColor=58a6ff" alt="AI Engineering" />
  </a>
  <a href="https://github.com/${cleanUser}">
    <img src="https://img.shields.io/badge/Core%20Stack-C%23%20%7C%20TS%20%7C%20PHP%20%7C%20Java-0d1117?style=flat-square&logo=dotnet&logoColor=58a6ff" alt="Core Stack" />
  </a>
  <a href="https://github.com/${cleanUser}">
    <img src="https://img.shields.io/badge/Focus-Cross--Platform%20%26%20Networking-0d1117?style=flat-square&logo=visualstudiocode&logoColor=58a6ff" alt="Focus" />
  </a>
</p>

---

### Executive Profile

Software engineer and computer science student with a multidisciplinary foundation across **systems programming (C#, Java)**, **modern web architectures (TypeScript, NestJS, Express, PHP/Laravel, Tailwind CSS)**, and **interactive computing (ShaderLab, Unity)**. 

Focused on high-velocity software engineering: leveraging **multi-agent AI workflows**, **rapid prototyping from concept to production**, and building scalable cross-platform and networked applications. Certified across **Cloud Computing (Huawei)**, **AI Foundations (IBM & Cisco)**, **Networking & Cybersecurity (Cisco)**, and **Databases (Oracle)**.

---

### Engineering Capabilities

| Discipline | Core Technologies & Focus |
| :--- | :--- |
| **Full-Stack & Backend Architecture** | C# (.NET), NestJS, Express, PHP (Laravel), TypeScript, Node.js, REST APIs, Microservices, Relational & NoSQL persistence. |
| **Frontend & UI Engineering** | Tailwind CSS, React, TypeScript, Responsive layouts, Performance optimization, Component design systems. |
| **AI Development & Multi-Agent Workflows** | Autonomous agent architectures, orchestration pipelines, LLM tooling, rapid POC-to-MVP development. |
| **Cross-Platform & Mobile** | Flutter, Dart, Kotlin, Multiplatform app development, mobile architecture, unified logic across platforms. |
| **Computer Networking & Infrastructure** | Client-server protocols, socket architecture, secure endpoint design, Linux environments, Docker containerization. |
| **Interactive & Graphics Computing** | ShaderLab programming, C# engine scripting with Unity, graphics pipeline fundamentals, rendering logic. |

---

### Tech Stack

#### Core Languages
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=cs,ts,js,java,kotlin,php,py,html,css&theme=dark" alt="Core Languages" />
  </a>
</p>

#### Frameworks & Backend Ecosystem
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nestjs,express,laravel,dotnet,react,tailwind&theme=dark" alt="Frameworks and Backend Ecosystem" />
  </a>
</p>

#### Cross-Platform, Mobile & Engines
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=flutter,dart,kotlin,unity&theme=dark" alt="Cross-Platform, Mobile and Engines" />
  </a>
</p>

#### Infrastructure, Databases & Tooling
<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=postgres,mysql,mongodb,docker,git,github,linux,postman,vscode&theme=dark" alt="Infrastructure, Databases and Tooling" />
  </a>
</p>

---

### Verified Certifications & Credentials

| Domain | Certification Program | Issuing Organization | Verification Link |
| :--- | :--- | :--- | :--- |
| **Cloud Computing** | Cloud Advanced: Architecture and Technologies | Huawei | [Credential ID: ICT20260902000007](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/1651418402/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Cloud Computing** | General Knowledge of Cloud Computing | Huawei | [Credential ID: ICT20260907000111](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/2089208885/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Cloud Computing** | Development and Basic Concepts of Cloud Computing | Huawei | [Credential ID: ICT20260902000047](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/1617119420/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Artificial Intelligence** | Artificial Intelligence Fundamentals | IBM | [Credly Badge](https://www.credly.com/badges/28cee505-b6df-47f0-ab6f-ee5ebfc4bbc5/public_url) |
| **Artificial Intelligence** | Introduction to Modern AI | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/622a0742-8bd3-4b22-b516-81503ffd7ddf/public_url) |
| **Artificial Intelligence** | AI Fundamentals | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/d93a11b3-3e96-464c-8e99-d19603503795/public_url) |
| **Artificial Intelligence** | Desarrollo con AI | BIG School | [Certificate Treasury](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/2026305219/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Networking & Security** | Cybersecurity & Ethical Hacking | BIG School | [Certificate Treasury](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/907538501/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Networking & Security** | Introduction to Cybersecurity | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/afa687c7-5ec8-44b5-ac49-ce236566765d/public_url) |
| **Networking & Security** | Networking Academy Learn-A-Thon (2025) | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/9b82e372-4a44-41e5-bc73-4f8674b70531/public_url) |
| **Networking & Security** | Networking Academy Learn-A-Thon (2024) | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/354fdd06-2878-49e8-bd1b-bed137f244fb/public_url) |
| **Networking & Security** | Introduction to IoT | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/5a03a143-829c-48fe-9eed-0b99b95ae6ee/public_url) |
| **Data & Databases** | Database Foundations | Oracle | [Certificate Treasury](https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/overlay/Certifications/399906496/treasury/?profileId=ACoAAF9Xu_ABNDed_L5ti-zXeky5-usJqkTjKjU) |
| **Data & Databases** | Introduction to Data Science | Cisco Networking Academy | [Credly Badge](https://www.credly.com/badges/4dfdf1cd-f32e-43ff-9b0c-bf0d8d5e19ca/public_url) |
| **Software Development** | Python Essentials 1 & 2 | Cisco Networking Academy | [Credly Badge Part 1](https://www.credly.com/badges/ab6ffdc9-9a96-4217-8181-dfd056afd612/public_url) • [Part 2](https://www.credly.com/badges/1713b9cf-690e-49f2-9224-56daa82d23f3/public_url) |
| **Software Development** | JavaScript Essentials 1 & 2 | Cisco Networking Academy | [Credly Badge Part 1](https://www.credly.com/badges/06256762-d3ef-4dae-aad3-4b930ac73d53/public_url) • [Part 2](https://www.credly.com/badges/00cb952c-d3d4-460d-8774-5a1221afdbd2/public_url) |

---

### GitHub Activity & Analytics

<div align="center">
  <table border="0">
    <tr>
      <td valign="top">
        <a href="https://github.com/${cleanUser}">
          <img src="https://github-readme-stats.vercel.app/api?username=${cleanUser}&show_icons=true&theme=github_dark&hide_border=false&border_color=30363d&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9" alt="GitHub Stats" width="410" />
        </a>
      </td>
      <td valign="top">
        <a href="https://github.com/${cleanUser}">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${cleanUser}&layout=compact&theme=github_dark&hide_border=false&border_color=30363d&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9" alt="Top Languages" width="350" />
        </a>
      </td>
    </tr>
  </table>

  <br />

  <a href="https://github.com/${cleanUser}">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=${cleanUser}&theme=github_dark&hide_border=false&border=30363d&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakNum=c9d1d9" alt="GitHub Streak" width="770" />
  </a>
</div>

---

### Connect

<p align="left">
  <a href="https://github.com/${cleanUser}">
    <img src="https://img.shields.io/badge/GitHub-${cleanUser}-0d1117?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/ronald-joel-saavedra-vargas-b00845387/">
    <img src="https://img.shields.io/badge/LinkedIn-Ronald%20Joel%20Saavedra%20Vargas-0d1117?style=flat-square&logo=linkedin&logoColor=0A66C2" alt="LinkedIn Profile" />
  </a>
  <a href="mailto:ronaldjoelsaavedra@gmail.com">
    <img src="https://img.shields.io/badge/Email-ronaldjoelsaavedra%40gmail.com-0d1117?style=flat-square&logo=gmail&logoColor=EA4335" alt="Email" />
  </a>
</p>`;
  }

  function updateProfileView() {
    const rawValue = usernameInput ? usernameInput.value.trim() : '';
    currentUsername = rawValue.length > 0 ? rawValue : 'RJoel158';

    if (markdownOutput) {
      markdownOutput.textContent = generateProfileMarkdown(currentUsername);
    }

    if (imgStats) {
      imgStats.src = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(currentUsername)}&show_icons=true&theme=github_dark&hide_border=false&border_color=30363d&bg_color=0d1117&title_color=58a6ff&icon_color=58a6ff&text_color=c9d1d9`;
    }
    if (imgLangs) {
      imgLangs.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(currentUsername)}&layout=compact&theme=github_dark&hide_border=false&border_color=30363d&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`;
    }
    if (imgStreak) {
      imgStreak.src = `https://github-readme-streak-stats.herokuapp.com/?user=${encodeURIComponent(currentUsername)}&theme=github_dark&hide_border=false&border=30363d&background=0d1117&ring=58a6ff&fire=58a6ff&currStreakNum=c9d1d9`;
    }

    if (heroGithubLink) {
      heroGithubLink.href = `https://github.com/${encodeURIComponent(currentUsername)}`;
    }
    if (contactGithubLink) {
      contactGithubLink.href = `https://github.com/${encodeURIComponent(currentUsername)}`;
      const val = contactGithubLink.querySelector('.contact-val');
      if (val) val.textContent = `github.com/${currentUsername}`;
    }
  }

  updateProfileView();

  if (btnUpdateStats) {
    btnUpdateStats.addEventListener('click', () => {
      updateProfileView();
      showToast(`Updated for "${currentUsername}"`);
    });
  }

  if (usernameInput) {
    usernameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        updateProfileView();
        showToast(`Updated for "${currentUsername}"`);
      }
    });
  }

  let toastTimer = null;
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  async function copyMarkdown() {
    const markdown = generateProfileMarkdown(currentUsername);
    try {
      await navigator.clipboard.writeText(markdown);
      showToast('Markdown copied to clipboard');
      if (copyBtnText) {
        const orig = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied';
        setTimeout(() => {
          copyBtnText.textContent = orig;
        }, 2000);
      }
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = markdown;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast('Markdown copied');
    }
  }

  if (btnCopyReadme) {
    btnCopyReadme.addEventListener('click', copyMarkdown);
  }
  if (btnCopyCodeDirect) {
    btnCopyCodeDirect.addEventListener('click', copyMarkdown);
  }

  if (emailCard) {
    emailCard.addEventListener('click', async () => {
      const email = 'ronaldjoelsaavedra@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast(`Copied: ${email}`);
      } catch (err) {
        showToast(email);
      }
    });
  }

  const tabs = document.querySelectorAll('.preview-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
