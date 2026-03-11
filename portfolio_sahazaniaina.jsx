import { useEffect, useMemo, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, FolderKanban, GraduationCap, Newspaper, BriefcaseBusiness, Leaf, SunMoon, Sparkles, ArrowUpRight, Cpu, Database, Code2 } from "lucide-react";

export default function PortfolioSahazaniaina() {
  const [theme, setTheme] = useState("studio");
  const [visibleSections, setVisibleSections] = useState({});

  const themes = {
    studio: {
      page: "bg-[#0a0a0f] text-zinc-100",
      background:
        "from-[#0a0a0f] via-[#14131b] to-[#1d1028]",
      orb1: "bg-violet-500/24",
      orb2: "bg-pink-500/18",
      orb3: "bg-cyan-400/10",
      card: "bg-zinc-900/65 border-zinc-700/50 backdrop-blur-xl",
      cardSoft: "bg-zinc-900/55 border-zinc-700/40 backdrop-blur-xl",
      textSoft: "text-zinc-300",
      textMuted: "text-zinc-400",
      accent: "text-violet-300",
      accent2: "text-pink-300",
      badge: "border-violet-300/20 bg-violet-300/10 text-violet-200",
      buttonPrimary: "bg-violet-300 text-zinc-950 hover:bg-violet-200",
      buttonSecondary: "border-zinc-600 hover:border-violet-300/60 hover:text-violet-200",
      heroPanel: "from-white/10 to-white/[0.03]",
      timelineDot: "bg-violet-300",
      gradientText: "from-violet-300 via-fuchsia-200 to-cyan-200",
      accentLine: "from-violet-300/80 via-fuchsia-300/50 to-cyan-300/70",
      chip: "bg-zinc-800/80 border-zinc-700/60",
    },
  };

  const current = themes[theme];

  const navItems = [
    { label: "Accueil", href: "#accueil", icon: Sparkles },
    { label: "Parcours", href: "#parcours", icon: GraduationCap },
    { label: "Réalisations", href: "#realisations", icon: FolderKanban },
    { label: "Veille", href: "#veille", icon: Newspaper },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Baccalauréat STMG",
      subtitle: "Systèmes d'Information et de Gestion",
      details: "Première approche structurée du numérique, de l'organisation et des outils informatiques."
    },
    {
      year: "2021",
      title: "DEUST Bureautique et Multimédia",
      subtitle: "UPEC",
      details: "Développement des compétences en bureautique, communication numérique et usage des outils multimédias."
    },
    {
      year: "2022",
      title: "Digital U",
      subtitle: "Université Gustave Eiffel",
      details: "Approfondissement de la culture numérique et consolidation des bases techniques."
    },
    {
      year: "2024 - 2026",
      title: "BTS SIO option SLAM",
      subtitle: "Lycée Léonard de Vinci - Melun",
      details: "Conception d'applications, développement web, algorithmique, bases de données, gestion de projet et analyse des besoins."
    }
  ];

  const projectCards = [
    {
      title: "Mes projets BTS",
      text: "Projets de développement réalisés pendant la formation : applications, web, base de données, analyse des besoins et documentation.",
      icon: Code2,
      tag: "Développement"
    },
    {
      title: "Stage de 1ère année",
      text: "Présentation de l'entreprise, des missions confiées, des outils utilisés et des compétences professionnelles développées.",
      icon: BriefcaseBusiness,
      tag: "Entreprise"
    },
    {
      title: "Stage de 2ème année",
      text: "Stage chez Ouéso Agency : mise à jour de site, ajout de produits, création de visuels et maintenance de site client.",
      icon: BriefcaseBusiness,
      tag: "Expérience"
    }
  ];

  const skills = [
    { name: "HTML / CSS", level: 86, icon: Code2 },
    { name: "Python", level: 74, icon: Cpu },
    { name: "SQL", level: 79, icon: Database },
    { name: "PHP", level: 68, icon: Code2 },
    { name: "JavaScript", level: 65, icon: Code2 },
    { name: "Git / GitHub", level: 70, icon: Github },
  ];

  const veilleItems = [
    {
      title: "Éco-conception des services numériques",
      desc: "Concevoir des sites et applications plus sobres, plus légers et moins consommateurs en ressources.",
    },
    {
      title: "Impact économique pour les organisations",
      desc: "Réduction des coûts d'hébergement, meilleure efficacité énergétique et valorisation de l'image de l'entreprise.",
    },
    {
      title: "Dimension managériale",
      desc: "Intégrer le numérique responsable dans la stratégie d'entreprise, les pratiques internes et les décisions techniques.",
    },
    {
      title: "Dimension écologique",
      desc: "Limiter l'empreinte carbone des services numériques, prolonger la durée de vie des équipements et optimiser les infrastructures.",
    },
  ];

  const sources = [
    "ADEME",
    "ARCEP",
    "Green IT",
    "Ministère de la Transition écologique",
    "Articles spécialisés sur l'éco-conception web",
  ];

  const identityStats = [
    { value: "24", label: "ans" },
    { value: "BTS", label: "SIO SLAM" },
    { value: "Melun", label: "formation" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id || entry.target.dataset.key]: true,
            }));
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const sectionClass = (key) =>
    `transition-all duration-1000 ${visibleSections[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  const photoFrameClass = useMemo(() => {
    if (theme === "editorial") return "rounded-[2rem]";
    if (theme === "studio") return "rounded-[2.2rem]";
    return "rounded-full";
  }, [theme]);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-700 ${current.page}`}>
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-br ${current.background}`} />
        <div className={`absolute -left-20 top-0 h-[520px] w-[520px] ${current.orb1} blur-[140px]`} />
        <div className={`absolute bottom-0 right-0 h-[520px] w-[520px] ${current.orb2} blur-[140px]`} />
        <div className={`absolute left-1/3 top-1/3 h-[420px] w-[420px] ${current.orb3} blur-[160px]`} />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="group flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center border ${current.card} rounded-2xl shadow-2xl`}>
              <span className={`bg-gradient-to-r ${current.gradientText} bg-clip-text text-lg font-black text-transparent`}>
                SR
              </span>
            </div>
            <div>
              <div className={`text-xs uppercase tracking-[0.35em] ${current.textMuted}`}>Portfolio</div>
              <div className="font-semibold">Sahazaniaina</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex items-center gap-6 text-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.href} href={item.href} className={`flex items-center gap-2 transition ${current.textSoft} hover:text-white`}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="accueil" data-reveal data-key="accueil" className="mx-auto grid min-h-[92vh] max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className={sectionClass("accueil")}>
            <div className={`mb-6 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm ${current.badge}`}>
              <Sparkles className="h-4 w-4" />
              Portfolio V3 • Identité Studio
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className={`h-px w-16 bg-gradient-to-r ${current.accentLine}`} />
              <span className={`text-xs uppercase tracking-[0.35em] ${current.textMuted}`}>Développeur en formation</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-6xl xl:text-7xl">
              Sahazaniaina <span className={`bg-gradient-to-r ${current.gradientText} bg-clip-text text-transparent`}>Randrianasolo</span>
            </h1>

            <p className={`mt-6 max-w-2xl text-lg italic ${current.accent}`}>
              « Les nouvelles technologies résolvent des problèmes, mais en créent de nouveaux. »
            </p>

            <div className={`mt-8 rounded-[2rem] border bg-gradient-to-br p-6 md:p-8 ${current.card} ${current.heroPanel}`}>
              <p className={`leading-8 ${current.textSoft}`}>
                J'ai conçu ce portfolio comme une interface élégante et immersive pour présenter mon parcours en BTS SIO SLAM, mes réalisations et ma vision d'un numérique plus utile, plus cohérent et plus responsable pour les organisations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#realisations" className={`rounded-2xl px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${current.buttonPrimary}`}>
                Voir mes projets
              </a>
              <a href="#parcours" className={`rounded-2xl border px-6 py-3 font-medium transition ${current.buttonSecondary}`}>
                Découvrir mon parcours
              </a>
              <a href="/cv_sahaza.pdf" className={`rounded-2xl border px-6 py-3 font-medium transition ${current.buttonSecondary}`}>
                Consulter mon CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-2xl border px-4 py-3 transition ${current.cardSoft}`}>
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-2xl border px-4 py-3 transition ${current.cardSoft}`}>
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <div className={sectionClass("accueil")}>
            <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center">
              <div className="absolute inset-6 rounded-[2.4rem] bg-violet-400/20 blur-[80px]" />
              <div className={`relative overflow-hidden border p-4 shadow-2xl ${current.card} rounded-[2.4rem]`}>
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-300/10 to-transparent" />
                <img
                  src="/photo.jpeg"
                  alt="Photo de Sahazaniaina Randrianasolo"
                  className="relative h-[380px] w-[360px] rounded-[1.9rem] object-cover"
                />
              </div>

              <div className={`absolute -bottom-6 left-1/2 w-[94%] -translate-x-1/2 rounded-[1.8rem] border p-4 shadow-xl ${current.card}`}>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {identityStats.map((item) => (
                    <div key={item.label} className="rounded-2xl bg-black/10 p-3">
                      <div className={`text-2xl font-bold ${current.accent}`}>{item.value}</div>
                      <div className={`text-xs uppercase tracking-[0.2em] ${current.textMuted}`}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="presentation-alt" data-reveal data-key="presentation-alt" className={`mx-auto max-w-7xl px-6 py-12 ${sectionClass("presentation-alt")}`}>
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Direction artistique</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Une identité plus forte, plus mémorable</h2>
            </div>
            <div className={`hidden rounded-full border px-4 py-2 text-sm md:flex md:items-center md:gap-2 ${current.cardSoft}`}>
              <ChevronDown className="h-4 w-4" /> V3 centrée sur le style Studio
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Signature visuelle sombre",
                text: "Une ambiance premium entre portfolio créatif et interface de studio numérique, avec des tons violet, fuchsia et cyan.",
              },
              {
                title: "Accueil plus incarné",
                text: "La page d'accueil devient plus personnelle, plus élégante et plus forte visuellement, avec une composition pensée comme une couverture de projet.",
              },
              {
                title: "Lecture plus marquante",
                text: "Chaque section garde un style cohérent, ce qui donne au jury l'impression d'un site abouti et pas seulement d'une simple maquette scolaire.",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-[1.8rem] border p-6 ${current.cardSoft}`}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className={`mt-4 leading-7 ${current.textSoft}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="parcours" data-reveal data-key="parcours" className={`mx-auto max-w-7xl px-6 py-20 ${sectionClass("parcours")}`}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Mon parcours</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Mon parcours en version studio</h2>
            </div>
            <div className={`hidden rounded-full border px-4 py-2 text-sm md:block ${current.cardSoft}`}>
              Lecture simple et impact visuel
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative space-y-6 before:absolute before:left-[22px] before:top-5 before:h-[calc(100%-2rem)] before:w-px before:bg-white/15">
              {timeline.map((item, index) => (
                <div key={index} className={`relative rounded-[1.8rem] border p-6 pl-16 transition hover:-translate-y-1 ${current.card}`}>
                  <div className={`absolute left-4 top-7 h-4 w-4 rounded-full ${current.timelineDot} border-4 border-transparent`} />
                  <div className={`text-sm uppercase tracking-[0.25em] ${current.accent}`}>{item.year}</div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className={`mt-1 text-sm ${current.accent2}`}>{item.subtitle}</p>
                  <p className={`mt-4 leading-7 ${current.textSoft}`}>{item.details}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className={`rounded-[1.8rem] border p-6 ${current.card}`}>
                <h3 className="text-xl font-semibold">Le BTS SIO option SLAM</h3>
                <p className={`mt-4 leading-7 ${current.textSoft}`}>
                  Cette formation prépare à la conception, au développement, aux tests, au déploiement et à la maintenance d'applications répondant aux besoins des organisations. Elle développe aussi l'analyse, la rigueur, la documentation et la gestion de projet.
                </p>
              </div>
              <div className={`rounded-[1.8rem] border p-6 ${current.card}`}>
                <h3 className="text-xl font-semibold">Objectif du portfolio</h3>
                <p className={`mt-4 leading-7 ${current.textSoft}`}>
                  Mettre en avant mes compétences techniques, mon évolution professionnelle et ma capacité à construire des solutions numériques utiles, cohérentes et adaptées au contexte d'une organisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="competences" data-reveal data-key="competences" className={`mx-auto max-w-7xl px-6 py-20 ${sectionClass("competences")}`}>
          <div className="mb-10">
            <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Compétences</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Compétences mises en scène</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className={`rounded-[1.8rem] border p-6 ${current.cardSoft}`}>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${current.cardSoft}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">{skill.name}</div>
                        <div className={`text-sm ${current.textMuted}`}>Progression en cours</div>
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${current.accent}`}>{skill.level}%</div>
                  </div>
                  <div className="h-3 rounded-full bg-black/15">
                    <div
                      className={`h-3 rounded-full ${theme === "editorial" ? "bg-[#9a3412]" : theme === "studio" ? "bg-violet-300" : "bg-sky-300"}`}
                      style={{ width: `${skill.level}%`, transition: "width 1200ms ease" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="realisations" data-reveal data-key="realisations" className={`mx-auto max-w-7xl px-6 py-20 ${sectionClass("realisations")}`}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Réalisations</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Réalisations et expériences mises en valeur</h2>
            </div>
            <div className={`hidden rounded-full border px-4 py-2 text-sm md:block ${current.cardSoft}`}>
              À enrichir avec captures et preuves
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projectCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className={`group rounded-[1.8rem] border p-6 transition hover:-translate-y-1 ${current.card}`}>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className={`inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${current.badge}`}>
                      {card.tag}
                    </div>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition ${current.cardSoft}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className={`mt-4 leading-7 ${current.textSoft}`}>{card.text}</p>
                  <button className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${current.accent}`}>
                    En savoir plus <ArrowUpRight className="h-4 w-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section id="veille" data-reveal data-key="veille" className={`mx-auto max-w-7xl px-6 py-20 ${sectionClass("veille")}`}>
          <div className="mb-10">
            <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Veille technologique</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Veille technologique à double lecture : SIO + CEJM</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className={`rounded-[2rem] border p-6 md:p-8 ${current.card}`}>
              <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${current.badge}`}>
                <Leaf className="h-4 w-4" /> Sujet recommandé pour CEJM + SIO
              </div>
              <h3 className="text-2xl font-bold">Problématique</h3>
              <p className={`mt-4 leading-8 ${current.textSoft}`}>
                Comment les organisations peuvent-elles concilier transformation numérique, performance économique et réduction de l'impact environnemental de leurs services numériques ?
              </p>
              <p className={`mt-6 leading-8 ${current.textSoft}`}>
                Cette veille est pertinente pour le BTS SIO car elle touche directement à l'éco-conception des sites et applications, à l'hébergement, aux équipements, à la consommation énergétique et à la responsabilité des entreprises. Elle permet aussi de faire un lien clair avec la CEJM, notamment sur les enjeux de stratégie, de coûts, d'image de marque, de réglementation et de management responsable.
              </p>
            </div>

            <div className="space-y-6">
              <div className={`rounded-[1.8rem] border p-6 ${current.card}`}>
                <h3 className="text-xl font-semibold">Veille active</h3>
                <p className={`mt-4 leading-7 ${current.textSoft}`}>
                  Recherches ciblées, consultation de rapports, lecture d'articles institutionnels, archivage des sources et comparaison des pratiques observées chez les organisations.
                </p>
              </div>
              <div className={`rounded-[1.8rem] border p-6 ${current.card}`}>
                <h3 className="text-xl font-semibold">Veille passive</h3>
                <p className={`mt-4 leading-7 ${current.textSoft}`}>
                  Alertes automatiques, flux RSS, abonnements LinkedIn, newsletters spécialisées et suivi des publications liées au numérique responsable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-6">
              {veilleItems.map((item) => (
                <div key={item.title} className={`rounded-[1.8rem] border p-6 ${current.cardSoft}`}>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className={`mt-3 leading-7 ${current.textSoft}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className={`rounded-[2rem] border p-6 ${current.card}`}>
              <h3 className="text-xl font-semibold">Sources et organismes à suivre</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {sources.map((source) => (
                  <span key={source} className={`rounded-full border px-4 py-2 text-sm ${current.badge}`}>
                    {source}
                  </span>
                ))}
              </div>
              <div className={`mt-8 rounded-[1.6rem] border p-5 ${current.cardSoft}`}>
                <h4 className="font-semibold">Exemple de lien avec la CEJM</h4>
                <p className={`mt-3 leading-7 ${current.textSoft}`}>
                  Une application plus légère et mieux pensée peut réduire les coûts d'hébergement, améliorer l'image responsable de l'entreprise et répondre à des objectifs environnementaux. La technologie devient alors un enjeu à la fois économique, managérial et écologique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" data-reveal data-key="contact" className={`mx-auto max-w-7xl px-6 pb-24 pt-12 ${sectionClass("contact")}`}>
          <div className={`rounded-[2rem] border p-8 md:p-10 ${current.card}`}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${current.textMuted}`}>Contact</p>
                <h2 className="mt-2 text-3xl font-bold">Une base premium prête à être enrichie</h2>
                <p className={`mt-4 max-w-3xl leading-8 ${current.textSoft}`}>
                  Cette version V3 renforce l'identité visuelle Studio avec une ambiance plus cohérente, une composition plus éditoriale et une présentation plus marquante pour le jury. La prochaine étape sera d'intégrer tes vrais projets, tes captures d'écran, tes liens réels, les missions détaillées de tes stages et ton tableau de synthèse pour transformer cette base en portfolio final d'examen.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#accueil" className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${current.buttonPrimary}`}>
                  Retour accueil <ExternalLink className="h-4 w-4" />
                </a>
                <a href="mailto:contact@example.com" className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 transition ${current.buttonSecondary}`}>
                  <Mail className="h-4 w-4" /> Me contacter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
