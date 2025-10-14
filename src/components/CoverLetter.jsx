function CoverLetter() {
  return (
    <div className="cover-letter-container bg-white max-w-4xl mx-auto">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .cover-letter-container { max-width: 100%; padding: 0; }
          .page-break { page-break-after: always; }
          @page { margin: 2cm; }
        }
      `}</style>

      {/* Header */}
      <header className="mb-8">
        <div className="text-right mb-6">
          <p className="font-bold text-darkBlue">Rocco Marinelli</p>
          <p className="text-sm text-textSecondary">rocco.marineli@gmail.com | +61 490 038 888</p>
          <p className="text-sm text-textSecondary">Currently: Australia | Relocating: Helsinki, Finland (2025)</p>
        </div>
        <p className="text-sm text-textSecondary mb-8">October 13, 2025</p>
        <div className="mb-6">
          <p className="font-bold text-darkBlue">UNICEF Recruitment Team</p>
          <p className="text-sm text-textSecondary">Global Learning Innovation Hub</p>
          <p className="text-sm text-textSecondary">Helsinki, Finland</p>
        </div>
        <p className="font-bold text-darkBlue mb-6">
          Re: Digital Education Communications and Storytelling Consultant (Job ID: 4309591046)
        </p>
      </header>

      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mb-8"></div>

      {/* Opening */}
      <section className="mb-6">
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          Dear UNICEF Recruitment Team,
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          I am writing to express my profound interest in the Digital Education Communications and Storytelling Consultant position with UNICEF's Global Learning Innovation Hub. This opportunity represents the convergence of my 15+ years of strategic communication expertise, my deep personal commitment to education, and a life decision that speaks to the very heart of UNICEF's mission: <strong>I am relocating my family from Australia to Helsinki specifically so my children can be educated in the Finnish school system.</strong>
        </p>
      </section>

      {/* Education Priority */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-primary pl-3">
          Education: Not Just My Career, But My Life's Priority
        </h2>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          My Finnish wife and I have made the deliberate choice to uproot our lives and move our children to Finland for one reason above all others—<strong>their education</strong>. When you believe so deeply in the transformative power of quality education that you're willing to relocate your entire family across the world, working for UNICEF to ensure every child has access to world-class learning opportunities isn't just a job—it's a calling that aligns perfectly with my personal values and life decisions.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          This isn't about pivoting from corporate to non-profit. This is about applying 15 years of communication excellence to the cause I've literally restructured my family's life around: ensuring children receive the education they deserve.
        </p>
      </section>

      {/* Mission Resonance */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-secondary pl-3">
          Why UNICEF's Mission Resonates So Deeply
        </h2>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          UNICEF's Digital Education Strategy 2025-2030—with its vision of reaching 350+ million children, particularly those most marginalized and underserved—represents exactly the kind of impact-driven work I want to dedicate my professional skills toward. Having chosen the Finnish education system for my own children, I understand firsthand what world-class, equitable education looks like.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          Your initiatives—from the Blue Unicorn Portfolio scaling proven EdTech solutions to 100+ million children, to the Learning Cabinet making quality digital learning resources accessible, to programs like Accessible Digital Textbooks ensuring children with disabilities aren't left behind—these aren't abstract concepts to me. They represent children like mine, and millions more who deserve the same chances.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-accent pl-3">
          Strategic Communication Excellence Meets Education Sector Experience
        </h2>

        <h3 className="text-base font-bold text-secondary mb-2">Corporate Communication Leadership (15+ Years)</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-3">
          I bring proven strategic communication expertise from Australia's leading organizations:
        </p>
        <ul className="space-y-2 mb-4 ml-4">
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Telstra (2022-Present):</strong> Content Designer for Australia's largest telecommunications company, creating user-centric content that educates millions of customers on complex digital services</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Transurban (2015-2018):</strong> Led $2M+ digital transformation project educating 500,000+ users, achieving 10-point NPS improvement</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Techtronic Industries (2018-2021):</strong> Managed global content strategy, implementing enterprise CMS across 10+ international brands</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>iSelect (2018):</strong> Achieved Top 5 rankings for 50+ keywords through educational content</span>
          </li>
        </ul>

        <h3 className="text-base font-bold text-secondary mb-2 bg-accent/10 p-2 rounded">
          🎓 Education Sector Experience (Often Overlooked)
        </h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-3">
          What many don't know is that I've also worked directly in educational institutions:
        </p>
        <ul className="space-y-2 mb-4 ml-4">
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span><strong>RMIT University:</strong> Developed communication strategies for one of Australia's leading universities, understanding how educational institutions communicate their value to diverse stakeholder groups</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span><strong>Kangan TAFE:</strong> Created content for vocational and technical education audiences, learning how to make practical skills training accessible for learners from diverse backgrounds</span>
          </li>
        </ul>

        <h3 className="text-base font-bold text-secondary mb-2">Formal Qualifications in Communication</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-2">
          My commitment to communication excellence is grounded in formal education across three distinct disciplines:
        </p>
        <ul className="space-y-1 mb-4 ml-4">
          <li className="text-sm text-textPrimary"><strong>1. Bachelor of Arts (Professional Writing)</strong> - Deakin University</li>
          <li className="text-sm text-textPrimary"><strong>2. Bachelor of Communication (Journalism)</strong> - Monash University</li>
          <li className="text-sm text-textPrimary"><strong>3. Bachelor of Business (Marketing)</strong> - Monash University (Distinction)</li>
        </ul>
        <p className="text-sm leading-relaxed text-textPrimary mb-4">
          This trifecta creates exactly the skill combination UNICEF needs: someone who can write compellingly, tell human-impact stories authentically, and position UNICEF strategically as a global leader in digital education transformation.
        </p>
      </section>

      <div className="page-break"></div>

      {/* What I Bring */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-primary pl-3">
          What I Bring to UNICEF's Digital Education Communications
        </h2>

        <h3 className="text-base font-bold text-secondary mb-2">1. Proven Communication Strategy Development</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-4">
          At Telstra, I lead content design for millions of customers, creating strategies that transform complex technical information into accessible learning experiences. At Transurban, I developed frameworks that educated 500,000+ users through major digital change, achieving measurable satisfaction improvements.
        </p>

        <h3 className="text-base font-bold text-secondary mb-2">2. High-Volume, High-Quality Content Production</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-2">
          Over 15 years, I've produced every format UNICEF requires: human interest stories, newsletters, website content, social media, thought leadership, and multimedia coordination. My journalism background means I know how to find and tell compelling stories that put human faces on statistics.
        </p>

        <h3 className="text-base font-bold text-secondary mb-2 mt-3">3. Technical Capabilities Rare in Non-Profit Sector</h3>
        <ul className="space-y-1 mb-3 ml-4">
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>CMS & Web Development:</strong> WordPress, Adobe AEM, Contentful, Drupal - can update websites hands-on</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>AI Tools:</strong> ChatGPT, Claude, Midjourney for content creation and optimization</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Data Analytics:</strong> Google Analytics, performance measurement, effectiveness tracking</span>
          </li>
        </ul>

        <h3 className="text-base font-bold text-secondary mb-2">4. Independent Consultant Capability</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-4">
          Three years as independent consultant (2012-2015) plus current remote/hybrid work at Telstra means I know how to set up efficient remote working systems, communicate proactively with distributed teams, and deliver complex projects with minimal supervision.
        </p>

        <h3 className="text-base font-bold text-secondary mb-2">5. Stakeholder Management Across Complex Organizations</h3>
        <p className="text-sm leading-relaxed text-textPrimary mb-4">
          I've successfully managed communication with executive leadership (C-suite at Telstra, Transurban, Techtronic), cross-functional teams, external partners, and international teams across time zones—preparing me for UNICEF's stakeholder ecosystem.
        </p>
      </section>

      {/* Helsinki Advantage */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-secondary pl-3">
          The Helsinki Advantage
        </h2>
        <p className="text-sm leading-relaxed text-textPrimary mb-2">
          Unlike most candidates applying from abroad, <strong>I am already committed to relocating to Helsinki with my family in 2025.</strong> This means:
        </p>
        <ul className="space-y-2 mb-4 ml-4">
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">✓</span>
            <span><strong>No relocation uncertainty</strong> - My wife is Finnish; we have family ties to Finland</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">✓</span>
            <span><strong>True hybrid capability</strong> - Can work from UNICEF offices in Helsinki when needed</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary mt-1">✓</span>
            <span><strong>Stability and reliability</strong> - Invested in making Helsinki work for our family long-term</span>
          </li>
        </ul>
      </section>

      {/* Personal Connection */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-accent pl-3">
          The Personal Connection That Matters
        </h2>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          Many applicants can claim communication expertise. Many can point to impressive corporate careers. But how many can say: <strong>"I believe so deeply in the transformative power of quality education that I'm moving my entire family across the world to ensure my children experience it"?</strong>
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          That's not rhetoric. That's my reality.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          When UNICEF talks about ensuring every child has access to world-class digital learning opportunities, I don't just understand it intellectually—I understand it as a parent who has made life-altering decisions to ensure my children have exactly that.
        </p>
      </section>

      {/* Closing */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-darkBlue mb-3 border-l-4 border-primary pl-3">
          Why Now, Why UNICEF, Why Me
        </h2>
        <p className="text-sm leading-relaxed text-textPrimary mb-3">
          <strong>Why Now:</strong> My family and I are relocating to Helsinki in 2025. I have 15 years of communication expertise ready to apply. UNICEF needs someone who can oversee communications for the Global Learning Innovation Hub. The timing is perfect.
        </p>
        <p className="text-sm leading-relaxed text-textPrimary mb-3">
          <strong>Why UNICEF:</strong> Because I want my professional work to align with what I've proven matters most to me: children's education. Because UNICEF is the global leader in ensuring every child—especially the most vulnerable—has access to learning opportunities.
        </p>
        <p className="text-sm leading-relaxed text-textPrimary mb-4">
          <strong>Why Me:</strong>
        </p>
        <ul className="space-y-1 mb-4 ml-4">
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Proven communication excellence (15+ years, $2M+ projects, measurable results)</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Education sector experience (RMIT University, Kangan TAFE)</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Three formal degrees in communication disciplines</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Technical capabilities rare in non-profit sector</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Genuine mission alignment proven by family relocation decision</span>
          </li>
          <li className="text-sm text-textPrimary flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Helsinki-based from 2025 with long-term commitment</span>
          </li>
        </ul>
      </section>

      {/* Final Statement */}
      <section className="mb-8">
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          Nelson Mandela said, "Education is the most powerful weapon which you can use to change the world."
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          My wife and I took that seriously enough to restructure our entire lives around it.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          UNICEF takes it seriously enough to work toward 350+ million children having access to world-class digital learning.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-4">
          Let me take my 15 years of strategic communication expertise—proven across Australia's largest telecommunications company, multimillion-dollar transformation projects, educational institutions, and diverse industries—and dedicate it fully to telling the world about UNICEF's transformative work in digital education.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-6">
          I'm not looking for a job. I'm looking to contribute my skills to the cause my family has literally relocated our lives for: ensuring children receive the education they deserve.
        </p>
        <p className="text-base leading-relaxed text-textPrimary mb-6">
          Let's ensure every child has access to the kind of education I'm moving across the world to secure for mine.
        </p>
      </section>

      <div className="mb-8">
        <p className="text-base text-textPrimary mb-6">With deep commitment to UNICEF's mission,</p>
        <p className="text-base font-bold text-darkBlue">Rocco Marinelli</p>
      </div>

      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mb-6"></div>

      {/* Contact */}
      <footer className="text-sm text-textSecondary">
        <p className="font-bold text-darkBlue mb-2">Contact Information</p>
        <p>Email: rocco.marineli@gmail.com</p>
        <p>Phone: +61 490 038 888</p>
        <p>Current Location: Australia</p>
        <p>Relocating: Helsinki, Finland (2025)</p>
        <p className="mt-4 italic">Application submitted October 13, 2025</p>
        <p className="italic">For consideration: Digital Education Communications and Storytelling Consultant</p>
      </footer>
    </div>
  );
}

export default CoverLetter;
