import { CaseStudy, SecondaryProject, ToolkitTab, EngagementModel, BespokeSolution } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'spendaura',
    number: '01',
    category: 'WordPress | Elementor',
    title: 'SPENDAURA',
    timeline: 'Founded, Operated & Exited',
    role: 'Founder & Web Developer',
    coreStack: 'WordPress | Elementor',
    backendExecution: 'eCommerce & Business Management',
    imageUrl: '/assets/spendaura.png',
    imageAlt: 'Spendaura WordPress & Elementor eCommerce Website',
    leadParagraph: 'Founded and developed Spendaura, an e-commerce business, building its website and gaining practical experience in web development and business management. Later sold to a local vendor.',
    subheading: '',
    subParagraph: '',
    ctaText: 'View Details',
    metrics: [
      { label: 'Platform', value: 'WordPress & Elementor' },
      { label: 'Experience', value: 'Web Dev & Business' },
      { label: 'Outcome', value: 'Sold to Local Vendor', highlight: true },
    ],
    stackBadges: ['WordPress', 'Elementor', 'WooCommerce'],
    modalData: {
      title: 'Spendaura — E-Commerce Business & Platform',
      subtitle: 'WordPress | Elementor • Full Lifecycle Development & Vendor Exit',
      description: 'Founded and developed Spendaura as an end-to-end e-commerce venture, building the platform from scratch and later executing a successful asset transfer to a local retail vendor.',
      features: [
        {
          title: 'WordPress & Elementor Development',
          detail: 'Built custom layouts, product showcases, optimized checkout flow, and catalog navigation using WordPress and Elementor.'
        },
        {
          title: 'Practical Business Management',
          detail: 'Gained hands-on experience managing digital marketing, inventory flows, customer orders, payment routing, and operational logistics.'
        },
        {
          title: 'Asset Buyout by Local Vendor',
          detail: 'Structured and completed the handover and sale of the website and brand assets to a local vendor.'
        }
      ],
      architectureNotes: [
        'Responsive layout tuned for mobile buyers with fast loading speeds.',
        'Structured payment gateways and automated order email triggers.',
        'Clean database handoff and merchant transition upon asset sale.'
      ],
      metricsBreakdown: [
        { label: 'Role', stat: 'Founder & Developer' },
        { label: 'Platform', stat: 'WordPress + Elementor' },
        { label: 'Core Focus', stat: 'eCommerce & Business' },
        { label: 'Outcome', stat: 'Sold to Local Vendor' }
      ]
    }
  },
  {
    id: 'gradora',
    number: '02',
    category: 'AI-Assisted Development | Academic Planning',
    title: 'GRADORA',
    timeline: 'Active Development',
    role: 'Lead Developer',
    coreStack: 'AI-Assisted Development | Academic Planning',
    backendExecution: 'GPA/CGPA Tracking & Study Scheduling',
    imageUrl: '/assets/gradora.png',
    imageAlt: 'Gradora Student Academic Planning & Productivity App',
    leadParagraph: 'Currently developing a student academic planner app to simplify GPA/CGPA tracking, semester management, and study scheduling through a user-friendly experience.',
    subheading: '',
    subParagraph: '',
    ctaText: 'View Details',
    metrics: [
      { label: 'Tracking', value: 'GPA & CGPA Calculations' },
      { label: 'Modules', value: 'Semester & Study Scheduler' },
      { label: 'Workflow', value: 'AI-Assisted Velocity', highlight: true },
    ],
    stackBadges: ['Google Antigravity', 'Google AI Studio'],
    modalData: {
      title: 'Gradora — Student Academic Planner App',
      subtitle: 'AI-Assisted Development | Academic Planning • Simplifying Student Workflows',
      description: 'An intuitive academic management application designed to eliminate grade confusion, streamline course milestones, and provide structured study scheduling for university students.',
      features: [
        {
          title: 'GPA & CGPA Precision Tracker',
          detail: 'Calculates accurate semester GPAs and cumulative CGPAs with variable credit hours, grading scales, and retake adjustments.'
        },
        {
          title: 'Semester & Course Management',
          detail: 'Organizes multiple semesters, enrolled subjects, credit requirements, and milestone deadlines in a clean interface.'
        },
        {
          title: 'Study Scheduling & Deadlines',
          detail: 'Integrated study time blocks and contextual deadline reminders to keep students on track throughout the academic year.'
        },
        {
          title: 'AI-Assisted Development Workflow',
          detail: 'Utilizes modern AI coding workflows to rapidly iterate on UI components while maintaining strict mathematical grading logic.'
        }
      ],
      architectureNotes: [
        'Built with responsive modern web standards for mobile and desktop usage.',
        'Instant calculations with real-time feedback as students enter or modify course grades.',
        'Clean, accessible user interface optimized for everyday student life.'
      ],
      metricsBreakdown: [
        { label: 'Target Audience', stat: 'University Students' },
        { label: 'Grading Logic', stat: 'Accurate GPA/CGPA' },
        { label: 'Core Features', stat: 'Planning & Scheduling' },
        { label: 'Status', stat: 'Active Development' }
      ]
    }
  },
  {
    id: 'food-nexus',
    number: '03',
    category: 'Laravel | MySQL | Bootstrap 5',
    title: 'FOODNEXUS',
    timeline: 'Final-Year Project',
    role: 'Lead Backend & Full-Stack Developer',
    coreStack: 'Laravel | MySQL | Bootstrap 5',
    backendExecution: 'Laravel MVC Architecture',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOVYPBd7ZvFUykT9DYqSZjDCN7yvX3pkAvtZhFCAJbAYAhYSGDJSSRYowNejgi-ImiYXA7vazZhn1yazkyN9h2pZSoyMgFG2VGNJuOufSMMSmAIerV9wieQOsnFTnrci918isepTjLMkaEGt5j998VrWVzRTb9AlQlhqc9F3icUpgVL4OwIrMtmuB2kZo16syv8ER211Adjr6eMG9VcY8jQnVv52wYTxtX2DyQfCxPEkWnetQFvhw',
    imageAlt: 'FoodNexus Food Delivery Web Application',
    videoUrl: '/assets/foodnexus_video.mp4',
    leadParagraph: 'Developed as my final-year project, FoodNexus is a food delivery web application featuring food search, filtering, user authentication, and admin management using Laravel MVC architecture.',
    subheading: '',
    subParagraph: '',
    ctaText: 'View Details',
    metrics: [
      { label: 'Architecture', value: 'Laravel MVC Pattern' },
      { label: 'Database', value: 'MySQL Relational Schema' },
      { label: 'Frontend', value: 'Bootstrap 5 Responsive', highlight: true },
    ],
    stackBadges: ['Laravel', 'MySQL', 'Bootstrap 5'],
    modalData: {
      title: 'FoodNexus — Food Delivery Web Application',
      subtitle: 'Laravel | MySQL | Bootstrap 5 • Final-Year System',
      description: 'A comprehensive food delivery platform built with Laravel MVC architecture, featuring food search, multi-criteria filtering, user authentication, and an administrative control suite.',
      features: [
        {
          title: 'Food Search & Dynamic Filtering',
          detail: 'Allows customers to quickly search across restaurant menus, filter by cuisine, pricing, and dietary preferences with real-time results.'
        },
        {
          title: 'User Authentication & Profiles',
          detail: 'Secure customer registration, session management, order history tracking, and delivery address preferences.'
        },
        {
          title: 'Admin Management & Operations',
          detail: 'Dedicated administrative interface for menu updates, vendor listings, order dispatch monitoring, and system metrics.'
        },
        {
          title: 'Laravel MVC Architecture & MySQL',
          detail: 'Clean separation of models, views, and controllers with structured relational database tables, migrations, and relationships.'
        }
      ],
      architectureNotes: [
        'Robust relational database schema ensuring data consistency across orders, menus, and users.',
        'Bootstrap 5 frontend engineered for responsive browsing on phones, tablets, and desktops.',
        'Secure password hashing, CSRF protection, and role-based route middleware.'
      ],
      metricsBreakdown: [
        { label: 'Project Type', stat: 'Final-Year Project' },
        { label: 'Framework', stat: 'Laravel' },
        { label: 'Database', stat: 'MySQL Relational' },
        { label: 'UI Framework', stat: 'Bootstrap 5' }
      ]
    }
  }
];

export const TOOLKIT_TABS: ToolkitTab[] = [
  {
    id: 'wordpress',
    number: '01.',
    title: 'WordPress & WooCommerce Engineering',
    summary: 'Custom theme builds, Elementor layout optimization, payment gateway routing, and performance tuning.',
    label: 'Live Architecture Inspector',
    file: 'spendaura/functions.php',
    previewTitle: 'Custom AJAX Single-Step Checkout Hook',
    previewDesc: 'Bespoke high-performance checkout and order processing handler.',
    code: `add_action('wp_ajax_nopriv_spendaura_checkout', 'spendaura_checkout');
add_action('wp_ajax_spendaura_checkout', 'spendaura_checkout');

function spendaura_checkout() {
    check_ajax_referer('spendaura_nonce', 'security');
    
    $cart = WC()->cart;
    if ($cart->is_empty()) {
        wp_send_json_error(['message' => 'Cart is empty.']);
    }

    $order = wc_create_order();
    foreach ($cart->get_cart() as $item_id => $values) {
        $order->add_product($values['data'], $values['quantity']);
    }
    
    $order->calculate_totals();
    $payment_url = $order->get_checkout_payment_url(true);
    
    wp_send_json_success(['redirect' => $payment_url]);
}`,
    pills: ['PHP 8.x', 'WooCommerce Hooks', 'AJAX', 'Payment APIs']
  },
  {
    id: 'laravel',
    number: '02.',
    title: 'Laravel & Relational Backend Architecture',
    summary: 'Laravel MVC controllers, MySQL relational schemas, transactional safety, and role-based authentication.',
    label: 'Relational Model & Order Processor',
    file: 'app/Http/Controllers/OrderController.php',
    previewTitle: 'Transactional Order Placement with DB Locks',
    previewDesc: 'ACID transaction guaranteeing zero inventory race conditions in FoodNexus.',
    code: `namespace App\\Http\\Controllers;

use App\\Models\\Order;
use App\\Models\\MenuItem;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Http\\Request;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        return DB::transaction(function () use ($request) {
            $item = MenuItem::where('id', $request->item_id)
                ->lockForUpdate()
                ->firstOrFail();

            $order = Order::create([
                'user_id' => auth()->id(),
                'status'  => 'placed',
                'total'   => $item->price * $request->quantity,
            ]);

            return response()->json(['order_id' => $order->id], 201);
        });
    }
}`,
    pills: ['Laravel MVC', 'MySQL Transactions', 'lockForUpdate()', 'PHP 8.3']
  },
  {
    id: 'ai-development',
    number: '03.',
    title: 'AI-Assisted Development & Academic OS',
    summary: 'Modern rapid prototyping with human verification gates, deterministic math calculators, and responsive UI.',
    label: 'Gradora Logic Engine',
    file: 'src/engine/gpaCalculator.ts',
    previewTitle: 'Deterministic Multi-Semester GPA Calculation',
    previewDesc: 'Strict mathematical precision algorithm without hallucinated grading state.',
    code: `export interface CourseRecord {
  code: string;
  credits: number;
  gradePoint: number;
}

export function calculateCGPA(courses: CourseRecord[]): { cgpa: number; totalCredits: number } {
  if (!courses.length) return { cgpa: 0, totalCredits: 0 };
  
  const totalQualityPoints = courses.reduce(
    (sum, c) => sum + (c.credits * c.gradePoint), 0
  );
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  
  const rawCGPA = totalCredits > 0 ? (totalQualityPoints / totalCredits) : 0;
  return {
    cgpa: Math.round(rawCGPA * 100) / 100,
    totalCredits
  };
}`,
    pills: ['TypeScript', 'Academic Planning', 'Deterministic Math', 'React']
  },
  {
    id: 'frontend',
    number: '04.',
    title: 'Modern Frontend & Responsive Interfaces',
    summary: 'High-performance interactive interfaces using Tailwind CSS, Bootstrap 5, responsive layouts, and motion.',
    label: 'Component Architecture',
    file: 'src/components/ResponsiveGrid.tsx',
    previewTitle: 'Dynamic Accessible UI System',
    previewDesc: 'Responsive layout with clean accessibility and micro-interactions.',
    code: `import React from 'react';

export const MetricBadge: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="p-4 bg-[#f8f6f1] border border-[#e5e2da] rounded-sm transition-all hover:border-[#191817]">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[#7a776f] block mb-1">
      {label}
    </span>
    <span className="text-sm font-bold text-[#191817] font-mono">
      {value}
    </span>
  </div>
);`,
    pills: ['Tailwind CSS', 'Bootstrap 5', 'Responsive Design', 'Motion']
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'breaksy',
    title: 'Breaksy',
    category: 'Productivity & Screen Time Application',
    year: '2025',
    tagline: 'Breaks mindless muscle-memory before doomscrolling begins.',
    description: 'An innovative habit and productivity platform designed to interrupt automatic phone checking, offering smooth friction-based cognitive pacing and deep work sprint intervals.',
    stack: ['Google Antigravity', 'Google AI Studio'],
    highlightColor: '#191817',
    mockupType: 'breaksy',
    imageUrl: '/assets/coverimage.png',
    imageAlt: 'Breaksy Productivity & Habit Interruption App',
    videoUrl: '/assets/project_video.mp4',
    modalData: {
      title: 'Breaksy — Friction Over Hard Blocking',
      subtitle: 'Productivity Application • Interactive Live Walkthrough',
      description: 'Breaks mindless muscle-memory before doomscrolling begins. Traditional blockers simply lock apps after reaching a daily limit, leading users to instantly dismiss them. Breaksy steps in before doomscrolling even starts, interrupting automatic urges and gently shifting focus back toward intentional choices.',
      features: [
        {
          title: 'Friction-Based Interruption Engine',
          detail: 'Interrupts automatic phone opening urges before doomscrolling begins, creating a conscious pause.'
        },
        {
          title: 'Interactive Live Walkthrough Video',
          detail: 'Seamless live product demonstration showcasing user workflows and distraction-free interface.'
        },
        {
          title: 'Clean Minimalist UI & Native Motion',
          detail: 'Dark, distraction-free aesthetic with smooth micro-interactions that emphasize intentional focus.'
        }
      ],
      architectureNotes: [
        'Pure client-side responsive architecture with high-speed rendering.',
        'Zero tracking or telemetry — 100% focused on user privacy and intentional productivity.'
      ],
      metricsBreakdown: [
        { label: 'Platform', stat: 'Web & Mobile' },
        { label: 'Video Demo', stat: '12s Walkthrough' },
        { label: 'Approach', stat: 'Friction Pacing' }
      ]
    }
  },
  {
    id: 'kallisto-wp',
    title: 'eCommerce Sneaker Store',
    category: 'WordPress CMS & eCommerce',
    year: '2024',
    tagline: 'Custom WordPress & Elementor eCommerce platform for engineered athletic footwear.',
    description: 'A bespoke client WordPress website featuring custom post types, curated product catalogs, responsive layouts, high-performance asset loading, and tailored Elementor design.',
    stack: ['WordPress', 'Elementor', 'WooCommerce'],
    highlightColor: '#dbd7cd',
    mockupType: 'wordpress',
    imageUrl: '/assets/wordpress.png',
    imageAlt: 'eCommerce Sneaker Store WordPress Platform',
    modalData: {
      title: 'eCommerce Sneaker Store — Custom WordPress Platform',
      subtitle: 'WordPress CMS • Custom Post Types & Performance Tuning',
      description: 'A bespoke corporate web presence designed for high visual appeal, fast loading speeds, and an effortless content management experience.',
      features: [
        {
          title: 'Tailored Elementor Template Architecture',
          detail: 'Clean modular layout components enabling non-technical staff to update content without breaking visual hierarchy.'
        },
        {
          title: 'Sub-Second Page Load Optimization',
          detail: 'Image optimization pipelines, caching headers, and deferred asset loading achieving high Google PageSpeed scores.'
        },
        {
          title: 'Lead Capture & Security Hardening',
          detail: 'Integrated secure form handlers, spam filtering, SSL enforcement, and regular automated backup policies.'
        }
      ],
      architectureNotes: [
        'Constructed on a child theme architecture to ensure seamless future core updates.',
        'Zero code bloat with custom CSS rules replacing heavy third-party plugins.'
      ],
      metricsBreakdown: [
        { label: 'Platform', stat: 'WordPress CMS' },
        { label: 'Visual Builder', stat: 'Elementor Pro' },
        { label: 'Performance', stat: '95+ Mobile Score' }
      ]
    }
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'OpenWeather API | HTML • CSS • JS',
    year: '2024',
    tagline: 'Dynamic real-time weather web application using OpenWeatherMap API, HTML, CSS & Vanilla JS.',
    description: 'A dynamic weather application built with semantic HTML5, modern CSS glassmorphism, and Vanilla JavaScript. Interacts with the OpenWeatherMap API to display real-time temperatures, condition states (daylight clouds, night clear sky, sunset), humidity, wind speed, and predictive 5-day forecasts.',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'OpenWeatherMap API'],
    highlightColor: '#38bdf8',
    mockupType: 'weather',
    imageUrl: '/assets/weather_preview1.jpg',
    imageAlt: 'Dynamic Weather Web App using OpenWeather API',
    galleryImages: [
      '/assets/weather_preview1.jpg',
      '/assets/weather_preview2.jpg',
      '/assets/weather_preview3.jpg'
    ],
    modalData: {
      title: 'Weather App — Real-Time Meteorological Application',
      subtitle: 'OpenWeatherMap API • HTML5 • CSS3 • Vanilla JavaScript',
      description: 'Built with pure semantic HTML5, modern CSS3 glassmorphism backdrop filters, and Vanilla JavaScript. The app connects directly to the OpenWeatherMap REST API to fetch live weather conditions, calculate temperature in Celsius, and dynamically switch the atmospheric landscape between Daylight (Karachi Clouds), Night Sky (Tokyo Clear), and Sunset (Faisalabad Clear) while delivering a responsive 5-day predictive forecast.',
      features: [
        {
          title: 'OpenWeatherMap REST API Integration',
          detail: 'Fetches real-time meteorological data including temperature in °C, weather conditions, humidity percentages, and wind speed in km/h.'
        },
        {
          title: 'Dynamic Daylight, Night & Sunset Sky States',
          detail: 'Atmospheric theme engine that dynamically adjusts background illustrations, sun/moon icons, and card lighting based on the searched city time and weather condition.'
        },
        {
          title: 'Multi-City Search with Live 5-Day Forecast',
          detail: 'Interactive search bar supporting cities worldwide with instant JSON payload parsing and a clean 5-day predictive forecast row.'
        },
        {
          title: 'Pure Vanilla JS & Glassmorphism Aesthetics',
          detail: 'Engineered without framework overhead using native ES6+ fetch promises, DOM manipulation, and modern frosted glass UI styling.'
        }
      ],
      architectureNotes: [
        'Lightweight zero-dependency architecture with sub-100ms client execution time.',
        'Responsive mobile-first card design that looks stunning across phones, tablets, and desktops.',
        'Error handling for invalid city queries with graceful user feedback.'
      ],
      metricsBreakdown: [
        { label: 'API Provider', stat: 'OpenWeatherMap' },
        { label: 'Core Stack', stat: 'HTML, CSS, JS' },
        { label: 'UI Style', stat: 'Glassmorphism' },
        { label: 'Forecast', stat: '5-Day Horizon' }
      ]
    }
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: 'Turnkey WordPress & WooCommerce Flagship',
    tag: 'eCommerce & CMS',
    description: 'Complete build from custom design to high-converting payment setup, Elementor layout, and sub-second speed optimization.'
  },
  {
    title: 'Laravel Backend & Full-Stack Web App',
    tag: 'Web Application',
    description: 'Custom MVC applications, relational database design, role-based access control, REST APIs, and administrative control panels.'
  },
  {
    title: 'Speed & Architecture Audit',
    tag: 'Performance Tuning',
    description: 'Deep diagnostic audit covering database query optimization, Core Web Vitals, server caching, and code cleanup.'
  },
  {
    title: 'Technical Advisory & Development Retainer',
    tag: 'Ongoing Support',
    description: 'Dedicated monthly engineering hours for feature rollouts, bug resolution, infrastructure updates, and security.'
  }
];

export const BESPOKE_SOLUTIONS: BespokeSolution[] = [
  {
    category: 'WordPress Engineering',
    title: 'Custom Theme & Plugin Development',
    subtitle: 'Tailored Web Architecture',
    description: 'Zero bloat, pixel-perfect layouts, custom post types, and custom fields structured for effortless client editing.'
  },
  {
    category: 'eCommerce Optimization',
    title: 'WooCommerce Checkout & Payment Systems',
    subtitle: 'Conversion-Focused Engineering',
    description: 'Streamlined checkout funnels, payment gateway integrations, automated receipt generation, and real-time inventory synchronization.'
  },
  {
    category: 'Backend & Databases',
    title: 'Laravel MVC & Relational Database Design',
    subtitle: 'Scalable Systems',
    description: 'Normalized MySQL schemas, transactional safety, secure user authentication, and comprehensive administrative dashboards.'
  }
];
