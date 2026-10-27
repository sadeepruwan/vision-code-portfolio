import { useState } from "react";

const email = "sadeepruwan@gmail.com";
const whatsapp = "94766850753";

const skills = [
  // Frontend
  { name: "HTML5", icon: "🌐", type: "Frontend" },
  { name: "CSS3", icon: "🎨", type: "Frontend" },
  { name: "JavaScript", icon: "⚡", type: "Frontend" },
  { name: "React", icon: "⚛️", type: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", type: "Frontend" },
  { name: "Responsive Design", icon: "📱", type: "Frontend" },

  // Backend
  { name: "Node.js", icon: "🟢", type: "Backend" },
  { name: "Express.js", icon: "🚀", type: "Backend" },
  { name: "REST API", icon: "🔗", type: "Backend" },

  // Database
  { name: "MongoDB", icon: "🍃", type: "Database" },
  { name: "SQL", icon: "🗄️", type: "Database" },

  // Tools
  { name: "Git", icon: "🔧", type: "Tools" },
  { name: "GitHub", icon: "🐙", type: "Tools" },
  { name: "VS Code", icon: "💻", type: "Tools" },
  { name: "Postman", icon: "📮", type: "Tools" },
  { name: "npm", icon: "📦", type: "Tools" },

  // Deployment
  { name: "Netlify", icon: "🌍", type: "Deployment" },
  { name: "Vercel", icon: "▲", type: "Deployment" },
];
// const projects = [
//   {
//     number: "01",
//     name: "Maths Learning Website",
//     category: "EDUCATION",
//     description:
//       "An educational website designed to make learning mathematics easier and more engaging.",
//     icon: "📐",
//     tags: ["React", "JavaScript", "CSS"],
//     color: "from-violet-500/30 to-indigo-500/10",
//   },
//   {
//     number: "02",
//     name: "Personal Portfolio",
//     category: "PERSONAL PROJECT",
//     description:
//       "A modern portfolio showcasing my skills, creative work and web development journey.",
//     icon: "💻",
//     tags: ["React", "Tailwind CSS"],
//     color: "from-fuchsia-500/25 to-purple-500/10",
//   },
//   {
//     number: "03",
//     name: "Future Project",
//     category: "COMING SOON",
//     description:
//       "Exploring new ideas and creating useful digital experiences with modern technologies.",
//     icon: "🚀",
//     tags: ["Creative", "Development"],
//     color: "from-blue-500/25 to-violet-500/10",
//   },
// ];

const projects = [
  {
    number: "01",
    name: "Maths Learning Website",
    category: "EDUCATION",
    description:
      "An interactive educational website designed to make learning mathematics easier and more engaging.",
    icon: "📐",
    tags: ["React", "JavaScript", "CSS3"],
    color: "from-violet-500/30 to-indigo-500/10",
    link: "https://wellassaganithaappachchi.netlify.app/",
  },
  {
    number: "02",
    name: "Personal Portfolio Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern personal portfolio showcasing my skills, projects, and journey as a web developer.",
    icon: "💻",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-fuchsia-500/25 to-purple-500/10",
    link: "#",
  },
  {
    number: "03",
    name: "Full Stack Web Application",
    category: "COMING SOON",
    description:
      "Planning to build a full stack application using frontend technologies, backend APIs, and a database.",
    icon: "🚀",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    color: "from-blue-500/25 to-violet-500/10",
    link: "#",
  },
];

const services = [
  {
    icon: "🖥️",
    title: "Website Development",
    description: "Modern websites built to represent your brand and business.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Beautiful layouts for mobile phones, tablets and desktops.",
  },
  {
    icon: "✨",
    title: "UI & Web Design",
    description: "Clean layouts and user-friendly website experiences.",
  },
];

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Contact", "#contact"],
];

const buttonPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-400";

const buttonSecondary =
  "inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:bg-violet-500/10";

const sectionTitle =
  "mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl";

const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-violet-400";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const email = "your-email@example.com";
  const whatsapp = "YOUR_WHATSAPP_NUMBER";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080710] text-slate-200">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -left-40 top-20 -z-0 h-96 w-96 rounded-full bg-violet-700/15 blur-[120px]" />
      <div className="pointer-events-none fixed -right-40 top-[45%] -z-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      {/* Navigation */}

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] bg-[#080710]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-black text-white"
          >
            <span className="text-3xl text-violet-400">Vision</span>
            <span className="text-sm tracking-[0.25em]">Code</span>
          </a>

          <button
            className="rounded-lg border border-white/10 px-3 py-2 text-xl text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0c0a18] p-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-violet-300 md:px-0"
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-violet-500 px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-violet-400"
            >
              Let&apos;s Talk ↗
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-24"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-violet-300 sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Turn your ideas into a real website
            </div>

            <p className="mb-2 text-lg text-slate-400">Hello, I&apos;m</p>

            <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Sadeep
              <span className="mt-2 block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text pb-2 text-transparent">
                Web Developer.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I build modern, responsive and engaging digital experiences.
              Turning creative ideas into websites that make an impact.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className={buttonPrimary}>
                Explore My Work <span>↗</span>
              </a>
              <a href="#contact" className={buttonSecondary}>
                Let&apos;s Connect
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm">
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500">
                FIND ME ONLINE
              </span>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold transition hover:border-violet-400 hover:text-violet-300"
                aria-label="GitHub"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold transition hover:border-violet-400 hover:text-violet-300"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={`mailto:${email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-bold transition hover:border-violet-400 hover:text-violet-300"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* Developer card */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-violet-600/20 blur-[90px]" />

            <div className="relative rounded-2xl border border-violet-300/20 bg-[#100d20]/90 p-1 shadow-2xl shadow-violet-950/40 sm:p-2">
              <div className="rounded-xl border border-white/[0.06] bg-[#0b0915]">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-500">developer.jsx</span>
                  <span className="text-violet-400">✦</span>
                </div>

                <div className="overflow-x-auto p-5 font-mono text-xs leading-8 sm:p-8 sm:text-sm">
                  <p>
                    <span className="text-slate-600">01</span>{" "}
                    <span className="text-fuchsia-400">const</span> developer ={" "}
                    {"{"}
                  </p>
                  <p>
                    <span className="text-slate-600">02</span> &nbsp; name:{" "}
                    <span className="text-emerald-300">&apos;Sadeep&apos;</span>
                    ,
                  </p>
                  <p>
                    <span className="text-slate-600">03</span> &nbsp; role:{" "}
                    <span className="text-emerald-300">
                      &apos;Web Developer&apos;
                    </span>
                    ,
                  </p>
                  <p>
                    <span className="text-slate-600">04</span> &nbsp; creative:{" "}
                    <span className="text-orange-300">true</span>,
                  </p>
                  <p>
                    <span className="text-slate-600">05</span> &nbsp; passion:{" "}
                    <span className="text-emerald-300">
                      &apos;Building&apos;
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-600">06</span> {"};"}
                  </p>
                  <br />
                  <p>
                    <span className="text-fuchsia-400">function</span>{" "}
                    <span className="text-sky-300">createFuture</span>() {"{"}
                  </p>
                  <p>
                    <span className="text-slate-600">08</span> &nbsp;{" "}
                    <span className="text-fuchsia-400">return</span>{" "}
                    <span className="text-emerald-300">
                      &apos;Great Ideas ✨&apos;
                    </span>
                    ;
                  </p>
                  <p>
                    <span className="text-slate-600">09</span> {"}"}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] px-5 py-4 text-[10px] text-slate-500 sm:text-xs">
                  <span className="text-emerald-300">● READY TO CREATE</span>
                  <span>React + JavaScript</span>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-10 rounded-xl border border-white/10 bg-[#171128] p-4 shadow-xl sm:-left-8 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl">⚛️</span>
                <div>
                  <p className="font-bold text-white">React</p>
                  <p className="text-xs text-slate-400">Building interfaces</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 right-2 rounded-xl border border-white/10 bg-[#171128] p-4 shadow-xl sm:-right-5 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-violet-300">✦</span>
                <div>
                  <p className="font-bold text-white">Creative Mind</p>
                  <p className="text-xs text-slate-400">Ideas into reality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        
<section
  id="about"
  className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24"
>
  <p className={eyebrow}>01 / ABOUT ME</p>

  <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
    Building the web,
    <br />
    <span className="text-violet-400">one idea at a time.</span>
  </h2>

  <div className="mt-8 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 md:items-center md:gap-10">
    {/* Vision Code Logo */}
    <div className="flex min-h-52 items-center justify-center overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 via-[#100d20] to-fuchsia-500/10 px-3 py-10 sm:min-h-64 sm:px-6">
      <div className="text-center">
        <div className="whitespace-nowrap text-4xl font-black text-white sm:text-6xl md:text-5xl lg:text-7xl">
          Vision<span className="text-violet-400">Code</span>
        </div>

        <p className="mt-4 text-[10px] font-bold tracking-[0.18em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">
          YOUR VISION, OUR CODE
        </p>
      </div>
    </div>

    {/* About Text */}
    <div>
      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
        I'm Sadeep, a developer who loves creating.
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
        I enjoy turning ideas into interactive digital experiences. My
        focus is building websites that look great, work smoothly and
        provide real value to the people who use them.
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
        Every project is an opportunity to learn something new, solve a
        problem and bring a fresh idea to life.
      </p>

      <a
        href="#contact"
        className="mt-6 inline-block text-sm font-semibold text-violet-300 transition hover:text-violet-200 sm:text-base"
      >
        Let's build something together ↗
      </a>
    </div>
  </div>
</section>


        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <p className={eyebrow}>02 / MY TOOLKIT</p>
          <h2 className={sectionTitle}>
            Skills &amp; <span className="text-violet-400">technologies.</span>
          </h2>
          <p className="mt-4 text-slate-400">
            The tools I use to bring digital ideas to life.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.name}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.06]"
              >
                <span className="absolute right-5 top-5 text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{skill.type}</p>
                <span className="absolute bottom-6 right-6 text-violet-400 transition group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}

        <section
          id="projects"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <p className={eyebrow}>03 / SELECTED WORK</p>

          <h2 className={sectionTitle}>
            Things I&apos;ve <span className="text-violet-400">created.</span>
          </h2>

          <p className="mt-4 text-slate-400">
            A selection of projects, experiments and ideas.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
              >
                {/* Project Preview */}
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <span className="absolute left-5 top-5 text-sm text-white/50">
                    {project.number}
                  </span>

                  <div className="absolute h-40 w-40 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" />

                  <div className="absolute h-28 w-28 rounded-full border border-white/10" />

                  <span className="relative text-6xl transition duration-500 group-hover:scale-110">
                    {project.icon}
                  </span>

                  <span className="absolute bottom-5 text-[10px] font-bold tracking-[0.25em] text-white/60">
                    PROJECT SHOWCASE
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <p className={eyebrow}>{project.category}</p>

                  <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-violet-300">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-3 py-1 text-xs text-violet-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.name}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/20 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-500">
                      Coming Soon
                      <span aria-hidden="true">✦</span>
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            More projects coming soon. Every idea starts somewhere. ✦
          </p>
        </section>

        {/* Services */}
        <section
          id="services"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <p className={eyebrow}>04 / WHAT I CAN DO</p>
          <h2 className={sectionTitle}>
            Let&apos;s make your
            <br />
            <span className="text-violet-400">next idea happen.</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/[0.08] bg-[#100d1c]/70 p-7 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-sm text-slate-600">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200"
                >
                  Discuss a project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}

        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/15 via-[#100d20] to-fuchsia-600/10 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[80px]" />

            <div className="relative">
              <p className={eyebrow}>05 / HAVE A PROJECT IN MIND?</p>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-6xl">
                Let's create
                <br />
                something <span className="text-violet-400">amazing.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
                Have an idea, a project or an opportunity? I'd love to hear
                about it. Let's turn your vision into reality.
              </p>

              {/* Contact Buttons */}
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/94766850753?text=Hi%20Sadeep%21%20I%27m%20interested%20in%20your%20web%20development%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonPrimary}
                >
                  WhatsApp Me ↗
                </a>

                <a href="tel:+94766850753" className={buttonSecondary}>
                  📞 Call Me
                </a>
              </div>

              {/* Contact Details */}
              <div className="mt-8 space-y-3 text-sm text-slate-400">
                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/94766850753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-300 transition hover:text-violet-200"
                  >
                    0766850753
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-xl font-black text-white">
            <span>Vision</span>
            <span className="text-violet-400 text-xs  ">Code</span>
          </a>
          <p className="text-sm text-slate-500">
            Designed with intention. Built with passion.
          </p>
          <a
            href="#home"
            className="text-xs font-bold tracking-widest text-violet-300 hover:text-white"
          >
            BACK TO TOP ↑
          </a>
        </div>
        <p className="mt-7 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Sadeep. All rights Developer.
        </p>
      </footer>
    </div>
  );
}

export default App;
