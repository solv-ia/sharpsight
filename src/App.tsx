import {
  ArrowRight,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileSearch,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  ThermometerSun,
  UserRoundCheck,
} from 'lucide-react';

const serviceAreas = [
  'Tampa',
  'St. Petersburg',
  'Clearwater',
  'Brandon',
  'Riverview',
  'Wesley Chapel',
  'Lutz',
  "Land O' Lakes",
  'Palm Harbor',
  'Dunedin',
  'Safety Harbor',
  'Largo',
];

const packages = [
  {
    name: 'Buyer Standard',
    price: 'Starting at $375',
    description: 'A complete visual home inspection for buyers under contract.',
    items: ['Roof, exterior, interior, attic, structure, plumbing, electrical, HVAC', 'Photo-rich report', 'Report walkthrough available'],
  },
  {
    name: 'Buyer Plus Thermal',
    price: 'Starting at $475',
    description: 'The core inspection with thermal imaging added where it matters.',
    items: ['Thermal scan for visible temperature anomalies', 'Moisture, insulation, HVAC, and electrical clues', 'Clear notes on what needs follow-up'],
  },
  {
    name: 'Remote Buyer',
    price: 'Starting at $525',
    description: 'Built for out-of-state buyers and busy agents.',
    items: ['Enhanced photo documentation', 'Thermal imaging included', 'Post-inspection call with buyer or agent'],
  },
];

const comingSoon = [
  '4-point inspections',
  'Wind mitigation',
  'Roof certifications',
  'WDO coordination',
  'Sewer scopes',
  'Pool and spa',
  'Mold and air quality',
  'New construction',
  '11-month warranty',
  'Commercial inspections',
];

const inspectionSteps = [
  {
    icon: CalendarCheck,
    title: 'Schedule fast',
    text: 'Request a time online and include the property address, square footage, and inspection deadline.',
  },
  {
    icon: FileSearch,
    title: 'Inspect with context',
    text: 'We inspect the visible systems and use thermal imaging to document meaningful temperature patterns.',
  },
  {
    icon: ClipboardCheck,
    title: 'Review clearly',
    text: 'You receive a clean report built for decisions, negotiations, and agent follow-up.',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Sharp Sight home">
          <span className="brand-mark">SS</span>
          <span>
            <strong>Sharp Sight</strong>
            <small>Home Inspections</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#thermal">Thermal</a>
          <a href="#pricing">Pricing</a>
          <a href="#areas">Areas</a>
          <a href="#agents">Agents</a>
        </nav>

        <a className="header-cta" href="#schedule">
          <Phone size={18} aria-hidden="true" />
          Call or Text
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <MapPin size={16} aria-hidden="true" />
              Greater Tampa Bay
            </p>
            <h1>Home inspections with thermal imaging and clear same-day reports.</h1>
            <p className="hero-text">
              Sharp Sight helps Tampa Bay buyers, homeowners, and real estate agents understand the visible condition of a home before the next decision is due.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#schedule">
                Schedule Inspection
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#thermal">
                View Thermal Imaging
              </a>
            </div>

            <div className="proof-strip" aria-label="Service highlights">
              <span><ShieldCheck size={17} aria-hidden="true" /> Residential focus</span>
              <span><ThermometerSun size={17} aria-hidden="true" /> Thermal imaging</span>
              <span><Clock3 size={17} aria-hidden="true" /> Same-day report goal</span>
            </div>
          </div>

          <div className="hero-media" aria-label="Inspector using a thermal camera inside a Tampa Bay home">
            <img
              src="/thermal-inspection-hero.png"
              alt="Home inspector using a thermal imaging camera in a bright Florida home"
              width="1792"
              height="1024"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="intent-band" aria-label="Popular inspection needs">
          <a href="#pricing">
            <Home size={22} aria-hidden="true" />
            <span>Buying a home</span>
          </a>
          <a href="#thermal">
            <Camera size={22} aria-hidden="true" />
            <span>Want thermal imaging</span>
          </a>
          <a href="#agents">
            <UserRoundCheck size={22} aria-hidden="true" />
            <span>Working with an agent</span>
          </a>
          <a href="#soon">
            <Clock3 size={22} aria-hidden="true" />
            <span>Coming soon services</span>
          </a>
        </section>

        <section className="section split" id="services">
          <div>
            <p className="eyebrow">Launch focus</p>
            <h2>Residential inspection first, with thermal imaging built into the story.</h2>
          </div>
          <div className="feature-list">
            <article>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>Full home inspection</h3>
              <p>Roof, exterior, structure, attic, interior, plumbing, electrical, HVAC, appliances, and visible safety concerns.</p>
            </article>
            <article>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>Thermal imaging</h3>
              <p>Temperature-anomaly documentation that can support moisture, insulation, HVAC, and electrical follow-up decisions.</p>
            </article>
            <article>
              <CheckCircle2 size={22} aria-hidden="true" />
              <h3>Buyer-ready reporting</h3>
              <p>Clear photos, plain-English findings, priorities, and optional report walkthrough support for buyers and agents.</p>
            </article>
          </div>
        </section>

        <section className="section thermal-section" id="thermal">
          <div className="section-heading">
            <p className="eyebrow">Thermal imaging</p>
            <h2>A stronger visual layer for Tampa Bay homes.</h2>
            <p>
              Thermal imaging is not X-ray vision. It helps identify visible temperature differences that deserve closer inspection, documentation, or specialist follow-up.
            </p>
          </div>

          <div className="thermal-grid">
            <article>
              <ThermometerSun size={24} aria-hidden="true" />
              <h3>Moisture clues</h3>
              <p>Potential cooling patterns around ceilings, walls, windows, and plumbing areas after the inspector confirms context.</p>
            </article>
            <article>
              <Home size={24} aria-hidden="true" />
              <h3>Envelope gaps</h3>
              <p>Missing insulation, air leakage, and attic-related temperature differences that can affect comfort and efficiency.</p>
            </article>
            <article>
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>System concerns</h3>
              <p>Abnormal heat signatures around electrical components or HVAC distribution that should be reviewed carefully.</p>
            </article>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading compact">
            <p className="eyebrow">Packages</p>
            <h2>Simple inspection options for buyers and agents.</h2>
          </div>

          <div className="pricing-grid">
            {packages.map((item) => (
              <article className="price-card" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>{item.price}</strong>
                <ul>
                  {item.items.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={17} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="#schedule">Request this inspection</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section">
          <div className="section-heading compact">
            <p className="eyebrow">Process</p>
            <h2>Built around inspection deadlines.</h2>
          </div>
          <div className="process-grid">
            {inspectionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section area-section" id="areas">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Focused on Greater Tampa Bay.</h2>
            <p>
              Local pages should be built around real Tampa Bay inspection concerns: older electrical systems, moisture intrusion, roof age, humidity, coastal exposure, and fast-growing suburban construction.
            </p>
          </div>
          <div className="area-list" aria-label="Greater Tampa Bay service areas">
            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className="section agent-section" id="agents">
          <div className="agent-copy">
            <p className="eyebrow">For agents</p>
            <h2>A smoother inspection handoff for Tampa Bay transactions.</h2>
            <p>
              Buyers need facts quickly. Agents need a responsive inspector, a clear report, and fewer loose ends after delivery.
            </p>
          </div>
          <div className="agent-points">
            <span><Clock3 size={18} aria-hidden="true" /> Same-day report goal</span>
            <span><Camera size={18} aria-hidden="true" /> Thermal imaging option</span>
            <span><ClipboardCheck size={18} aria-hidden="true" /> Buyer-friendly summaries</span>
            <span><Phone size={18} aria-hidden="true" /> Call/text coordination</span>
          </div>
        </section>

        <section className="section coming-soon" id="soon">
          <div className="section-heading compact">
            <p className="eyebrow">Coming soon</p>
            <h2>Future services can be visible without confusing launch availability.</h2>
          </div>
          <div className="soon-list">
            {comingSoon.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>

        <section className="section schedule-section" id="schedule">
          <div>
            <p className="eyebrow">Request an inspection</p>
            <h2>Send the address and deadline. Sharp Sight will confirm timing.</h2>
          </div>
          <form className="schedule-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Best number" autoComplete="tel" inputMode="tel" />
            </label>
            <label>
              Property address
              <input type="text" name="address" placeholder="Street, city, ZIP" autoComplete="street-address" />
            </label>
            <label>
              Inspection type
              <select name="inspectionType" defaultValue="Buyer Plus Thermal">
                <option>Buyer Standard</option>
                <option>Buyer Plus Thermal</option>
                <option>Remote Buyer</option>
                <option>Pre-Listing Clarity</option>
              </select>
            </label>
            <label className="full">
              Notes
              <textarea name="notes" rows={4} placeholder="Inspection deadline, square footage, agent contact, or access notes" />
            </label>
            <button className="button primary form-button" type="submit">
              Request Confirmation
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
