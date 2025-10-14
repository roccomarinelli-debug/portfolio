import { personalInfo } from '../data/personalInfo';
import { competencies } from '../data/competencies';
import { achievements } from '../data/achievements';

function Home() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Executive Summary */}
      <section className="animate-slide-up">
        <div className="border-l-8 border-primary pl-8 mb-8">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight">
            Professional Profile
          </h2>
        </div>
        <div className="bg-white rounded-xl p-12 shadow-lg border border-primary/20">
          <p className="text-2xl text-textPrimary leading-relaxed font-light">
            {personalInfo.summary}
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="border-l-8 border-secondary pl-8 mb-10">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight">
            Core Competencies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={competency.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary group hover:border-secondary"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-5xl mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                {competency.icon}
              </div>
              <h3 className="text-xl font-bold text-darkBlue mb-3 group-hover:text-primary transition-colors">
                {competency.title}
              </h3>
              <p className="text-base text-textSecondary leading-relaxed">
                {competency.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="border-l-8 border-accent pl-8 mb-10">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight">
            Career Highlights
          </h2>
        </div>
        <div className="bg-white rounded-xl p-12 shadow-lg border border-accent/20">
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-6 pb-6 border-b border-primary/10 last:border-b-0 last:pb-0 group"
              >
                <div className="flex-shrink-0 w-3 h-3 bg-primary rounded-full mt-2 group-hover:scale-150 group-hover:bg-accent transition-all duration-300"></div>
                <p className="text-lg text-textPrimary leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
