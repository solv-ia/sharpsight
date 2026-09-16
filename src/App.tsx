import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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

const badges = [
  { file: 'badge00001.jpeg', name: 'Certified Professional Inspector' },
  { file: 'badge00008.jpeg', name: 'Residential Property Inspector' },
  { file: 'badge00024.jpeg', name: 'Infrared Certified Thermography Inspector' },
  { file: 'badge00006.jpeg', name: 'Moisture Intrusion Inspector' },
  { file: 'badge00009.jpeg', name: 'Electrical Inspector' },
  { file: 'badge00013.jpeg', name: 'Roof Inspector' },
  { file: 'badge00002.jpeg', name: 'InterNACHI Certified' },
  { file: 'badge00003.jpeg', name: 'Chimney Inspector' },
  { file: 'badge00004.jpeg', name: 'Safe Workplace Inspector' },
  { file: 'badge00005.jpeg', name: 'Certified Drone Pilot Training' },
  { file: 'badge00007.jpeg', name: 'Plumbing Inspector' },
  { file: 'badge00010.jpeg', name: 'Repair Verification' },
  { file: 'badge00011.jpeg', name: 'Crawlspace Inspector' },
  { file: 'badge00012.jpeg', name: 'Exterior Inspector' },
  { file: 'badge00014.jpeg', name: 'Stucco Inspector' },
  { file: 'badge00015.jpeg', name: 'Wind Mitigation Inspector' },
  { file: 'badge00016.jpeg', name: 'Post-Hurricane Building Safety Inspector' },
  { file: 'badge00017.jpeg', name: '11th Month Warranty Inspections' },
  { file: 'badge00018.jpeg', name: 'New Construction Inspector' },
  { file: 'badge00019.jpeg', name: 'Annual Home Maintenance Inspections' },
  { file: 'badge00020.jpeg', name: 'Deck Inspector' },
  { file: 'badge00021.jpeg', name: 'Kitchen Inspector' },
  { file: 'badge00022.jpeg', name: 'Attic, Insulation, Ventilation & Interior' },
  { file: 'badge00023.jpeg', name: 'Infrared Certified' },
  { file: 'badge00025.jpeg', name: 'Bilingual Inspector' },
  { file: 'badge00026.jpeg', name: 'InterNACHI' },
];

function BadgeSlider() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updatePosition = () => setPosition({
      start: track.scrollLeft <= 1,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 1,
    });
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    track.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    return () => {
      observer.disconnect();
      track.removeEventListener('scroll', updatePosition);
    };
  }, []);

  function slide(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <div className="badge-slider" role="region" aria-label="Inspection badges" aria-roledescription="carousel">
      <div className="badge-slider-controls">
        <div className="badge-slider-arrows">
          <button type="button" aria-label="Previous badges" aria-controls="badge-track" disabled={position.start} onClick={() => slide(-1)}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next badges" aria-controls="badge-track" disabled={position.end} onClick={() => slide(1)}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul className="badge-track" id="badge-track" ref={trackRef} tabIndex={0} aria-label="Certification and training badges" onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          slide(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}>
        {badges.map((badge) => (
          <li className="badge-card" key={badge.file}>
            <img
              src={`${import.meta.env.BASE_URL}badges/${badge.file}`}
              alt={badge.name}
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <span aria-hidden="true">{badge.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        <nav className="nav-links nav-links-start" aria-label="Services navigation">
          <a href="#services">Services</a>
          <a href="#thermal">Thermal</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="brand" href="#top" aria-label="Sharp Sight home">
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}sharp-sight-logo-horizontal.jpeg`}
            alt="Sharp Sight Property Inspections"
            width="1600"
            height="533"
          />
        </a>

        <nav className="nav-links nav-links-end" aria-label="Company navigation">
          <a href="#areas">Areas</a>
          <a href="#credentials">Credentials</a>
          <a href="#schedule">Contact Us</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <MapPin size={18} aria-hidden="true" />
              Greater Tampa Bay
            </p>
            <h1>A sharper look at the home you&apos;re about to buy.</h1>
            <p className="hero-text">
              Detailed home inspections for Tampa Bay buyers, homeowners, and real estate professionals. We examine the home&apos;s major systems and components and explain our findings clearly, so you can make an informed decision.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#schedule">
                Schedule Inspection
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#thermal">
                View Sample Report
              </a>
            </div>

            <div className="proof-strip" aria-label="Service highlights">
              <span><ShieldCheck size={17} aria-hidden="true" /> Residential Inspections</span>
              <span><ThermometerSun size={17} aria-hidden="true" /> Modern Inspection Technology</span>
              <span><Clock3 size={17} aria-hidden="true" /> Clear Digital Reports</span>
            </div>
          </div>

          <div className="hero-media" aria-label="Inspector using a thermal camera inside a Tampa Bay home">
            <img
              src={`${import.meta.env.BASE_URL}thermal-inspection-hero.png`}
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
            <span>Buying a Home</span>
          </a>
          <a href="#services">
            <ClipboardCheck size={22} aria-hidden="true" />
            <span>Inspection Services</span>
          </a>
          <a href="#agents">
            <UserRoundCheck size={22} aria-hidden="true" />
            <span>For Real Estate Agents</span>
          </a>
          <a href="#areas">
            <MapPin size={22} aria-hidden="true" />
            <span>Service Area</span>
          </a>
        </section>

        <section className="section credentials-section" id="credentials" aria-labelledby="credentials-title">
          <div className="section-heading">
            <p className="eyebrow">Certifications & training</p>
            <h2 id="credentials-title">A closer look starts with the right training.</h2>
            <p>Explore our inspection credentials, from residential systems to infrared technology.</p>
          </div>
          <BadgeSlider />
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

      <a className="floating-call" href="#schedule" aria-label="Contact Sharp Sight" title="Contact Sharp Sight">
        <Phone size={22} aria-hidden="true" />
      </a>
    </div>
  );
}

export default App;
