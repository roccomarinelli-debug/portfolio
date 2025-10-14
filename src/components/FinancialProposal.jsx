function FinancialProposal() {
  return (
    <div className="financial-proposal-container bg-white max-w-4xl mx-auto">
      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .financial-proposal-container { max-width: 100%; padding: 0; }
          .page-break { page-break-after: always; }
          @page { margin: 2cm; }
        }
      `}</style>

      {/* Header */}
      <header className="mb-8 pb-6 border-b-4 border-primary">
        <h1 className="text-4xl font-black text-darkBlue mb-2 tracking-tight">
          FINANCIAL PROPOSAL
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mb-3"></div>
        <h2 className="text-2xl font-bold text-secondary mb-2">
          Digital Education Communications and Storytelling Consultant
        </h2>
        <p className="text-lg text-textSecondary">
          UNICEF Chad / Global Learning Innovation Hub
        </p>
      </header>

      {/* Contact Information */}
      <section className="mb-8 bg-surface p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-bold text-darkBlue">Consultant Name:</p>
            <p className="text-textPrimary">Rocco Marinelli</p>
          </div>
          <div>
            <p className="font-bold text-darkBlue">Email:</p>
            <p className="text-textPrimary">rocco.marineli@gmail.com</p>
          </div>
          <div>
            <p className="font-bold text-darkBlue">Phone:</p>
            <p className="text-textPrimary">+61 490 038 888</p>
          </div>
          <div>
            <p className="font-bold text-darkBlue">Location:</p>
            <p className="text-textPrimary">Helsinki 2025</p>
          </div>
          <div>
            <p className="font-bold text-darkBlue">Submission Date:</p>
            <p className="text-textPrimary">October 13, 2025</p>
          </div>
          <div>
            <p className="font-bold text-darkBlue">Reference:</p>
            <p className="text-textPrimary">Job ID 4309591046</p>
          </div>
        </div>
      </section>

      {/* Professional Fee Proposal */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-primary pl-4">
          PROFESSIONAL FEE PROPOSAL
        </h2>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary mb-6">
          <h3 className="text-xl font-bold text-darkBlue mb-4">Contract Details</h3>
          <ul className="space-y-2 text-base text-textPrimary">
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <span><strong>Duration:</strong> 7 months (with possibility of 6-month extension to 13 months total)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <span><strong>Work Modality:</strong> Remote/Hybrid</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <span><strong>Availability:</strong> European Eastern Time (EET) timezone</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
              <span><strong>Supervision:</strong> Partnerships Specialist, Global Learning Innovation Hub</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-lg border-4 border-primary mb-6">
          <h3 className="text-2xl font-bold text-darkBlue mb-6 text-center">ALL-INCLUSIVE PROFESSIONAL FEE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <p className="text-sm text-textSecondary mb-2">Daily Rate</p>
              <p className="text-3xl font-black text-primary">$450 USD</p>
              <p className="text-xs text-textSecondary">per working day</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-textSecondary mb-2">Contract Period</p>
              <p className="text-3xl font-black text-secondary">7 months</p>
              <p className="text-xs text-textSecondary">140 working days</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-textSecondary mb-2">Total Fee</p>
              <p className="text-3xl font-black text-accent">$63,000 USD</p>
              <p className="text-xs text-textSecondary">all-inclusive</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-darkBlue">TOTAL PROFESSIONAL FEE: USD $63,000</p>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-secondary pl-4">
          PAYMENT SCHEDULE
        </h2>
        <p className="text-sm text-textSecondary mb-4 italic">As per Terms of Reference deliverables structure</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-primary/20 p-3 text-left">Phase</th>
                <th className="border border-primary/20 p-3 text-left">Deliverables</th>
                <th className="border border-primary/20 p-3 text-left">Timeline</th>
                <th className="border border-primary/20 p-3 text-left">Payment</th>
                <th className="border border-primary/20 p-3 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">1</td>
                <td className="border border-primary/20 p-3">Communication strategy proposal, 1 asset, 1 copyedit, 2 social posts, SLUSH event support</td>
                <td className="border border-primary/20 p-3">Month 1</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-surface/50 hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">2</td>
                <td className="border border-primary/20 p-3">Updated strategy, 4 assets, 3 copyedits, 4 social posts, BETT event coordination</td>
                <td className="border border-primary/20 p-3">Months 2-3</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-white hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">3</td>
                <td className="border border-primary/20 p-3">4 assets, 3 copyedits, database update, 4 social posts</td>
                <td className="border border-primary/20 p-3">Months 4-5</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-surface/50 hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">4</td>
                <td className="border border-primary/20 p-3">4 assets, 3 copyedits, event coordination, 4 social posts</td>
                <td className="border border-primary/20 p-3">Months 6-7</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-white hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">5</td>
                <td className="border border-primary/20 p-3">4 assets, 3 copyedits, database update</td>
                <td className="border border-primary/20 p-3">Months 7-8</td>
                <td className="border border-primary/20 p-3 text-center">10%</td>
                <td className="border border-primary/20 p-3 font-semibold">$6,300</td>
              </tr>
              <tr className="bg-surface/50 hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">6</td>
                <td className="border border-primary/20 p-3">4 assets, 3 copyedits, 4 social posts</td>
                <td className="border border-primary/20 p-3">Months 9-10</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-white hover:bg-surface">
                <td className="border border-primary/20 p-3 font-semibold">7</td>
                <td className="border border-primary/20 p-3">6 assets, 4 copyedits, Digital Education Week event, 6 social posts, database update, effectiveness report, SLUSH support</td>
                <td className="border border-primary/20 p-3">Months 11-13</td>
                <td className="border border-primary/20 p-3 text-center">15%</td>
                <td className="border border-primary/20 p-3 font-semibold">$9,450</td>
              </tr>
              <tr className="bg-primary/20 font-bold">
                <td className="border border-primary/20 p-3">TOTAL</td>
                <td className="border border-primary/20 p-3"></td>
                <td className="border border-primary/20 p-3">7 months</td>
                <td className="border border-primary/20 p-3 text-center">100%</td>
                <td className="border border-primary/20 p-3 text-lg">$63,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-textSecondary mt-4 italic">
          <strong>Note:</strong> Payment schedule is based on successful submission and acceptance of deliverables as outlined in the Terms of Reference.
        </p>
      </section>

      <div className="page-break"></div>

      {/* Travel & Expenses */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-accent pl-4">
          TRAVEL & EXPENSES
        </h2>

        <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent mb-6">
          <p className="text-base text-textPrimary mb-4 italic">
            As per the Terms of Reference: "Trips may be required based on the 2026 work plan. For these trips, the Consultant does not need to include an estimated duty-related travel budget as part of the all-inclusive fee. UNICEF will provide the estimated budget for duty-related when the contract is signed and will reimburse the actual costs incurred upon submission of receipts."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-3">UNICEF Will Reimburse:</h3>
            <ul className="space-y-2 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Travel costs (economy class flights)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Daily Subsistence Allowance (DSA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Visa costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Travel insurance and health insurance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-3">Consultant Will:</h3>
            <ul className="space-y-2 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Obtain necessary visas and insurance coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Travel as required for the role</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Submit receipts for reimbursement per UNICEF procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Coordinate travel timing with UNICEF team</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables Summary */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-primary pl-4">
          DELIVERABLES SUMMARY
        </h2>
        <p className="text-base text-textSecondary mb-6">Over the 7-month period, I will deliver:</p>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Communication Strategy</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Proposed updates to communication strategy (Month 1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Updated comprehensive communication strategy (Months 2-3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Ongoing strategy implementation and refinement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Communication Assets (30+ total)</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Human interest stories highlighting impact on children</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Newsletters (regular cadence)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Website content and updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Thought leadership pieces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Multimedia products (video scripts, photo stories)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Press releases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Advocacy and information materials</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Social Media Content (30+ posts)</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>LinkedIn posts showcasing UNICEF's digital education work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Platform-specific content for other channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Strategic partnership highlights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Program impact stories</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Copyediting Services (20+ documents)</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Communication materials, donor proposals, reports and briefing notes, technical documents</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Event Coordination</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>SLUSH (November 2025, Helsinki), BETT (January/February 2026, London), Digital Education Week</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Pre-event promotion, during-event coverage, post-event content</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-2">Database Management & Monitoring</h3>
            <ul className="space-y-1 text-sm text-textPrimary">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Comprehensive communication asset database with regular updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Communication effectiveness monitoring and 5-page final report</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="page-break"></div>

      {/* Value Proposition */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-darkBlue mb-4 border-l-8 border-secondary pl-4">
          WHY THIS FEE REPRESENTS EXCELLENT VALUE
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">1. Senior-Level Expertise at Mid-Range Rate</h3>
            <p className="text-sm text-textPrimary mb-3">
              <strong>Market Context:</strong> UN consultant rates: $190-$270+ per day | Senior communication consultants: $500-$600+ per day | <strong>Proposed rate: $450/day</strong> - competitive and fair
            </p>
            <p className="text-sm text-textPrimary">
              <strong>Experience Level:</strong> 15 years vs. 5-year minimum (3x requirement) | Enterprise-scale project leadership ($2M+ projects) | Proven results with measurable ROI
            </p>
          </div>

          <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-2">2. Immediate Value Delivery</h3>
            <p className="text-sm text-textPrimary">
              Hit ground running from Day 1 | Independent working capability | Minimal supervision required | Own equipment and software licenses | Professional home office setup
            </p>
          </div>

          <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-lg border-l-4 border-secondary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">3. Rare Skill Combination</h3>
            <p className="text-sm text-textPrimary">
              Strategic + Technical + Creative: Communication strategy development | Hands-on content production | Web and CMS technical skills | AI tools proficiency | Data analytics and measurement | Visual design collaboration
            </p>
            <p className="text-sm text-textPrimary mt-2 italic">
              This combination is rare in the non-profit sector and typically requires multiple hires.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
            <h3 className="text-lg font-bold text-darkBlue mb-2">4. Enterprise Standards for Humanitarian Mission</h3>
            <p className="text-sm text-textPrimary">
              Bringing corporate excellence to social impact: Process optimization | Data-driven decision making | Professional project management | Quality assurance systems | Fresh perspective from enterprise sector
            </p>
          </div>

          <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-6 rounded-lg border-l-4 border-accent">
            <h3 className="text-lg font-bold text-darkBlue mb-2">5. Flexible & Committed</h3>
            <p className="text-sm text-textPrimary">
              Remote work capability (reduced UNICEF overhead) | Available during EET timezone | Flexible for travel when required | 7-month commitment with extension possibility
            </p>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-lg border-4 border-primary">
          <h2 className="text-3xl font-bold text-darkBlue mb-6 text-center">FINAL STATEMENT</h2>
          <p className="text-base text-textPrimary mb-4">This proposal offers UNICEF:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Senior-level expertise</strong> (15 years) at <strong>competitive rate</strong> ($450/day)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Proven track record</strong> with measurable results</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Technical capabilities</strong> rare in non-profit sector</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Immediate availability</strong> and independent working ability</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Mission alignment</strong> and genuine passion for education equity</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold text-lg">✓</span>
              <span className="text-sm"><strong>Fresh perspective</strong> bringing corporate excellence to humanitarian mission</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg mt-6">
            <p className="text-base text-textPrimary mb-3">
              <strong className="text-darkBlue">Total Investment:</strong> $63,000 USD for 7 months of strategic communication expertise dedicated to advancing UNICEF's Digital Education Strategy and positioning UNICEF as a global leader in education transformation.
            </p>
            <p className="text-base text-textPrimary">
              <strong className="text-darkBlue">Return on Investment:</strong> Professional communication that reaches wider audiences, attracts partners and donors, tells compelling impact stories, and demonstrates measurable effectiveness—all contributing to UNICEF's mission of transforming education for every child.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t-2 border-primary/20">
        <div className="text-center text-sm text-textSecondary">
          <p className="text-base italic mb-4">This financial proposal is submitted in response to UNICEF's Terms of Reference for Digital Education Communications and Storytelling Consultant. All information provided is accurate and complete as of October 13, 2025.</p>
          <p className="font-bold text-darkBlue text-lg mb-2">Rocco Marinelli</p>
          <p className="mb-1">rocco.marineli@gmail.com | +61 490 038 888</p>
          <p className="mb-4">Helsinki, Finland (2025) | roccomarinelli1.netlify.app</p>
          <p className="font-semibold text-darkBlue">October 13, 2025</p>
          <div className="mt-6 pt-4 border-t border-primary/20">
            <p className="font-bold text-darkBlue mb-2">Enclosures:</p>
            <p>1. This Financial Proposal | 2. Curriculum Vitae | 3. Cover Letter | 4. Portfolio of Work</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FinancialProposal;
