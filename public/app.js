(function () {
  "use strict";
  // PRAVAHAx icon set: 24px grid, 1.5 stroke, one solid blue accent per glyph.
  var AC = 'style="fill:var(--icon-ac)" stroke="none"';
  var dot = function (x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 1.3) + '" ' + AC + "/>"; };
  var sq = function (x, y, s) { return '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" rx=".5" ' + AC + "/>"; };
  var spark = function (x, y, s) { return '<path d="M' + x + " " + (y - s) + "Q" + x + " " + y + " " + (x + s) + " " + y + "Q" + x + " " + y + " " + x + " " + (y + s) + "Q" + x + " " + y + " " + (x - s) + " " + y + "Q" + x + " " + y + " " + x + " " + (y - s) + 'Z" ' + AC + "/>"; };
  var I = {
    code: '<path d="M8 7.5 3.5 12 8 16.5M16 7.5l4.5 4.5-4.5 4.5M13.5 5.5l-3 13"/>' + '<rect x="15" y="18.2" width="4" height="1.6" rx=".5" ' + AC + "/>",
    ai: '<circle cx="6" cy="17" r="2.2"/><circle cx="12" cy="7.5" r="2.2"/><circle cx="17.5" cy="15.5" r="2.2"/><path d="m7.2 15.1 3.6-5.7M13.2 9.4l3.1 4.2M8.2 16.6l7.1-.8"/>' + spark(19, 5, 2.6),
    iot: '<rect x="7" y="9.5" width="10" height="10" rx="2"/><path d="M4 12.5h3M4 16.5h3M17 12.5h3M17 16.5h3M10 19.5v2.5M14 19.5V22M8.6 4.6a5 5 0 0 1 6.8 0M10.4 6.6a2.3 2.3 0 0 1 3.2 0"/>' + sq(10.6, 13.1, 2.8),
    ent: '<path d="M12 3 3 7.5l9 4.5 9-4.5z"/><path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>' + dot(12, 7.5, 1.3),
    cloud: '<path d="M11 17.5H6.5a4 4 0 0 1-.4-7.98A6 6 0 0 1 17.6 8.6a4 4 0 0 1 2.9 2.9"/><path d="m17 12.5-3.5 1.3v2.7c0 2.2 1.5 3.8 3.5 4.5 2-.7 3.5-2.3 3.5-4.5v-2.7z"/>' + dot(17, 16.4, 1.1),
    consult: '<circle cx="12" cy="12" r="9"/><path d="M12 3v1.8M12 19.2V21M3 12h1.8M19.2 12H21M15.5 8.5l-2 5-5 2 2-5z"/>' + dot(12, 12, 1.1),
    web: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 9h18M9 6.75h.01M7 13h6M7 16h10"/>' + dot(6.2, 6.75, 1),
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 5.5h3"/>' + dot(12, 18, 1.1),
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.8a3.2 3.2 0 0 1 0 6.2M21 20c0-2.8-1.9-5.1-4.5-5.8"/>' + dot(20, 4.5, 1.3),
    plug: '<path d="M9 2.5v4.5M15 2.5V7M6 7h12v4a6 6 0 0 1-12 0zM12 17v4.5"/>' + dot(12, 11.5, 1.3),
    refresh: '<path d="M19.5 10.5A7.8 7.8 0 0 0 5.4 7.5M4.5 4v4h4M4.5 13.5a7.8 7.8 0 0 0 14.1 3M19.5 20v-4h-4"/>' + dot(12, 12, 1.4),
    shield: '<path d="M12 3.5 5 6v5.5c0 4.2 3 7.7 7 8.5 4-.8 7-4.3 7-8.5V6z"/><path d="m9 12 2.2 2.2 4-4.4"/>' + spark(20.5, 3.5, 2),
    doc: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M12 16h3"/>' + sq(8.3, 15.1, 1.8),
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3.2"/>' + dot(12, 12, 1.3),
    chart: '<path d="M4 4v16h16M7.5 15.5l4-4.5 3 2.5 4-5"/>' + dot(19.5, 8, 1.5),
    flow: '<rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h5a3 3 0 0 1 3 3v6"/>' + dot(17, 11.5, 1.3),
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>' + dot(12, 12.3, 1.3),
    wave: '<path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8"/>' + dot(12, 12, 2),
    gauge: '<path d="M4 18a8 8 0 1 1 16 0M12 6v1.5M6.3 8.3l1 1M17.7 8.3l-1 1M12 18l3.5-5.5"/>' + dot(12, 18, 1.6),
    router: '<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M11 16.5h.01M17 13V8.5M14 6.5a4 4 0 0 1 6 0"/>' + dot(7, 16.5, 1.1),
    bell: '<path d="M6 16v-5a6 6 0 0 1 9.5-4.9M18 11v5l2 2H4"/><path d="M10 21h4"/>' + dot(18.5, 5.5, 1.8),
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>' + dot(12, 8, 1.2),
    id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M6 16c.6-1.6 1.7-2.4 3-2.4s2.4.8 3 2.4M15 10h3M15 13h3"/>' + sq(15, 15.2, 1.8),
    db: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>' + dot(16.5, 18.2, 1),
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 16.5v1.5"/>' + dot(12, 15.3, 1.3),
    pulse: '<path d="M2.5 12h4l3-7 4 14 3-7h3"/>' + dot(21, 12, 1.4),
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>' + dot(18, 10, 1.3),
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>' + spark(11, 11, 2.6),
    scale: '<path d="M12 5.5V21M7.5 21h9M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>' + dot(12, 3.6, 1.3),
    life: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m5.6 5.6 3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>' + dot(12, 12, 1.2),
    alert: '<path d="M10.3 4.5a2 2 0 0 1 3.4 0l7.6 13A2 2 0 0 1 19.6 20.5H4.4a2 2 0 0 1-1.7-3z"/><path d="M12 9.5v4"/>' + dot(12, 16.8, 1.2),
    mail: '<rect x="2.5" y="6" width="16" height="12.5" rx="2"/><path d="m2.5 8.5 8 5.3 8-5.3"/>' + dot(20, 5, 2.2),
    call: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/><path d="M14.5 3.5a6 6 0 0 1 6 6"/>' + dot(15.3, 8.7, 1.2),
    pin: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/>' + dot(12, 9, 2.4),
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>' + dot(12, 12, 1.3),
    home: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10M10 20v-5h4v5"/>' + sq(11, 8.6, 2),
    check: '<path d="m4.5 12.5 5 5 10-11"/>' + spark(6, 5, 2.4),
    // Industry glyphs
    manufacturing: '<path d="M3 20.5v-8l4.5 3v-3l4.5 3v-2h9v7zM2.5 20.5h19"/><circle cx="17" cy="6.5" r="2.6"/><path d="M17 2.3v1.3M17 9.4v1.3M12.8 6.5h1.3M19.9 6.5h1.3M14 3.5l.9.9M19.1 8.6l.9.9M20 3.5l-.9.9M14.9 8.6l-.9.9"/>' + dot(17, 6.5, 1.1),
    agriculture: '<path d="M12 21v-9M12 12c0-4-2.5-6.5-7-6.5 0 4.5 2.5 6.5 7 6.5zM12 14.5c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6zM7.5 21h9"/>' + spark(17.5, 3.8, 1.9),
    healthcare: '<path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11z"/><path d="M3 12.5h4.5L9 9.5l3 6 2-4h5.5"/>' + dot(21, 11.5, 1.1),
    logistics: '<path d="M6 10.5s-3.5-2.8-3.5-5a3.5 3.5 0 0 1 7 0c0 2.2-3.5 5-3.5 5zM18 19s-3.5-2.8-3.5-5a3.5 3.5 0 0 1 7 0c0 2.2-3.5 5-3.5 5z"/><circle cx="18" cy="14" r="1.1"/><path d="M6 13.5v2.5a3 3 0 0 0 3 3h5" stroke-dasharray="2 2.5"/>' + dot(6, 5.5, 1.3),
    retail: '<path d="M5.5 8h13l1 12.5h-15z"/><path d="M9 10.5V7a3 3 0 0 1 6 0v3.5"/>' + dot(12, 15, 1.3),
    energy: '<path d="M13.5 2.5 5.5 13.5h6l-1 8 8-11h-6z"/>' + spark(5.5, 5, 2),
    flask: '<path d="M9.5 3h5M10.5 3v6.2L5.2 18.4A1.7 1.7 0 0 0 6.7 21h10.6a1.7 1.7 0 0 0 1.5-2.6L13.5 9.2V3M7.6 15h8.8"/>' + dot(11, 18, 1.1),
    finance: '<circle cx="12" cy="12.5" r="8.5"/><path d="M9 8h6M9 11h6M11.5 8a3 3 0 0 1 0 6H9l4.5 4"/>' + spark(20.5, 3.5, 1.8)
  };
  I.education = I.school = '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M21.5 9.3v5"/>' + dot(21.5, 15.6, 1.3);
  I.book = '<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13"/>' + dot(16.5, 9.5, 1.2);
  I.cake = '<path d="M4 21h16M5 21v-7.5h14V21M5 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0M12 13.5V10"/>' + '<path d="M12 4c1.1 1.3 1.3 2.4 0 3.4-1.3-1-1.1-2.1 0-3.4z" ' + AC + "/>";
  I["energy-utilities"] = I.energy;
  I["financial-services"] = I.finance;
  // One record per service; drives the mega menu, footer, overview and detail template.
  var SERVICES = [
    { slug: "software-engineering", name: "Software Engineering", line: "Platforms and apps built to last.", icon: "code", img: "svc-software.webp",
      intro: "Web platforms, mobile apps and internal tools engineered to be fast, secure and easy to maintain. We take ownership of quality from first commit to production.",
      chips: ["Web platforms", "Mobile apps", "APIs"],
      deliver: ["web|Web platforms|Fast, secure web apps that handle real traffic and grow with you.", "phone|Mobile apps (Android & iOS)|Native and cross-platform apps your customers keep using.", "users|Customer & partner portals|Self-service portals for orders, tickets, documents and accounts.", "plug|APIs & integrations|Clean APIs that connect your systems, partners and payments.", "refresh|Modernising legacy systems|Move off ageing software step by step, without stopping the business.", "shield|QA & test automation|Automated tests that catch problems before your users do."],
      out: ["Clean, documented code you own", "Fast, mobile-friendly experiences", "Automated testing and releases", "Easy for your team to extend"],
      ind: ["manufacturing", "education", "healthcare", "retail", "financial-services"],
      faq: [["Who owns the code?", "You do. Full source code, IP, documentation and access are yours."], ["Can you work with our existing system?", "Yes. We integrate with or gradually modernise what you already run."], ["How do we track progress?", "Weekly demos and a shared board, so you always see what's done."]] },
    { slug: "ai-automation", name: "AI & Automation", line: "AI that works in the real world.", icon: "ai", img: "svc-ai.webp",
      intro: "Practical AI that removes repetitive work and helps teams decide faster. From document processing to vision on the shop floor.",
      chips: ["AI assistants", "Document processing", "Computer vision"],
      deliver: ["consult|Generative AI assistants & chatbots|Assistants that answer from your own documents, policies and data.", "doc|Document & invoice processing|Read invoices, forms and records automatically, with checks built in.", "eye|Computer vision for quality checks|Cameras that spot defects on the line, shift after shift.", "chart|Demand & sales forecasting|Forecasts that help you plan stock, staff and production.", "flow|Workflow & process automation|Hand repetitive steps between systems to software, not people.", "star|Recommendation systems|Suggest the right product or next action for each customer."],
      out: ["Less manual data entry", "Faster, data-backed decisions", "AI grounded in your own data", "Human review where it matters"],
      ind: ["manufacturing", "agriculture", "healthcare", "logistics", "financial-services"],
      faq: [["Is our data safe?", "Your data stays in your environment and is never used to train public models."], ["We're new to AI. Where do we start?", "With a short AI readiness assessment that finds the highest-value use case."], ["Will AI replace our staff?", "We design AI to take repetitive tasks off your team, with people in control."]] },
    { slug: "hardware-iot", name: "Hardware & IoT", line: "Smart devices for plants and fields.", icon: "iot", img: "hardware.webp",
      intro: "Connected devices, sensors and edge systems that bring live data from machines, plants and fields into one place. We build the hardware, firmware and dashboards.",
      chips: ["Electronics & PCB", "Sensor networks", "Live dashboards"],
      deliver: ["iot|Custom electronics & PCB design|Boards designed for your use case, from schematic to prototype.", "code|Embedded firmware|Reliable, updatable firmware for microcontrollers and edge devices.", "wave|Industrial sensor networks|Sensors for temperature, vibration, flow and more, wired or wireless.", "gauge|Machine & energy monitoring|Track uptime, output and power use for every machine.", "router|Edge gateways|Gateways that collect, filter and forward data from the floor.", "bell|Live dashboards & alerts|See what's happening now, and get alerted when something drifts."],
      out: ["Live visibility of equipment", "Early warning before breakdowns", "Lower energy and resource waste", "Data you can act on"],
      ind: ["manufacturing", "agriculture", "energy-utilities", "logistics"],
      faq: [["Can you connect older machines?", "Yes. Retrofit sensors and gateways bring legacy equipment online."], ["Do you build the hardware too?", "Yes, from circuit design and prototypes to firmware and dashboards."], ["What if the internet drops?", "Edge devices store data locally and sync when the connection returns."]] },
    { slug: "enterprise-solutions", name: "Enterprise Solutions", line: "Systems that run your operations.", icon: "ent", img: "svc-enterprise.webp",
      intro: "ERP, CRM and operations software shaped around how your business actually works. Not the other way round.",
      chips: ["Custom ERP", "CRM", "Inventory"],
      deliver: ["ent|Custom ERP modules|Modules that fit your processes instead of forcing new ones.", "users|CRM & sales management|Leads, deals and follow-ups in one place for your sales team.", "box|Inventory & supply chain|Know what's in stock, where it is and what to reorder.", "id|HR & payroll systems|Attendance, leave and payroll without the spreadsheets.", "chart|Reporting & BI dashboards|Reports that build themselves from live data.", "plug|Third-party integrations (Tally, SAP, Zoho)|Connect the tools you already use so data flows between them."],
      out: ["One source of truth for operations", "Fewer spreadsheets and manual reports", "Real-time view for leadership", "Systems your staff actually use"],
      ind: ["manufacturing", "retail", "logistics", "education", "agriculture"],
      faq: [["Off-the-shelf or custom?", "We recommend the simplest fit: configure a proven platform, or build custom where it pays off."], ["Will our team need training?", "Yes, and we provide it, with guides and support after launch."], ["Can you migrate our old data?", "Yes. We clean, map and move your existing records safely."]] },
    { slug: "cloud-data-security", name: "Cloud, Data & Security", line: "Secure, scalable foundations.", icon: "cloud", img: "svc-cloud.webp",
      intro: "Secure, scalable foundations: cloud infrastructure, data pipelines and security practices that keep systems running. Built to grow with you.",
      chips: ["Cloud migration", "DevOps", "Security"],
      deliver: ["cloud|Cloud migration & architecture|Move to the cloud with an architecture that fits your load and budget.", "flow|DevOps & CI/CD|Automated builds and releases, so shipping is routine.", "db|Data pipelines & warehousing|Bring data from every system into one reliable warehouse.", "pulse|Monitoring & uptime|Watch systems around the clock and fix issues before users notice.", "lock|Security audits & hardening|Find weak spots and close them, from access to infrastructure.", "refresh|Backup & disaster recovery|Tested backups and a plan to recover fast when things go wrong."],
      out: ["Reliable, scalable systems", "Predictable cloud costs", "Clean, trusted data", "Security built in from day one"],
      ind: ["financial-services", "healthcare", "retail", "education"],
      faq: [["Can you reduce our cloud bill?", "We review usage and right-size resources to cut waste."], ["Do you offer ongoing support?", "Yes, monitoring and maintenance plans are available."], ["Which cloud should we choose?", "We advise based on your needs, budget and existing tools."]] }
  ];
  var CONSULTING = { slug: "consulting", name: "Consulting", line: "Clear technical advice, fast.", icon: "consult", img: "consultancy.webp",
      intro: "Independent technical advice for leaders: what to build, what to buy, and how to get there. Without wasted spend.",
      chips: ["Tech strategy", "AI readiness", "Code reviews"],
      deliver: ["map|Technology strategy & roadmaps|A plan for what to build, in what order, and why.", "ai|AI readiness assessments|Find where AI pays off in your business, and where it doesn't.", "search|Architecture & code reviews|An honest health check of your systems and code.", "scale|Vendor & tool selection|Compare options on fit and cost before you sign.", "flow|Digital transformation planning|A phased path from paper and spreadsheets to digital.", "life|Project rescue|Get a stalled or failing project back on track."],
      out: ["A clear, prioritised plan", "Fewer costly wrong turns", "Confident technology decisions", "An honest second opinion"],
      ind: "all",
      faq: [["Do you only advise, or also build?", "Both. Take our plan to any team, or have us deliver it."], ["How long does an assessment take?", "Usually two to three weeks."], ["Is the first conversation free?", "Yes. Your first two brainstorm sessions are free: two no-cost sessions to understand your problem and map a way forward, with no commitment."]] };
  // One record per industry; drives the overview grid and the detail template. sol: [title, service slug].
  var INDUSTRIES = [
    { slug: "manufacturing", name: "Manufacturing", short: "Manufacturing", line: "Smarter plants and machines.", img: "ind-manufacturing.webp", advise: "Industry 4.0, MES and machine data.",
      intro: "We help plants see what their machines are doing and act before problems grow. From the shop floor to the boardroom, data flows in one place.",
      ch: ["Unplanned machine downtime", "Manual production reporting", "Quality defects found too late", "Disconnected ERP and shop floor"],
      sol: [["Machine monitoring & predictive maintenance", "hardware-iot"], ["AI visual quality inspection", "ai-automation"], ["Production & MES dashboards", "enterprise-solutions"], ["ERP integration", "enterprise-solutions"]] },
    { slug: "agriculture", name: "Agriculture", short: "Agriculture", line: "Connected farms and field teams.", img: "ind-agriculture.webp", advise: "Farm tech, traceability and field apps.",
      intro: "Tools that connect farms, field teams and agri-businesses. Better data means better yields and smoother operations.",
      ch: ["Little visibility of field operations", "Paper-based sales and stock", "Water and input waste", "Hard-to-reach rural teams"],
      sol: [["Field-force & dealer apps", "software-engineering"], ["Soil and weather sensors", "hardware-iot"], ["Crop & demand forecasting", "ai-automation"], ["Agri ERP for sales and stock", "enterprise-solutions"]] },
    { slug: "education", name: "Education", short: "Education", line: "Modern campuses and learning.", img: "education.webp", alt: "Students working in a college computer lab", advise: "Campus systems and digital learning.",
      intro: "Modern systems for schools, colleges and training providers. Less admin, more time for teaching.",
      ch: ["Manual admissions and fees", "Scattered student records", "Limited online learning", "Slow reporting to management"],
      sol: [["Campus ERP for admissions, fees and attendance", "enterprise-solutions"], ["Learning platforms & apps", "software-engineering"], ["AI tutors & assessment tools", "ai-automation"], ["Secure cloud hosting", "cloud-data-security"]] },
    { slug: "healthcare", name: "Healthcare", short: "Healthcare", line: "Better care through better systems.", img: "medical.webp", advise: "Patient systems and data privacy.",
      intro: "Software that helps clinics, hospitals and labs care for patients more efficiently. Built with privacy and security first.",
      ch: ["Paper records and long queues", "Disconnected lab and billing systems", "Patient data privacy", "Equipment and stock tracking"],
      sol: [["Patient & appointment systems", "software-engineering"], ["Medical document AI", "ai-automation"], ["Equipment & cold-chain monitoring", "hardware-iot"], ["Secure, compliant cloud", "cloud-data-security"]] },
    { slug: "logistics", name: "Logistics & Supply Chain", short: "Logistics", line: "Visibility across every shipment.", img: "log1.webp", advise: "Tracking, routing and warehouse systems.",
      intro: "Real-time visibility across fleets, warehouses and shipments. Know where everything is and when it will arrive.",
      ch: ["No live shipment tracking", "Inefficient routes and fuel costs", "Warehouse stock mismatches", "Manual dispatch and paperwork"],
      sol: [["GPS fleet tracking", "hardware-iot"], ["Route optimisation", "ai-automation"], ["Warehouse management system", "enterprise-solutions"], ["Customer tracking portal", "software-engineering"]] },
    { slug: "retail", name: "Retail & Distribution", short: "Retail & Distribution", line: "Stock, sales and stores in sync.", img: "rt1.webp", advise: "Inventory, POS and omnichannel.",
      intro: "Keep stock, sales and stores in sync across every channel. Sell more and waste less.",
      ch: ["Stock-outs and overstock", "Disconnected online and offline sales", "Slow distributor ordering", "Little customer insight"],
      sol: [["Inventory & POS integration", "enterprise-solutions"], ["Distributor ordering apps", "software-engineering"], ["Demand forecasting", "ai-automation"], ["Sales & BI dashboards", "cloud-data-security"]] },
    { slug: "energy-utilities", name: "Energy & Utilities", short: "Energy & Utilities", line: "Monitoring for assets in the field.", img: "en1.webp", advise: "Asset monitoring and smart metering.",
      intro: "Monitoring and analytics for assets spread across the field. Spot faults early and keep power flowing.",
      ch: ["Remote assets hard to monitor", "Late fault detection", "Manual meter reading", "Unclear energy usage"],
      sol: [["Solar & asset monitoring", "hardware-iot"], ["Smart metering platforms", "software-engineering"], ["Fault prediction", "ai-automation"], ["Energy analytics dashboards", "cloud-data-security"]] },
    { slug: "financial-services", name: "Financial Services", short: "Financial Services", line: "Secure, compliant digital platforms.", img: "fin1.webp", advise: "Secure platforms and compliance.",
      intro: "Secure, compliant digital platforms for lenders, NBFCs, co-operatives and fintechs. Fast for customers, safe for regulators.",
      ch: ["Slow manual onboarding and KYC", "Legacy core systems", "Fraud and risk", "Strict security and compliance needs"],
      sol: [["Digital onboarding & KYC", "software-engineering"], ["Document & risk AI", "ai-automation"], ["Loan & customer management", "enterprise-solutions"], ["Security audits & hardening", "cloud-data-security"]] }
  ];
  // One record per case study; drives the work overview, case template and related-case cards.
  var CASES = [
    { slug: "eagrocare", name: "eAGROCARE", img: "case-eagrocare.webp", alt: "Rows of crops in a field", ind: "agriculture", svcs: ["enterprise-solutions", "software-engineering"],
      title: "One platform for sales, stock and field teams.",
      challenge: "Sales, inventory and field reporting lived in spreadsheets and phone calls, so leadership lacked a clear, current picture.",
      built: "A unified ERP covering sales, inventory and field operations, with a mobile app for the field team and dashboards for management.",
      result: "Processes became more streamlined and the whole organisation gained shared, up-to-date visibility.",
      quote: "Our processes are more streamlined and we have better visibility across the organisation.", by: "Rahul Deshmukh", role: "Director, eAGROCARE" },
    { slug: "sujal-industries", name: "Sujal Industries", img: "suj-a.jpg", alt: "Industrial condenser units", ind: "manufacturing", svcs: ["software-engineering", "cloud-data-security"],
      title: "Digital and SEO architecture for Sujal Industries.",
      challenge: "An outdated web presence did not reflect the company's capability or attract enterprise buyers.",
      built: "We built the web presence and search architecture for faster lead flow: a fast, modern website with technical SEO, structured content and analytics.",
      result: "The new site began generating serious enterprise enquiries.",
      quote: "The technical precision of their work translated directly into serious enterprise leads.", by: "Gopal Kale", role: "Managing Director, Sujal Industries" }
  ];
  var TEAM = [
    { name: "Devang Patil", role: "Chief Executive Officer (CEO)" },
    { name: "Dhruv Naik", role: "Chief Technology Officer" },
    { name: "Chetan Agrawal", role: "Head of Operations" },
    { name: "Masoom Mishra", role: "Head of Research & Development" },
    { name: "Varad Deshpande", role: "Engineering Lead" },
    { name: "Pallav Wankhede", role: "Head of Information Systems & DevOps" }
  ];
  var PAGES = { services: "Services", industries: "Industries", consulting: "Consulting", work: "Work", about: "About", careers: "Careers", contact: "Contact", privacy: "Privacy", terms: "Terms and conditions", cookies: "Cookies", accessibility: "Accessibility", sitemap: "Sitemap" };
  window.PX = { SERVICES: SERVICES, INDUSTRIES: INDUSTRIES, CASES: CASES, TEAM: TEAM, PAGES: PAGES };

  var $ = function (s) { return document.getElementById(s); };
  var esc = function (t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var svg = function (k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[k] + "</svg>"; };

  $("megaList").innerHTML = SERVICES.map(function (s) {
    return '<li><a href="#/services/' + s.slug + '"><span class="x-ico">' + svg(s.icon) + '</span><span><strong>' + esc(s.name) + '</strong><span class="x-d">' + esc(s.line) + "</span></span></a></li>";
  }).join("");
  $("consIco").innerHTML = svg("consult");
  $("accSvc").innerHTML = SERVICES.map(function (s) { return '<a class="x-menu__sub x-menu__sub--sm" href="#/services/' + s.slug + '">' + esc(s.name) + "</a>"; }).join("");

  // Leadership notes: open on mouse hover, keyboard focus, or tap/Enter (pinned until tapped again, tapped outside, or Escape).
  (function () {
    function trig(el) { return el && el.closest ? el.closest(".x-ptrig") : null; }
    function sync(t) {
      var on = t.classList.contains("is-pinned") || t.classList.contains("is-hover") || t.classList.contains("is-kbd");
      // Sideways note: to the right of the photo, or to the left when it would leave the viewport (last column).
      if (on && !t.classList.contains("is-open")) { var r = t.getBoundingClientRect(); t.classList.toggle("is-left", r.right + 244 + 16 > document.documentElement.clientWidth && r.left - 244 >= 16); }
      t.classList.toggle("is-open", on);
      t.setAttribute("aria-expanded", on ? "true" : "false");
      focusGrid(t);
    }
    // Focus effect: the grid gets .is-focusing and the open leader's card .is-active. Switching cards moves .is-active directly;
    // the grid only clears after a short grace period with no note open, so moving between cards never flickers.
    var fTimer = null;
    function setActive(grid, li) {
      Array.prototype.forEach.call(grid.querySelectorAll(".x-person.is-active"), function (o) { if (o !== li) o.classList.remove("is-active"); });
      li.classList.add("is-active"); grid.classList.add("is-focusing");
    }
    function focusGrid(t) {
      var grid = t.closest(".x-team"), li = t.closest(".x-person"); if (!grid || !li) return;
      if (t.classList.contains("is-open")) { clearTimeout(fTimer); setActive(grid, li); return; }
      if (!li.classList.contains("is-active")) return;
      var open = grid.querySelectorAll(".x-ptrig.is-open");
      if (open.length) { setActive(grid, open[open.length - 1].closest(".x-person")); return; }
      clearTimeout(fTimer);
      fTimer = setTimeout(function () {
        if (grid.querySelector(".x-ptrig.is-open")) return;
        grid.classList.remove("is-focusing");
        Array.prototype.forEach.call(grid.querySelectorAll(".x-person.is-active"), function (o) { o.classList.remove("is-active"); });
      }, 160);
    }
    function unpinOthers(keep) {
      Array.prototype.forEach.call(document.querySelectorAll(".x-ptrig.is-pinned"), function (o) { if (o !== keep) { o.classList.remove("is-pinned"); sync(o); } });
    }
    function toggle(t) { var p = !t.classList.contains("is-pinned"); unpinOthers(t); t.classList.toggle("is-pinned", p); if (!p) t.classList.remove("is-hover"); sync(t); }
    document.addEventListener("pointerover", function (e) {
      var t = trig(e.target); if (!t || e.pointerType !== "mouse" || t.contains(e.relatedTarget)) return;
      t.classList.add("is-hover"); sync(t);
    });
    document.addEventListener("pointerout", function (e) {
      var t = trig(e.target); if (!t || e.pointerType !== "mouse" || t.contains(e.relatedTarget)) return;
      t.classList.remove("is-hover"); sync(t);
    });
    document.addEventListener("focusin", function (e) {
      var t = trig(e.target); if (!t) return;
      var kbd = true; try { kbd = t.matches(":focus-visible"); } catch (x) {}
      if (kbd) { t.classList.add("is-kbd"); sync(t); }
    });
    document.addEventListener("focusout", function (e) {
      var t = trig(e.target); if (!t) return;
      t.classList.remove("is-kbd"); sync(t);
    });
    document.addEventListener("click", function (e) {
      var t = trig(e.target);
      if (!t) { unpinOthers(null); return; }
      toggle(t);
    });
    document.addEventListener("keydown", function (e) {
      var t = trig(e.target); if (!t) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(t); }
      else if (e.key === "Escape") { t.classList.remove("is-pinned", "is-kbd", "is-hover"); sync(t); }
    });
  })();

  I.trek = '<path d="m2.5 19.5 6.5-11 4 6 3-4 5.5 9z"/><path d="m7 12 2 1.5 1.5-1"/>' + dot(17, 5.5, 1.8);
  I.film = '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/><path d="M10.5 9.8v4.4l3.6-2.2z" ' + AC + "/>";
  I.cup = '<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 3v2.5M12 3v2.5M5 21.5h11"/>' + dot(10.5, 12.5, 1.3);
  I.compass = '<circle cx="12" cy="12" r="9"/><path d="M12 7 15 16.5 12 14.5 9 16.5z"/>' + dot(12, 4.8, 1);
  I.bike = '<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16 9.5 9H15l3 7M9.5 9 12 16h3M8 6h3"/>' + dot(12, 16, 1.3);
  I.heart = I.healthcare;
  I.cake = '<path d="M4 20h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/><path d="M4 15c2 1.5 4 1.5 5.3 0 1.3 1.5 4 1.5 5.4 0 1.3 1.5 3.3 1.5 5.3 0M12 11V7.5"/>' + dot(12, 4.8, 1.3);
  I.leaf = '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19 13 11"/>' + dot(15.5, 8.5, 1.2);
  I.gift = '<rect x="3.5" y="8.5" width="17" height="4" rx="1"/><path d="M5 12.5V20h14v-7.5M12 8.5V20"/><path d="M12 8.5C10.5 5 7 4.5 7 6.6 7 8 9.5 8.5 12 8.5zM12 8.5c1.5-3.5 5-4 5-1.9 0 1.4-2.5 1.9-5 1.9z"/>' + dot(16, 16, 1.2);
  $("carList").innerHTML = [["#/careers", "users", "Careers", "Open roles, how we hire and how to apply."], ["#/careers/internships", "school", "Internships", "Six months, a mentor and a real project."], ["#/careers/life", "leaf", "Life at PRAVAHAx", "Rooms, rituals, treks and the fine print."]].map(function (c) {
    return '<li><a href="' + c[0] + '"><span class="x-ico">' + svg(c[1]) + '</span><span><strong>' + c[2] + '</strong><span class="x-d">' + c[3] + "</span></span></a></li>";
  }).join("");

  $("abtList").innerHTML = [["#/about", "flow", "Our story", "Why we started PRAVAHAx, and our name."], ["#/about/beliefs", "star", "Our beliefs", "Five things we hold to on every project."], ["#/about/leadership", "users", "Leadership", "The executives who guide PRAVAHAx."]].map(function (c) {
    return '<li><a href="' + c[0] + '"><span class="x-ico">' + svg(c[1]) + '</span><span><strong>' + c[2] + '</strong><span class="x-d">' + c[3] + "</span></span></a></li>";
  }).join("");

  // Dropdown menus (Services, About, Careers). The About trigger is a link: it navigates on click and opens on hover or arrow keys.
  var drops = [].slice.call(document.querySelectorAll(".x-navitem"));
  function drop(it, open) { it.classList.toggle("is-open", open); it.firstElementChild.setAttribute("aria-expanded", open); }
  function mega(open) { drops.forEach(function (it) { drop(it, open); }); }
  var hoverOK = matchMedia("(hover:hover)").matches;
  drops.forEach(function (it) {
    if (it.firstElementChild.tagName === "BUTTON") it.firstElementChild.addEventListener("click", function () { var o = !it.classList.contains("is-open"); mega(false); drop(it, o); });
    if (hoverOK) {
      it.addEventListener("mouseenter", function () { clearTimeout(it._t); drops.forEach(function (o) { if (o !== it) drop(o, false); }); drop(it, true); });
      it.addEventListener("mouseleave", function () { it._t = setTimeout(function () { drop(it, false); }, 150); });
    }
    it.addEventListener("focusout", function (e) { if (!it.contains(e.relatedTarget)) drop(it, false); });
    // Arrow keys: open from the button, then move between the links inside.
    it.addEventListener("keydown", function (e) {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      var links = [].slice.call(it.querySelectorAll(".x-mega a")), i = links.indexOf(document.activeElement);
      if (!links.length) return;
      e.preventDefault();
      if (!it.classList.contains("is-open")) { mega(false); drop(it, true); }
      if (i < 0) i = e.key === "ArrowDown" ? 0 : links.length - 1;
      else i = (i + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links[i].focus();
    });
  });
  // Phone menu accordions
  [].forEach.call(document.querySelectorAll(".x-acc>button"), function (b) {
    b.addEventListener("click", function () { var o = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", o); $(b.getAttribute("aria-controls")).hidden = !o; });
  });
  document.addEventListener("click", function (e) { drops.forEach(function (it) { if (!it.contains(e.target)) drop(it, false); }); });

  // Mobile menu
  var menu = $("menu"), burger = $("burger");
  function setMenu(open) {
    menu.hidden = !open; burger.setAttribute("aria-expanded", open);
    document.documentElement.classList.toggle("x-menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) $("menuClose").focus(); else if (document.activeElement && menu.contains(document.activeElement)) burger.focus();
  }
  burger.addEventListener("click", function () { setMenu(true); });
  $("menuClose").addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" || palOn) return;
    if (!menu.hidden) setMenu(false);
    drops.forEach(function (it) { if (it.classList.contains("is-open")) { drop(it, false); it.firstElementChild.focus(); } });
  });
  window.addEventListener("resize", function () { if (innerWidth > 900 && !menu.hidden) setMenu(false); });

  // Floating "Talk to us" button: never over form fields, the footer, or the on-screen keyboard.
  var fab = document.querySelector(".x-fab"), fabRoute = false, fabFoot = false, fabField = false;
  var wa = document.querySelector(".x-wa");
  // WhatsApp stays on every page; it only steps aside for the phone keyboard.
  function fabSet() { fab.classList.toggle("is-off", fabRoute || fabFoot || fabField); wa.classList.toggle("is-off", fabField && innerWidth <= 1080); }
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { fabFoot = es[0].isIntersecting; fabSet(); }).observe(document.querySelector(".x-foot"));
  document.addEventListener("focusin", function (e) { fabField = !!(e.target.matches && e.target.matches("input,textarea,select")); fabSet(); });
  document.addEventListener("focusout", function () { setTimeout(function () { var a = document.activeElement; fabField = !!(a && a.matches && a.matches("input,textarea,select")); fabSet(); }, 0); });

  // Header state
  var header = $("header");
  function onScroll() { header.classList.toggle("is-solid", scrollY > 0); }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Skip link keeps the hash route intact
  document.querySelector(".x-skip").addEventListener("click", function (e) { e.preventDefault(); $("main").focus(); });

  // Global search (command palette)
  var pal = $("pal"), palIn = $("palInput"), palList = $("palList"), palStatus = $("palStatus"), palFrom = null, palSel = 0, palIdx = null, palT, palOn = false;
  var isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);
  [].forEach.call(document.querySelectorAll("[data-kbd]"), function (k) { k.textContent = isMac ? "⌘K" : "Ctrl K"; });
  var GROUPS = ["Pages", "Services", "Industries", "Work", "Research & impact", "Careers", "Life & culture"];
  function E(g, t, d, h, ic, k) { return { g: g, t: t, d: d, h: h, ic: ic, k: k || "" }; }
  function buildIndex() {
    var a = [
      E("Pages", "Home", "PRAVAHAx Systems Engineering | Less chaos. More flow.", "#/", "home", "start landing pravahax systems engineering"),
      E("Pages", "Services", "Five capabilities, from software to AI and IoT.", "#/services", "code", "what we do capabilities offerings build"),
      E("Pages", "Industries", "Eight sectors where we work.", "#/industries", "ent", "sectors markets verticals"),
      E("Pages", "Consulting", "Clear advice for every industry.", "#/consulting", "consult", "strategy advice ai readiness architecture review roadmap fractional cto"),
      E("Pages", "Work", "Proof, not promises. Case studies.", "#/work", "star", "case studies portfolio projects clients"),
      E("Pages", "About us", "Engineering with ownership.", "#/about", "users", "company story values who we are"),
      E("Pages", "Leadership", "The executives who guide PRAVAHAx.", "#/about/leadership", "users", "team executives " + TEAM.map(function (p) { return p.name + " " + p.role; }).join(" ")),
      E("Pages", "Contact", "Tell us what you're building. We reply within 1 business day.", "#/contact", "mail", "start a project enquiry email phone office address hello talk"),
      E("Pages", "Privacy", "Your details stay with us.", "#/privacy", "lock", "legal data policy"),
      E("Pages", "Terms and conditions", "Plain terms for this site.", "#/terms", "doc", "legal conditions terms"),
      E("Pages", "Cookies", "No tracking cookies.", "#/cookies", "doc", "legal tracking"),
      E("Pages", "Accessibility", "A site everyone can use.", "#/accessibility", "eye", "a11y screen reader keyboard"),
      E("Pages", "Sitemap", "Every page on this site, in one place.", "#/sitemap", "map", "site map all pages index directory links")
    ];
    SERVICES.forEach(function (s) { a.push(E("Services", s.name, s.line, "#/services/" + s.slug, s.icon, s.chips.join(" ") + " " + s.deliver.map(function (d) { return d.split("|")[1]; }).join(" ") + " stack-agnostic")); });
    INDUSTRIES.forEach(function (x) { a.push(E("Industries", x.name, x.line, "#/industries/" + x.slug, x.slug, x.ch.join(" ") + " " + x.sol.map(function (s) { return s[0]; }).join(" "))); });
    CASES.forEach(function (c) { var x = findBy(INDUSTRIES, c.ind); a.push(E("Work", c.name, c.title, "#/work/" + c.slug, "star", "case study client " + x.name + " " + c.svcs.map(function (k) { return findBy(SERVICES, k).name; }).join(" ") + " " + c.by)); });
    a.push(E("Careers", "Careers", "Open roles, how we hire and how to apply.", "#/careers", "users", "jobs hiring work with us join"));
    a.push(E("Careers", "Open roles", ROLES.length + " roles in Chhatrapati Sambhajinagar.", "#/careers/roles", "users", "jobs vacancies openings " + ROLES.map(function (r) { return r[0]; }).join(" ")));
    ROLES.forEach(function (r) { a.push(E("Careers", r[0], r[1] + " · On-site · Full-time", "#/careers/roles", "code", "job role " + r[1])); });
    a.push(E("Careers", "Internships", "Six months, a mentor and a real project.", "#/careers/internships", "school", "intern freshers students " + INTERNS.map(function (r) { return r[1]; }).join(" ")));
    INTERNS.forEach(function (r) { a.push(E("Careers", r[1], "6-month programme with a mentor and a real project.", "#/careers/internships", r[0], "internship intern fresher")); });
    a.push(E("Careers", "Apply", "Send your application and résumé.", "#/careers/apply", "doc", "application resume cv form"));
    a.push(E("Life & culture", "Life at PRAVAHAx", "Rooms, rituals, treks and the fine print.", "#/careers/life", "leaf", "culture office team life"));
    a.push(E("Life & culture", "Rooms with names", "The rooms we think in.", "#/careers/life/rooms", "home", ROOMS.map(function (r) { return r[1]; }).join(" ") + " " + SPACES.map(function (s) { return s[0]; }).join(" ") + " office spaces"));
    a.push(E("Life & culture", "Exhibits from the office", "A few corners of the office.", "#/careers/life/exhibits", "eye", "fridge diet coke mugs coffee parcels"));
    a.push(E("Life & culture", "Out of office, on purpose", "Treks, movie nights, offsites and more.", "#/careers/life/outside", "trek", OOO.map(function (d) { return d[1]; }).join(" ")));
    a.push(E("Research & impact", "PRAVAHAx Labs", "The research our team pursues beyond client work: problems we've nearly cracked, led by Devang Patil.", "#/labs", "search", "research lab board r&d principles protocol devang patil masoom mishra"));
    LABS.forEach(function (l) { a.push(E("Research & impact", l[1], l[3] + " · " + l[4], "#/labs", "search", "labs research " + l[0] + " " + l[2])); });
    a.push(E("Research & impact", "Bioinformatics & life sciences", "Our next frontier: software, data and AI for life sciences and healthcare research. Planned under PRAVAHAx Labs.", "#/labs", "search", "bioinformatics life sciences healthcare research biology next frontier planned coming next masoom mishra"));
    a.push(E("Research & impact", "Teach as we build", "Some of our most important work happens outside client projects.", "#/impact", "school", "social impact community csr schools children students"));
    IMPACT.forEach(function (d) { a.push(E("Research & impact", d[1], d[2], "#/impact", d[0], "impact school children students village")); });
    a.push(E("Research & impact", "Publications", "ICT textbook series, Classes 8–10, in Marathi and English.", "#/about/publications", "book", "textbooks books ict information communication technology marathi english school"));
    a.push(E("Life & culture", "Our rituals", "Small habits that keep us curious.", "#/careers/life/rituals", "cup", RITUALS.map(function (r) { return r[0]; }).join(" ")));
    a.push(E("Life & culture", "The Fine Print", "Our rules. Mostly about coffee.", "#/careers/life/fine-print", "doc", "terms clauses rules chai samosas"));
    a.forEach(function (e) { e.tl = e.t.toLowerCase(); e.hay = (e.t + " " + e.d + " " + e.k).toLowerCase(); });
    return a;
  }
  // Characters of q in order within t, kept tight so loose scatter does not count as a match.
  function subseq(t, q) { var p = [], j = 0; for (var i = 0; i < t.length && j < q.length; i++) if (t[i] === q[j]) { p.push(i); j++; } return j === q.length && p[p.length - 1] - p[0] <= q.length * 2 ? p : null; }
  function score(e, q, toks) {
    var i = e.tl.indexOf(q);
    if (i === 0) return 400;
    if (i > 0) return (/[\s&(\/-]/.test(e.tl[i - 1]) ? 350 : 250) - i;
    if (toks.every(function (w) { return e.tl.indexOf(w) > -1; })) return 220;
    if (e.hay.indexOf(q) > -1) return 150;
    if (toks.every(function (w) { return e.hay.indexOf(w) > -1; })) return 120;
    if (q.length > 2 && subseq(e.tl, q.replace(/\s+/g, ""))) return 40;
    return 0;
  }
  function hl(text, q, toks, fuzzy) {
    var low = text.toLowerCase(), on = [], i, j;
    function mark(s, n) { for (var k = s; k < s + n; k++) on[k] = 1; }
    i = low.indexOf(q);
    if (i > -1) mark(i, q.length);
    else {
      var any = false;
      toks.forEach(function (w) { var p = low.indexOf(w); if (p > -1) { mark(p, w.length); any = true; } });
      if (!any && fuzzy) (subseq(low, q.replace(/\s+/g, "")) || []).forEach(function (p) { on[p] = 1; });
    }
    var out = "", open = false;
    for (j = 0; j < text.length; j++) {
      if (on[j] && !open) { out += "<mark>"; open = true; }
      if (!on[j] && open) { out += "</mark>"; open = false; }
      out += esc(text[j]);
    }
    return out + (open ? "</mark>" : "");
  }
  var GO = '<svg class="x-pal__go" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M9 10 4 15l5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>';
  function opt(e, n, title, desc) {
    return '<a class="x-pal__opt" role="option" id="po-' + n + '" href="' + e.h + '" tabindex="-1" aria-selected="false"><span class="x-ico">' + svg(I[e.ic] ? e.ic : "doc") + '</span><span class="x-pal__txt"><strong>' + title + "</strong><span>" + desc + "</span></span>" + GO + "</a>";
  }
  function palRender() {
    if (!palIdx) palIdx = buildIndex();
    var raw = palIn.value.trim(), q = raw.toLowerCase().replace(/\s+/g, " "), html = "", n = 0, count;
    if (!q) {
      var quick = [E("", "Start a project", "Tell us what you're building.", "#/contact", "flow"), E("", "Services", "Five capabilities, one team.", "#/services", "code"), E("", "Consulting", "Clear advice for every industry.", "#/consulting", "consult"), E("", "Careers", "Open roles and internships.", "#/careers", "users"), E("", "Life at PRAVAHAx", "Rooms, rituals, treks and the fine print.", "#/careers/life", "leaf")];
      html = '<div role="group" aria-labelledby="pg-q"><p class="x-pal__group" id="pg-q" role="presentation">Quick links</p>' + map(quick, function (e) { return opt(e, n++, esc(e.t), esc(e.d)); }) + "</div>";
      count = n;
      palStatus.textContent = "";
    } else {
      var toks = q.split(" ").filter(Boolean), hits = [];
      palIdx.forEach(function (e, i) { var s = score(e, q, toks); if (s) hits.push({ e: e, s: s, i: i }); });
      hits.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
      var groups = {}, order = [];
      hits.forEach(function (h) { var g = h.e.g; if (!groups[g]) { groups[g] = []; order.push(g); } if (groups[g].length < 6) groups[g].push(h); });
      order.forEach(function (g, gi) {
        html += '<div role="group" aria-labelledby="pg-' + gi + '"><p class="x-pal__group" id="pg-' + gi + '" role="presentation">' + esc(g) + "</p>" + map(groups[g], function (h) { return opt(h.e, n++, hl(h.e.t, q, toks, h.s === 40), hl(h.e.d, q, toks, false)); }) + "</div>";
      });
      count = n;
      if (!n) html = '<div class="x-pal__empty"><p>Nothing for “' + esc(raw) + '”. Try <button class="x-pal__try" type="button" data-try="AI">‘AI’</button>, <button class="x-pal__try" type="button" data-try="IoT">‘IoT’</button> or <button class="x-pal__try" type="button" data-try="careers">‘careers’</button>, or <a href="#/contact">write to us</a>.</p></div>';
      palStatus.textContent = n ? n + (n === 1 ? " result" : " results") : "No results";
    }
    palList.innerHTML = html;
    palList.hidden = false;
    palSel = 0; palMark();
    return count;
  }
  function palOpts() { return palList.querySelectorAll(".x-pal__opt"); }
  function palMark() {
    var o = palOpts();
    [].forEach.call(o, function (el, i) { el.setAttribute("aria-selected", i === palSel ? "true" : "false"); });
    if (o[palSel]) { palIn.setAttribute("aria-activedescendant", o[palSel].id); o[palSel].scrollIntoView({ block: "nearest" }); }
    else palIn.removeAttribute("aria-activedescendant");
  }
  function palOpen(from) {
    if (palOn) return;
    palOn = true;
    mega(false);
    palFrom = from || document.activeElement;
    clearTimeout(palT);
    pal.hidden = false;
    document.body.style.overflow = "hidden";
    palIn.value = "";
    palRender();
    palIn.focus();
    requestAnimationFrame(function () { requestAnimationFrame(function () { if (palOn) pal.classList.add("is-open"); }); });
  }
  function palClose(keepFocus) {
    if (!palOn) return;
    palOn = false;
    pal.classList.remove("is-open");
    document.body.style.overflow = menu.hidden ? "" : "hidden";
    var done = function () { pal.hidden = true; };
    if (reduce) done(); else palT = setTimeout(done, 180);
    if (!keepFocus && palFrom && document.contains(palFrom) && palFrom.offsetParent !== null) palFrom.focus();
    else if (!keepFocus) (innerWidth > 1080 ? $("searchBtn") : burger).focus();
  }
  function palGo(a) { var h = a.getAttribute("href"); palClose(); if (location.hash === h || (h === "#/" && !location.hash)) route(); else location.hash = h; }
  $("searchBtn").addEventListener("click", function () { palOpen(this); });
  $("menuSearch").addEventListener("click", function () { setMenu(false); palOpen(burger); });
  palIn.addEventListener("input", palRender);
  pal.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target : null; if (!t) return;
    if (t.closest("[data-close]")) { palClose(); return; }
    var tr = t.closest("[data-try]"); if (tr) { palIn.value = tr.getAttribute("data-try"); palRender(); palIn.focus(); return; }
    var a = t.closest("a"); if (a) { e.preventDefault(); palGo(a); }
  });
  pal.addEventListener("mousemove", function (e) {
    var a = e.target.closest && e.target.closest(".x-pal__opt"); if (!a) return;
    var i = [].indexOf.call(palOpts(), a); if (i > -1 && i !== palSel) { palSel = i; palMark(); }
  });
  pal.addEventListener("keydown", function (e) {
    var o = palOpts();
    if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); palClose(); }
    else if (e.key === "ArrowDown" || e.key === "ArrowUp") { if (!o.length) return; e.preventDefault(); palSel = (palSel + (e.key === "ArrowDown" ? 1 : -1) + o.length) % o.length; palMark(); }
    else if (e.key === "Enter" && e.target === palIn) { e.preventDefault(); if (o[palSel]) palGo(o[palSel]); }
    else if (e.key === "Tab") {
      var f = [].filter.call(pal.querySelectorAll("input,button,a[href]:not([tabindex='-1'])"), function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && !e.altKey && (e.key === "k" || e.key === "K")) { e.preventDefault(); if (!palOn) palOpen(); else palClose(); return; }
    if (e.key === "/" && !palOn && !e.metaKey && !e.ctrlKey && !e.altKey) {
      var t = e.target, tag = t && t.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable)) return;
      e.preventDefault(); if (!menu.hidden) { setMenu(false); palOpen(burger); } else palOpen();
    }
  });

  // Industries carousel: a plain, finite rail. Manufacturing first, Financial Services last; no clones,
  // no wrap. Previous is disabled at the start and Next at the end.
  // The rail is no longer on the home page; this stays inert unless a #rail exists.
  var rail = $("rail"), prev = $("railPrev"), next = $("railNext"), dotsEl = $("railDots");
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var railInit = function () {};
  if (rail) (function () {
  var real = [].slice.call(rail.children), N = real.length;
  real.forEach(function (li, i) { li.setAttribute("role", "group"); li.setAttribute("aria-roledescription", "slide"); li.setAttribute("aria-label", (i + 1) + " of " + N); li.setAttribute("data-i", i); });
  dotsEl.innerHTML = real.map(function () { return "<i></i>"; }).join("");
  var dots = dotsEl.children;
  function step() { return (real[1].offsetLeft - real[0].offsetLeft) || 1; }
  function maxX() { return Math.max(0, rail.scrollWidth - rail.clientWidth); }
  function current() { return rail.scrollLeft >= maxX() - 4 ? N - 1 : Math.max(0, Math.min(N - 1, Math.round(rail.scrollLeft / step()))); }
  function sync() {
    var x = rail.scrollLeft, k = current(), atStart = x <= 4, atEnd = x >= maxX() - 4;
    if (atStart && document.activeElement === prev && !atEnd) next.focus();
    if (atEnd && document.activeElement === next && !atStart) prev.focus();
    prev.disabled = atStart; next.disabled = atEnd;
    [].forEach.call(dots, function (d, j) { d.classList.toggle("is-on", j === k); });
  }
  var railRaf = 0;
  rail.addEventListener("scroll", function () { if (!railRaf) railRaf = requestAnimationFrame(function () { railRaf = 0; sync(); }); }, { passive: true });
  function go(dir) { rail.scrollBy({ left: dir * step(), behavior: reduce ? "auto" : "smooth" }); }
  prev.addEventListener("click", function () { go(-1); });
  next.addEventListener("click", function () { go(1); });
  // Keyboard: arrows move focus to the neighbouring card, stopping at either end.
  rail.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    var li = e.target.closest("li[data-i]"); if (!li) return;
    e.preventDefault();
    var i = Math.max(0, Math.min(N - 1, +li.getAttribute("data-i") + (e.key === "ArrowRight" ? 1 : -1)));
    real[i].querySelector("a").focus({ preventScroll: true });
    rail.scrollTo({ left: Math.min(i * step(), maxX()), behavior: reduce ? "auto" : "smooth" });
  });
  railInit = function () { rail.scrollLeft = 0; sync(); };
  addEventListener("resize", sync);
  sync();
  })();

  // Reveal on scroll
  var io = "IntersectionObserver" in window && !reduce ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;
  function reveal(root) {
    [].forEach.call(root.querySelectorAll(".x-rv:not(.is-in)"), function (el) { io ? io.observe(el) : el.classList.add("is-in"); });
  }

  // Templates
  var ARR = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CHK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
  var PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  var PROCESS = [["Brainstorm", "We think it through with you before a line of code."], ["Prototype", "Click through real software, not slides."], ["Build", "Ship in short, visible cycles."], ["Support", "We stay and keep it running."]];
  var MARK = '<svg class="x-ctamark" viewBox="0 0 594 292" aria-hidden="true" focusable="false"><use href="#logo"/></svg>';
  var ENGAGE = [["Discover", "We learn your goals, constraints and current systems."], ["Assess", "We review what you run today and where it falls short."], ["Recommend", "A clear, prioritised plan you can act on."], ["Deliver (optional)", "Take the plan to any team, or have us build it."]];
  var OFFERS = [["ai", "AI Readiness Assessment", "Find where AI pays off in your business.", "2–3 weeks"], ["search", "Architecture & Code Review", "An honest health check of your systems."], ["map", "Digital Transformation Roadmap", "A phased plan from paper to digital."], ["users", "Fractional CTO", "Senior technical leadership, part-time."]];
  function map(a, f) { return a.map(f).join(""); }
  // Every photo is folded once into a static <img data-k> (home view or the hidden #imgStore).
  // Views reuse that src, so non-home photos are only painted and decoded when their route renders.
  var SRC = {};
  [].forEach.call(document.querySelectorAll("img[data-k]"), function (el) { SRC[el.getAttribute("src")] = el; SRC["k:" + el.getAttribute("data-k")] = el; });
  function pic(k) { var el = SRC["k:" + k]; return el ? el.getAttribute("src") : k; }
  // Crop focus for our own photos, applied wherever a view renders them.
  var POS = { "medical.webp": "30% center", "education.webp": "center 35%" };
  // Give view images their intrinsic size (no layout shift), lazy loading and async decoding.
  function fixPos(root) {
    [].forEach.call(root.querySelectorAll("img"), function (i) {
      var s = SRC[i.getAttribute("src")];
      if (s) { i.setAttribute("width", s.getAttribute("width")); i.setAttribute("height", s.getAttribute("height")); if (POS[s.getAttribute("data-k")]) i.style.objectPosition = POS[s.getAttribute("data-k")]; }
      if (!i.closest(".x-hero")) i.setAttribute("loading", "lazy");
      i.setAttribute("decoding", "async");
    });
  }
  function sec(cls, inner) { return '<section class="x-sec ' + cls + '"><div class="x-wrap">' + inner + "</div></section>"; }
  function head(eb, t, sub) { return '<div class="x-head x-rv"><div>' + (eb ? '<p class="x-eyebrow">' + eb + "</p>" : "") + '<h2 class="x-h2">' + esc(t) + "</h2>" + (sub ? '<p class="x-lead">' + esc(sub) + "</p>" : "") + "</div></div>"; }
  function chips(a) { return '<ul class="x-chips">' + map(a, function (c) { return '<li class="x-chip">' + esc(c) + "</li>"; }) + "</ul>"; }
  function boxes(a, cls) { return '<div class="x-grid ' + (cls || "") + '">' + map(a, function (d) { return '<div class="x-box x-rv"><span class="x-ico">' + svg(d[0]) + '</span><h3 class="x-h3">' + esc(d[1]) + "</h3><p>" + esc(d[2]) + "</p>" + (d[3] ? '<span class="x-chip">' + d[3] + "</span>" : "") + "</div>"; }) + "</div>"; }
  function steps(a, mod) { return '<ol class="x-steps' + (mod ? " " + mod : "") + '">' + map(a, function (s, i) { return '<li class="x-rv"><span class="x-num">' + (i + 1) + '</span><div><h3 class="x-h3">' + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></div></li>"; }) + "</ol>"; }
  function faq(a) { return '<div class="x-faq x-rv">' + map(a, function (q) { return "<details><summary>" + esc(q[0]) + PLUS + "</summary><p>" + esc(q[1]) + "</p></details>"; }) + "</div>"; }
  function splitHero(top, h1, intro, btns, img, alt) {
    return '<section class="x-band"><div class="x-wrap x-split"><div class="x-rv">' + top + '<h1 class="x-h1 x-h1--sm">' + esc(h1) + '</h1><p class="x-lead">' + esc(intro) + '</p><div class="x-btns">' + btns + '</div></div><div class="x-frame x-rv"><img src="' + pic(img) + '" alt="' + esc(alt || h1) + '" loading="lazy" /></div></div></section>';
  }
  function cta() { return sec("", '<div class="x-cta">' + MARK + '<p class="x-eyebrow">PRAVAHAx Systems Engineering</p><h2 class="x-h2">Got an idea? Let\'s brainstorm it.</h2><p class="x-lead">Tell us what you\'re building. We reply within 1 business day.</p><div class="x-btns"><a class="x-btn x-btn--primary" href="#/contact?need=not-sure">Book a free brainstorm</a><a class="x-btn x-btn--ghost" href="mailto:hello@pravahax.com">hello@pravahax.com</a></div></div>').replace('class="x-sec "', 'class="x-sec x-dark x-ctaband"'); }
  function btn(cls, href, t) { return '<a class="x-btn x-btn--' + cls + '" href="' + href + '">' + t + "</a>"; }

  function viewServices() {
    return '<section class="x-band"><div class="x-wrap x-rv"><p class="x-eyebrow">Services</p><h1 class="x-h1">Everything you need to build and scale.</h1><p class="x-lead">Pick a service to see exactly what we deliver.</p></div></section>' +
      sec("", '<div class="x-rows">' + map(SERVICES, function (s) {
        var u = "#/services/" + s.slug;
        return '<article class="x-row x-rv"><a class="x-row__img x-media" href="' + u + '" tabindex="-1" aria-hidden="true"><img src="' + pic(s.img) + '" alt="' + esc(s.name) + '" loading="lazy" /></a><div><h2 class="x-h2">' + esc(s.name) + '</h2><p class="x-lead">' + esc(s.line) + "</p>" + chips(s.chips) + '<a class="x-arrow" href="' + u + '" aria-label="Explore ' + esc(s.name) + '">Explore ' + ARR + "</a></div></article>";
      }) + "</div>") + cta();
  }

  function viewDetail(s, i) {
    var n = SERVICES.length, pv = SERVICES[(i + n - 1) % n], nx = SERVICES[(i + 1) % n];
    var inds = s.ind === "all" ? INDUSTRIES : s.ind.map(function (k) { return INDUSTRIES.filter(function (x) { return x.slug === k; })[0]; });
    return splitHero('<ol class="x-crumb"><li><a href="#/services">Services</a></li><li aria-current="page">' + esc(s.name) + "</li></ol>", s.name, s.intro, btn("primary", "#/contact?need=" + s.slug, "Start a project") + btn("line", "#/contact?need=consulting", "Book a consultation"), s.img) +
      sec("", head(esc(s.name), "What we deliver") + boxes(s.deliver.map(function (d) { return d.split("|"); }))) +
      sec("x-mist", '<div class="x-split" style="align-items:start"><div class="x-rv"><h2 class="x-h2">Stack-agnostic.</h2><p class="x-lead">We choose the languages and tools that fit your problem, not our habits.</p></div><div class="x-rv"><h2 class="x-h2">What you get</h2><ul class="x-checks x-checks--2">' + map(s.out, function (o) { return "<li>" + CHK + esc(o) + "</li>"; }) + "</ul></div></div>") +
      sec("", head("", "How we deliver") + steps(PROCESS)) +
      sec("x-mist", head("", "Related industries") + '<ul class="x-chips x-rv">' + map(inds, function (x) { return '<li><a class="x-chip" href="#/industries/' + x.slug + '">' + esc(x.name) + "</a></li>"; }) + "</ul>") +
      sec("", head("", "FAQ") + faq(s.faq)) +
      sec("", '<nav class="x-pn x-rv" aria-label="More services"><a href="#/services/' + pv.slug + '"><small>← Previous</small>' + esc(pv.name) + '</a><a href="#/services/' + nx.slug + '"><small>Next →</small>' + esc(nx.name) + "</a></nav>").replace('class="x-sec "', 'class="x-sec" style="padding-top:0;padding-bottom:64px"') + cta();
  }

  function viewConsulting() {
    return splitHero('<p class="x-eyebrow">Consulting</p>', "Clear advice for every industry.", "Whatever your sector, we help you decide what to build, what to buy and how to get there.", btn("primary", "#/contact?need=consulting", "Book a free brainstorm") + btn("line", "#/services", "See services"), "consultancy.webp") +
      sec("", head("", "How we help") + boxes(OFFERS, "x-grid--4")) +
      sec("x-mist", head("", "Industries we advise") + '<ul class="x-indgrid">' + map(INDUSTRIES, function (x) {
        return '<li class="x-rv"><a class="x-ind" href="#/industries/' + x.slug + '"><div class="x-media"><img src="' + pic(x.img) + '" alt="' + esc(x.alt || x.name) + '" loading="lazy" /></div><div class="x-ind__txt"><h3 class="x-h3">' + esc(x.short === "Logistics" ? x.short : x.name) + "</h3><p>" + esc(x.advise) + "</p></div></a></li>";
      }) + "</ul>") +
      sec("", head("", "How an engagement works") + steps(ENGAGE)) +
      sec("x-mist", head("", "FAQ") + faq(CONSULTING.faq)) + cta();
  }

  function S(cls, style, inner) { return '<section class="x-sec ' + cls + '"' + (style ? ' style="' + style + '"' : "") + '><div class="x-wrap">' + inner + "</div></section>"; }
  function band(eb, h1, sub) { return '<section class="x-band"><div class="x-wrap x-rv"><p class="x-eyebrow">' + eb + '</p><h1 class="x-h1">' + esc(h1) + '</h1><p class="x-lead">' + esc(sub) + "</p></div></section>"; }
  function findBy(list, slug) { return list.filter(function (x) { return x.slug === slug; })[0]; }
  function indCard(x) {
    return '<li class="x-rv"><a class="x-ind" href="#/industries/' + x.slug + '"><div class="x-media"><img src="' + pic(x.img) + '" alt="' + esc(x.alt || x.name) + '" loading="lazy" /></div><div class="x-ind__txt"><h3 class="x-h3">' + esc(x.name) + "</h3><p>" + esc(x.line) + '</p><span class="x-arrow">Explore ' + ARR + "</span></div></a></li>";
  }
  function caseCard(c) {
    var x = findBy(INDUSTRIES, c.ind);
    return '<a class="x-card x-rv" href="#/work/' + c.slug + '"><div class="x-media"><img src="' + pic(c.img) + '" alt="' + esc(c.alt) + '" loading="lazy" /></div><div class="x-card__body"><span class="x-tag">' + esc(x.short) + '</span><h3 class="x-h3">' + esc(c.name) + '</h3><p class="x-card__line">' + esc(c.title) + '</p><span class="x-arrow">Read case study ' + ARR + "</span></div></a>";
  }

  function viewIndustries() {
    return band("Industries", "Built for the sectors that move India.", "Choose your industry to see how we help.") +
      S("", "", '<ul class="x-indgrid x-indgrid--tall">' + map(INDUSTRIES, indCard) +
        '<li class="x-rv"><a class="x-ind x-ind--next" href="#/labs"><div class="x-ind__top">' + '<span class="x-ico">' + svg("flask") + '</span><span class="x-labstatus x-labstatus--plan x-mono">COMING NEXT</span></div><div class="x-ind__txt"><h3 class="x-h3">Bioinformatics &amp; life sciences</h3><p>Our next frontier: software, data and AI for life sciences and healthcare research. Planned under PRAVAHAx Labs.</p><span class="x-arrow">Visit Labs ' + ARR + "</span></div></a></li>" +
        "</ul>") +
      S("", "padding-top:0", '<div class="x-slim x-rv"><p>Don\'t see your industry? We consult across every sector.</p><div class="x-btns">' + btn("primary", "#/consulting", "Explore consulting") + "</div></div>") + cta();
  }

  function viewIndustry(x, i) {
    var n = INDUSTRIES.length, pv = INDUSTRIES[(i + n - 1) % n], nx = INDUSTRIES[(i + 1) % n];
    var cs = CASES.filter(function (c) { return c.ind === x.slug; });
    return splitHero('<ol class="x-crumb"><li><a href="#/industries">Industries</a></li><li aria-current="page">' + esc(x.name) + "</li></ol>", x.name, x.intro, btn("primary", "#/contact?industry=" + x.slug, "Start a project") + btn("line", "#/contact?industry=" + x.slug, "Book a consultation"), x.img, x.alt) +
      S("", "", head(esc(x.name), "Challenges we solve") + '<div class="x-grid x-grid--4">' + map(x.ch, function (c) {
        return '<div class="x-box x-box--plain"><h3 class="x-h3">' + esc(c) + "</h3></div>";
      }) + "</div>") +
      S("x-mist", "", head("", "What we build") + '<div class="x-grid x-grid--4">' + map(x.sol, function (s) {
        var v = findBy(SERVICES, s[1]);
        return '<a class="x-box x-box--plain x-rv" href="#/services/' + v.slug + '"><span class="x-ico">' + svg(v.icon) + '</span><h3 class="x-h3">' + esc(s[0]) + '</h3><span class="x-arrow">' + esc(v.name) + " " + ARR + "</span></a>";
      }) + "</div>") +
      S("", "", '<div class="x-slim x-rv"><div><p class="x-eyebrow">Consulting</p><h2 class="x-h2">Consulting for ' + esc(x.name) + '</h2><p class="x-lead">Not sure where to start? We\'ll review what you run today and map a clear, prioritised plan.</p></div><div class="x-btns">' + btn("primary", "#/consulting", "Explore consulting") + "</div></div>") +
      (cs.length ? S("x-mist", "", head("", "Related case study") + '<div class="x-cases x-cases--one">' + map(cs, caseCard) + "</div>") : "") +
      S("", cs.length ? "padding-bottom:64px" : "padding-top:0;padding-bottom:64px", '<nav class="x-pn x-rv" aria-label="More industries"><a href="#/industries/' + pv.slug + '"><small>← Previous</small>' + esc(pv.name) + '</a><a href="#/industries/' + nx.slug + '"><small>Next →</small>' + esc(nx.name) + "</a></nav>") + cta();
  }

  function viewWork() {
    return band("Work", "Proof, not promises.", "Real projects, real clients.") +
      S("", "", '<div class="x-cases">' + map(CASES, caseCard) + "</div>") +
      S("", "padding-top:0", '<div class="x-slim x-slim--quiet x-rv"><p>More case studies are on the way.</p></div>') + cta();
  }

  function viewCase(c, i) {
    var x = findBy(INDUSTRIES, c.ind), nx = CASES[(i + 1) % CASES.length];
    var svcs = c.svcs.map(function (k) { return findBy(SERVICES, k); });
    return '<section class="x-hero x-hero--case"><img class="x-hero__img" src="' + pic(c.img) + '" alt="' + esc(c.alt) + '" loading="lazy" /><div class="x-hero__body"><div class="x-wrap" style="width:100%"><div class="x-hero__copy x-rv"><ol class="x-crumb"><li><a href="#/work">Work</a></li><li aria-current="page">' + esc(c.name) + '</li></ol><h1 class="x-h1 x-h1--sm">' + esc(c.title) + "</h1></div></div></div></section>" +
      '<div class="x-wrap"><dl class="x-facts x-rv"><div><dt>Client</dt><dd>' + esc(c.name) + '</dd></div><div><dt>Industry</dt><dd><a href="#/industries/' + x.slug + '">' + esc(x.name) + "</a></dd></div><div><dt>Services</dt><dd>" + svcs.map(function (v) { return esc(v.name); }).join(" · ") + "</dd></div></dl></div>" +
      S("", "padding-top:88px", '<div class="x-story">' + map([["The challenge", c.challenge], ["What we built", c.built], ["The result", c.result]], function (r) {
        return '<div class="x-rv"><h2 class="x-h3">' + r[0] + "</h2><p>" + esc(r[1]) + "</p></div>";
      }) + "</div>" + (c.proof ? '<ul class="x-metrics x-rv" style="margin-top:40px" aria-label="Results">' + map(c.proof, function (p) { return "<li><b>" + esc(p[0]) + "</b>" + esc(p[1]) + "</li>"; }) + "</ul>" : "")) +
      S("x-mist", "", '<blockquote class="x-pull"><p>“' + esc(c.quote) + "”</p><footer><b>" + esc(c.by) + "</b>, " + esc(c.role) + "</footer></blockquote>") +
      S("", "", head("", "Services used") + '<ul class="x-chips x-rv">' + map(svcs, function (v) { return '<li><a class="x-chip" href="#/services/' + v.slug + '">' + esc(v.name) + "</a></li>"; }) + "</ul>") +
      S("", "padding-top:0;padding-bottom:64px", '<nav class="x-pn x-pn--one x-rv" aria-label="Next case study"><a href="#/work/' + nx.slug + '"><small>Next case study →</small>' + esc(nx.name) + "</a></nav>") + cta();
  }

  // About, careers, contact
  var MAPS = "https://www.google.com/maps/search/?api=1&amp;query=B-604%20Kasliwal%20Marvel%20West%2C%20Satara%2C%20Beed%20By%20Pass%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431001%2C%20India";
  var ADDR = "B-604 Kasliwal Marvel West, Satara, Beed By Pass, Chhatrapati Sambhajinagar, Maharashtra 431001, India";
  // [note colour, tilt, text]
  var NAMENOTES = [["sun", "-3deg", "pravāha (n.): flow."], ["sky", "2.5deg", "x: the variable. Every problem we solve is a little different."], ["sage", "-1.5deg", "pravāha × x = flow, multiplied."]];
  // [note colour, tilt, title, line]
  var BELIEFS = [["sun", "-1.8deg", "Own it after launch.", "Software isn't finished when it ships. We stay accountable for what we build."],
    ["sky", "1.4deg", "Say it plainly.", "Plain language, honest timelines, no jargon walls."],
    ["sage", "-1deg", "Simple scales.", "The best systems are the ones nobody has to think about."],
    ["sun", "1.8deg", "Earn its keep.", "If technology doesn't move something that matters, it doesn't belong."],
    ["sky", "-1.4deg", "Thinking is technology.", "Every good system starts as a good question."]];
  var WHY = [["star", "Real ownership", "Own your work from design to production."], ["flow", "Learn across software, AI and hardware", "Work next to specialists in all three."], ["users", "Mentors who ship", "Senior engineers who still build review your work."], ["home", "A workspace built for focus", "Quiet rooms, good coffee and somewhere to rest."]];
  var ROLES = [["Full-Stack Developer", "Engineering"], ["Flutter Mobile Developer", "Engineering"], ["Machine Learning Engineer", "AI"], ["Embedded Systems Engineer", "Hardware"], ["DevOps Engineer", "Engineering"], ["UI/UX Designer", "Design"]];
  var INTERNS = [["code", "Software Engineering Intern"], ["ai", "AI/ML Intern"], ["iot", "IoT & Hardware Intern"]];
  var HIRE = [["Apply", "Send the form below."], ["Intro call", "A short chat about you and the role."], ["Practical task", "A small task close to the real work."], ["Team conversation", "Meet the people you'd work with."], ["Offer", "A clear offer, in writing."]];
  var CFAQ = [["Do you hire freshers?", "Yes, through internships and junior roles."], ["Is remote work possible?", "Most roles are on-site in Chhatrapati Sambhajinagar; ask us about flexibility."], ["How long does hiring take?", "Typically two to three weeks."]];
  var HIRENOTE = '<p class="x-aside">Our hiring process, timelines and open roles are subject to change without notice.</p>';
  var NEEDS = ["Software", "AI & Automation", "Hardware & IoT", "Enterprise", "Cloud & Security", "Consulting", "Not sure yet"];
  // ?need= keys map to options exactly; no prefix matching.
  var NEED_KEYS = { "software-engineering": "Software", "ai-automation": "AI & Automation", "hardware-iot": "Hardware & IoT", "enterprise-solutions": "Enterprise", "cloud-data-security": "Cloud & Security", consulting: "Consulting", "not-sure": "Not sure yet" };
  var NEED_FROM = { "software-engineering": "Software Engineering", "ai-automation": "AI & Automation", "hardware-iot": "Hardware & IoT", "enterprise-solutions": "Enterprise Solutions", "cloud-data-security": "Cloud, Data & Security", consulting: "Consulting" };
  var NEXT = [["We reply within 1 business day", "A real person reads every message."], ["Two free brainstorm sessions", "Two no-cost sessions to understand your problem and map a way forward, with no commitment."], ["A clear proposal and plan", "Scope, timeline and cost, in writing."]];
  var LEGAL = {
    privacy: ["Privacy", "Your details stay with us.", ["PRAVAHAx Systems Engineering (“PRAVAHAx”, “we”) only collects what you send us: your name, contact details and message. We use it to reply to you and for nothing else.", "We never sell or share your details. To see or delete what we hold, email hello@pravahax.com."]],
    terms: ["Terms and conditions", "Plain terms for this site.", ["This site is run by PRAVAHAx Systems Engineering (“PRAVAHAx”, “we”) and describes our services. Project work is always covered by a written agreement signed with each client.", "Content on this site may change as our services do. Questions? Email hello@pravahax.com."]],
    cookies: ["Cookies", "No tracking cookies.", ["This site, run by PRAVAHAx Systems Engineering (“PRAVAHAx”, “we”), sets no advertising or tracking cookies. Your browser may keep basic files so pages load faster.", "If that changes, this page will say so first."]],
    accessibility: ["Accessibility", "A site everyone can use.", ["PRAVAHAx Systems Engineering (“PRAVAHAx”, “we”) builds this site to work with a keyboard, with screen readers and with reduced motion, with visible focus and text alternatives for images.", "If anything gets in your way, email hello@pravahax.com and we will fix it."]]
  };
  function SI(sub, cls, inner) { return '<section class="x-sec ' + cls + '" id="' + (sub === "leadership" || sub === "beliefs" ? sub : "sec-" + sub) + '" data-sub="' + sub + '" tabindex="-1"' + (sub === "leadership" ? ' aria-labelledby="teamTitle"' : sub === "beliefs" ? ' aria-labelledby="beliefsTitle"' : "") + '><div class="x-wrap">' + inner + "</div></section>"; }
  function field(id, label, type, o) {
    o = o || {};
    var at = ' class="x-input" id="' + id + '" name="' + id + '" data-l="' + label + '" aria-describedby="' + id + '-e' + (o.hint ? " " + id + "-h" : "") + '"' + (o.req ? " required" : "") + (o.auto ? ' autocomplete="' + o.auto + '"' : "") + (type === "tel" ? ' inputmode="tel"' : type === "email" ? ' inputmode="email" autocapitalize="off" spellcheck="false"' : "") + (o.accept ? ' accept="' + o.accept + '"' : "");
    var ctl = type === "select" ? "<select" + at + '><option value="">Choose one</option>' + map(o.opts, function (v) { return '<option value="' + esc(v) + '">' + esc(v) + "</option>"; }) + "</select>"
      : type === "textarea" ? "<textarea" + at + ' rows="5"></textarea>' : '<input type="' + type + '"' + at + " />";
    return '<div class="x-field' + (o.full ? " x-field--full" : "") + '"><label for="' + id + '">' + esc(label) + (o.req ? "" : ' <span class="x-opt">(optional)</span>') + "</label>" + ctl + (o.hint ? '<p class="x-hint" id="' + id + '-h">' + o.hint + "</p>" : "") + '<p class="x-err" id="' + id + '-e" aria-live="polite"></p></div>';
  }
  // Honeypot (Web3Forms "botcheck"), the inline error state with Retry, then Send and the email fallback.
  function foot(label, mail) {
    return '<input type="checkbox" name="botcheck" class="x-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />' +
      '<div class="x-formerr" role="alert" data-status hidden></div>' +
      '<div class="x-field--full x-formfoot"><button class="x-btn x-btn--primary" type="submit">' + label + '</button><p>Prefer email? Write to <a href="mailto:' + mail + '">' + mail + "</a></p></div>";
  }

  function viewAbout() {
    return '<section class="x-band x-band--navy"><div class="x-wrap x-rv"><p class="x-eyebrow">About</p><h1 class="x-h1">Engineering with ownership.</h1><p class="x-lead">PRAVAHAx Systems Engineering is a software and applied AI engineering company from Chhatrapati Sambhajinagar, India.</p><div class="x-btns">' + btn("primary", "#/contact", "Start a project") + btn("ghost", "#/careers", "Join the team") + "</div></div></section>" +
      S("", "", '<div class="x-split x-story" style="align-items:start"><div class="x-rv"><p class="x-eyebrow">Our story</p><h2 class="x-h2">Making information flow.</h2><div class="x-prose"><p>PRAVAHA means flow. We started PRAVAHAx to help businesses make information flow, from machines, fields and offices to the people who decide.</p><p>Today PRAVAHAx brings together software engineers, AI specialists, hardware designers and consultants, led by an experienced executive team, taking responsibility for every system from first conversation to long-term support.</p></div></div>' +
        '<div class="x-namenotes x-rv" aria-label="What our name means" role="group">' + map(NAMENOTES, function (n) { return '<p class="x-note x-note--' + n[0] + ' x-note--tape" style="--r:' + n[1] + '">' + esc(n[2]) + "</p>"; }) + "</div></div>") +
      SI("beliefs", "x-mist", '<div class="x-head x-rv"><div><p class="x-eyebrow">Our beliefs</p><h2 class="x-h2" id="beliefsTitle">What we believe.</h2></div></div><ol class="x-beliefs x-rv">' + map(BELIEFS, function (b, i) { return '<li class="x-belief x-note--' + b[0] + ' x-note--tape" style="--r:' + b[1] + '"><span class="x-belief__n" aria-hidden="true">0' + (i + 1) + '</span><h3 class="x-belief__t">' + esc(b[2]) + '</h3><p>' + esc(b[3]) + "</p></li>"; }) + "</ol>") +
      SI("leadership", "", '<div class="x-head x-rv"><div><p class="x-eyebrow">Leadership</p><h2 class="x-h2" id="teamTitle">Meet the leadership team.</h2><p class="x-lead">The executives who guide PRAVAHAx and stand behind every engagement.</p></div></div>' + $("teamStore").querySelector(".x-team").outerHTML.replace('<li class="x-person" data-p="masoom">', '<li class="x-person" id="sec-masoom" data-sub="masoom" tabindex="-1">').replace('<li class="x-person" data-p="devang">', '<li class="x-person" id="sec-devang" data-sub="devang" tabindex="-1">').replace(/ data-nid="/g, ' id="')) +
      S("x-mist", "", '<div class="x-split"><div class="x-frame x-rv"><img src="' + pic("reading-room.webp") + '" alt="The Reading Room at the PRAVAHAx office" loading="lazy" /></div><div class="x-rv"><p class="x-eyebrow">Where we work</p><h2 class="x-h2">Come and see us in Chhatrapati Sambhajinagar.</h2><div class="x-box" style="margin-top:28px"><span class="x-ico">' + svg("pin") + '</span><h3 class="x-h3">Our office</h3><address class="x-addr">B-604 Kasliwal Marvel West, Satara, Beed By Pass,<br />Chhatrapati Sambhajinagar, Maharashtra 431001, India</address><div class="x-btns" style="margin-top:20px">' + btn("primary", "#/contact", "Visit us / Contact") + '<a class="x-btn x-btn--line" href="' + MAPS + '" target="_blank" rel="noopener">Open in Google Maps</a></div></div></div></div>') +
      SI("publications", "", '<div class="x-split" style="align-items:start"><div class="x-rv"><p class="x-eyebrow">Written by our team</p><h2 class="x-h2">Publications</h2><p class="x-lead">The same team that builds our systems wrote the textbooks students learn ICT from.</p></div>' +
        '<div class="x-box x-rv"><span class="x-ico">' + svg("book") + '</span><h3 class="x-h3">ICT textbook series, Classes 8–10</h3><p>Written by our team in Marathi and English for school students learning information and communication technology.</p></div></div>') +
      S("x-mist", "", head("Beyond client work", "Research and classrooms.") + '<div class="x-grid x-grid--2">' +
        '<a class="x-box x-rv" href="#/labs"><span class="x-ico">' + svg("search") + '</span><h3 class="x-h3">PRAVAHAx Labs</h3><p>Research we\'re doing beyond client work.</p><span class="x-arrow">Visit Labs ' + ARR + "</span></a>" +
        '<a class="x-box x-rv" href="#/impact"><span class="x-ico">' + svg("school") + '</span><h3 class="x-h3">Teach as we build</h3><p>Coding, electronics, books and leaders\u2019 birthdays in schools.</p><span class="x-arrow">See our social impact ' + ARR + "</span></a></div>") +
      cta();
  }

  // PRAVAHAx Labs: a research pinboard on paper, in the spirit of Life at PRAVAHAx. Board led by Devang Patil, bioinformatics by Masoom Mishra.
  // [code, area, question, line, status, margin note, note colour, card tilt, note tilt]
  var LABS = [["LAB-01", "Cryptography", "New cryptographic methods, designed in-house.", "Research into new cryptographic methods.", "ADVANCED STAGE", "Security you can prove, not just promise.", "sun", "-1.5deg", "3deg"],
    ["LAB-02", "Diskless Windows", "Full Windows workstations with no local disk.", "Network-booted Windows workstations with no local disk.", "ADVANCED STAGE", "Boot from the network. Manage from one place.", "sky", "1.2deg", "-3deg"],
    ["LAB-03", "Edge detection with particle swarm optimisation", "Swarm intelligence that finds edges in images.", "Applying particle swarm optimisation to detect edges in images.", "ADVANCED STAGE", "Nature-inspired search, applied to vision.", "sage", "-1deg", "2.5deg"]];
  var LABNOTES = [["sun", "-4deg", "Hypothesis. Test. Repeat."], ["sky", "3deg", "Every failed experiment is data."], ["sage", "-2deg", "Question everything. Especially the results."]];
  var PRINCIPLES = [["Prototype before paper.", "An idea earns a working demo before it earns a slide."], ["Show the working.", "Notes, failures and all, stay on the board."], ["Research that ships.", "The best experiments end up in client work."], ["Curiosity is a job requirement.", "Every engineer gets time to chase a question."]];
  var PROTOCOL = ["Every hypothesis earns a prototype.", "Failed experiments are logged, not hidden.", "\u201cIt works on my machine\u201d is not a result.", "Coffee is a controlled variable.", "Whiteboards are wiped only after a photo."];
  function viewLabs() {
    return '<section class="x-band x-labhero" aria-labelledby="labsTitle"><div class="x-wrap x-split"><div class="x-rv">' +
        '<ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/">Home</a></li><li aria-current="page">Labs</li></ol>' +
        '<p class="x-eyebrow">PRAVAHAx Labs</p><h1 class="x-h1 x-h1--sm" id="labsTitle">Where we ask the next questions.</h1>' +
        '<p class="x-lead">The research our team pursues beyond client work: half-formed ideas, careful experiments and the occasional breakthrough.</p></div>' +
        '<div class="x-labnotes x-rv">' + map(LABNOTES, function (n) { return '<p class="x-note x-note--' + n[0] + ' x-note--tape" style="--r:' + n[1] + '">' + esc(n[2]) + "</p>"; }) + "</div></div></section>" +
      S("", "", head("Coming next", "Our next frontier.") +
        '<div class="x-rv"><article class="x-plan"><span class="x-stamp x-stamp--plan x-mono">PLANNED</span><h3 class="x-plan__t">Bioinformatics &amp; life sciences</h3>' +
        '<p class="x-plan__txt">Our next frontier: bringing our software, data and AI engineering to life sciences and healthcare research. Early days, and we\u2019re exploring it carefully.</p>' +
        '<p class="x-plan__lead">Led by <a href="#/about/masoom">Masoom Mishra</a>, Head of Research &amp; Development.</p></article></div>') +
      S("x-mist", "", head("On the bench", "Problems we\u2019ve nearly cracked.", "A few highlights from our research. There\u2019s plenty more on the bench.") +
        '<div class="x-board">' + map(LABS, function (l) {
          return '<article class="x-lab x-rv"><div class="x-idx" style="--r:' + l[7] + '"><div class="x-idx__top"><span class="x-idx__code x-mono">' + l[0] + '</span><span class="x-stamp x-mono"><span class="x-vh">Status: </span>' + l[4] + '</span></div>' +
            '<h3 class="x-idx__t">' + esc(l[1]) + '</h3><p class="x-idx__q">' + esc(l[2]) + '</p><p class="x-idx__d">' + esc(l[3]) + '</p></div>' +
            '<p class="x-note x-note--sm x-note--' + l[6] + ' x-lab__note" style="--r:' + l[8] + '">' + esc(l[5]) + "</p></article>";
        }) + '</div><p class="x-labfoot x-rv">This research is led by <a href="#/about/devang">Devang Patil</a>, Chief Executive &amp; Principal Architect.</p>') +
      S("x-mist", "", head("Principles", "How the lab works") +
        '<div class="x-grid x-grid--4 x-rituals">' + map(PRINCIPLES, function (p, i) {
          return '<div class="x-box x-rv"><span class="x-tnum x-mono">P0' + (i + 1) + '</span><h3 class="x-h3">' + esc(p[0]) + "</h3><p>" + esc(p[1]) + "</p></div>";
        }) + "</div>") +
      S("", "", head("Please read carefully", "The Lab Protocol*") +
        '<div class="x-terms x-mono x-rv"><div class="x-terms__head"><h3>*Lab Protocol</h3><p>Version 1.0 (under peer review)</p></div><ol>' +
        map(PROTOCOL, function (c) { return "<li><span>" + esc(c) + "</span></li>"; }) + '</ol><p class="x-terms__note">*Clause 4 is strictly enforced.</p></div>') +
      S("x-dark x-ctaband", "", '<div class="x-cta x-rv">' + MARK + '<p class="x-eyebrow">PRAVAHAx Systems Engineering</p><h2 class="x-h2">Got a question worth chasing?</h2><p class="x-lead">Researchers, students and partners: we\u2019d love to compare notes.</p><div class="x-btns">' + btn("primary", "mailto:hello@pravahax.com", "Write to hello@pravahax.com") + btn("ghost", "#/careers", "Explore careers") + "</div></div>");
  }

  // Teach as we build: social impact. Calm and text-led.
  var IMPACT = [["school", "School visits", "We teach school students coding and electronics."],
    ["gift", "Leaders' birthdays, celebrated in schools", "When one of our executive leaders has a birthday, we celebrate it at a small village school. No cake. Instead, we bring what the school needs: notebooks and stationery, story books for its library, sports equipment, and a meal shared with every child."],
    ["book", "Books and school kits", "We give books, notebooks and school kits to children who need them at the start of the year."]];
  function viewImpact() {
    return band("Social impact", "Teach as we build.", "Some of our most important work happens outside client projects.") +
      S("", "", boxes(IMPACT)) +
      S("", "padding-top:0", '<div class="x-soft x-rv"><p>Know a school we should visit? Write to <a href="mailto:hello@pravahax.com">hello@pravahax.com</a></p></div>');
  }

  function viewCareers() {
    var teams = ["All", "Engineering", "AI", "Hardware", "Design"];
    var form = '<form class="x-form" novalidate data-to="hello@pravahax.com" data-kind="careers" data-done="Received. We\'ll reply within 1 business day.">' +
      field("a-name", "Full name", "text", { req: 1, auto: "name" }) + field("a-email", "Email", "email", { req: 1, auto: "email" }) +
      field("a-phone", "Phone", "tel", { auto: "tel" }) + field("a-role", "Role", "select", { req: 1, opts: ROLES.map(function (r) { return r[0]; }).concat(INTERNS.map(function (r) { return r[1]; }), ["General application"]) }) +
      field("a-url", "LinkedIn or portfolio URL", "url", { auto: "url" }) + field("a-cv", "Résumé", "file", { accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", hint: "PDF, DOC or DOCX, up to 5 MB." }) +
      field("a-cvlink", "Résumé link (Drive/Dropbox)", "url", { full: 1, hint: "Share a link if you'd rather not upload, or as well as the file." }) +
      field("a-note", "Short note", "textarea", { full: 1 }) + foot("Send application", "hello@pravahax.com") + "</form>";
    return '<section class="x-hero x-hero--careers" aria-labelledby="carTitle"><img class="x-hero__img" src="' + pic("hero-home.webp") + '" alt="PRAVAHAx engineer typing on a backlit laptop" /><div class="x-hero__body"><div class="x-wrap" style="width:100%"><div class="x-hero__copy x-rv">' +
      '<p class="x-eyebrow">Join PRAVAHAx Systems Engineering</p><h1 class="x-h1 x-h1--sm" id="carTitle">Do the best work of your career.</h1><p class="x-lead">Build real systems for real industries, with a team that trusts you from day one.</p><div class="x-btns">' +
      btn("primary", "#/careers/roles", "See open roles") + btn("ghost", "#/careers/internships", "Internships") + '</div>' +
      '<ul class="x-hfacts" aria-label="At a glance"><li>Chhatrapati Sambhajinagar, India</li><li>Roles &amp; internships</li><li>Reply within 1 business day</li></ul></div></div></div></section>' +
      S("", "", head("", "Why PRAVAHAx") + boxes(WHY, "x-grid--4")) +
      S("x-mist", "", '<div class="x-split"><div class="x-frame x-rv"><img src="' + pic("green-lounge-garden.webp") + '" alt="The Green Lounge garden at the PRAVAHAx office" loading="lazy" /></div><div class="x-rv"><p class="x-eyebrow">Off the clock</p><h2 class="x-h2">Life at PRAVAHAx</h2><p class="x-lead">Rooms with names, treks with snacks, and debates nobody wins. Mostly.</p><div class="x-btns">' + btn("primary", "#/careers/life", "See life at PRAVAHAx →") + "</div></div></div>") +
      SI("roles", "", head("", "Open roles") + '<div class="x-rv"><div class="x-filters" role="group" aria-label="Filter roles by team">' + map(teams, function (t, i) {
        return '<button class="x-filter" type="button" data-filter="' + t + '" aria-pressed="' + (i ? "false" : "true") + '">' + t + "</button>";
      }) + '</div><p class="x-count" id="roleCount" aria-live="polite">6 open roles</p><ul class="x-roles">' + map(ROLES, function (r) {
        return '<li class="x-role" data-team="' + r[1] + '"><div><h3 class="x-h3">' + esc(r[0]) + '</h3><p class="x-role__meta"><span>' + r[1] + "</span><span>Chhatrapati Sambhajinagar · On-site</span><span>Full-time</span></p></div>" +
          '<button class="x-btn x-btn--line" type="button" data-apply="' + esc(r[0]) + '" aria-label="Apply for ' + esc(r[0]) + '">Apply →</button></li>';
      }) + "</ul></div>") +
      SI("internships", "x-mist", head("Internships", "Start with a real project.") + '<div class="x-grid">' + map(INTERNS, function (d) {
        return '<div class="x-box x-box--flex x-rv"><span class="x-ico">' + svg(d[0]) + '</span><h3 class="x-h3">' + esc(d[1]) + '</h3><p>6-month programme with a mentor and a real project.</p><button class="x-btn x-btn--line" type="button" data-apply="' + esc(d[1]) + '" aria-label="Apply for ' + esc(d[1]) + '">Apply →</button></div>';
      }) + "</div>") +
      S("", "", head("", "How we hire") + steps(HIRE, "x-steps--5") + HIRENOTE) +
      SI("apply", "x-mist", '<div class="x-formwrap">' + head("Apply", "Tell us about you.") + '<div class="x-formcard x-rv">' + form + "</div></div>") +
      S("", "", head("", "FAQ") + faq(CFAQ) + HIRENOTE) + cta();
  }

  // Life at PRAVAHAx
  var ROOMS = [["reading-room.webp", "The Reading Room", "Tech, science, philosophy, design, psychology. Shush is a love language."],
    ["debate-room-lounge.webp", "The Debate Room", "Where ideas get stress-tested. Bring an argument, leave with a better one."],
    ["green-lounge-garden.webp", "The Green Lounge", "Plants, fresh air, and the best place to un-stick a bug."],
    ["power-nap-suite.webp", "The Power Nap Suite", "Recharge mode: on. Snoring is peer-reviewed."],
    ["coffee-lab-pantry.webp", "The Coffee Lab", "Fuel station. Also where half our good ideas are first said out loud."]];
  var SPACES = [["The Think Room", "Brainstorms, random ideas, and possibilities beyond the sprint board."], ["The Play Room", "Chess, foosball, board games. Trash talk is strictly technical."], ["The Quiet Room", "No screens, no pings, just thinking."], ["The Experiment Lab", "Prototypes and hardware we build just to see what happens."], ["The Idea Archive", "Questions, sketches and concepts worth revisiting. Nothing is a bad idea until it's tested."]];
  var OOO = [["Outdoors", "Team Treks", "Occasional treks and nature trails. Step counts, not story points."], ["Culture", "Movie Nights", "Popcorn, a projector and one heated debate about the ending."],
    ["Food", "Outings & Get-togethers", "New cafés, team lunches, dinners. Strictly no laptop bags."],
    ["Travel", "Offsites", "Day trips and retreats for a change of scenery and a change of perspective."], ["Outdoors", "Adventure", "Hiking, cycling, camping. Bug-spray is provided."],
    ["Giving back", "Community", "Volunteering and education initiatives beyond the office."], ["Celebrate", "Celebrations", "Birthdays, launches and milestones. Cake is a deployment requirement."]];
  var EXH = [
    { k: "a", img: "life-fridge.webp", w: 580, h: 588, r: "-2deg", alt: "Office fridge with two shelves full of Diet Coke cans", cap: "Exhibit A: the fridge", notes: [["", "3deg", "Two full shelves of Diet Coke. Water is in there somewhere… probably. (see Fine Print, clause 1)"]] },
    { k: "b", img: "life-mugs.webp", w: 934, h: 638, r: "1.5deg", alt: "Seven coffee mugs on the meeting table", cap: "Exhibit B: 10:01 am", notes: [["pink", "-3deg", "Dude, it\u2019s 10:01. Literally. This is round one."]] },
    { k: "c", img: "life-parcels.webp", w: 882, h: 640, r: "-1deg", alt: "A pile of delivery parcels at the office entrance", cap: "Exhibit C: a regular Tuesday", notes: [["mint", "2.5deg", "The CEO said \u2018order whatever you need.\u2019 We took that personally."], ["sm", "-4deg", "Whose is the big Amazon box? Asking for a friend."]] }];
  var ARROW = '<svg class="x-exh__arrow" viewBox="0 0 68 68" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M62 58c-6 1.5-13 2-19-.5-5.5-2.3-7-7.4-5.6-12.6 1.2-4.6 4.8-8.4 2.6-13.4-1.8-4-6.6-4.4-10.2-6.6-4.6-2.8-6.2-8-7.6-13.4"/><path d="M14.6 19c2.6-3 5-5.4 7.6-7.5 1.4 3.6 3 6.6 5.6 9.6"/></svg>';
  var RITUALS = [["The Question Nobody Asked", "Curious questions that spark discussion without a meeting invite."], ["Currently Reading", "Book and article recs from our people. Spoilers punishable."], ["The Wild Idea Board", "For ideas too early, too ambitious or too weird for Jira."], ["Explain It Like I'm New Here", "Complex topics, simple words, zero judgement."], ["Coffee Without a Calendar", "Conversations that happen because they should, not because Outlook said so."], ["Side Quests", "Personal experiments and passion projects, done purely out of curiosity."], ["The Unfinished Wall", "Sketches, prototypes and concepts still in beta, like all of us."], ["Knowledge Exchange", "Our people swapping skills, discoveries and hard-won lessons."]];
  var CLAUSES = ["Diet Coke counts as hydration. It does not count as lunch.", "“Quick call” means under 15 minutes. Anyone exceeding this buys samosas.", "“Works on my machine” is not a deployment strategy.", "The last person to take the coffee pot refills it. This clause is non-negotiable and legally binding (spiritually).", "The Power Nap Suite has no timer. It does, however, have witnesses.", "All arguments in the Debate Room must be settled with data, a whiteboard or chai, in that order.", "Books borrowed from the Reading Room must return. Eventually. Ideally this year.", "Stand-ups are for standing. Sit-downs are for chai.", "Dark mode is mandatory after 7 pm. Light-mode users will be gently counselled.", "Asking “why?” is always allowed. Asking it five times is called root-cause analysis."];
  function viewLife() {
    return '<section class="x-hero x-hero--life" aria-labelledby="lifeTitle"><img class="x-hero__img" src="' + pic("debate-room-lounge.webp") + '" alt="The Debate Room lounge at the PRAVAHAx office" /><div class="x-hero__body"><div class="x-wrap" style="width:100%"><div class="x-hero__copy x-rv">' +
      '<ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/">Home</a></li><li><a href="#/careers">Careers</a></li><li aria-current="page">Life at PRAVAHAx</li></ol>' +
      '<p class="x-eyebrow">Life at PRAVAHAx</p><p class="x-statement">Thinking is Technology.</p><h1 class="x-h1 x-h1--sm" id="lifeTitle">Curiosity has a place here. So do snacks.</h1><p class="x-lead">The rooms we think in, the trips we take, and the small rituals that keep our people curious, and occasionally caffeinated.</p><div class="x-btns">' +
      btn("primary", "#/careers", "See open roles") + btn("ghost", "#/careers/internships", "Explore internships") + "</div></div></div></div></section>" +
      SI("rooms", "", head("The office", "Rooms with names (and opinions)", "Every room has a job. Some take it more seriously than others.") +
        '<div class="x-bento">' + map(ROOMS, function (r, i) {
          return '<figure class="x-tile x-tile--life' + (i ? "" : " x-tile--lg") + ' x-rv" style="margin:0"><div class="x-media"><img src="' + pic(r[0]) + '" alt="' + r[1] + ' at the PRAVAHAx office" loading="lazy" /></div><figcaption class="x-tile__body"><h3 class="x-h3">' + esc(r[1]) + "</h3><p>" + esc(r[2]) + "</p></figcaption></figure>";
        }) + "</div>" +
        '<div class="x-subhead x-rv"><h3 class="x-h3">And a few more doors</h3><p>No photos yet. These rooms are camera-shy.</p></div>' +
        '<ul class="x-spaces">' + map(SPACES, function (s) { return '<li class="x-rv"><h4>' + esc(s[0]) + "</h4><p>" + esc(s[1]) + "</p></li>"; }) + "</ul>") +
      SI("exhibits", "", head("Evidence, your honour", "Exhibits from the office.", "A few corners of the office.") +
        '<div class="x-exhs">' + map(EXH, function (e) {
          return '<article class="x-exh x-exh--' + e.k + ' x-rv"><figure class="x-pol" style="--r:' + e.r + '"><img src="' + pic(e.img) + '" alt="' + esc(e.alt) + '" width="' + e.w + '" height="' + e.h + '" loading="lazy" /><figcaption>' + esc(e.cap) + '</figcaption></figure><div class="x-exh__notes">' + ARROW +
            map(e.notes, function (n) { return '<p class="x-note' + (n[0] ? " x-note--" + n[0] : "") + '" style="--r:' + n[1] + '">' + esc(n[2]) + "</p>"; }) + "</div></article>";
        }) + "</div>") +
      SI("outside", "x-mist", '<div class="x-ooo"><div class="x-ooo__side"><div class="x-rv"><p class="x-eyebrow">Away from the desk</p><h2 class="x-h2">Out of office, on purpose.</h2><p class="x-lead">The calendar has gaps. We fill them with fresh air, popcorn and occasionally a mountain.</p><p class="x-lead" style="margin-top:16px">School visits have their own page now.</p><a class="x-arrow" href="#/impact">Teach as we build ' + ARR + "</a></div></div>" +
        '<ol class="x-ooo__list">' + map(OOO, function (d, i) {
          return '<li class="x-ooo__row' + (d[3] ? " x-ooo__row--feat" : "") + ' x-rv"><span class="x-ooo__n" aria-hidden="true">0' + (i + 1) + '</span><div class="x-ooo__t"><h3>' + esc(d[1]) + "</h3><p>" + esc(d[2]) + '</p></div><span class="x-ooo__tag">' + esc(d[0]) + "</span></li>";
        }) + "</ol></div>") +
      SI("rituals", "", head("Small habits, big brains", "Our rituals", "No mandatory fun. Just the things we keep doing because they work.") +
        '<div class="x-grid x-grid--4 x-rituals">' + map(RITUALS, function (r, i) {
          return '<div class="x-box x-rv"><span class="x-tnum x-mono">T0' + (i + 1) + '</span><h3 class="x-h3">' + esc(r[0]) + "</h3><p>" + esc(r[1]) + "</p></div>";
        }) + "</div>") +
      SI("fine-print", "x-mist", head("Please read carefully", "The Fine Print*", "Every great workplace has rules. Ours are mostly about coffee.") +
        '<div class="x-terms x-mono x-rv"><div class="x-terms__head"><h3>*Terms &amp; Conditions of Being Awesome Here</h3><p>Version 1.0 (perpetual beta)</p></div><ol>' +
        map(CLAUSES, function (c) { return "<li><span>" + esc(c) + "</span></li>"; }) + '</ol><p class="x-terms__note">*Not legally binding. Except clause 4.</p></div>') +
      S("", "", '<div class="x-spirit x-rv"><h2>More than a workplace.</h2><p>At PRAVAHAx we want people to think freely, ask questions, challenge ideas, build things, and enjoy life beyond the work. From books and brainstorms to treks and school visits, it\'s the people and ideas that make this more than a workplace.</p></div>') +
      S("x-dark x-ctaband", "", '<div class="x-cta x-rv">' + MARK + '<p class="x-eyebrow">PRAVAHAx Systems Engineering</p><h2 class="x-h2">Sounds like your kind of place?</h2><p class="x-lead">Engineering roles and internships across AI, software, IoT and cloud.</p><div class="x-btns">' + btn("primary", "#/careers", "Explore careers") + btn("ghost", "#/careers/internships", "Internships") + "</div></div>");
  }

  function viewContact() {
    var form = '<form class="x-form" novalidate data-to="hello@pravahax.com" data-kind="contact" data-done="Received. We\'ll reply within 1 business day.">' +
      field("c-name", "Name", "text", { req: 1, auto: "name" }) + field("c-email", "Work email", "email", { req: 1, auto: "email" }) +
      field("c-company", "Company", "text", { auto: "organization" }) + field("c-phone", "Phone", "tel", { auto: "tel" }) +
      '<fieldset class="x-field x-field--full" id="c-need" data-req aria-describedby="c-need-e c-unsure"><legend>What do you need?</legend>' +
      '<p class="x-from" id="c-from" hidden>You came from <strong id="c-from-n"></strong> · <button class="x-linkbtn" type="button" data-change>change</button></p><div class="x-pick">' + map(NEEDS, function (n) {
        return '<label><input type="checkbox" name="need" value="' + esc(n) + '" /><span>' + esc(n) + "</span></label>";
      }) + '</div><p class="x-helper" id="c-unsure" aria-live="polite"></p><p class="x-err" id="c-need-e" aria-live="polite"></p></fieldset>' +
      '<input type="hidden" name="industry" id="c-industry" value="" /><p class="x-field--full x-ctx" id="c-ctx" hidden></p>' +
      field("c-msg", "Message", "textarea", { req: 1, full: 1 }) + foot("Send message", "hello@pravahax.com") + "</form>";
    var info = [["mail", "Email", '<a class="x-cv" href="mailto:hello@pravahax.com">hello@pravahax.com</a>'], ["call", "Phone", '<a class="x-cv" href="tel:+919404802076">+91 94048 02076</a>'],
      ["pin", "Office", '<p class="x-cv"><b>PRAVAHAx Systems Engineering</b><br />' + ADDR + '</p><a class="x-arrow" href="' + MAPS + '" target="_blank" rel="noopener">Open in Google Maps ' + ARR + "</a>"], ["clock", "Hours", '<p class="x-cv">Mon–Sat, 10:00–19:00 IST</p>']];
    return '<section class="x-band"><div class="x-wrap x-split" style="align-items:start"><div class="x-rv"><p class="x-eyebrow">Contact</p><h1 class="x-h1 x-h1--sm">Let\'s talk.</h1><p class="x-lead">Tell us what you\'re building. We reply within 1 business day.</p><ul class="x-cinfo">' +
      map(info, function (d) { return '<li><span class="x-ico">' + svg(d[0]) + "</span><div><small>" + d[1] + "</small>" + d[2] + "</div></li>"; }) +
      '</ul></div><div class="x-formcard x-rv">' + form + "</div></div></section>" +
      S("", "", head("", "What happens next") + steps(NEXT, "x-steps--3"));
  }

  function viewLegal(k) {
    var d = LEGAL[k];
    return band(d[0], d[1], "Last updated 2026.") + S("", "", '<div class="x-prose x-rv" style="max-width:720px">' + map(d[2], function (p) { return "<p>" + esc(p) + "</p>"; }) + "</div>") + cta();
  }

  // Sitemap: built from the same data the router uses, so it stays in sync.
  function viewSitemap() {
    var L = function (h, t) { return [h, t]; };
    var groups = [
      ["Main", [L("#/", "Home"), L("#/services", "Services"), L("#/consulting", "Consulting"), L("#/industries", "Industries"), L("#/work", "Work"), L("#/about", "About"), L("#/careers", "Careers"), L("#/contact", "Contact")]],
      ["Services", SERVICES.map(function (s) { return L("#/services/" + s.slug, s.name); }).concat([L("#/" + CONSULTING.slug, CONSULTING.name)])],
      ["Industries", INDUSTRIES.map(function (x) { return L("#/industries/" + x.slug, x.name); })],
      ["Work", CASES.map(function (c) { return L("#/work/" + c.slug, c.name); })],
      ["Company", [L("#/about/leadership", "Leadership"), L("#/about/publications", "Publications"), L("#/labs", "PRAVAHAx Labs"), L("#/impact", "Impact: Teach as we build"), L("#/careers/life", "Life at PRAVAHAx"), L("#/careers/roles", "Open roles"), L("#/careers/internships", "Internships"), L("#/careers/apply", "Apply")]],
      ["Legal", ["privacy", "terms", "cookies", "accessibility"].map(function (k) { return L("#/" + k, LEGAL[k][0]); })]
    ];
    return '<section class="x-band"><div class="x-wrap x-rv"><ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/">Home</a></li><li aria-current="page">Sitemap</li></ol><h1 class="x-h1">Sitemap</h1><p class="x-lead">Every page on this site, in one place.</p></div></section>' +
      S("", "", '<div class="x-smap">' + map(groups, function (g) {
        return '<nav class="x-box x-rv" aria-label="' + g[0] + '"><h2>' + g[0] + "</h2><ul>" + map(g[1], function (l) { return '<li><a href="' + l[0] + '" data-direct>' + esc(l[1]) + "</a></li>"; }) + "</ul></nav>";
      }) + "</div>");
  }

  function view404(top) {
    var c = top === "careers";
    return '<section class="x-soon"><div class="x-wrap"><div class="x-soon__panel x-rv"><p class="x-eyebrow">Error 404</p><h1 class="x-h2">This page took a different route.</h1><p class="x-lead">The link may be old or mistyped. These will get you back on track.</p><div class="x-btns">' +
      btn("primary", "#/", "Back to home") + (c ? btn("line", "#/careers", "Careers") + btn("line", "#/careers/life", "Life at PRAVAHAx") : btn("line", "#/services", "Services") + btn("line", "#/contact", "Contact us")) + "</div></div></div></section>";
  }

  // Forms
  var page = $("view-page");
  function check(el) {
    var v = el.value.trim();
    if (el.required && !v) return el.tagName === "SELECT" ? "Please choose one." : "Please fill this in.";
    if (v && el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Enter a valid email, like name@company.com.";
    if (v && el.type === "tel" && !/^\+?[\d\s()-]{7,}$/.test(v)) return "Enter a valid phone number.";
    if (v && el.type === "url" && !/^https?:\/\/\S+\.\S+/.test(v)) return "Enter a full link starting with https://.";
    if (el.type === "file" && el.files && el.files[0]) {
      if (!/\.(pdf|docx?)$/i.test(el.files[0].name)) return "That file type isn't accepted. Upload a PDF, DOC or DOCX.";
      if (el.files[0].size > 5 * 1024 * 1024) return "That file is " + (el.files[0].size / 1048576).toFixed(1) + " MB. Keep it under 5 MB, or share a résumé link instead.";
      if (!el.files[0].size) return "That file looks empty. Choose it again.";
    }
    return "";
  }
  function setErr(el, m) { $(el.id + "-e").textContent = m; if (el.tagName !== "FIELDSET") { if (m) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid"); } }
  function validate(f) {
    var bad = [];
    [].forEach.call(f.querySelectorAll(".x-input"), function (el) { var m = check(el); setErr(el, m); if (m) bad.push(el); });
    [].forEach.call(f.querySelectorAll("fieldset[data-req]"), function (fs) { var ok = fs.querySelector("input:checked"); setErr(fs, ok ? "" : "Pick at least one."); if (!ok) bad.push(fs.querySelector("input")); });
    return bad;
  }
  // ================================================================
  // WEB3FORMS_KEY: the Web3Forms access key registered to hello@pravahax.com.
  // Replace "YOUR_WEB3FORMS_ACCESS_KEY" with the real key to switch both forms
  // (contact and careers) to Web3Forms. While it is still the placeholder, the
  // API is never called: submitting opens a pre-filled mailto:hello@pravahax.com
  // (subject plus every field in the body) and shows a short note instead.
  // ================================================================
  const WEB3FORMS_KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";
  const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
  // Web3Forms file attachments need a paid Pro plan. Leave this false until the plan is confirmed:
  // the résumé file is then not uploaded (only its name is sent) and the optional
  // "Résumé link (Drive/Dropbox)" field carries the résumé instead, so the form works either way.
  var WEB3FORMS_FILES = false;
  var MAIL = "hello@pravahax.com";
  function keyReady() { return !!WEB3FORMS_KEY && WEB3FORMS_KEY !== WEB3FORMS_KEY_PLACEHOLDER; }
  function collect(f) {
    var val = function (id) { var el = $(id); return el ? el.value.trim() : ""; }, lines = [], fd = new FormData(), careers = f.getAttribute("data-kind") === "careers", needsDone = false;
    var name = careers ? val("a-name") : val("c-name"), email = careers ? val("a-email") : val("c-email");
    var subj = careers ? "Application: " + val("a-role") + " — " + name : "Project enquiry — " + name + (val("c-company") ? ", " + val("c-company") : "");
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("subject", subj);
    fd.append("from_name", name);
    fd.append("replyto", email);
    [].forEach.call(f.querySelectorAll(".x-input"), function (el) {
      var label = el.getAttribute("data-l"), v;
      if (el.type === "file") {
        var file = el.files && el.files[0];
        if (!file) return;
        if (WEB3FORMS_FILES) { fd.append("attachment", file); v = file.name + " (attached)"; }
        else v = file.name + " (not attached; please ask for it or use the résumé link)";
      } else v = el.value.trim();
      if (!v) return;
      lines.push(label + ": " + v);
      fd.append(label, v);
      if (el.id === "c-phone") addNeeds();
    });
    if (!careers && !needsDone) addNeeds();
    function addNeeds() {
      needsDone = true;
      var n = [].map.call(f.querySelectorAll("input[name=need]:checked"), function (c) { return c.value; }).join(", ");
      lines.push("What we need: " + n); fd.append("What we need", n);
      var ind = val("c-industry"); if (ind) { lines.push("Enquiry from: " + ind); fd.append("Enquiry from", ind); }
    }
    return { fd: fd, href: "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(lines.join("\n")) };
  }
  function showFail(f, href) {
    var s = f.querySelector("[data-status]");
    s.innerHTML = '<p>That didn\'t go through. Try again, or write to <a href="' + href + '">' + MAIL + '</a>.</p><button class="x-btn x-btn--line" type="button" data-retry>Retry</button>';
    s.hidden = false;
  }
  // Used while WEB3FORMS_KEY is the placeholder: hand the message to the visitor's email app.
  function sendByMail(f, href) {
    var s = f.querySelector("[data-status]");
    s.innerHTML = '<p>Your email app should open with your message ready. If it doesn\'t, write to <a href="' + href + '">' + MAIL + "</a>.</p>";
    s.hidden = false;
    window.location.href = href;
  }
  function showDone(f) {
    var wrap = f.parentNode;
    wrap.innerHTML = '<div class="x-done" tabindex="-1" role="status"><span class="x-ico">' + svg("check") + '</span><h2 class="x-h3">' + esc(f.getAttribute("data-done")) + '</h2><p>Prefer email? Write to <a href="mailto:' + MAIL + '">' + MAIL + "</a></p></div>";
    wrap.querySelector(".x-done").focus();
  }
  function submitForm(f) {
    var s = f.querySelector("[data-status]"); s.hidden = true; s.innerHTML = "";
    var bad = validate(f); if (bad.length) { bad[0].focus(); return; }
    var d = collect(f);
    if (f.querySelector("[name=botcheck]").checked) { showDone(f); return; }
    if (!keyReady()) { sendByMail(f, d.href); return; }
    var b = f.querySelector("[type=submit]"), label = b.textContent;
    b.disabled = true; b.textContent = "Sending…"; f.setAttribute("aria-busy", "true");
    fetch("https://api.web3forms.com/submit", { method: "POST", headers: { Accept: "application/json" }, body: d.fd })
      .then(function (r) { return r.json().then(function (j) { return r.ok && j && j.success; }); })
      .then(function (ok) { if (ok) showDone(f); else throw new Error("failed"); })
      .catch(function () { b.disabled = false; b.textContent = label; f.removeAttribute("aria-busy"); showFail(f, d.href); });
  }
  // The same form handlers serve the page and the contact modal (#cm).
  var cm = $("cm");
  function onForms(type, fn) { page.addEventListener(type, fn); cm.addEventListener(type, fn); }
  function formRoot(el) { return (el && el.closest && el.closest("#cm")) || page; }
  onForms("submit", function (e) {
    var f = e.target; if (!f.classList.contains("x-form")) return;
    e.preventDefault(); submitForm(f);
  });
  onForms("input", function (e) { var el = e.target; if (el.getAttribute && el.getAttribute("aria-invalid") === "true") setErr(el, check(el)); });
  // Inline validation on blur
  onForms("focusout", function (e) {
    var el = e.target;
    if (el.classList && el.classList.contains("x-input") && el.type !== "file") setErr(el, check(el));
  });
  function needUI(root) {
    var ns = (root || page).querySelector('input[name=need][value="Not sure yet"]');
    var h = $("c-unsure"); if (h) h.textContent = ns && ns.checked ? "No problem. We'll figure it out together in a free brainstorm." : "";
  }
  onForms("change", function (e) {
    var el = e.target, R = formRoot(el);
    if (el.getAttribute("aria-invalid") === "true" || el.type === "file") setErr(el, check(el));
    if (el.name === "need") {
      var isNS = el.value === "Not sure yet";
      if (el.checked) [].forEach.call(R.querySelectorAll("input[name=need]"), function (c) { if (c !== el && (isNS || c.value === "Not sure yet")) c.checked = false; });
      var fs = $("c-need"); if (fs.querySelector("input:checked")) setErr(fs, "");
      needUI(R);
    }
  });
  onForms("click", function (e) {
    var r = e.target.closest ? e.target.closest("[data-retry],[data-change]") : null;
    if (r && r.hasAttribute("data-retry")) { submitForm(r.closest("form")); return; }
    if (r) {
      var R = formRoot(r);
      [].forEach.call(R.querySelectorAll("input[name=need]"), function (c) { c.checked = false; });
      $("c-from").hidden = true; needUI(R);
      R.querySelector("input[name=need]").focus();
      return;
    }
    if (formRoot(e.target) === cm) return;
    var b = e.target.closest ? e.target.closest("[data-filter],[data-apply]") : null; if (!b) return;
    if (b.hasAttribute("data-filter")) {
      var t = b.getAttribute("data-filter"), n = 0;
      [].forEach.call(page.querySelectorAll("[data-filter]"), function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      [].forEach.call(page.querySelectorAll(".x-role"), function (r) { var on = t === "All" || r.getAttribute("data-team") === t; r.hidden = !on; if (on) n++; });
      $("roleCount").textContent = n + (n === 1 ? " open role" : " open roles") + (t === "All" ? "" : " in " + t);
    } else {
      $("a-role").value = b.getAttribute("data-apply"); setErr($("a-role"), "");
      $("sec-apply").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      $("a-name").focus({ preventScroll: true });
    }
  });
  // Contact modal: contact calls to action in the content (and the floating "Talk to us") open it in place.
  // The header and footer Contact links, and the search, still go to the #/contact page.
  (function () {
    var card = cm.querySelector(".x-cm__card"), body = $("cmBody"), from = $("cmFrom"), grab = cm.querySelector(".x-cm__grab"), opener = null, closeT = 0;
    var FOCUSABLE = 'a[href],button:not([disabled]),input:not([type=hidden]):not(.x-hp),textarea,select,[tabindex]:not([tabindex="-1"])';
    function formHTML() {
      return '<form class="x-form" novalidate data-to="hello@pravahax.com" data-kind="contact" data-done="Received. We\'ll reply within 1 business day.">' +
        field("c-name", "Name", "text", { req: 1, auto: "name" }) + field("c-email", "Work email", "email", { req: 1, auto: "email" }) +
        field("c-company", "Company", "text", { auto: "organization", full: 1 }) +
        '<fieldset class="x-field x-field--full" id="c-need" data-req aria-describedby="c-need-e c-unsure"><legend>What do you need?</legend>' +
        '<p class="x-from" id="c-from" hidden>You came from <strong id="c-from-n"></strong> · <button class="x-linkbtn" type="button" data-change>change</button></p><div class="x-pick">' + map(NEEDS, function (n) {
          return '<label><input type="checkbox" name="need" value="' + esc(n) + '" /><span>' + esc(n) + "</span></label>";
        }) + '</div><p class="x-helper" id="c-unsure" aria-live="polite"></p><p class="x-err" id="c-need-e" aria-live="polite"></p></fieldset>' +
        '<input type="hidden" name="industry" id="c-industry" value="" />' +
        field("c-msg", "Message", "textarea", { req: 1, full: 1 }) + foot("Send message", MAIL) + "</form>";
    }
    function focusables() { return [].filter.call(card.querySelectorAll(FOCUSABLE), function (el) { return el.getClientRects().length > 0; }); }
    function open(a) {
      clearTimeout(closeT);
      opener = a;
      var q = (a.getAttribute("href") || "").split("?")[1] || "";
      var qp = function (k) { var m = q.match(new RegExp("(?:^|&)" + k + "=([^&]*)")); try { return m ? decodeURIComponent(m[1]).toLowerCase() : ""; } catch (err) { return ""; } };
      var parts = location.hash.replace(/^#\/?/, "").split("?")[0].split("/");
      var need = qp("need"), indSlug = qp("industry"), label = "";
      var svc = parts[0] === "services" && parts[1] && findBy(SERVICES, parts[1]);
      var ind = (parts[0] === "industries" && parts[1] && findBy(INDUSTRIES, parts[1])) || (indSlug && findBy(INDUSTRIES, indSlug));
      if (svc) { label = svc.name; if (!need) need = svc.slug; }
      else if (ind) label = ind.name;
      else if (NEED_FROM[need]) label = NEED_FROM[need];
      body.innerHTML = formHTML();
      if (Object.prototype.hasOwnProperty.call(NEED_KEYS, need)) {
        var box = body.querySelector('input[name=need][value="' + NEED_KEYS[need] + '"]');
        if (box) box.checked = true;
        needUI(cm);
      }
      if (ind) $("c-industry").value = ind.name;
      from.textContent = label ? "About: " + label : ""; from.hidden = !label;
      document.body.style.paddingRight = Math.max(0, innerWidth - document.documentElement.clientWidth) + "px";
      document.documentElement.classList.add("x-cm-lock");
      card.style.transform = ""; card.scrollTop = 0;
      cm.hidden = false;
      void cm.offsetWidth;
      cm.classList.add("is-on");
      var first = matchMedia("(hover: none)").matches ? card : $("c-name");
      first.focus({ preventScroll: true });
    }
    function close(instant) {
      if (cm.hidden) return;
      cm.classList.remove("is-on");
      document.documentElement.classList.remove("x-cm-lock");
      document.body.style.paddingRight = "";
      var done = function () { cm.hidden = true; body.innerHTML = ""; card.style.transform = ""; card.style.transition = ""; };
      clearTimeout(closeT);
      if (instant || reduce) done(); else closeT = setTimeout(done, 200);
      if (opener && !instant && document.contains(opener)) opener.focus({ preventScroll: true });
      opener = null;
    }
    // Intercept contact links in the page content; leave the contact page itself alone.
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href^="#/contact"]'); if (!a) return;
      if (!a.classList.contains("x-fab") && !a.closest("#main")) return;
      if (a.hasAttribute("data-direct")) return;
      if (/^#\/contact(\?|\/|$)/.test(location.hash)) return;
      e.preventDefault(); open(a);
    }, true);
    cm.addEventListener("click", function (e) { if (e.target.closest && e.target.closest("[data-cm-close]")) close(); });
    cm.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.stopPropagation(); close(); return; }
      if (e.key !== "Tab") return;
      var f = focusables(); if (!f.length) { e.preventDefault(); return; }
      var a = document.activeElement;
      if (e.shiftKey && (a === f[0] || a === card)) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    document.addEventListener("focusin", function (e) { if (!cm.hidden && cm.classList.contains("is-on") && !cm.contains(e.target)) { var f = focusables(); (f[0] || card).focus(); } });
    addEventListener("hashchange", function () { close(true); });
    // Phones: swipe the sheet's handle down to close it.
    var y0 = null, dy = 0;
    grab.addEventListener("touchstart", function (e) { y0 = e.touches[0].clientY; dy = 0; card.style.transition = "none"; }, { passive: true });
    grab.addEventListener("touchmove", function (e) { if (y0 === null) return; dy = Math.max(0, e.touches[0].clientY - y0); card.style.transform = "translateY(" + dy + "px)"; }, { passive: true });
    grab.addEventListener("touchend", function () {
      if (y0 === null) return; y0 = null; card.style.transition = "";
      if (dy > 80) close(); else card.style.transform = "";
    });
  })();

  function jump(sub, smooth) {
    var el = sub && page.querySelector('[data-sub="' + sub + '"]');
    if (el) { el.scrollIntoView({ behavior: smooth && !reduce ? "smooth" : "auto" }); el.focus({ preventScroll: true }); }
    else scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  // Router
  var home = $("view-home"), page = $("view-page"), first = true, lastTop = null;
  var BASE = "PRAVAHAx Systems Engineering";
  var HOME_DESC = "PRAVAHAx Systems Engineering builds custom software, AI and IoT systems end to end, from Chhatrapati Sambhajinagar, India. You own all the code.";
  var DESC = {
    services: "Software engineering, AI & automation, hardware & IoT, enterprise solutions and cloud, data & security from PRAVAHAx in Chhatrapati Sambhajinagar.",
    industries: "PRAVAHAx builds software, AI and IoT for manufacturing, agriculture, healthcare, education, logistics, retail, energy and financial services.",
    work: "Case studies from PRAVAHAx Systems Engineering: proof, not promises.",
    consulting: "Clear technology advice for every industry: AI readiness, architecture and code review, transformation roadmaps and fractional CTO support.",
    about: "PRAVAHAx is a software, AI and IoT company from Chhatrapati Sambhajinagar. Meet our leadership, see our publications and visit our office.",
    labs: "PRAVAHAx Labs: research in cryptography, diskless Windows and edge detection, with bioinformatics and life sciences planned next.",
    impact: "Teach as we build: school visits, leaders' birthdays celebrated in village schools, and books and school kits for children who need them.",
    careers: "Careers at PRAVAHAx: open roles and internships in Chhatrapati Sambhajinagar across software, AI, hardware and design. We reply within 1 business day.",
    "careers/life": "Life at PRAVAHAx: the rooms we think in, the trips we take and the small rituals that keep our people curious. Thinking is Technology.",
    contact: "Contact PRAVAHAx Systems Engineering. Tell us what you're building; we reply within 1 business day. hello@pravahax.com · +91 94048 02076.",
    privacy: "How PRAVAHAx Systems Engineering handles the details you send us.",
    terms: "Terms of use for the PRAVAHAx Systems Engineering website.",
    cookies: "PRAVAHAx sets no advertising or tracking cookies.",
    accessibility: "Our commitment to an accessible website for everyone.",
    sitemap: "Sitemap of the PRAVAHAx Systems Engineering website: services, industries, case studies, company pages and legal."
  };
  function setMeta(sel, v) { var m = document.querySelector(sel); if (m) m.setAttribute("content", v); }
  function route() {
    var h = location.hash;
    if (h && h.indexOf("#/") !== 0) return;
    var query = h.split("?")[1] || "";
    var parts = h.split("?")[0].replace(/^#\/?/, "").split("/").filter(Boolean);
    var top = parts[0] || "", isHome = !top, title, html = "", si = -1;
    var key = top === "careers" && parts[1] === "life" ? "careers/life" : top;
    var sub = key === "careers/life" ? parts[2] : parts[1];
    palClose(true);
    if (!first && key === lastTop && (top === "about" || top === "careers") && !page.hidden && (!sub || page.querySelector('[data-sub="' + sub + '"]'))) { jump(sub, true); return; }
    lastTop = key;
    if (top === "services" && parts[1] === "consultancy") { location.replace("#/consulting"); return; }
    var T = function (t) { return t + " | " + BASE; }, desc = DESC[key] || HOME_DESC;
    if (top === "services") {
      SERVICES.forEach(function (s, i) { if (s.slug === parts[1]) si = i; });
      if (!parts[1]) { html = viewServices(); title = T("Services"); }
      else if (si > -1) { html = viewDetail(SERVICES[si], si); title = T(SERVICES[si].name); desc = SERVICES[si].intro; }
    } else if (top === "industries") {
      if (parts[1] === "retail-distribution") { location.replace("#/industries/retail"); return; }
      INDUSTRIES.forEach(function (s, i) { if (s.slug === parts[1]) si = i; });
      if (!parts[1]) { html = viewIndustries(); title = T("Industries"); }
      else if (si > -1) { html = viewIndustry(INDUSTRIES[si], si); title = T(INDUSTRIES[si].name); desc = INDUSTRIES[si].intro; }
    } else if (top === "work") {
      CASES.forEach(function (s, i) { if (s.slug === parts[1]) si = i; });
      if (!parts[1]) { html = viewWork(); title = T("Work"); }
      else if (si > -1) { html = viewCase(CASES[si], si); title = T(CASES[si].name + " case study"); desc = CASES[si].name + ": " + CASES[si].title + " A PRAVAHAx case study."; }
    } else if (top === "consulting" && !parts[1]) { html = viewConsulting(); title = T("Consulting"); }
    else if (top === "about" && (!parts[1] || /^(beliefs|leadership|publications|masoom|devang)$/.test(parts[1]))) { html = viewAbout(); title = T(parts[1] === "publications" ? "Publications" : parts[1] === "leadership" ? "Leadership" : parts[1] === "beliefs" ? "Our beliefs" : "About"); if (parts[1] === "publications") desc = "ICT textbook series for Classes 8–10, written by the PRAVAHAx team in Marathi and English for school students."; }
    else if (top === "labs" && !parts[1]) { html = viewLabs(); title = T("PRAVAHAx Labs"); }
    else if (top === "impact" && !parts[1]) { html = viewImpact(); title = T("Teach as we build"); }
    else if (key === "careers/life" && !parts[3] && (!parts[2] || /^(rooms|exhibits|outside|rituals|fine-print)$/.test(parts[2]))) { html = viewLife(); title = T("Life at PRAVAHAx"); }
    else if (top === "careers" && !parts[2] && (!parts[1] || /^(roles|internships|apply)$/.test(parts[1]))) { html = viewCareers(); title = T(parts[1] === "internships" ? "Internships" : "Careers"); }
    else if (top === "contact" && !parts[1]) { html = viewContact(); title = T("Contact"); }
    else if (top === "sitemap" && !parts[1]) { html = viewSitemap(); title = T(PAGES.sitemap); }
    else if (LEGAL[top] && !parts[1]) { html = viewLegal(top); title = T(LEGAL[top][0]); }
    if (isHome) { title = BASE + " | Less chaos. More flow."; desc = HOME_DESC; }
    else if (!html) { html = view404(top); title = T("Page not found"); desc = HOME_DESC; }
    setMeta('meta[name="description"]', desc); setMeta('meta[property="og:description"]', desc); setMeta('meta[property="og:title"]', title);
    home.hidden = !isHome; page.hidden = isHome;
    page.innerHTML = isHome ? "" : html;
    if (!isHome) fixPos(page);
    // Dark first section: the header floats clear over it until the page scrolls.
    var lead = (isHome ? home : page).firstElementChild;
    document.documentElement.classList.toggle("x-overdark", !!lead && lead.matches(".x-hero,.x-band--navy"));
    if (typeof onScroll === "function") onScroll();
    if (top === "contact") {
      var qp = function (k) { var m = query.match(new RegExp("(?:^|&)" + k + "=([^&]*)")); try { return m ? decodeURIComponent(m[1]).toLowerCase() : ""; } catch (err) { return ""; } };
      var need = qp("need"), indSlug = qp("industry");
      if (Object.prototype.hasOwnProperty.call(NEED_KEYS, need)) {
        var box = page.querySelector('input[name=need][value="' + NEED_KEYS[need] + '"]');
        if (box) box.checked = true;
        if (NEED_FROM[need]) { $("c-from-n").textContent = NEED_FROM[need]; $("c-from").hidden = false; }
        needUI();
      }
      var ind = indSlug && findBy(INDUSTRIES, indSlug);
      if (ind) { $("c-industry").value = ind.name; $("c-ctx").textContent = "Enquiry from: " + ind.name; $("c-ctx").hidden = false; }
    }
    fabRoute = top === "contact" || (top === "careers" && key !== "careers/life"); fabSet();
    document.title = title;
    [].forEach.call(document.querySelectorAll("[data-route]"), function (a) {
      var on = a.getAttribute("data-route").split(" ").indexOf(top) > -1;
      if (a.tagName === "A") { if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); }
      else a.classList.toggle("is-current", on);
    });
    mega(false);
    if (!menu.hidden) setMenu(false);
    if (!first) {
      scrollTo({ top: 0, left: 0, behavior: "instant" });
      // Move focus to the new page's H1 so screen readers announce the route change.
      var h1 = (isHome ? home : page).querySelector("h1");
      if (h1) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); } else $("main").focus({ preventScroll: true });
    }
    if (sub && (top === "about" || top === "careers")) setTimeout(function () { jump(sub, false); }, 0);
    first = false;
    reveal(isHome ? home : page);
    if (isHome) railInit();
  }
  addEventListener("hashchange", route);
  route();
})();
