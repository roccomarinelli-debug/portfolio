import { personalInfo } from '../data/personalInfo';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gradient-to-r from-darkBlue via-primary to-secondary border-b-4 border-accent shadow-lg no-print">
      <div className="container mx-auto px-8 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="animate-slide-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-3 tracking-tighter leading-none drop-shadow-lg">
              {personalInfo.name}
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-accent via-white to-accent mb-4"></div>
            <p className="text-2xl md:text-4xl text-white font-medium drop-shadow-md">
              {personalInfo.title}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-base animate-fade-in lg:text-right">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-accent transition-colors duration-300 font-medium flex items-center gap-2 lg:justify-end"
            >
              <FaEnvelope className="text-accent" />
              {personalInfo.email}
            </a>
            <p className="text-white/90 flex items-center gap-2 lg:justify-end">
              <FaPhone className="text-accent" />
              {personalInfo.phone}
            </p>
            <p className="text-white/90 flex items-center gap-2 lg:justify-end">
              <FaMapMarkerAlt className="text-accent" />
              {personalInfo.location}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
