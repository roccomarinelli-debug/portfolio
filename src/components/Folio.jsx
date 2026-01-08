import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import {
  FaGraduationCap,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaCode,
  FaBrain,
  FaGlobe,
  FaCheckCircle,
  FaAward,
  FaImage
} from 'react-icons/fa';

function Folio() {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'All Projects', icon: FaGlobe },
    { id: 'WEBSITE RENEWAL', label: 'Website Renewal', icon: FaRocket },
    { id: 'MARKETING STRATEGY', label: 'Marketing Strategy', icon: FaChartLine },
    { id: 'E-COMMERCE', label: 'E-Commerce', icon: FaLightbulb },
    { id: 'CONTENT STRATEGY', label: 'Content Strategy', icon: FaBrain },
  ];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'WEBSITE RENEWAL':
        return {
          bg: 'bg-gradient-to-r from-primary/5 to-accent/5',
          border: 'border-l-8 border-primary',
          badge: 'bg-primary'
        };
      case 'MARKETING STRATEGY':
        return {
          bg: 'bg-gradient-to-r from-secondary/5 to-primary/5',
          border: 'border-l-8 border-secondary',
          badge: 'bg-secondary'
        };
      case 'E-COMMERCE':
        return {
          bg: 'bg-gradient-to-r from-accent/5 to-secondary/5',
          border: 'border-l-8 border-accent',
          badge: 'bg-accent'
        };
      case 'CONTENT STRATEGY':
        return {
          bg: 'bg-gradient-to-r from-primary/5 to-secondary/5',
          border: 'border-l-8 border-primary',
          badge: 'bg-primary'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-l-4 border-primary/30',
          badge: 'bg-primary'
        };
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'WEBSITE RENEWAL':
        return <FaRocket className="inline-block mr-2" />;
      case 'MARKETING STRATEGY':
        return <FaChartLine className="inline-block mr-2" />;
      case 'E-COMMERCE':
        return <FaLightbulb className="inline-block mr-2" />;
      case 'CONTENT STRATEGY':
        return <FaBrain className="inline-block mr-2" />;
      default:
        return <FaLightbulb className="inline-block mr-2" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="border-l-8 border-primary pl-8 mb-8">
          <h2 className="text-6xl font-black text-darkBlue tracking-tight mb-4 flex items-center gap-4">
            <FaRocket className="text-primary" />
            Portfolio of Work
          </h2>
          <p className="text-xl text-textSecondary font-light max-w-4xl leading-relaxed">
            15+ years leading website transformations, marketing content strategy, and
            e-commerce optimization across enterprise organizations including telecommunications,
            infrastructure, and automotive sectors.
          </p>
        </div>
      </motion.section>

      {/* Filter Buttons with Animation */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-3 pb-8 border-b-2 border-primary/10"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-textSecondary hover:bg-primary/10 hover:text-primary border-2 border-primary/20'
              }`}
            >
              <Icon className="text-lg" />
              {cat.label}
            </motion.button>
          );
        })}
      </motion.section>

      {/* Projects Grid with Two-Column Visual Layout */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        key={filter}
      >
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const colors = getCategoryColor(project.category);

            return (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className={`${colors.bg} ${colors.border} rounded-r-2xl p-8 md:p-10 shadow-xl`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Content (2/3 width) */}
                  <div className="lg:col-span-2">
                    {/* Category Badge and Logo Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      {project.category && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <span className={`inline-flex items-center px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${colors.badge} text-white shadow-md`}>
                            {getCategoryIcon(project.category)}
                            {project.category}
                          </span>
                        </motion.div>
                      )}

                      {/* Company Logo */}
                      {project.logo && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="bg-white p-3 rounded-lg shadow-md"
                        >
                          <img
                            src={project.logo}
                            alt={`${project.company} logo`}
                            className="h-12 w-auto object-contain"
                          />
                        </motion.div>
                      )}
                    </div>

                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-darkBlue mb-3 leading-tight">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-lg font-semibold text-primary flex items-center gap-2">
                          <FaAward className="text-accent" />
                          {project.company}
                        </span>
                        <span className="text-textSecondary">•</span>
                        <span className="text-base text-textSecondary">{project.duration}</span>
                      </div>

                      <div className="inline-block bg-surface px-4 py-2 rounded-lg text-sm font-medium text-secondary shadow-sm">
                        {project.role}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg text-textPrimary leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Key Outcomes with Icons */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-darkBlue mb-4 flex items-center gap-2">
                        <FaChartLine className="text-primary" />
                        Key Outcomes & Impact
                      </h4>
                      <ul className="space-y-3">
                        {project.outcomes.map((outcome, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 group"
                          >
                            <FaCheckCircle className={`flex-shrink-0 mt-1 text-lg text-${colors.badge.replace('bg-', '')} group-hover:scale-125 transition-transform duration-300`} />
                            <span className="text-sm md:text-base text-textPrimary leading-relaxed">
                              {outcome}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-primary/10">
                      <h4 className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FaCode className="text-primary" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 bg-${colors.badge.replace('bg-', '')}/10 text-darkBlue border-${colors.badge.replace('bg-', '')}/30 hover:bg-${colors.badge.replace('bg-', '')}/20`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase (1/3 width) */}
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="sticky top-24"
                    >
                      {/* Screenshot/Work Sample Placeholder */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg border-4 border-primary/10">
                        <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center relative">
                          {/* Placeholder for future screenshots */}
                          <div className="text-center p-6">
                            <FaImage className="text-6xl text-primary/20 mx-auto mb-3" />
                            <p className="text-sm text-textSecondary font-medium">
                              Work Sample
                            </p>
                            <p className="text-xs text-textSecondary/70 mt-1">
                              Visual showcase coming soon
                            </p>
                          </div>

                          {/* Screenshot overlay */}
                          {project.screenshot && (
                            <img
                              src={project.screenshot}
                              alt={`${project.title} screenshot`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                        </div>

                        {/* Visual Caption */}
                        <div className="p-4 bg-white">
                          <p className="text-xs font-semibold text-darkBlue mb-1">
                            Project Highlight
                          </p>
                          <p className="text-xs text-textSecondary">
                            {project.title}
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Technical Expertise Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <div className="border-l-8 border-accent pl-8 mb-10">
          <h2 className="text-5xl font-black text-darkBlue tracking-tight flex items-center gap-3">
            <FaBrain className="text-accent" />
            Technical Expertise
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'CMS Platforms', icon: FaCode, color: 'primary', skills: 'WordPress, Adobe Experience Manager (AEM), Contentful, Drupal' },
            { title: 'Design Tools', icon: FaLightbulb, color: 'secondary', skills: 'Figma, Sketch, Adobe Creative Suite, Canva' },
            { title: 'Analytics & SEO', icon: FaChartLine, color: 'accent', skills: 'Google Analytics, Search Console, SEMrush, Ahrefs, Moz' },
            { title: 'AI & Innovation', icon: FaBrain, color: 'primary', skills: 'Claude, ChatGPT, Midjourney, Grammarly, Jasper' }
          ].map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className={`bg-white rounded-xl p-6 shadow-md transition-all duration-300 border-t-4 border-${skill.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`text-3xl text-${skill.color}`} />
                  <h3 className="text-lg font-bold text-darkBlue">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {skill.skills}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}

export default Folio;
