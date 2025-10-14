function CV() {
  return (
    <div className="cv-container bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .cv-container { max-width: 100%; padding: 0; }
          .page-break { page-break-after: always; }
          @page { margin: 1.5cm; }
        }
      `}</style>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-primary pl-4">
          PROFESSIONAL SUMMARY
        </h2>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
          <p className="text-base leading-relaxed text-textPrimary mb-4">
            Digital content strategist with <strong>15+ years</strong> of experience creating accessible, education-focused content that transforms how people learn and engage with technology. Proven track record of leading multi-million dollar digital transformation projects that educate and empower diverse audiences across enterprise organisations and educational institutions.
          </p>
          <p className="text-base leading-relaxed text-textPrimary mb-4">
            Currently <strong>Content Designer at Telstra, Australia's largest telecommunications company</strong>, with deep expertise in strategic communication, learning experience design, accessible content for diverse audiences, and AI-assisted content innovation. Have previously consulted to some of Australia's largest and most trusted brands including Transurban, Techtronic Industries, and iSelect.
          </p>
          <p className="text-base leading-relaxed text-textPrimary font-semibold">
            ⭐ <strong>Relocating to Helsinki, Finland in 2025</strong> with Finnish wife and children to access the Finnish education system—demonstrating deep personal commitment to education equity and quality.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-secondary pl-4">
          KEY ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Led $2M+ digital transformation projects that educated 500K+ users',
            'Managed teams of 15+ content specialists delivering accessible learning experiences',
            'Achieved 10-point NPS improvement through user-centric educational content',
            'Secured Top 5 rankings for 50+ keywords through educational content strategies',
            'Increased digital literacy and self-service adoption by 150%',
            'Enhanced content effectiveness by 25% through AI tools and innovation'
          ].map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-3 rounded border-l-4 border-accent">
              <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
              <span className="text-sm text-textPrimary">{achievement}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-accent pl-4">
          CORE COMPETENCIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'AI & Emerging Technologies', desc: 'ChatGPT, Claude, Midjourney for content creation' },
            { title: 'Learning Experience Design', desc: 'User-centric content for diverse audiences' },
            { title: 'Enterprise Leadership', desc: 'Leading teams of 15+, executive stakeholder management' },
            { title: 'Measurable Impact', desc: 'Data-driven strategies with proven ROI' },
            { title: 'CMS Platforms', desc: 'WordPress, AEM, Contentful, Drupal' },
            { title: 'Analytics & SEO', desc: 'Google Analytics, SEMrush, Ahrefs' },
            { title: 'Content Strategy', desc: 'Multi-channel planning and execution' },
            { title: 'Accessibility', desc: 'Inclusive content for diverse abilities' }
          ].map((competency, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border-t-4 border-primary shadow-sm">
              <h3 className="text-sm font-bold text-darkBlue mb-2">{competency.title}</h3>
              <p className="text-xs text-textSecondary">{competency.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="page-break"></div>

      {/* Professional Experience */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-6 border-l-8 border-primary pl-4">
          PROFESSIONAL EXPERIENCE
        </h2>

        {/* Telstra */}
        <div className="mb-6 pb-6 border-b">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded mb-2">
              Australia's Largest Telecommunications Company
            </span>
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Content Designer</h3>
          <p className="text-lg font-semibold text-primary">Telstra</p>
          <p className="text-sm text-textSecondary mb-3">2022 - Present | Melbourne, Australia</p>
          <p className="text-sm text-textPrimary mb-3 leading-relaxed">
            Leading content design initiatives that educate customers on digital telecommunications services and build digital literacy across diverse audiences.
          </p>
          <ul className="space-y-2">
            {[
              'Leading content design that educates millions of customers on complex technical services',
              'Developing user-centric learning experiences for diverse audiences',
              'Creating accessible content that improves digital literacy',
              'Implementing frameworks that enhance customer understanding and self-service adoption',
              'Conducting content audits to optimize clarity and accessibility'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                <span className="text-textPrimary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RMIT - EDUCATION SECTOR */}
        <div className="mb-6 pb-6 border-b bg-accent/5 p-6 rounded-lg">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-accent text-white text-xs font-bold uppercase rounded">
              🎓 EDUCATION SECTOR
            </span>
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Communication Specialist / Content Developer</h3>
          <p className="text-lg font-semibold text-primary">RMIT University</p>
          <p className="text-sm text-textSecondary mb-3">2010 - 2012 (Contract) | Melbourne, Australia</p>
          <p className="text-sm text-textPrimary mb-3 leading-relaxed">
            Developed communication strategies and content for one of Australia's leading universities, understanding how educational institutions communicate value to diverse stakeholder groups.
          </p>
          <ul className="space-y-2">
            {[
              'Led digital transformation communication for one of Australia\'s premier universities',
              'Developed content strategies for educational programs reaching 90,000+ students',
              'Created accessible learning materials for diverse student cohorts and international audiences',
              'Collaborated with academic faculties on digital course promotion and student engagement',
              'Pioneered online content frameworks that improved prospective student conversion by 40%'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                <span className="text-textPrimary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kangan - EDUCATION SECTOR */}
        <div className="mb-6 pb-6 border-b bg-accent/5 p-6 rounded-lg">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-accent text-white text-xs font-bold uppercase rounded">
              🎓 EDUCATION SECTOR
            </span>
          </div>
          <h3 className="text-xl font-bold text-darkBlue">Content Developer - Vocational Education</h3>
          <p className="text-lg font-semibold text-primary">Kangan Institute (TAFE)</p>
          <p className="text-sm text-textSecondary mb-3">2011 (Contract) | Melbourne, Australia</p>
          <p className="text-sm text-textPrimary mb-3 leading-relaxed">
            Transformed vocational education content for technical training programs, creating inclusive digital learning materials for diverse learner backgrounds.
          </p>
          <ul className="space-y-2">
            {[
              'Transformed vocational education content for technical training programs',
              'Created inclusive, accessible learning materials for diverse learner backgrounds',
              'Developed digital content strategy for trades and technical education courses',
              'Made complex technical skills training understandable for varied literacy levels'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-accent rounded-full mt-1.5"></div>
                <span className="text-textPrimary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transurban */}
        <div className="mb-6 pb-6 border-b">
          <h3 className="text-xl font-bold text-darkBlue">Digital Content Lead</h3>
          <p className="text-lg font-semibold text-primary">Transurban</p>
          <p className="text-sm text-textSecondary mb-3">2015 - 2018 | Melbourne, Australia</p>
          <p className="text-sm text-textPrimary mb-3 leading-relaxed">
            Led $2M+ digital transformation project educating 500,000+ users on new digital toll systems, achieving significant NPS improvements through accessible content.
          </p>
          <ul className="space-y-2">
            {[
              'Led $2M+ digital transformation project educating 500K+ users',
              'Developed multi-channel content strategy improving user understanding',
              'Created accessible, inclusive content for diverse learner needs',
              'Achieved 10-point NPS improvement through enhanced user education',
              '150% increase in organic traffic through educational content'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-1.5"></div>
                <span className="text-textPrimary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other roles condensed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Content & Social Media Marketing Manager', company: 'iSelect', year: '2018', highlight: 'Top 5 rankings for 50+ keywords, 200% organic lead increase' },
            { title: 'Content Strategy Manager', company: 'Techtronic Industries', year: '2018-2021', highlight: 'Enterprise CMS across 10+ brands, 25% cost reduction' },
            { title: 'Head of Content', company: 'Cars24', year: '2018', highlight: 'Built scalable content framework from ground up' },
            { title: 'Content Strategist Consultant', company: 'Independent', year: '2012-2015', highlight: 'Content strategy consulting for various clients' }
          ].map((role, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-primary/30">
              <h3 className="text-base font-bold text-darkBlue">{role.title}</h3>
              <p className="text-sm font-semibold text-primary">{role.company}</p>
              <p className="text-xs text-textSecondary mb-2">{role.year}</p>
              <p className="text-xs text-textPrimary">{role.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="page-break"></div>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-6 border-l-8 border-secondary pl-4">
          EDUCATION & QUALIFICATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { degree: 'Bachelor of Arts (Professional Writing)', uni: 'Deakin University', note: 'Technical and creative writing mastery, content strategy fundamentals' },
            { degree: 'Bachelor of Communication (Journalism)', uni: 'Monash University', note: 'Investigative storytelling, digital media, ethical communication' },
            { degree: 'Bachelor of Business (Marketing)', uni: 'Monash University', note: 'Strategic communication, consumer behaviour, graduated with distinction' }
          ].map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-t-4 border-secondary shadow-md">
              <h3 className="text-base font-bold text-darkBlue mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-sm font-semibold text-secondary mb-3">{edu.uni}</p>
              <p className="text-xs text-textSecondary">{edu.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Statement */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-accent pl-4">
          PERSONAL STATEMENT
        </h2>
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg border-l-4 border-accent">
          <h3 className="text-lg font-bold text-darkBlue mb-3">Relocating to Helsinki for Children's Education</h3>
          <p className="text-sm text-textPrimary leading-relaxed mb-3">
            In 2025, my Finnish wife and I are relocating our family from Australia to Helsinki <strong>specifically so our children can be educated in the Finnish school system</strong>. This decision reflects our deep commitment to education equity and quality—values that align perfectly with UNICEF's mission.
          </p>
          <p className="text-sm text-textPrimary leading-relaxed">
            When we chose to uproot our lives for our children's education, it demonstrated that <strong>education isn't just my career focus—it's my family's highest priority</strong>. Working to ensure every child has access to world-class learning opportunities isn't just professional ambition; it's a cause I've literally restructured my life around.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 pt-6 border-t-2 border-primary/20 text-center text-sm text-textSecondary">
        <p>References available upon request</p>
        <p className="mt-2">Document prepared for: <strong>UNICEF Global Learning Innovation Hub</strong></p>
        <p>Position: Digital Education Communications and Storytelling Consultant | October 2025</p>
      </footer>
    </div>
  );
}

export default CV;
