export const CATEGORIES = [
  { id: 'all', label: 'All News' },
  { id: 'technology', label: 'Technology' },
  { id: 'business', label: 'Business & Economy' },
  { id: 'world', label: 'World News' },
  { id: 'science', label: 'Science & Space' },
  { id: 'health', label: 'Health & Wellness' },
  { id: 'entertainment', label: 'Entertainment' },
];

export const ARTICLES = [
  {
    id: 'tech-ai-breakthrough-2026',
    title: 'Next-Generation Autonomous AI Architecture Achieves New Efficiency Benchmarks in Enterprise Cloud Deployment',
    slug: 'next-gen-autonomous-ai-architecture-benchmarks',
    category: 'technology',
    categoryLabel: 'Technology',
    featured: true,
    trending: true,
    publishedAt: 'August 20, 2026',
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Senior Tech Editor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      bio: 'Dr. Elena Rostova specializes in artificial intelligence systems, quantum computing architectures, and cloud computing infrastructure.'
    },
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cloud server racks operating automated neural network processing pipelines.',
    excerpt: 'Engineers have demonstrated a novel neural optimization framework that reduces cloud inference latency by 42% while doubling token throughput for complex multi-agent systems.',
    leadText: 'In a major stride toward scalable artificial intelligence, researchers and software architects have unveiled an optimized framework designed to streamline real-time decision-making in large enterprise software architectures.',
    content: `
      <h2>Redefining Computational Efficiency for Enterprise Workloads</h2>
      <p>As modern organizations increasingly rely on complex machine learning models to power real-time analytics, customer service agents, and automated data ingestion pipelines, server infrastructure demands have reached historic highs. The breakthrough model architecture, designated as <em>HyperScale-V4</em>, addresses these compute bottlenecks through dynamic parameter pruning and localized caching strategies.</p>
      
      <p>Unlike traditional transformer architectures that process all parameters uniformly across every token, the new pipeline routes context dynamically based on task difficulty. Early benchmarks conducted across top cloud datacenters indicate a dramatic 42% reduction in memory overhead without sacrificing accuracy across standard reasoning datasets.</p>

      <blockquote>"We are witnessing a fundamental shift from brute-force scale to architectural elegance. Energy consumption and compute cost used to grow exponentially with model complexity—this system breaks that linear curve." — Dr. Marcus Vance, Chief Systems Architect</blockquote>

      <h2>Key Technological Innovations</h2>
      <p>The system introduces three foundational advancements that distinguish it from previous software releases:</p>
      <ul>
        <li><strong>Dynamic Context Pruning:</strong> Automatically strips redundant tokens from long-context windows before inference execution.</li>
        <li><strong>Heterogeneous Hardware Paging:</strong> Smoothly balances tensor operations across GPUs, TPUs, and high-efficiency CPU cores.</li>
        <li><strong>Zero-Latency Micro-Caching:</strong> Recovers repetitive semantic patterns from memory in under 2 milliseconds.</li>
      </ul>

      <h2>Industry Impact and Future Outlook</h2>
      <p>Financial institutions, biomedical research labs, and autonomous logistics providers have already begun early pilot deployments. Industry analysts predict that widespread adoption could lower annual datacenters' carbon footprints significantly over the next three years while enabling real-time edge processing on low-power devices.</p>

      <p>As open standards continue to evolve, the development team has announced plans to release developer tooling and compliance benchmarks publicly next quarter, fostering transparent verification across the global developer community.</p>
    `,
    tags: ['AI', 'Cloud Computing', 'Enterprise Tech', 'Machine Learning']
  },
  {
    id: 'business-global-markets-shift',
    title: 'Global Markets Pivot Toward Sustainable Energy Investments Amid New Regulatory Standards',
    slug: 'global-markets-pivot-sustainable-energy-investments',
    category: 'business',
    categoryLabel: 'Business & Economy',
    featured: false,
    trending: true,
    publishedAt: 'August 19, 2026',
    author: {
      name: 'Julian Sterling',
      role: 'Global Markets Analyst',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
      bio: 'Julian covers international trade policy, venture capital trends, and macroeconomic fiscal movements.'
    },
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    caption: 'Financial index displays illustrating clean energy equity sector trends.',
    excerpt: 'Institutional capital flows are rapidly reallocating into clean technology, grid modernization, and green infrastructure projects across European and Asian markets.',
    leadText: 'Surging investor demand paired with updated international climate disclosures has triggered one of the largest capital migrations in recent financial history.',
    content: `
      <h2>Capital Migration Across Major Financial Bourses</h2>
      <p>Trading desks in London, Tokyo, and New York reported substantial portfolio rebalancing this week following the release of unified global sustainability reporting guidelines. Total inflows into ESG-aligned infrastructure funds topped $34 billion in the third quarter alone, marking a 28% year-over-year increase.</p>
      
      <p>Institutional portfolio managers attribute this surge to improving yield margins in renewable storage assets and enhanced regulatory clarity around grid connection standards. Long-term sovereign wealth funds have spearheaded capital commitments, targeting large-scale offshore solar arrays and regional battery storage hubs.</p>

      <h2>Corporate Adaptation Strategies</h2>
      <p>Multinational manufacturing conglomerates are adapting by accelerating their decarbonization timelines. Key strategies being deployed across Fortune 500 companies include:</p>
      <ul>
        <li>Direct power purchase agreements (PPAs) with utility-scale wind producers.</li>
        <li>Supply chain auditing software to monitor scope 3 greenhouse gas emissions.</li>
        <li>Issuance of green bonds dedicated exclusively to facility electrification.</li>
      </ul>

      <h2>Economic Forecast & Risk Assessment</h2>
      <p>While economic indicators remain positive for green equity indices, economists caution that supply chain constraints for critical metals—such as lithium, nickel, and rare earth elements—could introduce volatility in short-term asset prices. Nevertheless, analysts maintain a strong long-term buy rating for grid resilience and smart-meter infrastructure equities.</p>
    `,
    tags: ['Economy', 'Finance', 'Green Energy', 'Investing']
  },
  {
    id: 'world-diplomatic-summit-agreements',
    title: 'International Summit Concludes with Historic Accord on Global Maritime Security and Open Trade Routes',
    slug: 'international-summit-historic-accord-maritime-security',
    category: 'world',
    categoryLabel: 'World News',
    featured: false,
    trending: true,
    publishedAt: 'August 19, 2026',
    author: {
      name: 'Amara Okafor',
      role: 'Diplomatic Affairs Bureau Chief',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      bio: 'Amara reports on international relations, treaty negotiations, and global multilateral organizations.'
    },
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    caption: 'Delegates from 45 nations convening during the plenary session.',
    excerpt: 'Delegates representing 45 nations have ratified a comprehensive pact aimed at protecting vital shipping corridors, reducing port congestion, and ensuring maritime stability.',
    leadText: 'Following weeks of intensive negotiations in Geneva, international leaders have finalized a landmark treaty ensuring unhindered freedom of navigation along key commercial sea lanes.',
    content: `
      <h2>Unifying Maritime Protections</h2>
      <p>The newly signed <em>Geneva Maritime Accord</em> establishes coordinated naval patrol protocols, standardized electronic customs clearances, and rapid emergency response frameworks for container ships traversing vital bottlenecks like the Strait of Malacca and Suez Canal.</p>
      
      <p>Global freight operators welcomed the announcement, noting that annual supply chain disruptions cost international commerce tens of billions in delayed shipments and inflated marine insurance premiums.</p>

      <h2>Key Agreement Components</h2>
      <p>The treaty outlines clear commitments across several core operational categories:</p>
      <ul>
        <li><strong>Joint Patrol Coordination:</strong> Shared satellite radar monitoring to eliminate piracy risks in high-traffic waters.</li>
        <li><strong>Digital Port Customs Harmonization:</strong> Unified paperless documentation across major deepwater ports.</li>
        <li><strong>Environmental Safeguards:</strong> Mandated emergency response teams for offshore chemical or oil spill containment.</li>
      </ul>

      <p>Implementation is scheduled to begin across all signatory nations in early 2027, under the oversight of an independent international maritime commission.</p>
    `,
    tags: ['World News', 'Diplomacy', 'Global Trade', 'Maritime']
  },
  {
    id: 'science-deep-space-telescope-discovery',
    title: 'Deep Space Observatory Detects Complex Organic Molecules in Distant Proto-Planetary System',
    slug: 'deep-space-observatory-detects-organic-molecules-proto-planetary-system',
    category: 'science',
    categoryLabel: 'Science & Space',
    featured: false,
    trending: false,
    publishedAt: 'August 18, 2026',
    author: {
      name: 'Dr. Henrik Lindqvist',
      role: 'Astrophysics Correspondent',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      bio: 'Dr. Lindqvist holds a Ph.D. in Astronomy and covers space exploration missions and deep-sky observation science.'
    },
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    caption: 'Infrared spectroscopic analysis revealing chemical signatures surrounding a young star system.',
    excerpt: 'Astronomers using high-resolution infrared spectrographs have identified pre-biotic chemical compounds inside the dust disk of a star system located 350 light-years away.',
    leadText: 'Observations gathered by orbital observatories have provided unprecedented evidence that the essential chemical ingredients for life form much earlier in planet creation than previously estimated.',
    content: `
      <h2>Mapping Pre-Biotic Chemistry Across interstellar Dust</h2>
      <p>The target star system, designated <em>HD-88421</em>, is surrounded by a dense protoplanetary disk of gas and dust. Utilizing ultra-sensitive mid-infrared spectroscopy, researchers detected clear absorption signatures corresponding to complex nitriles, amino-acid precursors, and polycyclic aromatic hydrocarbons.</p>
      
      <p>These complex carbon compounds are considered fundamental building blocks required for prebiotic molecular evolution. Their abundance in the outer icy rings of HD-88421 suggests that comets and asteroids forming in such systems inherit rich inventories of organic material prior to planetary accretion.</p>

      <h2>Methodology and Peer Review</h2>
      <p>The research team analyzed over 120 hours of continuous spectral data, filtering out stellar interference through specialized signal-processing algorithms. Independent laboratories confirmed the spectral matching against cryogenic vacuum chamber simulations.</p>

      <p>Further observations using ground-based radio telescope arrays are planned for later this year to map the spatial distribution of water ice vapor within the system\'s habitable zone.</p>
    `,
    tags: ['Space', 'Astronomy', 'Science', 'Astrophysics']
  },
  {
    id: 'health-preventative-cardiology-study',
    title: 'Clinical Trial Validates Breakthrough Biomarker Test for Early Cardiovascular Risk Detection',
    slug: 'clinical-trial-validates-breakthrough-biomarker-test-cardiovascular-risk',
    category: 'health',
    categoryLabel: 'Health & Wellness',
    featured: false,
    trending: false,
    publishedAt: 'August 17, 2026',
    author: {
      name: 'Dr. Maya Patel',
      role: 'Medical & Public Health Editor',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
      bio: 'Dr. Maya Patel is a practicing physician and healthcare writer focusing on preventative diagnostics and public health policy.'
    },
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    caption: 'Laboratory technician preparing microfluidic panel assay samples.',
    excerpt: 'A multi-center clinical study involving over 15,000 patients confirms that a simple blood micro-assay can identify arterial inflammation up to a decade before clinical onset.',
    leadText: 'Early detection remains the single most effective tool in combating heart disease. A non-invasive diagnostic panel published in leading medical journals promises to revolutionize preventative cardiology.',
    content: `
      <h2>Transforming Clinical Diagnostics</h2>
      <p>Cardiovascular conditions remain the leading global cause of mortality, often presenting without obvious clinical symptoms until advanced stages. The new diagnostic test measures microscopic ratios of specific inflammatory proteins and micro-RNAs circulating in blood plasma.</p>

      <p>During a five-year follow-up study across 18 hospital networks, the test correctly identified high-risk individuals with 91% sensitivity, enabling targeted lifestyle interventions and low-dose therapeutic therapies long before arterial stiffening occurred.</p>

      <h2>Practical Implications for Patients</h2>
      <ul>
        <li><strong>Rapid Results:</strong> Assays can be processed within standard outpatient diagnostic laboratories in under two hours.</li>
        <li><strong>Cost Efficiency:</strong> Projected treatment cost is a fraction of conventional advanced vascular imaging scans.</li>
        <li><strong>Preventative Guidance:</strong> Empowers physicians to tailor personalized nutrition, exercise, and lipid-lowering protocols.</li>
      </ul>

      <p>Health regulators are reviewing the trial data for standardized clinical clearance, with availability expected across primary care networks by early next year.</p>
    `,
    tags: ['Health', 'Medicine', 'Cardiology', 'Wellness']
  },
  {
    id: 'entertainment-digital-cinema-restoration',
    title: 'Architects of Cinema: High-Dynamic Digital Restoration Rescues Lost Film Archives',
    slug: 'architects-of-cinema-digital-restoration-rescues-lost-film-archives',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    featured: false,
    trending: false,
    publishedAt: 'August 16, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Cultural Arts Critic',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      bio: 'Marcus reviews cinematic releases, cultural preservation efforts, and digital entertainment technologies.'
    },
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    caption: 'Archivists scanning nitrate film stock at 8K optical resolutions.',
    excerpt: 'Using AI-assisted spectral scanning and multi-exposure digital reconstruction, archival teams are restoring damaged 20th-century film negatives to pristine original fidelity.',
    leadText: 'Countless cinematic masterpieces from the early to mid-20th century have faced gradual decay due to fragile nitrate and acetate physical substrates. Modern digital preservation is changing that narrative.',
    content: `
      <h2>Rescuing Cultural Heritage From Physical Decay</h2>
      <p>Film preservationists at the International Cinema Trust have completed an ambitious project restoring over 300 rare features and newsreels spanning 1910 through 1950. Using specialized non-contact optical scanners operating at 8K resolutions, technicians captured microscopic details from severely degraded physical prints.</p>

      <p>Advanced machine learning algorithms were then utilized to repair physical scratches, flicker, and color fading frame-by-frame while strictly retaining original grain structures and artistic lighting choices.</p>

      <h2>Public Access and Educational Archives</h2>
      <p>The restored library will be made accessible through a public non-profit digital streaming repository, giving film scholars, students, and cinephiles unprecedented access to foundational cinematic history in crystal-clear quality.</p>
    `,
    tags: ['Entertainment', 'Cinema', 'Culture', 'Film Restoration']
  }
];

export const BREAKING_NEWS = [
  'Tech: Global Cloud Summit announces new open-source standards for edge computing privacy.',
  'Business: Central Banks report steady inflation stabilization in Q3 financial outlook.',
  'World: International maritime safety treaty signed by 45 leading trading nations in Geneva.',
  'Science: Deep space observatory detects complex pre-biotic organic molecules 350 light-years away.'
];
