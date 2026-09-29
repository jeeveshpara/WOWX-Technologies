import { Service, Project, PricingPlan, FAQ, BlogPost } from "./types";

export const SERVICES: Service[] = [
  {
    id: "business-website",
    title: "Business Website Development",
    icon: "Globe",
    description: "Establish absolute authority in your local market with an elite corporate website. Engineered for high conversion rates, speed, and premium brand aesthetics.",
    features: [
      "Custom UI/UX Design from scratch",
      "Google Business Profile (GBP) optimization",
      "Fully responsive on cellular, tablet, and desktop",
      "Ultra-fast page speed index alignment",
      "Built-in robust contact forms & CRM hooks"
    ],
    benefits: [
      "Multiply customer inquiries up to 3x",
      "Impeccable 24/7 presentation of your unique services",
      "Acquire instant trust from premium target audiences",
      "High local search placement across Chambal & Morena region"
    ],
    timeline: "7 - 10 Days"
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website Development",
    icon: "Briefcase",
    description: "Craft a distinct elite image for Coaches, Doctors, Architects, Consultants, and Entrepreneurs. Display awards, client list, case studies, and dynamic photo galleries.",
    features: [
      "High-contrast gallery & showcase grids",
      "Personal branding typography paired perfectly",
      "Interactive CV, milestones, and resume builders",
      "Social proof and video reviews embedding",
      "Direct consultation booking integrations (WhatsApp/Calendly)"
    ],
    benefits: [
      "Charge up to 2x more by positioning yourself as a premium authority",
      "Flawless display of projects on any device width",
      "Simplified lead collection directly from Instagram and LinkedIn bios"
    ],
    timeline: "5 - 7 Days"
  },
  {
    id: "e-commerce",
    title: "E-Commerce Website Development",
    icon: "ShoppingCart",
    description: "Transform your physical shop or brand into a 24/7 cash-flowing enterprise. Designed for quick product browsing, cart creation, and smooth WhatsApp order systems or payment checkouts.",
    features: [
      "Elegant catalogs with advanced category filtering",
      "WhatsApp direct order routing (perfect for regional logistics)",
      "High security standard shopping cart checkout flow",
      "Bulk inventory imports and order management sheets"
    ],
    benefits: [
      "Expand beyond Morena to lock in sales India-wide",
      "Zero monthly subscription overhead platform architecture",
      "Manage discounts, flash sales, and active reviews with ease"
    ],
    timeline: "12 - 15 Days"
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    icon: "Layout",
    description: "Ultra-focused single page templates built specifically to maximize campaign ROIs. Engineered with laser-focused call-to-actions (CTAs) for product launches, events, or lead funnels.",
    features: [
      "Zero-distraction high conversion single scroll flow",
      "Optimized load times under 0.8 seconds",
      "Custom lead form with email/SMS status routing",
      "A/B layout split and heat-map optimization support"
    ],
    benefits: [
      "Achieve lead conversion rates between 8% to 15%",
      "Drastically decrease visual noise, boosting trust",
      "Perfect sync with Metas Ads, Google Ads, and local flyers"
    ],
    timeline: "3 - 5 Days"
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    icon: "Code",
    description: "Replace messy manual ledgers and outdated Excel spreadsheets. Develop tailor-made CRM, inventory monitors, billing apps, school management modules, or reservation engines.",
    features: [
      "Custom server database architectures",
      "Role-based dashboards (Admin, Staff, Customer)",
      "Export capability (PDF bills, Excel reports, transaction logs)",
      "Real-time reactive visual stats and bento metrics"
    ],
    benefits: [
      "Completely digitize administrative work, saving 15+ hours/week",
      "Prevent data loss from staff turnover or paper damage",
      "Operate your business seamlessly from anywhere in India"
    ],
    timeline: "14 - 25 Days"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design & Prototyping",
    icon: "Paintbrush",
    description: "Experience your digital solution before a single line of code is compiled. We sketch modern layouts, design interactive high-fidelity wireframes, and model brand kits.",
    features: [
      "Interactive Figma interactive high-fidelity wireframes",
      "Custom futuristic brand kit curation (colors & typography)",
      "Detailed UX feedback mapping for complex dashboards",
      "Pixel-perfect responsive system components layout"
    ],
    benefits: [
      "Avoid expensive development rewrites before starting",
      "Achieve immediate buy-in from cofounders or local investors",
      "Provide developers with crystal-clear implementation guidelines"
    ],
    timeline: "4 - 7 Days"
  },
  {
    id: "seo-optimization",
    title: "Local & National SEO Optimization",
    icon: "Search",
    description: "Get discovered by high-intent clients actively searching for your services in Morena, Gwalior, and across India.",
    features: [
      "Deep local schema markup injections",
      "Google Business Profile optimization alongside maps ranking",
      "SEO copywriting for optimized keyword integration",
      "Speed upgrades and semantic structural markup"
    ],
    benefits: [
      "No cost client acquisition (Zero ad spend required)",
      "Perpetual top-tier presence in local Search & Google Maps",
      "Outperform competitors operating with outdated websites"
    ],
    timeline: "On-Going / 1 Week Setup"
  },
  {
    id: "website-maintenance",
    title: "Premium Website Maintenance",
    icon: "Settings",
    description: "Keep your business fast, secured, and updated while you focus entirely on your physical operations. We handle backups, patches, and content edits.",
    features: [
      "Weekly secure cloud backups",
      "Live performance tuning and framework patch audits",
      "Rapid content changes (phone number, address, banners)",
      "Uptime surveillance (24/7 live active checks)"
    ],
    benefits: [
      "Shield your site against downtime and malware",
      "Keep prices, offers, and hours accurate on the fly",
      "Worry-free maintenance from highly responsive technical partners"
    ],
    timeline: "Monthly Subscription"
  },
  {
    id: "digital-setup",
    title: "Digital Presence Setup",
    icon: "Compass",
    description: "Establish an integrated brand ecosystem across major platforms. Connect Google, LinkedIn, Instagram, and Facebook to work together to drive organic leads.",
    features: [
      "Professional Google Map location verify and setup",
      "Strategic Instagram, Facebook, and LinkedIn business profiling",
      "Custom vector launcher icons and avatar banners",
      "All-in-one contact cards setup (NFC and digital stickers)"
    ],
    benefits: [
      "Consistent, corporate-grade branding across all search engines",
      "Simple cross-promotion avenues from day one",
      "Direct messaging setups directly connected to your core dashboard"
    ],
    timeline: "3 - 5 Days"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "pooja-studio-morena",
    title: "Pooja Studio Portfolio",
    category: "Portfolio",
    description: "An elegant, highly immersive visual catalog for Pooja Studio, Morena's premium photography and wedding shoot brand.",
    clientDescription: "Pooja Studio needed an elite web presence to display ultra-high-definition wedding albums, portrait packages, and cinematic reels. Standard social media pages were compressing their work; they needed a premium, lighting-fast presentation card.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Custom Gallery", "Framer Motion", "CSS Grid", "WhatsApp Booking"],
    beforeImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    liveUrl: "#",
    timeline: "6 Days"
  },
  {
    id: "chambal-agro-portal",
    title: "Chambal Agro Export Platform",
    category: "E-Commerce",
    description: "A secure export catalog and bulk inquiry portal for agricultural mustard seeds, wheat, and organic honey from Chambal Valley.",
    clientDescription: "WOWX Technologies engineered a robust interface serving global importers looking to source organic products directly from the Morena district agricultural producers.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800",
    tags: ["React SPA", "Direct RFQ Engine", "Multilingual Support", "Vite Runtime"],
    beforeImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600",
    liveUrl: "#",
    timeline: "12 Days"
  },
  {
    id: "morena-educators-portal",
    title: "Chambal Group Coaching Portal",
    category: "Educational",
    description: "An interactive tutoring and classroom scheduling platform for defense exam preparatory institutions based in Gwalior-Morena belt.",
    clientDescription: "Designed an interactive dashboard where students access syllabus files, analyze previous year question papers, and submit queries to administrators directly.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    tags: ["Admin ERP Panel", "PDF Downloader", "Framer Motion Lists", "Lucide Icons"],
    beforeImage: "https://images.unsplash.com/photo-1513258496099-48168024addd?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
    liveUrl: "#",
    timeline: "14 Days"
  },
  {
    id: "chambal-honey-brands",
    title: "Madhukosh Honey Landing Page",
    category: "Landing Pages",
    description: "A gorgeous single-page sales machine built to collect lead applications and orders for raw organic Chambal Forest Honey.",
    clientDescription: "A direct-to-consumer landing system built on dark glass-morphic elements, with high conversions from organic Reels and WhatsApp sharing routes.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    tags: ["Responsive Single Page", "Intense CTA layout", "Lightweight Bundle", "Form Validations"],
    beforeImage: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1590779037666-635641728c30?auto=format&fit=crop&q=80&w=600",
    liveUrl: "#",
    timeline: "4 Days"
  },
  {
    id: "wowx-invoicing-erp",
    title: "WowX Invoicing System",
    category: "Web Apps",
    description: "Custom ERP application for inventory logging, GST invoice creation, and outstanding receipt trackers for local distributors.",
    clientDescription: "A full-scale internal administrative tool built with comprehensive dashboard screens, bento metrics cards, and responsive printable invoice renders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["D3 Charts", "localStorage Database", "Print Ready CSS", "Premium Dark UI"],
    beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    liveUrl: "#",
    timeline: "20 Days"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plan-1",
    name: "Starter Spark",
    price: 1499,
    description: "Perfect for local physical shops, individual coaches, address verification, and basic direct WhatsApp inquiries.",
    features: [
      "Ultra-Modern 1-Page Scrolling Layout",
      "Google Business Profile (GBP) integration & maps verify",
      "Secure lead inquiry form directly routing messages",
      "Dynamic WhatsApp instant chat floating action link",
      "Complimentary standard high-speed hosting setup",
      "Responsive layout for mobile & tablet structures",
      "Standard SVG Iconography"
    ],
    buttonText: "Launch Digital Card"
  },
  {
    id: "plan-2",
    name: "Growth Launchpad",
    price: 2999,
    description: "Ideal for doctors, upcoming startups, restaurants, and growing professional service providers.",
    features: [
      "2-3 Curated Premium Navigation Pages",
      "Google Business Profile (GBP) deep ranking audit",
      "Advanced Lead Capturing dashboard integration",
      "Dedicated Custom Services & Contact sections",
      "1 Month of priority bug patches & support",
      "WhatsApp direct reservation or order links",
      "Meta Tag SEO Setup (Title & Excerpts)"
    ],
    buttonText: "Establish Digital Agency"
  },
  {
    id: "plan-3",
    name: "Premium Scale",
    price: 4999,
    description: "Best for comprehensive corporate entities, schools, premium clinics, and local manufacturers.",
    features: [
      "Full Multi-Page Responsive Structure (Up to 6 Pages)",
      "Google Business Profile Verification assistance",
      "Instagram, LinkedIn, & FB Business Pages setup",
      "Intermediate SEO optimization for regional search rankings",
      "Access to WOWX Secured Admin Lead Management Panel",
      "Highly interactive custom Framer Motion page elements",
      "2 Months of maintenance, database indexing & audits"
    ],
    buttonText: "Elevate Brand",
    popular: true
  },
  {
    id: "plan-4",
    name: "Enterprise Complete",
    price: 9999,
    description: "The gold standard for companies demanding maximum automation, analytical insights, and search supremacy.",
    features: [
      "Complete bespoke multi-page business website",
      "Premium local + national structured schema optimization",
      "Complete social ecosystems configuration (Instagram, LinkedIn, YouTube)",
      "Google Tag Manager & advanced Analytics insights maps",
      "Exclusive visual customization (Glassmorphism & Particle arrays)",
      "WOWX Secured Admin Lead Dashboard & direct CSV exports",
      "3 Months of dedicated hands-on maintenance & support",
      "SEO strategic content calendar roadmap curation"
    ],
    buttonText: "Secure Market Supreme",
    bestValue: true
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How long does it typically take to complete a standard website?",
    answer: "Our execution speeds are highly optimized. A starter 1-page website (Starter Spark) takes around 3 to 5 days. Complex multipage platforms usually require 7 to 15 days from layout designs approval to live deployment."
  },
  {
    id: "faq-2",
    question: "Will my website display correctly and load fast on user smartphones?",
    answer: "ABSOLUTELY. Every code bundle leaving WowX Technologies is painstakingly engineered for Mobile-First layout grids. We optimize asset structures, compress image payloads, and test across Android, iPhone, and desktop heights to ensure loading in under 1.2s."
  },
  {
    id: "faq-3",
    question: "Do you assist in establishing local Google Map ranks & reviews?",
    answer: "Yes, this is local presence strategy. Every pricing plan from Starters above includes standard setup of your Google Business Profile (GBP) so local clients in Morena and surrounding areas can search and locate your front office instantly."
  },
  {
    id: "faq-4",
    question: "How are contact form submissions stored, and will I get notified?",
    answer: "Inquiries are securely logged on the WOWX encrypted state systems and within your dedicated client browser localStorage. We also pack direct integrated API paths so clicking contact requests launches direct customized pre-filled messages on your WhatsApp business chat!"
  },
  {
    id: "faq-5",
    question: "Can I upgrade my plan later if my business scales up?",
    answer: "Yes. Our codebase uses standard modular TypeScript components. We can expand a single starter page into a comprehensive 10-page portal, complete with databases, tracking analytics, and inventory controls without starting from scratch."
  },
  {
    id: "faq-6",
    question: "Are there any recurring annual fees?",
    answer: "No hidden tricks. We secure domain registries and high-performance servers through direct transparent client pricing. You only pay standard domain/hosting renewals without any ongoing agency retention markups!"
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Why Morena Retailers Must Secure a Google Map Spot in 2026",
    category: "Digital Presence",
    date: "June 02, 2026",
    readTime: "4 min read",
    excerpt: "Discover the exact roadmap local Morena storefronts are using to secure massive digital footsteps, driving foot traffic without premium digital ad campaigns.",
    content: "With over 85% of physical buyers typing location keywords before stepping into a medical store, optical salon, or studio in Uttam Pura or Main Market, your Business profile acts as your modern storefront window. This article outlines local SEO, photo tags, and positive review generation strategies...",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-2",
    title: "The Zero-Maintenance Approach to Small Business Platforms",
    category: "Web Engineering",
    date: "May 28, 2026",
    readTime: "5 min read",
    excerpt: "How serverless React SPA layers and structured Jamstack architectures eliminate malware threats and monthly maintenance expenditures.",
    content: "Traditional database platforms require intense daily monitoring to ward off automated script attacks. By building lightweight standard React arrays and saving files in secure static CDNs, businesses achieve zero downtime and complete invulnerability...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-3",
    title: "How an Elegant Landing Template Multiplies Instagram conversions",
    category: "UI/UX Design",
    date: "May 15, 2026",
    readTime: "3 min read",
    excerpt: "Simple, highly focused page principles that convert social media followers into verified paying consulting leads.",
    content: "If you redirect your Instagram profile bio links to cluttered homepages, you lose up to 90% of visitor attention span. High-converting single scroll funnels with single objective clear buttons are essential to build robust coach registries...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];
