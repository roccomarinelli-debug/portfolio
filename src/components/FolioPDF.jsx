import { projects } from '../data/projects';

function FolioPDF() {
  return (
    <div className="folio-pdf-container bg-white max-w-4xl mx-auto">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .folio-pdf-container { max-width: 100%; padding: 0; }
          .page-break { page-break-after: always; }
          @page { margin: 2cm; }
        }
      `}</style>

      {/* Header */}
      <header className="mb-8 pb-6 border-b-4 border-primary">
        <h1 className="text-5xl font-black text-darkBlue mb-2 tracking-tight">
          ROCCO MARINELLI
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mb-3"></div>
        <p className="text-xl text-secondary font-semibold mb-2">
          Portfolio of Work
        </p>
        <p className="text-base text-textSecondary">
          Digital Education Communications & Content Strategy
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          This portfolio showcases selected projects from my 15+ year career creating education-focused content and leading digital transformation initiatives across enterprise organisations and educational institutions. Each project demonstrates strategic communication, measurable impact, and commitment to accessible, inclusive content that educates and empowers diverse audiences.
        </p>
        <p className="text-base leading-relaxed text-textPrimary">
          Most up-to-date folio of work: <a href="https://roccomarinelli1.netlify.app/" className="text-primary hover:text-secondary underline font-medium" target="_blank" rel="noopener noreferrer">https://roccomarinelli1.netlify.app/</a>
        </p>
      </section>

      {/* Projects */}
      <section>
        {projects.map((project, index) => {
          const isEducationSector = project.category === "EDUCATION SECTOR";
          const isPageBreak = index === 3; // Add page break after 3rd project

          return (
            <div key={project.id}>
              <div className={`mb-8 pb-8 ${index !== projects.length - 1 ? 'border-b-2 border-primary/10' : ''}`}>
                {/* Category Badge */}
                {project.category && (
                  <div className="mb-4">
                    <span className={`inline-block px-5 py-2 rounded-lg text-xs font-bold uppercase ${
                      isEducationSector
                        ? 'bg-accent text-white'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {isEducationSector && '🎓 '}
                      {project.category}
                    </span>
                  </div>
                )}

                {/* Project Header */}
                <h2 className="text-2xl font-bold text-darkBlue mb-2">
                  {project.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-lg font-semibold text-primary">
                    {project.company}
                  </span>
                  <span className="text-textSecondary">•</span>
                  <span className="text-base text-textSecondary">{project.duration}</span>
                </div>

                <div className="inline-block bg-surface px-4 py-2 rounded-lg text-sm font-medium text-secondary mb-4">
                  {project.role}
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-textPrimary mb-4">
                  {project.description}
                </p>

                {/* Key Outcomes */}
                <div className="mb-4">
                  <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${
                    isEducationSector ? 'text-darkBlue' : 'text-secondary'
                  }`}>
                    <span>{isEducationSector ? '📚' : '🎯'}</span>
                    Key Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                          isEducationSector ? 'bg-accent' : 'bg-primary'
                        }`}></div>
                        <span className="text-sm text-textPrimary leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-primary/10">
                  <h3 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-2">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-md text-xs font-medium border ${
                          isEducationSector
                            ? 'bg-accent/10 text-darkBlue border-accent/30'
                            : 'bg-primary/10 text-primary border-primary/20'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {isPageBreak && <div className="page-break"></div>}
            </div>
          );
        })}
      </section>

      <div className="page-break"></div>

      {/* Technical Expertise */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-6 border-l-8 border-primary pl-4">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-3 flex items-center gap-2">
              <span className="text-2xl">💻</span>
              Content Management Systems
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              WordPress (Advanced), Adobe Experience Manager / AEM (Advanced), Contentful (Intermediate), Drupal (Intermediate)
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-3 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI & Innovation Tools
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              ChatGPT, Claude (content creation and optimisation), Midjourney (visual content generation), Grammarly, Jasper AI
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-3 flex items-center gap-2">
              <span className="text-2xl">📊</span>
              Analytics & SEO
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Google Analytics 4, Google Search Console, SEMrush, Ahrefs, Moz, data-driven content optimisation
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-3 flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Design & Collaboration
            </h3>
            <p className="text-sm text-textSecondary leading-relaxed">
              Figma (content design collaboration), Adobe Creative Suite (collaboration with designers), Canva (visual content)
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-6 border-l-8 border-secondary pl-4">
          Core Capabilities
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Communication Strategy Development</h3>
            <p className="text-sm text-textPrimary leading-relaxed">
              Developing and implementing communication strategies aligned with organisational missions, creating channel-specific content plans with clear KPIs, and measuring effectiveness through data analytics.
            </p>
          </div>

          <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Content Production at Scale</h3>
            <p className="text-sm text-textPrimary leading-relaxed">
              Human interest stories, newsletters, website content, social media (LinkedIn, Facebook, X, Instagram), thought leadership, press releases, and multimedia coordination across multiple channels simultaneously.
            </p>
          </div>

          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Stakeholder Management</h3>
            <p className="text-sm text-textPrimary leading-relaxed">
              Executive leadership engagement (C-suite experience), cross-functional team collaboration (UX, product, engineering, marketing), external partner management, and international teams across time zones.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Education-Focused Content Design</h3>
            <p className="text-sm text-textPrimary leading-relaxed">
              Creating accessible, inclusive content for diverse learners. Experience from RMIT University and Kangan TAFE in educational institutions, understanding how to communicate complex concepts to varied audiences with different learning needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t-2 border-primary/20">
        <div className="text-center text-sm text-textSecondary">
          <p className="font-bold text-darkBlue mb-2">Rocco Marinelli</p>
          <p>rocco.marineli@gmail.com | +61 490 038 888</p>
          <p>Helsinki, Finland (2025) | roccomarinelli1.netlify.app</p>
          <p className="mt-4 italic">Portfolio prepared for: UNICEF Global Learning Innovation Hub</p>
          <p className="italic">Position: Digital Education Communications and Storytelling Consultant | October 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default FolioPDF;
