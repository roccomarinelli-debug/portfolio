import { professionalExperience, education } from '../data/experience';

function Experience() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Professional Experience */}
      <section>
        <div className="border-l-8 border-primary pl-8 mb-10">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight">
            Professional Experience
          </h2>
        </div>
        <div className="space-y-6">
          {professionalExperience.map((job, index) => {
            const isEducationSector = job.highlight === "EDUCATION SECTOR";
            const cardClass = isEducationSector
              ? "bg-gradient-to-r from-accent/5 to-primary/5 border-l-8 border-accent shadow-xl"
              : "bg-white border-l-4 border-primary/30 shadow-md";

            return (
              <div
                key={job.id}
                className={`${cardClass} rounded-r-xl p-10 transition-all duration-300 hover:shadow-2xl animate-slide-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {job.highlight && (
                  <div className="mb-4">
                    <span className={`inline-block px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider ${
                      isEducationSector
                        ? 'bg-accent text-white'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {job.highlight}
                    </span>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-darkBlue mb-2">
                      {job.role}
                    </h3>
                    <p className="text-xl text-primary font-semibold">{job.company}</p>
                  </div>
                  <span className="text-sm text-textSecondary font-medium bg-surface px-4 py-2 rounded-lg">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 text-textPrimary"
                    >
                      <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                        isEducationSector ? 'bg-accent' : 'bg-primary'
                      }`}></div>
                      <span className="text-base leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education */}
      <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="border-l-8 border-secondary pl-8 mb-10">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight">
            Education & Qualifications
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-white border-t-4 border-secondary rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <h3 className="text-lg font-bold text-darkBlue mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className="text-base text-secondary font-semibold mb-3">{edu.institution}</p>
              <p className="text-sm text-textSecondary leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
