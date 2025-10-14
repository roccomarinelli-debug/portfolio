function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'folio', label: 'Folio' }
  ];

  return (
    <nav className="bg-surface shadow-sm sticky top-0 z-40 backdrop-blur-sm bg-surface/95 no-print">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex gap-0 border-b-2 border-primary/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-10 py-5 text-lg font-semibold tracking-wide transition-all duration-200 relative ${
                activeTab === tab.id
                  ? 'text-primary border-b-4 border-primary -mb-[2px]'
                  : 'text-textSecondary hover:text-primary hover:bg-primary/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
