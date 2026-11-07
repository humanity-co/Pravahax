(function () {
              var sec = document.querySelector(".xk"), home = document.getElementById("view-home"), t = 0, shown = false;
              if (!sec || !home) return;
              var rm = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null;
              function play() {
                clearTimeout(t);
                sec.classList.remove("is-go", "is-done");
                if (rm && rm.matches) { sec.classList.add("is-go", "is-done"); return; }
                void sec.offsetWidth;
                requestAnimationFrame(function () {
                  requestAnimationFrame(function () {
                    sec.classList.add("is-go");
                    t = setTimeout(function () { sec.classList.add("is-done"); }, 1400);
                  });
                });
              }
              function check() {
                var on = !home.hidden;
                if (on && !shown) play();
                if (!on) { clearTimeout(t); sec.classList.remove("is-go", "is-done"); }
                shown = on;
              }
              addEventListener("hashchange", function () { setTimeout(check, 0); });
              if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(check, 0); }); else setTimeout(check, 0);
            })();
;
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
    { name: "Devang Patil", role: "Chief Executive Officer" },
    { name: "Chetan Agrawal", role: "Head of Operations" },
    { name: "Dhruv Naik", role: "Chief Technology Officer" },
    { name: "Masoom Mishra", role: "Head of Research & Development" },
    { name: "Varad Deshpande", role: "Engineering Lead" },
    { name: "Pallav Wankhede", role: "Head of Information Systems & DevOps" }
  ];
  var PAGES = { services: "Services", industries: "Industries", consulting: "Consulting", work: "Work", about: "About", careers: "Careers", contact: "Contact", privacy: "Privacy", terms: "Terms and conditions", cookies: "Cookies", accessibility: "Accessibility", sitemap: "Sitemap" };
  window.PX = { SERVICES: SERVICES, INDUSTRIES: INDUSTRIES, CASES: CASES, TEAM: TEAM, PAGES: PAGES, I: I };

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
  $("carList").innerHTML = [["#/careers", "users", "Careers", "Open roles, how we hire and how to apply."], ["#/careers/internships", "school", "Internships", "3 to 6 months, with a mentor and a real project."], ["#/careers/ipt", "education", "In-Plant Training (IPT)", "4–6 months for final-year students. Students and colleges register."]].map(function (c) {
    return '<li><a href="' + c[0] + '"><span class="x-ico">' + svg(c[1]) + '</span><span><strong>' + c[2] + '</strong><span class="x-d">' + c[3] + "</span></span></a></li>";
  }).join("");

  $("abtList").innerHTML = [["#/about", "flow", "Our story", "Why we started PRAVAHAx, and our name."], ["#/about/leadership", "users", "Leadership", "The executives who guide PRAVAHAx."], ["#/careers/life", "leaf", "Life at PRAVAHAx", "Rooms, rituals, treks and the fine print."], ["#/impact", "book", "Teach as we build", "Coding, electronics and books in village schools."]].map(function (c) {
    return '<li><a href="' + c[0] + '"><span class="x-ico">' + svg(c[1]) + '</span><span><strong>' + c[2] + '</strong><span class="x-d">' + c[3] + "</span></span></a></li>";
  }).join("");
  $("accImpact").insertAdjacentHTML("afterbegin", svg("book"));

  // Dropdown menus (Services, About, Careers). The About trigger is a link: it navigates on click and opens on hover or arrow keys.
  var drops = [].slice.call(document.querySelectorAll(".x-navitem"));
  function drop(it, open) { it.classList.toggle("is-open", open); it.firstElementChild.setAttribute("aria-expanded", open); }
  function mega(open) { drops.forEach(function (it) { drop(it, open); }); }
  var hoverOK = matchMedia("(hover:hover)").matches;
  drops.forEach(function (it) {
    if (it.firstElementChild.tagName === "BUTTON") it.firstElementChild.addEventListener("click", function () { var o = !it.classList.contains("is-open"); mega(false); drop(it, o); });
    // Touch screens have no hover: the first tap on the About link opens its dropdown, a second tap follows the link.
    else it.firstElementChild.addEventListener("click", function (e) { if (hoverOK || it.classList.contains("is-open")) return; e.preventDefault(); mega(false); drop(it, true); });
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
  // Phones and tablets: a full-screen sheet that slides up; body scroll is locked while it is open.
  var menu = $("menu"), burger = $("burger"), menuT = 0;
  function setMenu(open) {
    clearTimeout(menuT);
    burger.setAttribute("aria-expanded", open);
    document.documentElement.classList.toggle("x-menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      menu.hidden = false; void menu.offsetWidth; menu.classList.add("is-on"); menu.scrollTop = 0;
      $("menuClose").focus({ preventScroll: true });
    } else {
      menu.classList.remove("is-on");
      if (document.activeElement && menu.contains(document.activeElement)) burger.focus({ preventScroll: true });
      menuT = setTimeout(function () { if (!menu.classList.contains("is-on")) menu.hidden = true; }, reduce ? 0 : 320);
    }
  }
  burger.addEventListener("click", function () { setMenu(true); });
  $("menuClose").addEventListener("click", function () { setMenu(false); });
  // Same-page nav: a header, dropdown, menu sheet, dock or footer link to the route already showing scrolls back to the top
  // (instant under reduced motion), closes any dropdown or sheet, and leaves the hash alone. Sub-routes navigate as usual.
  function routePath(h) { return (h || "").split("?")[0].replace(/^#\/?/, "").replace(/\/+$/, ""); }
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (!a || !a.closest(".x-header, .x-menu, .x-dock, .x-foot")) return;
    if (routePath(a.getAttribute("href")) !== routePath(location.hash)) return;
    // Touch screens: the first tap on the About trigger still opens its dropdown.
    var it = a.parentNode;
    if (it && it.classList && it.classList.contains("x-navitem") && !hoverOK && !it.classList.contains("is-open")) return;
    e.preventDefault();
    mega(false);
    if (!menu.hidden) setMenu(false);
    scrollTo({ top: 0, left: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, true);
  // Keep Tab inside the open sheet.
  menu.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var f = [].filter.call(menu.querySelectorAll("a[href],button:not([disabled])"), function (el) { return el.getClientRects().length > 0; });
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" || palOn) return;
    if (!menu.hidden) setMenu(false);
    drops.forEach(function (it) { if (it.classList.contains("is-open")) { drop(it, false); it.firstElementChild.focus(); } });
  });
  window.addEventListener("resize", function () { if (innerWidth > 1024 && !menu.hidden) setMenu(false); });

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
      E("Pages", "Our story", "Why we started PRAVAHAx, and our name.", "#/about", "flow", "about us company story who we are name pravaha flow engineering with ownership"),
      E("Pages", "Our beliefs", "Five things we hold to on every project.", "#/about/beliefs", "star", "values principles what we believe " + BELIEFS.map(function (b) { return b[2]; }).join(" ")),
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
    a.push(E("Careers", "Open roles", ROLES.length + " roles: Chhatrapati Sambhajinagar, Santa Cruz USA (R&D) and remote.", "#/careers/roles", "users", "jobs vacancies openings apply application resume cv hq headquarters santa cruz usa r&d research remote " + ROLES.map(function (r) { return r.t; }).join(" ")));
    ROLES.forEach(function (r) { a.push(E("Careers", r.t, r.team + " · " + LOCS[r.loc] + " · " + r.type + " · " + r.exp, "#/careers/role/" + r.slug, r.ic, "job role apply " + r.team + " " + r.lvl + " " + r.type + " " + LOCS[r.loc] + (r.fresh ? " fresher welcome graduate" : ""))); });
    a.push(E("Careers", "Internships", "3 to 6 months, with a mentor and a real project.", "#/careers/internships", "school", "intern internship freshers students graduates stipend " + INTERNS.map(function (r) { return r.t; }).join(" ")));
    a.push(E("Careers", "In-Plant Training (IPT) 2026–27", "4–6 months of live engineering work for final-year students.", "#/careers/ipt", "education", "ipt in-plant training inplant industrial training final year student college tpo coordinator be btech diploma mca bsc it"));
    a.push(E("Careers", "IPT registration: Student", "Final-year students: register for IPT 2026–27.", "#/careers/ipt/student", "education", "ipt in-plant training student register registration final year apply"));
    a.push(E("Careers", "IPT registration: College", "TPOs and IPT coordinators: partner with us or invite us.", "#/careers/ipt/college", "education", "ipt in-plant training college institute tpo coordinator hod principal mou partner campus visit register"));
    INTERNS.forEach(function (r) { a.push(E("Careers", r.t, "Internship · " + LOCS[r.loc] + " · " + r.dur, "#/careers/internship/" + r.slug, r.ic, "internship intern student fresher apply stipend " + r.team + " " + r.type + " " + LOCS[r.loc])); });
    a.push(E("Life & culture", "Life at PRAVAHAx", "Rooms, rituals, treks and the fine print.", "#/careers/life", "leaf", "culture office team life"));
    a.push(E("Life & culture", "Rooms with names", "The rooms we think in.", "#/careers/life/rooms", "home", ROOMS.map(function (r) { return r[1]; }).join(" ") + " " + SPACES.map(function (s) { return s[0]; }).join(" ") + " office spaces"));
    a.push(E("Life & culture", "Exhibits from the office", "A few corners of the office.", "#/careers/life/exhibits", "eye", "fridge diet coke mugs coffee parcels"));
    a.push(E("Life & culture", "Out of office, on purpose", "Treks, movie nights, offsites and more.", "#/careers/life/outside", "trek", OOO.map(function (d) { return d[1]; }).join(" ")));
    a.push(E("Research & impact", "PRAVAHAx Labs", "The research our team pursues beyond client work: problems we've nearly cracked, led by Devang Patil.", "#/labs", "search", "research lab board r&d principles protocol devang patil masoom mishra"));
    LABS.forEach(function (l) { a.push(E("Research & impact", l[1], l[3] + " · " + l[4], "#/labs", "search", "labs research " + l[0] + " " + l[2])); });
    a.push(E("Research & impact", "Bioinformatics & life sciences", "Our next frontier: software, data and AI for life sciences and healthcare research. Planned under PRAVAHAx Labs.", "#/labs", "search", "bioinformatics life sciences healthcare research biology next frontier planned coming next masoom mishra"));
    a.push(E("Research & impact", "Teach as we build", "Engineers, let loose in classrooms. The kids usually win.", "#/impact", "school", "social impact community csr schools children students science robots careers internet safety game day library"));
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
    else if (!keepFocus) (innerWidth > 1024 ? $("searchBtn") : burger).focus();
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

  // Phones: long card stacks become swipe rows (CSS scroll-snap), each with dots and a counter. No autoplay.
  var phoneMQ = matchMedia("(max-width: 600px)"), swipeSyncs = [];
  var SWIPE = ".x-bento, .x-indgrid, .x-cases:not(.x-cases--one), .x-pgrid, .x-beliefs, .x-exhs";
  function swipeRows(root) {
    swipeSyncs = swipeSyncs.filter(function (s) { return document.contains(s.row); });
    [].forEach.call(root.querySelectorAll(SWIPE), function (row) {
      if (row.hasAttribute("data-swipe")) return;
      var items = [].slice.call(row.children);
      if (items.length < 2) return;
      row.setAttribute("data-swipe", ""); row.classList.add("x-swipe");
      var label = row.getAttribute("aria-label") || "Cards";
      var bar = document.createElement("div");
      bar.className = "x-swipebar"; bar.setAttribute("aria-hidden", "true");
      bar.innerHTML = '<span class="x-swipedots">' + items.map(function () { return "<i></i>"; }).join("") + '</span><span class="x-swipecount"></span>';
      row.parentNode.insertBefore(bar, row.nextSibling);
      var dots = bar.querySelectorAll("i"), count = bar.querySelector(".x-swipecount"), raf = 0, needsFocus = !row.querySelector("a,button");
      function sync() {
        raf = 0;
        var on = phoneMQ.matches, k = 0;
        if (needsFocus) { if (on) { row.setAttribute("tabindex", "0"); if (!row.getAttribute("aria-label")) row.setAttribute("aria-label", label + ", swipe for more"); } else row.removeAttribute("tabindex"); }
        if (!on) return;
        var max = row.scrollWidth - row.clientWidth;
        if (max > 4 && row.scrollLeft >= max - 4) k = items.length - 1;
        else {
          var r0 = row.getBoundingClientRect().left + (parseFloat(getComputedStyle(row).paddingLeft) || 0), best = 1e9;
          items.forEach(function (it, i) { var d = Math.abs(it.getBoundingClientRect().left - r0); if (d < best) { best = d; k = i; } });
        }
        [].forEach.call(dots, function (d, j) { d.classList.toggle("is-on", j === k); });
        count.textContent = (k + 1) + " / " + items.length;
      }
      row.addEventListener("scroll", function () { if (!raf) raf = requestAnimationFrame(sync); }, { passive: true });
      swipeSyncs.push({ row: row, sync: sync });
      sync();
    });
  }
  function swipeAll() { swipeSyncs.forEach(function (s) { s.sync(); }); }
  if (phoneMQ.addEventListener) phoneMQ.addEventListener("change", swipeAll); else if (phoneMQ.addListener) phoneMQ.addListener(swipeAll);

  // Phones and tablets: the floating WhatsApp and "Talk to us" buttons step aside while a call to action
  // passes through the bottom strip of the screen they sit in.
  var dodgeIO = null, dodgeOn = [], dodgeRoot = null, dodgeT = 0;
  function dodge(root) {
    if (!("IntersectionObserver" in window)) return;
    dodgeRoot = root;
    if (dodgeIO) dodgeIO.disconnect();
    dodgeOn = []; document.documentElement.classList.remove("x-dodge");
    if (innerWidth > 1024) return;
    dodgeIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { var i = dodgeOn.indexOf(e.target); if (e.isIntersecting && i < 0) dodgeOn.push(e.target); else if (!e.isIntersecting && i > -1) dodgeOn.splice(i, 1); });
      document.documentElement.classList.toggle("x-dodge", dodgeOn.length > 0);
    }, { rootMargin: -Math.max(0, innerHeight - 104) + "px 0px 0px 0px" });
    [].forEach.call(root.querySelectorAll(".x-btns, .x-formfoot, .x-role .x-btn, .x-box .x-btn"), function (el) { dodgeIO.observe(el); });
  }
  var dodgeW = innerWidth, dodgeH = innerHeight;
  addEventListener("resize", function () {
    clearTimeout(dodgeT);
    dodgeT = setTimeout(function () {
      swipeAll();
      // Ignore the small height changes from mobile browser toolbars.
      if (dodgeRoot && (innerWidth !== dodgeW || Math.abs(innerHeight - dodgeH) > 120)) { dodgeW = innerWidth; dodgeH = innerHeight; dodge(dodgeRoot); }
    }, 150);
  });

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
  // A call to action with an explicit ask opens its own form in the modal (see FORMS); without JS it falls back to #/contact.
  function fbtn(cls, kind, t) { return '<a class="x-btn x-btn--' + cls + '" href="#/contact" data-form="' + kind + '" aria-haspopup="dialog">' + t + "</a>"; }

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
    return splitHero('<ol class="x-crumb"><li><a href="#/services">Services</a></li><li aria-current="page">' + esc(s.name) + "</li></ol>", s.name, s.intro, btn("primary", "#/contact?need=" + s.slug, "Start a project") + fbtn("line", "consult", "Book a consultation"), s.img) +
      sec("", head(esc(s.name), "What we deliver") + boxes(s.deliver.map(function (d) { return d.split("|"); }))) +
      sec("x-mist", '<div class="x-split" style="align-items:start"><div class="x-rv"><h2 class="x-h2">Stack-agnostic.</h2><p class="x-lead">We choose the languages and tools that fit your problem, not our habits.</p></div><div class="x-rv"><h2 class="x-h2">What you get</h2><ul class="x-checks x-checks--2">' + map(s.out, function (o) { return "<li>" + CHK + esc(o) + "</li>"; }) + "</ul></div></div>") +
      sec("", head("", "How we deliver") + steps(PROCESS)) +
      sec("x-mist", head("", "Related industries") + '<ul class="x-chips x-rv">' + map(inds, function (x) { return '<li><a class="x-chip" href="#/industries/' + x.slug + '">' + esc(x.name) + "</a></li>"; }) + "</ul>") +
      sec("", head("", "FAQ") + faq(s.faq)) +
      sec("", '<nav class="x-pn x-rv" aria-label="More services"><a href="#/services/' + pv.slug + '"><small>← Previous</small>' + esc(pv.name) + '</a><a href="#/services/' + nx.slug + '"><small>Next →</small>' + esc(nx.name) + "</a></nav>").replace('class="x-sec "', 'class="x-sec" style="padding-top:0;padding-bottom:64px"') + cta();
  }

  function viewConsulting() {
    return splitHero('<p class="x-eyebrow">Consulting</p>', "Clear advice for every industry.", "Whatever your sector, we help you decide what to build, what to buy and how to get there.", fbtn("primary", "consult", "Book a consultation") + btn("line", "#/services", "See services"), "consultancy.webp") +
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
  // "In practice": concrete behaviours behind each belief, in the same order as BELIEFS.
  var PRACTICE = [["We stay on after go-live.", "Bugs we shipped are ours to fix.", "You get the code, the docs and a proper handover."],
    ["Estimates in plain words, with what could slip.", "Bad news early, not on demo day.", "No jargon in proposals."],
    ["Fewer moving parts before more features.", "Boring, proven tools where they do the job.", "If training takes a week, we redesign."],
    ["Every feature is tied to a number someone cares about.", "We will tell you when you don't need AI."],
    ["We start with questions, not a tech stack.", "We spend time with the people who do the work, on the floor or in the field."]];
  var WHY = [["star", "Real ownership", "Own your work from design to production."], ["flow", "Learn across software, AI and hardware", "Work next to specialists in all three."], ["users", "Mentors who ship", "Senior engineers who still build review your work."], ["home", "A workspace built for focus", "Quiet rooms, good coffee and somewhere to rest."]];
  // Careers. DRAFT – client to review: every job description and internship below is drafted copy.
  var LOCS = { csn: "Chhatrapati Sambhajinagar, India", sc: "Santa Cruz, USA (R&D)", remote: "Remote, India" };
  var ROLES = [
    { slug: "associate-software-engineer", t: "Associate Software Engineer", team: "Engineering", loc: "csn", type: "On-site", exp: "Fresher", lvl: "Entry-level", fresh: 1, ic: "code",
      about: "Your first engineering job, on real client projects from week one. You pair with a senior engineer, learn how we build and ship, and take on more as you are ready.",
      does: ["Build and fix features in web and mobile apps, with code review on every change", "Write tests and help keep our builds green", "Pair with senior engineers on design and debugging", "Join stand-ups, demos and client calls to see how projects run", "Document what you build so the next person can pick it up", "Own a small module of your own within your first few months"],
      bring: ["A degree in CS, IT or a related field (recent graduates welcome)", "Solid basics in one language: JavaScript, Python, Java or Dart", "Data structures, Git and how the web works", "Curiosity, and the habit of asking when stuck"],
      nice: ["Projects on GitHub, a hackathon or an internship", "Any React, Flutter or SQL experience"] },
    { slug: "flutter-mobile-developer", t: "Flutter Mobile Developer", team: "Engineering", loc: "csn", type: "On-site", exp: "1–3 yrs", lvl: "Junior", ic: "phone",
      about: "Build cross-platform apps for factories, farms and field teams: apps people use all day, often on budget Android phones with patchy networks.",
      does: ["Build and ship Flutter apps for Android and iOS", "Turn designs into smooth, accessible screens", "Integrate REST APIs, offline storage and sync", "Profile and fix performance on low-end devices", "Publish releases to the Play Store and App Store", "Review code and write tests with the team"],
      bring: ["1–3 years building Flutter apps in Dart", "At least one app shipped to a store", "State management (Bloc, Riverpod or Provider) and REST APIs", "Comfort with Git and code review"],
      nice: ["Native Android (Kotlin) or iOS (Swift)", "Offline-first or Bluetooth device apps", "Firebase, push notifications or CI for mobile"] },
    { slug: "machine-learning-engineer", t: "Machine Learning Engineer", team: "AI", loc: "csn", type: "On-site", exp: "2–4 yrs", lvl: "Mid-level", ic: "ai",
      about: "Take machine learning out of notebooks and into products: vision on factory lines, forecasting for operations, document AI for back offices.",
      does: ["Frame business problems as ML problems with the client team", "Collect, clean and label data, and build training pipelines", "Train, evaluate and tune models for vision, forecasting or NLP", "Deploy models as APIs or on edge devices, and monitor them", "Explain results in plain words to non-technical clients", "Own an ML feature from first experiment to production"],
      bring: ["2–4 years of hands-on ML work, with a model in production", "Strong Python, with PyTorch or TensorFlow and scikit-learn", "A sound grasp of evaluation, overfitting and data leakage", "SQL and comfort with messy real-world data"],
      nice: ["Computer vision or time-series experience", "Docker, MLOps tools (MLflow, DVC) or edge deployment", "LLM work: retrieval, evaluation or fine-tuning"] },
    { slug: "embedded-systems-engineer", t: "Embedded Systems Engineer", team: "Hardware", loc: "csn", type: "On-site", exp: "2–4 yrs", lvl: "Mid-level", ic: "iot",
      about: "Design the firmware and electronics that connect machines and sensors to our software, from bench prototype to devices running in the field.",
      does: ["Write firmware in C/C++ for ESP32, STM32 and similar microcontrollers", "Bring up boards and debug with scope, logic analyser and multimeter", "Integrate sensors and protocols: Modbus, I2C, SPI, UART and MQTT", "Build OTA updates and reliable low-power operation", "Work with software engineers on device-to-cloud data", "Test and install devices on site with clients"],
      bring: ["2–4 years of embedded C/C++ in shipped products", "Comfort with schematics and lab instruments", "Experience with an RTOS (FreeRTOS or Zephyr)", "Hands-on work with industrial or field protocols"],
      nice: ["PCB design (KiCad or Altium)", "Embedded Linux", "Industrial IoT or PLC exposure"] },
    { slug: "devops-engineer", t: "DevOps Engineer", team: "Engineering", loc: "csn", type: "Hybrid", exp: "3–5 yrs", lvl: "Senior", ic: "cloud",
      about: "Own the platform our client systems run on: cloud, pipelines, monitoring and security, so releases are boring and outages are rare.",
      does: ["Design and run cloud infrastructure on AWS, Azure or GCP with Terraform", "Build the CI/CD pipelines every team uses", "Set up monitoring, alerting and on-call that people trust", "Harden systems: secrets, backups, access and patching", "Plan capacity and keep cloud costs honest", "Mentor engineers on deployment and reliability"],
      bring: ["3–5 years in DevOps, SRE or platform roles", "Strong Linux, networking and scripting (Bash, Python)", "Docker and Kubernetes in production", "Infrastructure as code (Terraform or similar)"],
      nice: ["Security certifications or compliance work", "On-prem or hybrid deployments for regulated clients", "Observability stacks (Prometheus, Grafana, OpenTelemetry)"] },
    { slug: "ui-ux-designer", t: "UI/UX Designer", team: "Design", loc: "csn", type: "On-site", exp: "0–2 yrs", lvl: "Junior", fresh: 1, ic: "eye",
      about: "Design software people use at work: dashboards, apps for field teams, tools for factory floors. Clarity beats decoration here.",
      does: ["Talk to users and watch how they work, on site where possible", "Turn findings into flows, wireframes and prototypes", "Design clean, accessible interfaces in Figma", "Build and maintain our design system with engineers", "Test designs with real users and iterate", "Hand over specs developers can build without guessing"],
      bring: ["A portfolio that shows your process, not just final screens", "Strong Figma skills", "Layout, typography and accessibility basics", "Clear writing for labels, errors and empty states"],
      nice: ["Design for multilingual users (Marathi, Hindi)", "Basic HTML and CSS", "Motion or data-visualisation work"] },
    { slug: "full-stack-developer", t: "Full-Stack Developer", team: "Engineering", loc: "remote", type: "Remote", exp: "1–3 yrs", lvl: "Junior/Mid", ic: "web",
      about: "Build web apps end to end for clients across industries, working remotely from anywhere in India with a team that writes things down.",
      does: ["Build features across React front ends and Node.js or Python back ends", "Design APIs and database schemas (PostgreSQL)", "Write tests and keep pull requests small and reviewable", "Deploy to the cloud and fix what breaks", "Write clear async updates and docs for a distributed team", "Join the team's regular video syncs and demos"],
      bring: ["1–3 years building production web apps", "React and TypeScript, plus Node.js or Python", "SQL and REST API design", "A reliable home setup and good written English"],
      nice: ["Next.js, GraphQL or WebSockets", "Docker and CI/CD", "Previous remote work"] },
    { slug: "technical-writer", t: "Technical Writer / Documentation Engineer", team: "Engineering", loc: "remote", type: "Remote", exp: "0–2 yrs", lvl: "Junior", fresh: 1, ic: "doc",
      about: "Make our systems easy to understand: API references, user guides, handover documents and the internal wiki new engineers learn from.",
      does: ["Write and maintain API docs, user guides and release notes", "Interview engineers and turn what they know into clear pages", "Test products yourself so the steps in the docs actually work", "Keep handover documentation complete for every client project", "Own our docs tooling and style guide", "Edit READMEs, proposals and in-app text for clarity"],
      bring: ["Excellent written English, with samples to share", "Comfort reading code or APIs, even if you don't write much", "Markdown and Git basics", "Attention to detail and a habit of asking why"],
      nice: ["A CS or engineering background", "Docs-as-code tools (Docusaurus, MkDocs, OpenAPI)", "Writing in Marathi or Hindi"] },
    { slug: "ai-ml-engineer", t: "AI/ML Engineer", team: "AI", loc: "remote", type: "Remote", exp: "3–5 yrs", lvl: "Senior", ic: "ai",
      about: "Lead the AI side of client projects, remotely: from scoping what is worth building to running models and LLM systems in production.",
      does: ["Scope AI projects with clients, and say no to the ones that won't pay off", "Design and build LLM, retrieval and classical ML systems", "Set up evaluation, so we know when a model is good enough", "Deploy, monitor and cost-tune models in production", "Review code and models from other engineers", "Mentor our ML engineers and interns"],
      bring: ["3–5 years in ML engineering, with systems in production", "Expert Python and PyTorch or TensorFlow", "LLM application work: retrieval, prompting and evaluation", "Cloud deployment and MLOps practice"],
      nice: ["Published research or open-source work", "Fine-tuning or serving open models", "Experience leading a small team"] },
    { slug: "bioinformatics-research-engineer", t: "Bioinformatics Research Engineer", team: "R&D", loc: "sc", type: "On-site", exp: "2–5 yrs", lvl: "Mid-level", ic: "flask",
      about: "Join our R&D department in Santa Cruz and build the software side of our bioinformatics and life-sciences research: pipelines, tools and models for biological data.",
      does: ["Build and maintain reproducible pipelines for sequencing data", "Develop tools for genomic and protein data analysis", "Benchmark algorithms and write up the results", "Work with researchers to turn questions into analyses", "Run workloads on cloud and HPC, and keep costs in check", "Contribute to papers, posters and open-source releases"],
      bring: ["An MS or PhD in bioinformatics, computational biology or a related field, or equivalent experience", "2–5 years of research or industry bioinformatics", "Strong Python or R, Linux and the command line", "NGS data and standard tools (for example BWA, GATK, samtools)"],
      nice: ["Workflow managers: Nextflow or Snakemake", "Machine learning on biological data", "Cloud or HPC cluster experience"] }
  ];
  var INTERNS = [
    { slug: "software-engineering-intern", t: "Software Engineering Intern", team: "Engineering", loc: "csn", type: "On-site", dur: "6 months", ic: "code",
      who: "Final-year students and recent graduates in CS, IT or a related field.",
      learn: ["How production software is planned, reviewed and shipped", "Git workflows, code review and testing", "Working with real clients and deadlines", "React, Node.js, Flutter or Python, depending on your project"],
      does: ["Build features on a live client or internal project", "Fix bugs and write tests", "Join stand-ups, demos and retros", "Present what you built at the end"],
      mentor: "A senior engineer mentors you for the whole six months, with a weekly one-to-one.",
      after: "Strong interns may get a full-time offer as an Associate Software Engineer." },
    { slug: "ai-ml-research-intern", t: "AI/ML Research Intern", team: "AI", loc: "remote", type: "Remote", dur: "3–6 months", ic: "ai",
      who: "Current Bachelor's or Master's students, and recent graduates, with a strong maths and Python base.",
      learn: ["How to frame a research question and design experiments", "Model evaluation that holds up to scrutiny", "Reading papers and reproducing results", "Writing up findings clearly"],
      does: ["Run experiments on vision, NLP or LLM problems", "Clean and prepare datasets", "Reproduce a paper and benchmark against it", "Share results in weekly reviews"],
      mentor: "A senior AI engineer mentors you, with a weekly video one-to-one and written reviews.",
      after: "Strong interns may get a full-time offer on our AI team." },
    { slug: "bioinformatics-research-intern", t: "Bioinformatics Research Intern", team: "R&D", loc: "sc", type: "On-site", dur: "3–6 months", ic: "flask",
      who: "Current Master's or PhD students, and recent graduates, in bioinformatics, computational biology, biology or CS.",
      learn: ["Building reproducible pipelines for biological data", "NGS data formats and standard tools", "Working in a research team to real deadlines", "Presenting results to scientists"],
      does: ["Help build and test analysis pipelines", "Analyse genomic or protein datasets", "Benchmark tools and document the results", "Present your project at the end"],
      mentor: "A researcher in our Santa Cruz R&D department mentors you, with weekly check-ins.",
      after: "Strong interns may get a full-time offer in R&D." },
    { slug: "iot-hardware-intern", t: "IoT & Hardware Intern", team: "Hardware", loc: "csn", type: "On-site", dur: "6 months", ic: "iot",
      who: "Final-year students and recent graduates in electronics, E&TC, electrical or instrumentation.",
      learn: ["Microcontroller firmware in C/C++", "Sensors, protocols and board bring-up", "Connecting devices to cloud dashboards", "Field testing with real clients"],
      does: ["Build and test prototypes on the bench", "Write firmware for ESP32 or STM32 boards", "Help install devices on client sites", "Document wiring, firmware and test results"],
      mentor: "A senior embedded engineer mentors you for the whole six months, with a weekly one-to-one.",
      after: "Strong interns may get a full-time offer as an Embedded Systems Engineer." }
  ];
  var LEVELS = {
    "Entry-level": "You learn our stack with a mentor and work on real tickets from your first week, with review on everything you ship. Growth means owning small modules on your own: the step up to Junior.",
    "Junior": "You work with guidance and own small modules: a screen, an endpoint, a set of docs. Growth means needing less direction and taking features end to end: the step up to Mid-level.",
    "Junior/Mid": "We place you at Junior or Mid based on your experience. Junior works with guidance and owns small modules; Mid owns features end to end. Either way, growth means more ownership and less direction.",
    "Mid-level": "You own features end to end: design, build, test, ship and support, and you make sensible calls without being asked. Growth means owning whole systems and mentoring others: the step up to Senior.",
    "Senior": "You own systems, not just features. You set technical direction with the leads and mentor the people around you. Growth means leading larger projects or a team, or going deeper as a specialist."
  };
  var HIRE = [["Apply", "Use the form on the role's page. A person reads every application."], ["Intro call", "30 minutes about you, the role and your questions."], ["Practical task", "A short task close to the real work. No trick puzzles."], ["Team conversation and offer", "Meet the people you'd work with, then a clear offer in writing."]];
  var IHIRE = [["Apply", "Use the form on this page."], ["Short call", "20 minutes about you and what you want to learn."], ["Small task", "A take-home task sized for students."], ["Offer", "A written offer with your dates and terms."]];
  var CFAQ = [["Do you hire freshers?", "Yes. Look for the Fresher welcome tag on a role, or apply for an internship."], ["Is remote work possible?", "Yes. Some roles are fully remote within India. Most are on-site at our HQ in Chhatrapati Sambhajinagar, and R&D roles sit in Santa Cruz, USA."], ["How long does hiring take?", "Typically two to three weeks."]];
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
    var at = ' class="x-input" id="' + id + '" name="' + id + '" data-l="' + label + '" aria-describedby="' + id + '-e' + (o.hint ? " " + id + "-h" : "") + '"' + (o.req ? " required" : "") + (o.auto ? ' autocomplete="' + o.auto + '"' : "") + (type === "tel" ? ' inputmode="tel"' : type === "email" ? ' inputmode="email" autocapitalize="off" spellcheck="false"' : "") + (o.accept ? ' accept="' + o.accept + '"' : "") + (o.or ? ' data-or="' + o.or + '"' : "") + (o.max ? ' maxlength="' + o.max + '"' : "");
    var ctl = type === "select" ? "<select" + at + '><option value="">Choose one</option>' + map(o.opts, function (v) { return '<option value="' + esc(v) + '"' + (o.val === v ? " selected" : "") + ">" + esc(v) + "</option>"; }) + "</select>"
      : type === "textarea" ? "<textarea" + at + ' rows="5"></textarea>' : '<input type="' + type + '"' + at + " />";
    return '<div class="x-field' + (o.full ? " x-field--full" : "") + '"><label for="' + id + '">' + esc(label) + (o.req || o.or ? "" : ' <span class="x-opt">(optional)</span>') + "</label>" + ctl + (o.hint ? '<p class="x-hint" id="' + id + '-h">' + o.hint + "</p>" : "") + (o.max ? '<p class="x-hint x-cnt" id="' + id + '-c" aria-live="polite">0 / ' + o.max + "</p>" : "") + '<p class="x-err" id="' + id + '-e" aria-live="polite"></p></div>';
  }
  // Honeypot (Web3Forms "botcheck"), the inline error state with Retry, then Send and the email fallback.
  function foot(label, mail) {
    return '<input type="checkbox" name="botcheck" class="x-hp" tabindex="-1" autocomplete="off" aria-hidden="true" />' +
      '<div class="x-formerr" role="alert" data-status hidden></div>' +
      '<div class="x-field--full x-formfoot"><button class="x-btn x-btn--primary" type="submit">' + label + '</button><p>Prefer email? Write to <a href="mailto:' + mail + '">' + mail + "</a></p></div>";
  }

  // About is two pages: Our story (#/about, with Our beliefs at #/about/beliefs) and Leadership (#/about/leadership).
  var KEEP = [["#/about", "Our story"], ["#/about/leadership", "Leadership"], ["#/impact", "Teach as we build"]];
  function keepReading(cur) {
    return S("", "padding-block:48px", '<nav class="x-keep x-rv" aria-label="Keep reading"><p class="x-keep__l">Keep reading</p><ul>' + map(KEEP.filter(function (k) { return k[0] !== cur; }), function (k) { return '<li><a class="x-arrow" href="' + k[0] + '">' + k[1] + " " + ARR + "</a></li>"; }) + "</ul></nav>");
  }
  function calmHero(eb, h1, sub) { return '<section class="x-band x-band--calm"><div class="x-wrap x-rv"><ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/about">About us</a></li><li aria-current="page">' + eb + '</li></ol><p class="x-eyebrow">' + eb + '</p><h1 class="x-h1 x-h1--sm">' + esc(h1) + '</h1><p class="x-lead">' + esc(sub) + "</p></div></section>"; }
  // Leaders, read from the team store so names, roles, notes and photos stay in one place.
  function leaders() {
    return [].map.call($("teamStore").querySelectorAll(".x-person"), function (li) {
      var im = li.querySelector("img"), m = li.querySelector(".x-mail"), pn = li.querySelector(".x-pnote"), sg = li.querySelector(".x-pnote__sign");
      var tone = pn.classList.contains("x-pnote--sky") ? "sky" : pn.classList.contains("x-pnote--mint") ? "sage" : "sun";
      return { k: li.getAttribute("data-p"), src: im.getAttribute("src"), alt: im.getAttribute("alt"), role: li.querySelector(".x-pnote__role").textContent, name: li.querySelector(".x-pnote__name").textContent, desc: li.querySelector(".x-pnote__desc").textContent, sign: sg ? sg.textContent : "", tone: tone, mail: m.getAttribute("href"), mailT: m.textContent };
    });
  }
  // Our beliefs, a section of Our story (#/about/beliefs scrolls to it): intro, pinboard, then one section per belief.
  function beliefsSection() {
    return '<section class="x-blf" id="beliefs" data-sub="beliefs" tabindex="-1" aria-labelledby="beliefsTitle">' +
      '<div class="x-blf__intro"><div class="x-wrap"><header class="x-blf__head x-rv"><p class="x-eyebrow">Our beliefs</p><h2 class="x-h2" id="beliefsTitle">What we believe.</h2><p class="x-lead">Five things we hold to on every project.</p></header>' +
      '<ol class="x-beliefs x-rv" aria-label="Our five beliefs">' + map(BELIEFS, function (b, i) { return '<li class="x-belief x-note--' + b[0] + ' x-note--tape" style="--r:' + b[1] + '"><span class="x-belief__n" aria-hidden="true">0' + (i + 1) + '</span><h3 class="x-belief__t">' + esc(b[2]) + '</h3><p>' + esc(b[3]) + "</p></li>"; }) + "</ol></div></div>" +
      map(BELIEFS, function (b, i) {
        var n = "0" + (i + 1);
        return '<section class="x-bdeep' + (i % 2 ? " x-bdeep--flip x-mist" : "") + '" id="belief-' + (i + 1) + '" aria-labelledby="belief-' + (i + 1) + '-t"><div class="x-wrap"><div class="x-bdeep__in">' +
          '<div class="x-bdeep__num x-rv" aria-hidden="true"><span class="x-bdeep__n">' + n + '</span><span class="x-bdeep__of">' + n + " / 05</span></div>" +
          '<div class="x-bdeep__body x-rv"><p class="x-eyebrow">Belief ' + n + '</p><h3 class="x-bdeep__t" id="belief-' + (i + 1) + '-t">' + esc(b[2]) + '</h3><p class="x-bdeep__line">' + esc(b[3]) + "</p>" +
          '<p class="x-bdeep__lbl">In practice</p><ul class="x-bdeep__list">' + map(PRACTICE[i], function (p) { return "<li>" + CHK + esc(p) + "</li>"; }) + "</ul></div></div></div></section>";
      }) + "</section>";
  }
  function viewLeadership() {
    var L = leaders();
    return calmHero("Leadership", "The people who lead PRAVAHAx.", "The executives who guide PRAVAHAx and stand behind every engagement.") +
      S("", "padding-top:clamp(32px,4vw,56px)",
        '<ul class="x-lgrid" aria-label="Leadership team">' + map(L, function (p, i) {
          return '<li class="x-lcard x-rv" id="sec-' + p.k + '" data-sub="' + p.k + '" tabindex="-1">' +
            '<div class="x-lcard__trig" tabindex="0" role="button" aria-expanded="false" aria-controls="lnote-' + p.k + '" aria-label="About ' + esc(p.name) + '"><div class="x-lcard__img"><img src="' + p.src + '" alt="' + esc(p.alt) + '" loading="lazy" /></div></div>' +
            '<div class="x-lnote x-lnote--' + p.tone + '" id="lnote-' + p.k + '"><p>' + esc(p.desc) + "</p>" + (p.sign ? '<p class="x-lnote__sign" aria-hidden="true">' + esc(p.sign) + "</p>" : "") + "</div>" +
            '<div class="x-lcard__body"><p class="x-lcard__idx x-mono" aria-hidden="true">0' + (i + 1) + '</p><h3 class="x-h3">' + esc(p.name) + '</h3><p class="x-lcard__role">' + esc(p.role) + '</p><a class="x-lmail" href="' + p.mail + '" aria-label="Email ' + esc(p.name) + ', ' + esc(p.mailT) + '"><span class="x-lmail__ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg></span><span class="x-lmail__t">' + esc(p.mailT) + "</span></a></div></li>";
        }) + "</ul>") +
      keepReading("#/about/leadership") + cta();
  }
  function viewAbout() {
    return '<section class="x-sec x-story2" aria-labelledby="storyTitle"><div class="x-wrap">' +
        '<header class="x-story2__head x-rv"><p class="x-eyebrow">Our story</p><h1 class="x-h1" id="storyTitle">Making information flow.</h1><p class="x-fact">PRAVAHAx Systems Engineering · Software and applied AI engineering · Chhatrapati Sambhajinagar, India</p></header>' +
        '<div class="x-notesrow x-rv" aria-label="What our name means" role="group">' + map(NAMENOTES, function (n) { return '<p class="x-note x-note--' + n[0] + ' x-note--tape" style="--r:' + n[1] + '">' + esc(n[2]) + "</p>"; }) + "</div>" +
        '<div class="x-read x-rv"><p>PRAVAHA means flow. We started PRAVAHAx to help businesses make information flow, from machines, fields and offices to the people who decide.</p><p>Today PRAVAHAx brings together software engineers, AI specialists, hardware designers and consultants, led by an experienced executive team, taking responsibility for every system from first conversation to long-term support.</p>' +
        '<div class="x-read__close"><p>Engineering with ownership.</p><div class="x-btns">' + btn("primary", "#/contact", "Start a project") + btn("line", "#/careers", "Join the team") + "</div></div></div></div></section>" +
      beliefsSection() +
      S("x-mist", "", '<div class="x-split"><div class="x-frame x-rv"><img src="' + pic("reading-room.webp") + '" alt="The Reading Room at the PRAVAHAx office" loading="lazy" /></div><div class="x-rv"><p class="x-eyebrow">Where we work</p><h2 class="x-h2">Come and see us in Chhatrapati Sambhajinagar.</h2><div class="x-box" style="margin-top:28px"><span class="x-ico">' + svg("pin") + '</span><h3 class="x-h3">Our office</h3><address class="x-addr">B-604 Kasliwal Marvel West, Satara, Beed By Pass,<br />Chhatrapati Sambhajinagar, Maharashtra 431001, India</address><p class="x-addr" style="margin-top:12px"><strong style="color:var(--ink);font-weight:600">R&amp;D department:</strong> Santa Cruz, USA</p><div class="x-btns" style="margin-top:20px">' + fbtn("primary", "visit", "Plan a visit") + '<a class="x-btn x-btn--line" href="' + MAPS + '" target="_blank" rel="noopener">Open in Google Maps</a></div></div></div></div>') +
      SI("publications", "", '<div class="x-split" style="align-items:start"><div class="x-rv"><p class="x-eyebrow">Written by our team</p><h2 class="x-h2">Publications</h2><p class="x-lead">The same team that builds our systems wrote the textbooks students learn ICT from.</p></div>' +
        '<div class="x-box x-rv"><span class="x-ico">' + svg("book") + '</span><h3 class="x-h3">ICT textbook series, Classes 8–10</h3><p>Written by our team in Marathi and English for school students learning information and communication technology.</p></div></div>') +
      S("x-mist", "", head("Beyond client work", "Research and classrooms.") + '<div class="x-grid x-grid--2">' +
        '<a class="x-box x-rv" href="#/labs"><span class="x-ico">' + svg("search") + '</span><h3 class="x-h3">PRAVAHAx Labs</h3><p>Research we\'re doing beyond client work.</p><span class="x-arrow">Visit Labs ' + ARR + "</span></a>" +
        '<a class="x-box x-rv" href="#/impact"><span class="x-ico">' + svg("school") + '</span><h3 class="x-h3">Teach as we build</h3><p>Coding, electronics, books and leaders\u2019 birthdays in schools.</p><span class="x-arrow">See our social impact ' + ARR + "</span></a></div>") +
      keepReading("#/about") + cta();
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
      S("x-dark x-ctaband", "", '<div class="x-cta x-rv">' + MARK + '<p class="x-eyebrow">PRAVAHAx Systems Engineering</p><h2 class="x-h2">Got a question worth chasing?</h2><p class="x-lead">Researchers, students and partners: we\u2019d love to compare notes.</p><div class="x-btns">' + fbtn("primary", "research", "Propose a collaboration") + btn("ghost", "mailto:hello@pravahax.com", "Write to hello@pravahax.com") + btn("ghost", "#/careers", "Explore careers") + "</div></div>");
  }

  // Teach as we build. [icon, title, one-line description, tag, drafted]
  // Entries marked drafted (the last six) are new copy, drafted for client review.
  var IMPACT = [["school", "Coding and electronics visits", "We teach kids to code and wire up circuits. A blinking LED gets a round of applause.", "In class", 0],
    ["gift", "Leaders' birthdays, celebrated in schools", "No cake. Instead: notebooks, stationery, story books, sports kit and a meal with every child.", "No cake", 0],
    ["book", "Books and school kits", "Books, notebooks and school kits at the start of the year, before the first homework lands.", "Start of the year", 0],
    ["flask", "Science you can touch", "Experiments with things from the kitchen. Some of them even work the first time.", "Science", 1],
    ["iot", "Build-a-robot hour", "Motors, sensors and a lot of excited shouting.", "Robotics", 1],
    ["users", "\u201cWhat does an engineer actually do?\u201d", "Career chats with real people from our team. Spoiler: lots of meetings.", "Careers", 1],
    ["lock", "Internet street-smarts", "Passwords, scams and why that free game wants your mum\u2019s phone number.", "Online safety", 1],
    ["ball", "Game day", "Cricket, kabaddi and our engineers losing graciously.", "Sports", 1],
    ["shelf", "Library corner", "We stock a shelf; the kids pick what goes on it.", "Reading", 1]];
  I.ball = '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6c2.6 2.6 2.6 10.2 0 12.8M18.4 5.6c-2.6 2.6-2.6 10.2 0 12.8"/>' + dot(12, 12, 1.3);
  I.shelf = '<path d="M3.5 20.5h17M3.5 11.5h17M5 11.5v-6h2.5v6M8.5 11.5v-7H11v7M14 11.5l1.4-6.4 2.4.5-1.4 5.9M5.5 20.5v-6H8v6M9.5 20.5v-5H12v5"/>' + sq(15, 16.5, 3);
  var SCHOOLDAY = [["We arrive with a kit", "Notebooks, stationery and story books. Someone always carries the heavy box."], ["Students build something small", "A first program or a simple circuit. It usually works on the second try."], ["We read together", "Story books for the school library. The engineers do the voices."], ["We share a meal", "With every child in the school. The best review we get all week."]];
  var IMPNOTES = [["sun", "-4deg", "Hard questions welcome."], ["sky", "3deg", "Bring spare batteries."], ["sage", "-2deg", "Who\u2019s teaching whom?"]];
  function viewImpact() {
    var tones = ["sun", "sky", "sage"];
    return '<section class="x-band x-labhero x-imphero" aria-labelledby="impTitle"><div class="x-wrap x-split"><div class="x-rv">' +
        '<ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/about">About us</a></li><li aria-current="page">Teach as we build</li></ol>' +
        '<p class="x-eyebrow">Out of the office</p><h1 class="x-h1 x-h1--sm" id="impTitle">Teach as we build.</h1><p class="x-lead x-imphero__sub">Engineers, let loose in classrooms. The kids usually win.</p></div>' +
        '<div class="x-labnotes x-rv" aria-hidden="true">' + map(IMPNOTES, function (n) { return '<p class="x-note x-note--' + n[0] + ' x-note--tape" style="--r:' + n[1] + '">' + esc(n[2]) + "</p>"; }) + "</div></div></section>" +
      S("", "", '<div class="x-manifesto x-rv"><p class="x-eyebrow">Why we do it</p><p class="x-manifesto__t">We build software all week. Once in a while we take it to a classroom, where the questions are harder and the audience is far more honest. We bring the kit; they bring the curiosity, and nobody leaves without learning something.</p></div>') +
      S("x-mist", "", head("In schools", "What we get up to.") + '<ul class="x-pgrid">' + map(IMPACT, function (d, i) {
        return (d[4] && !IMPACT[i - 1][4] ? "<!-- Drafted for client review: the six programmes below are new copy. -->" : "") +
          '<li class="x-rv"><article class="x-pcard"><span class="x-ico">' + svg(d[0]) + '</span><h3 class="x-pcard__t">' + esc(d[1]) + '</h3><p class="x-pcard__d">' + esc(d[2]) + '</p><span class="x-pcard__tag x-pcard__tag--' + tones[i % 3] + '">' + esc(d[3]) + "</span></article></li>";
      }) + "</ul>") +
      S("", "", '<div class="x-head x-rv" style="justify-content:center;text-align:center"><div><p class="x-eyebrow">How a visit goes</p><h2 class="x-h2">A school day with us.</h2></div></div>' + steps(SCHOOLDAY)) +
      S("", "padding-top:0", '<div class="x-warm x-rv"><p class="x-eyebrow">Teach as we build</p><h2 class="x-h2">Know a school we should visit?</h2><p class="x-lead">Tell us where it is and what the children need. We reply within 1 business day.</p><div class="x-btns">' + fbtn("primary", "school", "Suggest a school") + btn("line", "mailto:hello@pravahax.com", "hello@pravahax.com") + "</div></div>");
  }

  // ---- Careers: roles first, a page per role and per internship, each with its own form ----
  var DRAFT = "<!-- DRAFT – client to review -->";
  function crumb(a, cur) { return '<ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb">' + map(a, function (l) { return '<li><a href="' + l[0] + '">' + l[1] + "</a></li>"; }) + '<li aria-current="page">' + esc(cur) + "</li></ol>"; }
  function jtags(a) { return '<ul class="x-jtags">' + map(a, function (t) { return '<li class="x-jtag' + (t[1] ? " x-jtag--" + t[1] : "") + '">' + esc(t[0]) + "</li>"; }) + "</ul>"; }
  function roleTags(r) { return [[r.lvl, "lvl"]].concat(r.fresh ? [["Fresher welcome", "fresh"]] : []); }
  // Careers list: plain hairline rows grouped by department; each whole row is one link with one arrow.
  var DEPTS = ["Engineering", "AI", "Hardware", "Design", "R&D"];
  function catKey(t) { return t.toLowerCase().replace(/[^a-z]/g, ""); }
  var JF = {
    cat: [["", "All categories"]].concat(DEPTS.map(function (d) { return [catKey(d), d]; })),
    loc: [["", "All locations"], ["csn", "Chhatrapati Sambhajinagar"], ["sc", "Santa Cruz, USA (R&D)"], ["remote", "Remote"]],
    type: [["", "All types"], ["full", "Full-time"], ["intern", "Internship"]]
  };
  var JFL = { cat: "Category", loc: "Location", type: "Type" };
  function jrow(x, intern) {
    // Three columns on desktop: title | location · type | experience (or duration), then one arrow. Phones fold the last two into one muted line.
    var exp = intern ? x.dur : (x.exp === "Fresher" ? "Fresher" : x.exp + " experience") + (x.fresh && x.exp !== "Fresher" ? ", freshers welcome" : "");
    return DRAFT + '<li data-cat="' + catKey(x.team) + '" data-loc="' + x.loc + '" data-type="' + (intern ? "intern" : "full") + '"><a class="x-jrow" href="#/careers/' + (intern ? "internship/" : "role/") + x.slug + '">' +
      '<span class="x-jrow__t">' + esc(x.t) + '</span><span class="x-jrow__m"><span class="x-jrow__lt">' + esc(LOCS[x.loc] + " · " + x.type) + '</span><span class="x-jrow__e">' + esc(exp) + '</span></span><span class="x-jrow__a">' + ARR + "</span></a></li>";
  }
  function jgroup(h, list, intern, g) { return list.length ? '<div class="x-jgroup" data-g="' + g + '"><h3 class="x-jgroup__h">' + esc(h) + ' <span aria-hidden="true">·</span> <span class="x-jgroup__n">' + list.length + "</span></h3><ul class=\"x-jrows\">" + map(list, function (x) { return jrow(x, intern); }) + "</ul></div>" : ""; }
  function jlistAll() {
    return map(DEPTS, function (d) { return jgroup(d, ROLES.filter(function (r) { return r.team === d; }), false, catKey(d)); }) + jgroup("Internships", INTERNS, true, "intern");
  }
  function jfilters() {
    return '<div class="x-jfbar"><p class="x-count" id="roleCount" aria-live="polite"></p><div class="x-jfctl"><button class="x-linkbtn" type="button" id="jfClear" hidden>Clear</button><button class="x-btn x-btn--line x-jfopen" type="button" aria-expanded="false" aria-controls="jfSheet" data-jfopen>Filter<span class="x-jfn" id="jfN"></span></button>' +
      '<div class="x-jfscrim" data-jfclose hidden></div><div class="x-jfsheet" id="jfSheet" role="group" aria-label="Filter roles"><div class="x-jfsheet__head"><p>Filter roles</p><button class="x-jfx" type="button" data-jfclose aria-label="Close filters">&times;</button></div>' +
      map(["cat", "loc", "type"], function (k) { return '<div class="x-jfsel"><label for="jf-' + k + '">' + JFL[k] + '</label><select class="x-jfin" id="jf-' + k + '" data-k="' + k + '" aria-controls="jobList">' + map(JF[k], function (o) { return '<option value="' + o[0] + '">' + esc(o[1]) + "</option>"; }) + "</select></div>"; }) +
      '<button class="x-btn x-btn--primary x-jfdone" type="button" data-jfclose>Show results</button></div></div></div>';
  }
  function jsec(h, body) { return '<div class="x-jd__sec x-rv"><h2>' + esc(h) + "</h2>" + body + "</div>"; }
  function jlist(a, soft) { return '<ul class="x-jlist' + (soft ? " x-jlist--soft" : "") + '">' + map(a, function (x) { return "<li>" + esc(x) + "</li>"; }) + "</ul>"; }
  function jsteps(a) { return '<ol class="x-jsteps">' + map(a, function (s) { return "<li><strong>" + esc(s[0]) + "</strong><p>" + esc(s[1]) + "</p></li>"; }) + "</ol>"; }
  function lockField(id, label, v, hint) {
    return '<div class="x-field x-field--full"><label for="' + id + '">' + label + '</label><input type="text" class="x-input" id="' + id + '" name="' + id + '" data-l="' + label + '" value="' + esc(v) + '" readonly aria-readonly="true" aria-describedby="' + id + "-h " + id + '-e" /><p class="x-hint" id="' + id + '-h">' + hint + '</p><p class="x-err" id="' + id + '-e" aria-live="polite"></p></div>';
  }
  function consent(id, what, msg) {
    return '<fieldset class="x-field x-field--full" id="' + id + '" data-req="' + (msg || "Please tick the box to send your application.") + '" data-group="Consent:" aria-describedby="' + id + '-e"><legend class="x-vh">Consent</legend><label class="x-consent"><input type="checkbox" name="' + id + '" value="I agree" /><span>I agree that PRAVAHAx may store and use my details to assess this ' + what + '. See our <a href="#/privacy" target="_blank" rel="noopener">privacy note</a>.</span></label><p class="x-err" id="' + id + '-e" aria-live="polite"></p></fieldset>';
  }
  // Application forms. Location blocks follow the role: India roles ask about relocation and CTC in ₹ LPA,
  // Santa Cruz roles always ask about US work authorisation (no INR fields), remote roles ask about time zone when outside India.
  var CC = [["+91", "+91 India"], ["+1", "+1 US/Canada"], ["+44", "+44 UK"], ["+971", "+971 UAE"], ["+65", "+65 Singapore"], ["+61", "+61 Australia"], ["+49", "+49 Germany"], ["+977", "+977 Nepal"], ["+880", "+880 Bangladesh"], ["+94", "+94 Sri Lanka"], ["Other", "Other"]];
  var COUNTRIES = ["India", "United States", "United Kingdom", "Canada", "United Arab Emirates", "Singapore", "Australia", "Germany", "Nepal", "Bangladesh", "Sri Lanka", "Other"];
  function phoneField(p) {
    return '<div class="x-field"><label for="' + p + '-phone">Phone</label><div class="x-tel"><select class="x-input x-tel__cc" id="' + p + '-cc" name="' + p + '-cc" data-l="Country code" aria-label="Country code" aria-describedby="' + p + '-cc-e">' +
      map(CC, function (c) { return '<option value="' + c[0] + '"' + (c[0] === "+91" ? " selected" : "") + ">" + esc(c[1]) + "</option>"; }) + '</select><input type="tel" class="x-input" id="' + p + '-phone" name="' + p + '-phone" data-l="Phone" required autocomplete="tel-national" inputmode="tel" aria-describedby="' + p + '-phone-e" /></div>' +
      '<p class="x-err" id="' + p + '-cc-e"></p><p class="x-err" id="' + p + '-phone-e" aria-live="polite"></p></div>';
  }
  function radios(id, legend, opts, val) {
    return '<fieldset class="x-field x-field--full" id="' + id + '" data-group="' + esc(legend) + '" data-req="Please choose one." aria-describedby="' + id + '-e"><legend>' + esc(legend) + '</legend><div class="x-pick">' +
      map(opts, function (v) { return '<label><input type="radio" name="' + id + '" value="' + esc(v) + '"' + (val === v ? " checked" : "") + " /><span>" + esc(v) + "</span></label>"; }) + '</div><p class="x-err" id="' + id + '-e" aria-live="polite"></p></fieldset>';
  }
  function cond(show, title, inner) { return '<div class="x-cond x-field--full"' + (show ? ' data-show="' + show + '" hidden' : "") + '><p class="x-cond__h">' + title + "</p>" + inner + "</div>"; }
  function locBlocks(p, loc, intern) {
    if (loc === "sc") return cond("", "Working in Santa Cruz, USA",
      radios(p + "-usauth", "Are you authorised to work in the US?", ["Yes", "No"]) + radios(p + "-spon", "Will you need visa sponsorship now or in the future?", ["Yes", "No"]) +
      radios(p + "-commute", "Can you commute or relocate to Santa Cruz, CA?", ["Yes, I can commute", "Yes, I'd relocate", "No"]) +
      (intern ? "" : field(p + "-usd", "Expected salary (USD per year)", "text", { req: 1, full: 1, hint: "For example: 95,000" })));
    var out = loc === "remote" ? cond("out", "Working remotely from outside India",
      field(p + "-tz", "Your time zone", "text", { req: 1, full: 1, hint: "For example: GMT+4, Dubai" }) +
      radios(p + "-overlap", "Can you overlap at least 4 hours with IST 10:00–19:00?", ["Yes", "Partly", "No"]) +
      radios(p + "-engage", "How would you like to work with us?", ["Employee via a local entity, if available", "Contractor"]))
      : cond("out", "Moving from outside India",
      radios(p + "-reloc", "Will you relocate to Chhatrapati Sambhajinagar?", ["Yes", "No", "Open to discuss"]) +
      radios(p + "-elig", "Your eligibility to work in India", ["Indian citizen", "OCI cardholder", "Needs an employment visa"]) +
      field(p + "-reltime", "Relocation timeline", "select", { req: 1, full: 1, opts: ["Within 1 month", "1–3 months", "3–6 months", "More than 6 months"] }));
    return out + (intern ? "" : field(p + "-ctc", "Current CTC (₹ LPA)", "text", { hint: "For example: 6.5" }) + field(p + "-ectc", "Expected CTC (₹ LPA)", "text", { req: 1, hint: "For example: 9" }));
  }
  function core(p) {
    return field(p + "-name", "Full name", "text", { req: 1, auto: "name" }) + field(p + "-email", "Email", "email", { req: 1, auto: "email" }) + phoneField(p) +
      field(p + "-country", "Country of residence", "select", { req: 1, opts: COUNTRIES, val: "India", auto: "country-name" }) + field(p + "-city", "City", "text", { req: 1, auto: "address-level2" }) +
      radios(p + "-out", "Do you currently live outside India?", ["No", "Yes"], "No");
  }
  function links(p, what) {
    return field(p + "-li", "LinkedIn", "url", { hint: "Starting with https://" }) + field(p + "-gh", "Portfolio or GitHub", "url") +
      field(p + "-cv", "Résumé (PDF, up to 5 MB)", "file", { full: 1, accept: ".pdf,application/pdf", or: p + "-cvlink", hint: "Can't upload? Add a link below instead." }) +
      field(p + "-cvlink", "Résumé link", "url", { full: 1, hint: "Drive or Dropbox, open to anyone with the link." });
  }
  function jform(kind, p, x, label, intern, middle) {
    return '<form class="x-form x-jform" novalidate data-kind="' + kind + '" data-loc="' + x.loc + '" data-done="Application received for ' + esc(x.t) + '. We reply within 5 working days.">' +
      lockField(p + "-role", label, x.t + " · " + LOCS[x.loc], "You're applying for this " + label.toLowerCase() + " only.") +
      '<input type="hidden" data-l="Location" value="' + esc(LOCS[x.loc]) + '" /><input type="hidden" data-l="Work type" value="' + esc(x.type + (intern ? " · Internship, " + x.dur : " · Full-time")) + '" />' +
      core(p) + middle + locBlocks(p, x.loc, intern) + links(p) +
      field(p + "-why", intern ? "Why this internship?" : "Why this role?", "textarea", { req: 1, full: 1, max: 500 }) +
      consent(p + "-ok", intern ? "internship application" : "application") + '<p class="x-hint x-field--full x-jready" aria-live="polite">Fill in the required fields to send.</p>' + foot("Send application", MAIL) + "</form>";
  }
  function roleForm(r) {
    return jform("job", "j", r, "Role", false,
      field("j-exp", "Total experience", "select", { req: 1, opts: ["Fresher", "Less than 1 year", "1–2 years", "2–3 years", "3–5 years", "5+ years"] }) +
      field("j-org", "Current or last company, or college", "text", { req: 1, auto: "organization" }) +
      field("j-notice", "Notice period", "select", { req: 1, opts: ["Available now", "15 days", "30 days", "60 days", "90 days"] }) + field("j-start", "Earliest start date", "date"));
  }
  function internForm(i) {
    return jform("intern", "i", i, "Internship", true,
      field("i-college", "College or university", "text", { req: 1, full: 1, auto: "organization" }) + field("i-degree", "Degree and branch", "text", { req: 1, hint: "For example: B.E. Computer Engineering" }) +
      field("i-year", "Year of study", "select", { req: 1, opts: ["1st year", "2nd year", "3rd year", "4th year", "5th year", "Master's", "PhD", "Graduated"] }) +
      field("i-grad", "Graduation year", "select", { req: 1, opts: ["2024 or earlier", "2025", "2026", "2027", "2028", "2029"] }) +
      field("i-dur", "Duration available", "select", { req: 1, opts: ["3 months", "4 months", "5 months", "6 months"] }) + field("i-start", "Earliest start date", "date", { req: 1 }));
  }
  function jdPage(o) {
    return DRAFT + '<section class="x-band x-band--calm"><div class="x-wrap"><div class="x-jdh"><div class="x-rv">' + crumb(o.crumbs, o.title) +
      '<p class="x-eyebrow">' + esc(o.eb) + '</p><h1 class="x-h1 x-jtitle">' + esc(o.title) + "</h1>" + jtags(o.tags) +
      '<div class="x-btns"><button class="x-btn x-btn--primary" type="button" data-jump="jform">' + o.apply + "</button></div></div>" +
      '<dl class="x-jfacts x-rv">' + map(o.facts, function (f) { return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }) + "</dl></div></div></section>" +
      S("", "", '<div class="x-jsplit"><div class="x-jd">' + o.secs + '</div><aside class="x-jpanel" id="jform" aria-labelledby="jformTitle"><div class="x-jpanel__head"><p class="x-eyebrow">Apply</p><h2 class="x-h2 x-jformhead" id="jformTitle" tabindex="-1">' + esc(o.formTitle) + '</h2><p class="x-hint">We reply within 5 working days.</p></div><div class="x-formcard">' + o.form + "</div></aside></div>");
  }
  var JNOTE = '<p class="x-jnote">Process and timelines may change depending on the role and location.</p>';
  function viewRole(r) {
    return jdPage({ crumbs: [["#/careers", "Careers"], ["#/careers/roles", "Open roles"]], title: r.t, eb: "Open role · " + r.team, tags: roleTags(r), apply: "Apply for this role",
      facts: [["Team", r.team], ["Location", LOCS[r.loc]], ["Type", r.type + " · Full-time"], ["Experience", r.exp], ["Level", r.lvl]],
      secs: jsec("About the role", "<p>" + esc(r.about) + "</p>") + jsec("What you'll do", jlist(r.does)) + jsec("What you'll bring", jlist(r.bring)) + jsec("Nice to have", jlist(r.nice, 1)) +
        jsec("Career level", '<div class="x-jlevel">' + jtags([[r.lvl, "lvl"]]) + "<p>" + esc(LEVELS[r.lvl]) + "</p></div>") +
        jsec("How we hire", jsteps(HIRE) + '<p style="margin-top:20px;font-size:15px;color:var(--muted)">Typically two to three weeks, start to finish.</p>' + JNOTE),
      formTitle: "Apply for " + r.t, form: roleForm(r) });
  }
  function viewIntern(i) {
    return jdPage({ crumbs: [["#/careers", "Careers"], ["#/careers/internships", "Internships"]], title: i.t, eb: "Internship · " + i.team, tags: [["Internship", "lvl"], ["Students & recent grads"]], apply: "Apply for this internship",
      facts: [["Team", i.team], ["Location", LOCS[i.loc]], ["Type", i.type], ["Duration", i.dur], ["Start", "Rolling"], ["Stipend", "Paid or unpaid, depending on the internship. Discussed before the offer."]],
      secs: jsec("Who can apply", "<p>" + esc(i.who) + "</p>") + jsec("What you'll learn", jlist(i.learn)) + jsec("What you'll do", jlist(i.does)) +
        jsec("Mentorship", "<p>" + esc(i.mentor) + "</p>") + jsec("What happens after", "<p>" + esc(i.after) + " Either way, you leave with real work to show.</p>") + jsec("How we hire interns", jsteps(IHIRE) + JNOTE),
      formTitle: "Apply for the " + i.t + " internship", form: internForm(i) });
  }
  var INCL = [["users", "A mentor", "A named mentor and a weekly one-to-one."], ["code", "Real work", "A live project, not a sandbox exercise."], ["star", "Clear terms", "Paid or unpaid, depending on the internship. Discussed before the offer."], ["flow", "A path in", "Strong interns may get a full-time offer."]];
  function viewInterns() {
    return DRAFT + '<section class="x-band x-band--calm x-jhero" aria-labelledby="intTitle"><div class="x-wrap x-rv">' + crumb([["#/careers", "Careers"]], "Internships") +
      '<p class="x-eyebrow">Internships</p><h1 class="x-h1 x-jtitle" id="intTitle">Start with a real project.</h1><p class="x-lead">Internships for current students and recent graduates, each with a mentor and work that ships.</p>' +
      '<ul class="x-jlocs"><li>' + svg("pin") + "<span><strong>Chhatrapati Sambhajinagar</strong> HQ</span></li><li>" + svg("web") + "<span><strong>Remote</strong> India</span></li><li>" + svg("flask") + "<span><strong>Santa Cruz, USA</strong> R&amp;D</span></li></ul></div></section>" +
      S("", "padding-top:clamp(24px,4vw,48px)", '<p class="x-count" style="margin-top:0">' + INTERNS.length + ' internships open</p><ul class="x-jrows x-rv">' + map(INTERNS, function (i) { return jrow(i, true); }) + "</ul>") +
      S("x-mist", "", head("", "What every internship includes") + boxes(INCL, "x-grid--4")) +
      S("", "", head("", "How we hire interns") + steps(IHIRE) + JNOTE) +
      S("", "padding-top:0", '<div class="x-slim x-rv"><div><h2 class="x-h3">Graduated a while ago?</h2><p class="x-lead">See our open roles, including those marked Fresher welcome.</p></div><div class="x-btns">' + btn("line", "#/careers", "See open roles") + "</div></div>");
  }
  // ---- Careers part B: In-Plant Training (IPT) for final-year students, with student and college registration ----
  var IPTTRACKS = ["Software (web/mobile)", "AI & Data", "Embedded & IoT", "Cloud & DevOps", "UI/UX"];
  var IPTMONTHS = ["July 2026", "August 2026", "September 2026", "October 2026", "November 2026", "December 2026", "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "June 2027"];
  var IPTDUR = ["4 months", "5 months", "6 months"];
  var IPTNOTE = '<p class="x-jnote">Programme details, seats and timelines may change each academic year.</p>';
  var IPTTIME = [["Application", "Register as a student, or your college registers its batch."], ["Screening task", "A short task in your track, emailed to you."], ["Short interview", "A conversation about the task and your work."], ["Offer letter", "An offer letter, and an acceptance letter for your college."]];
  function iptBand() {
    return DRAFT + S("x-iptsec", "", '<div class="x-iptband x-rv"><p class="x-iptband__t"><strong>In-Plant Training (IPT) 2026–27.</strong> Final-year students and colleges can now register.</p>' +
      '<div class="x-iptband__links"><a class="x-btn x-btn--line" href="#/careers/ipt/student">I\'m a student' + ARR + '</a><a class="x-btn x-btn--line" href="#/careers/ipt/college">We\'re a college' + ARR + '</a><a class="x-iptmore" href="#/careers/ipt">About IPT</a></div></div>');
  }
  // JD-style page: hero with facts, content left, sticky panel right (stacked below 1024px).
  function iptPage(o) {
    return DRAFT + '<section class="x-band x-band--calm"><div class="x-wrap"><div class="x-jdh"><div class="x-rv">' + crumb(o.crumbs, o.cur) +
      '<p class="x-eyebrow">' + o.eb + '</p><h1 class="x-h1 x-jtitle">' + esc(o.title) + '</h1><p class="x-lead">' + o.lead + "</p>" +
      '<div class="x-btns"><button class="x-btn x-btn--primary" type="button" data-jump="jform">' + o.cta + "</button></div></div>" +
      '<dl class="x-jfacts x-rv">' + map(o.facts, function (f) { return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }) + "</dl></div></div></section>" +
      S("", "", '<div class="x-jsplit"><div class="x-jd">' + o.secs + '</div><aside class="x-jpanel" id="jform" aria-labelledby="jformTitle"><div class="x-jpanel__head"><p class="x-eyebrow">' + o.peb + '</p><h2 class="x-h2 x-jformhead" id="jformTitle" tabindex="-1">' + esc(o.ptitle) + "</h2>" + (o.phint ? '<p class="x-hint">' + o.phint + "</p>" : "") + "</div>" + o.panel + "</aside></div>");
  }
  function iptList(a) { return '<ul class="x-jlist">' + map(a, function (x) { return "<li><strong>" + esc(x[0]) + "</strong> " + esc(x[1]) + "</li>"; }) + "</ul>"; }
  function viewIpt() {
    return iptPage({ crumbs: [["#/careers", "Careers"]], cur: "In-Plant Training", eb: "In-Plant Training · 2026–27", title: "In-Plant Training at PRAVAHAx",
      lead: "Final-year students spend 4–6 months on live engineering work with our team. A real placement, not a certificate course.", cta: "Register",
      facts: [["Duration", "4–6 months"], ["Location", "Chhatrapati Sambhajinagar (HQ)"], ["For", "Final-year students"], ["Tracks", "5"], ["Academic year", "2026–27"]],
      secs: jsec("What IPT at PRAVAHAx is", "<p>In-Plant Training is the last 4–6 months of your degree or diploma, spent inside a working company. Here that means live engineering work: real code, real devices and real reviews, alongside our team.</p><p>It is not a certificate course. You join a project that ships.</p>") +
        jsec("Tracks", jlist(IPTTRACKS)) +
        jsec("How it runs", jsteps([["Onboarding week", "Tools, codebase, team rituals and how we work."], ["A mentor and a real project", "A named mentor and a live project of your own."], ["Weekly reviews", "What shipped, what's stuck and what's next."], ["Mid-term review", "A formal check on progress, shared with your college."], ["Final demo and evaluation", "You demo your work to the team and are evaluated."], ["Completion", "A completion certificate, plus your college's evaluation and attendance documents."]])) +
        jsec("Who can apply", "<p>Final-year BE/BTech, Diploma, MCA and BSc IT students whose university requires or allows IPT.</p>") +
        jsec("What colleges get", iptList([["An MoU", "on request."], ["Monthly reports", "of attendance and progress for every student."], ["A faculty touchpoint", "one contact at PRAVAHAx for your coordinator."], ["A campus visit", "for orientation or selection."]]) + '<p class="x-iptnext"><a class="x-iptmore" href="#/careers/ipt/college">Register as a college</a></p>') +
        jsec("Location", "<p>On-site at our HQ in Chhatrapati Sambhajinagar. Remote only where your college permits it.</p>") +
        jsec("Timeline", jsteps(IPTTIME)) +
        jsec("FAQ", faq([["Is there a stipend?", "Paid or unpaid, depending on the internship and track. We discuss it with you before the offer."], ["Do I get a certificate?", "Yes. A completion certificate at the end, along with the evaluation and attendance documents your college needs."], ["Can I choose my track?", "You give a first and second preference when you register. We confirm your track after the screening task, based on your skills and our live projects."], ["Is remote allowed?", "IPT is on-site in Chhatrapati Sambhajinagar. Remote is possible only where your college permits it."], ["What documents do I need?", "Your résumé, your college's NOC or permission letter if it issues one, and your university's IPT or evaluation format. We provide the offer or acceptance letter your college asks for."]]) + IPTNOTE),
      peb: "Register", ptitle: "Register for IPT 2026–27", phint: "Choose the one that fits you.",
      panel: '<ul class="x-iptopts"><li><a class="x-iptopt" href="#/careers/ipt/student"><strong>Register as a student</strong><span class="x-iptopt__d">Final-year BE/BTech, Diploma, MCA or BSc IT.</span><span class="x-jrow__a">' + ARR + '</span></a></li>' +
        '<li><a class="x-iptopt" href="#/careers/ipt/college"><strong>Register as a college</strong><span class="x-iptopt__d">TPOs and IPT coordinators: partner with us or invite us.</span><span class="x-jrow__a">' + ARR + "</span></a></li></ul>" });
  }
  function iptH(t) { return '<p class="x-iptform__h x-field--full">' + t + "</p>"; }
  function radiosOpt(id, legend, opts) {
    return '<fieldset class="x-field x-field--full" id="' + id + '" data-group="' + esc(legend) + '" aria-describedby="' + id + '-e"><legend>' + esc(legend) + ' <span class="x-opt">(optional)</span></legend><div class="x-pick">' +
      map(opts, function (v) { return '<label><input type="radio" name="' + id + '" value="' + esc(v) + '" /><span>' + esc(v) + "</span></label>"; }) + '</div><p class="x-err" id="' + id + '-e" aria-live="polite"></p></fieldset>';
  }
  function checksReq(id, legend, opts) {
    return '<fieldset class="x-field x-field--full" id="' + id + '" data-group="' + esc(legend) + '" data-req="Choose at least one." aria-describedby="' + id + '-e"><legend>' + esc(legend) + '</legend><div class="x-pick">' +
      map(opts, function (v) { return '<label><input type="checkbox" name="' + id + '" value="' + esc(v) + '" /><span>' + esc(v) + "</span></label>"; }) + '</div><p class="x-err" id="' + id + '-e" aria-live="polite"></p></fieldset>';
  }
  var IPTHIDDEN = '<input type="hidden" data-l="Programme" value="In-Plant Training (IPT) 2026–27" />';
  var IPTREADY = '<p class="x-hint x-field--full x-jready" aria-live="polite">Fill in the required fields to send.</p>';
  function iptStudentForm() {
    return '<form class="x-form x-jform" novalidate data-kind="ipts" data-done="Registration received. We\'ll email you the screening task within 7 working days.">' + IPTHIDDEN +
      iptH("About you") + field("ps-name", "Full name", "text", { req: 1, auto: "name" }) + field("ps-email", "Email", "email", { req: 1, auto: "email" }) + phoneField("ps") +
      field("ps-city", "City", "text", { req: 1, auto: "address-level2" }) + field("ps-dob", "Date of birth", "date", { auto: "bday" }) +
      iptH("Academics") + field("ps-college", "College or institute", "text", { req: 1, auto: "organization" }) +
      field("ps-univ", "Affiliated university or board", "text", { req: 1, hint: "For example: Dr. Babasaheb Ambedkar Marathwada University" }) +
      field("ps-degree", "Degree", "select", { req: 1, opts: ["BE/BTech", "Diploma", "MCA", "BSc IT", "Other"] }) + field("ps-branch", "Branch", "text", { req: 1, hint: "For example: Computer Engineering" }) +
      field("ps-sem", "Current semester", "select", { req: 1, opts: ["Semester 5", "Semester 6", "Semester 7", "Semester 8", "Other"] }) +
      field("ps-cgpa", "CGPA or percentage", "text", { hint: "For example: 8.2 or 76%" }) + field("ps-grad", "Expected graduation year", "select", { req: 1, opts: ["2026", "2027", "2028"] }) +
      iptH("IPT details") + field("ps-start", "IPT start month", "select", { req: 1, opts: IPTMONTHS }) + field("ps-dur", "Duration", "select", { req: 1, opts: IPTDUR }) +
      radios("ps-mode", "Mode required by your college", ["On-site", "Remote allowed", "Not sure"]) +
      field("ps-track", "Preferred track", "select", { req: 1, opts: IPTTRACKS }) + field("ps-track2", "Second preference", "select", { opts: IPTTRACKS }) +
      radiosOpt("ps-letter", "Does your college require an offer or acceptance letter?", ["Yes", "No"]) +
      radiosOpt("ps-noc", "College NOC or permission letter", ["Have it", "Will get it", "Not required"]) +
      iptH("Faculty or TPO coordinator") + field("ps-fname", "Coordinator name", "text") + field("ps-femail", "Coordinator email", "email") + field("ps-fphone", "Coordinator phone", "tel") +
      iptH("Skills and work") + field("ps-skills", "Key skills", "text", { full: 1, hint: "Comma-separated. For example: React, Python, Arduino" }) + field("ps-gh", "GitHub or portfolio", "url", { full: 1, hint: "Starting with https://" }) +
      field("ps-proj", "Your best project", "textarea", { full: 1, max: 300, hint: "What it does, your part and the stack." }) +
      field("ps-cv", "Résumé (PDF, up to 5 MB)", "file", { full: 1, accept: ".pdf,application/pdf", or: "ps-cvlink", hint: "Can't upload? Add a link below instead." }) +
      field("ps-cvlink", "Résumé link", "url", { full: 1, hint: "Drive or Dropbox, open to anyone with the link." }) +
      consent("ps-ok", "IPT registration", "Please tick the box to send your registration.") + IPTREADY + foot("Send registration", MAIL) + "</form>";
  }
  function viewIptStudent() {
    return iptPage({ crumbs: [["#/careers", "Careers"], ["#/careers/ipt", "In-Plant Training"]], cur: "Student registration", eb: "In-Plant Training · Students", title: "Register for IPT as a student",
      lead: "Tell us about you, your college's IPT rules and the track you want. We'll email you a screening task within 7 working days.", cta: "Register now",
      facts: [["Duration", "4–6 months"], ["Location", "Chhatrapati Sambhajinagar (HQ)"], ["Next step", "Screening task"], ["Reply", "Within 7 working days"]],
      secs: jsec("In short", "<p>IPT at PRAVAHAx is 4–6 months of live engineering work in one of five tracks, with a mentor, weekly reviews and a final demo. You leave with a completion certificate and the documents your college needs.</p>" + '<p><a class="x-iptmore" href="#/careers/ipt">About IPT</a></p>') +
        jsec("What to prepare", jlist(["Your résumé as a PDF up to 5 MB, or a link to it.", "Your college, university, branch, semester and CGPA or percentage.", "The IPT start month, duration and mode your college requires.", "Whether you have your college's NOC or permission letter.", "Your faculty or TPO coordinator's contact details.", "Your GitHub or portfolio, and one project you're proud of."])) +
        jsec("What happens next", jsteps(IPTTIME.slice(1)) + IPTNOTE),
      peb: "Register", ptitle: "IPT registration: Student", phint: "Takes about 5 minutes. Fields marked optional can be skipped.", panel: '<div class="x-formcard">' + iptStudentForm() + "</div>" });
  }
  function iptCollegeForm() {
    return '<form class="x-form x-jform" novalidate data-kind="iptc" data-done="Thank you. Our team will contact your coordinator within 5 working days.">' + IPTHIDDEN +
      iptH("Institute") + field("pc-inst", "Institute name", "text", { req: 1, auto: "organization" }) +
      field("pc-type", "Type", "select", { req: 1, opts: ["Engineering college", "Polytechnic", "University department", "Other"] }) +
      field("pc-univ", "Affiliated university or board", "text", { req: 1 }) + field("pc-code", "AICTE or approval code", "text") +
      field("pc-city", "City", "text", { req: 1, auto: "address-level2" }) + field("pc-state", "State", "text", { req: 1, auto: "address-level1" }) +
      field("pc-web", "Website", "url", { hint: "Starting with https://" }) +
      iptH("Coordinator") + field("pc-cname", "Name", "text", { req: 1, auto: "name" }) +
      field("pc-desig", "Designation", "select", { req: 1, opts: ["TPO", "IPT coordinator", "HoD", "Principal", "Other"] }) +
      field("pc-email", "Email", "email", { req: 1, auto: "email" }) + phoneField("pc") +
      field("pc-alt", "Alternate contact", "text", { hint: "Name and phone or email" }) +
      iptH("Students") + checksReq("pc-branches", "Branches or programmes", ["Computer", "IT", "E&TC/ECE", "Electrical", "Mechanical", "AI&DS", "MCA", "Other"]) +
      field("pc-count", "Approx. number of students", "number", { req: 1 }) + field("pc-start", "IPT start month", "select", { req: 1, opts: IPTMONTHS }) +
      field("pc-dur", "Duration", "select", { req: 1, opts: IPTDUR }) + radios("pc-mode", "Mode allowed", ["On-site", "Remote", "Hybrid"]) +
      iptH("Requirements") + radiosOpt("pc-mou", "MoU required?", ["Yes", "No"]) +
      group("pc-eval", "Evaluation format your university needs", "pc-eval", ["Attendance sheets", "Monthly reports", "Final viva", "Other"]) +
      field("pc-stipend", "Stipend expectations", "text") +
      iptH("Campus visit") + radiosOpt("pc-visit", "Would you like us to visit for an orientation or selection drive?", ["Yes", "No"]) +
      '<div class="x-cond x-field--full" data-when="pc-visit=Yes" hidden><p class="x-cond__h">Visit details</p>' +
      field("pc-date1", "Preferred date", "date", { req: 1 }) + field("pc-date2", "Alternative date", "date") + field("pc-aud", "Expected audience size", "number", { req: 1 }) + "</div>" +
      iptH("Notes") + field("pc-notes", "Notes", "textarea", { full: 1, max: 500 }) +
      consent("pc-ok", "IPT registration", "Please tick the box to send your registration.") + IPTREADY + foot("Send registration", MAIL) + "</form>";
  }
  function viewIptCollege() {
    return iptPage({ crumbs: [["#/careers", "Careers"], ["#/careers/ipt", "In-Plant Training"]], cur: "College registration", eb: "In-Plant Training · Colleges", title: "Partner with us for IPT",
      lead: "For TPOs, IPT coordinators and HoDs: register your institute and we'll contact your coordinator within 5 working days.", cta: "Register now",
      facts: [["Typical intake", "5–15 students"], ["Location", "Chhatrapati Sambhajinagar (HQ)"], ["MoU", "On request"], ["Reply", "Within 5 working days"]],
      secs: jsec("What partnering looks like", iptList([["MoU.", "Signed on request, in your university's format or ours."], ["Reports.", "Monthly attendance and progress reports for every student."], ["Campus visit.", "An orientation or selection visit to your campus."], ["Coordinator.", "One named contact at PRAVAHAx for your faculty coordinator."], ["Intake.", "Typically 5–15 students per college each batch, depending on tracks and seats."]])) +
        jsec("Tracks we offer", jlist(IPTTRACKS)) +
        jsec("How it works", jsteps([["You register", "Tell us about your institute, students and university requirements."], ["We call your coordinator", "To agree on seats, dates, documents and an MoU if needed."], ["Orientation or selection", "On campus or online, followed by a screening task and short interviews."], ["Offer letters", "Offer and acceptance letters for each selected student, then monthly reports through to the final evaluation."]]) + IPTNOTE) +
        '<p class="x-iptnext"><a class="x-iptmore" href="#/careers/ipt">About IPT</a></p>',
      peb: "Register", ptitle: "IPT registration: College", phint: "Takes about 5 minutes. Fields marked optional can be skipped.", panel: '<div class="x-formcard">' + iptCollegeForm() + "</div>" });
  }
  function viewCareers() {
    return '<section class="x-band x-band--calm x-jhero" aria-labelledby="carTitle"><div class="x-wrap x-rv">' +
      '<p class="x-eyebrow">Careers at PRAVAHAx</p><h1 class="x-h1 x-jtitle" id="carTitle">Do the best work of your career.</h1>' +
      '<p class="x-lead">Real systems, a team that trusts you from day one: at our HQ in Chhatrapati Sambhajinagar, our R&amp;D department in Santa Cruz, USA, or remote.</p></div></section>' +
      SI("roles", "x-jroles", '<div class="x-head x-rv" style="margin-bottom:20px"><div><h2 class="x-h2">Open roles</h2></div></div>' + jfilters() +
        '<div class="x-jlist2" id="jobList">' + jlistAll() + '<p class="x-jempty" id="jfEmpty" hidden>No roles match these filters. <button class="x-linkbtn" type="button" data-jfclear>Clear filters</button></p></div>') +
      S("", "padding-top:0", '<div class="x-cta x-rv">' + MARK + '<p class="x-eyebrow">Internships</p><h2 class="x-h2">Students and recent grads: start with a real project.</h2><p class="x-lead">Internships of 3 to 6 months, each with a mentor. In Chhatrapati Sambhajinagar, remote, or at our R&amp;D department in Santa Cruz, USA.</p><div class="x-btns">' + btn("primary", "#/careers/internships", "Explore internships") + "</div></div>") +
      S("x-mist", "", head("Where we work", "Two locations, plus remote.") + '<div class="x-grid x-jlocgrid">' +
        '<div class="x-box x-rv"><span class="x-ico">' + svg("pin") + '</span><h3 class="x-h3">Headquarters</h3><p>Chhatrapati Sambhajinagar, Maharashtra, India. Engineering, AI, hardware and design.</p></div>' +
        '<div class="x-box x-rv"><span class="x-ico">' + svg("flask") + '</span><h3 class="x-h3">R&amp;D department</h3><p>Santa Cruz, USA. Bioinformatics and life-sciences research.</p></div>' +
        '<div class="x-box x-rv"><span class="x-ico">' + svg("web") + '</span><h3 class="x-h3">Remote</h3><p>Selected roles and internships, from anywhere in India.</p></div></div>') +
      S("", "", head("", "Why PRAVAHAx") + boxes(WHY, "x-grid--4")) +
      S("x-mist", "", '<div class="x-split"><div class="x-frame x-rv"><img src="' + pic("green-lounge-garden.webp") + '" alt="The Green Lounge garden at the PRAVAHAx office" loading="lazy" /></div><div class="x-rv"><p class="x-eyebrow">Off the clock</p><h2 class="x-h2">Life at PRAVAHAx</h2><p class="x-lead">Rooms with names, treks with snacks, and debates nobody wins. Mostly.</p><div class="x-btns">' + btn("primary", "#/careers/life", "See life at PRAVAHAx") + "</div></div></div>") +
      S("", "", head("", "How we hire") + steps(HIRE) + JNOTE) +
      S("x-mist", "", head("", "FAQ") + faq(CFAQ) + HIRENOTE) + cta();
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
      '<ol class="x-crumb x-crumb--chev" aria-label="Breadcrumb"><li><a href="#/">Home</a></li><li><a href="#/about">About</a></li><li aria-current="page">Life at PRAVAHAx</li></ol>' +
      '<p class="x-eyebrow">About</p><p class="x-statement">Thinking is Technology.</p><h1 class="x-h1 x-h1--sm" id="lifeTitle">Curiosity has a place here. So do snacks.</h1><p class="x-lead">The rooms we think in, the trips we take, and the small rituals that keep our people curious, and occasionally caffeinated.</p><div class="x-btns">' +
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
      ["Company", [L("#/about", "Our story"), L("#/about/beliefs", "Our beliefs"), L("#/about/leadership", "Leadership"), L("#/about/publications", "Publications"), L("#/labs", "PRAVAHAx Labs"), L("#/impact", "Impact: Teach as we build"), L("#/careers/life", "Life at PRAVAHAx")]],
      ["Careers", [L("#/careers", "Careers"), L("#/careers/roles", "Open roles"), L("#/careers/ipt", "In-Plant Training (IPT)"), L("#/careers/ipt/student", "IPT registration: Student"), L("#/careers/ipt/college", "IPT registration: College")].concat(ROLES.map(function (r) { return L("#/careers/role/" + r.slug, r.t); }))],
      ["Internships", [L("#/careers/internships", "All internships")].concat(INTERNS.map(function (i) { return L("#/careers/internship/" + i.slug, i.t); }))],
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
    if (el.disabled) return "";
    var v = el.value.trim();
    if (el.required && !v) return el.tagName === "SELECT" ? "Please choose one." : "Please fill this in.";
    if (el.hasAttribute("data-or") && !(el.files && el.files[0]) && !(($(el.getAttribute("data-or")) || {}).value || "").trim()) return "Upload your résumé as a PDF, or add a link below.";
    if (el.type === "file" && el.files && el.files[0] && /pdf/.test(el.accept || "") && !/\.pdf$/i.test(el.files[0].name)) return "Upload a PDF, or add a résumé link below.";
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
    [].forEach.call(f.querySelectorAll("fieldset[data-req]:not([disabled])"), function (fs) { var ok = fs.querySelector("input:checked"); setErr(fs, ok ? "" : fs.getAttribute("data-req") || "Pick at least one."); if (!ok) bad.push(fs.querySelector("input")); });
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
  // Purpose-built forms for calls to action with an explicit ask (data-form="..."). They open in the contact modal
  // and send through the same Web3Forms / mailto path. The general "Let's talk." form stays for general contact.
  function group(id, legend, name, opts) {
    return '<fieldset class="x-field x-field--full" id="' + id + '" data-group="' + esc(legend) + '"><legend>' + esc(legend) + ' <span class="x-opt">(optional)</span></legend><div class="x-pick">' +
      map(opts, function (o) { return '<label><input type="checkbox" name="' + name + '" value="' + esc(o) + '" /><span>' + esc(o) + "</span></label>"; }) + "</div></fieldset>";
  }
  var FORMS = {
    // The role and internship forms live on their own pages (no modal html); these give collect() the subject and sender.
    job: { subj: function (v) { return "Application: " + v("j-role") + " — " + v("j-name"); }, name: "j-name", email: "j-email" },
    intern: { subj: function (v) { return "Internship application: " + v("i-role") + " — " + v("i-name"); }, name: "i-name", email: "i-email" },
    ipts: { subj: function (v) { return "IPT registration (student): " + v("ps-name") + " — " + v("ps-college"); }, name: "ps-name", email: "ps-email" },
    iptc: { subj: function (v) { return "IPT registration (college): " + v("pc-inst") + " — " + v("pc-cname"); }, name: "pc-cname", email: "pc-email" },
    school: { eb: "Teach as we build", title: "Suggest a school", lead: "Tell us where it is and what the children need. We reply within 1 business day.",
      subj: function () { return "School suggestion"; }, name: "s-you", email: "s-email", send: "Send suggestion",
      done: "Thank you. We'll reach out to the school and keep you posted.",
      html: function () {
        return field("s-school", "School name", "text", { req: 1, full: 1 }) + field("s-town", "Village or town", "text", { req: 1 }) + field("s-district", "District and state", "text", { req: 1 }) +
          field("s-type", "Type of school", "select", { opts: ["Government", "Aided", "Private", "Other"] }) + field("s-grades", "Grades", "text", { hint: "For example, 5–10" }) +
          field("s-students", "Approx. number of students", "number") + field("s-contact", "Contact person at the school", "text") +
          field("s-crole", "Their role", "select", { opts: ["Headteacher", "Teacher", "Parent", "Other"] }) + field("s-phone", "Phone", "tel", { req: 1, hint: "The school contact's, or yours" }) +
          field("s-email", "Email", "email", { full: 1 }) +
          group("s-help", "What would help most?", "help", ["Coding & electronics", "Science you can touch", "Books & kits", "Career chats", "Something else"]) +
          field("s-you", "Your name", "text", { req: 1, auto: "name" }) + field("s-rel", "Your relation to the school", "text", { hint: "Teacher, parent, alumnus, neighbour…" }) +
          field("s-notes", "Notes", "textarea", { full: 1 });
      } },
    research: { eb: "PRAVAHAx Labs", title: "Propose a collaboration", lead: "Researchers, students and partners: tell us the question you want to chase. We reply within 1 business day.",
      subj: function (v) { return "Research collaboration — " + v("r-name"); }, name: "r-name", email: "r-email", send: "Send proposal",
      done: "Thank you. Our research team will read it and reply within 1 business day.",
      html: function () {
        return field("r-name", "Name", "text", { req: 1, auto: "name" }) + field("r-email", "Email", "email", { req: 1, auto: "email" }) +
          field("r-org", "University, lab or company", "text", { auto: "organization" }) + field("r-who", "You are a", "select", { opts: ["Researcher", "Student", "Industry partner", "Other"] }) +
          field("r-area", "Area", "select", { full: 1, opts: ["Cryptography", "Diskless Windows", "Edge detection with particle swarm optimisation", "Bioinformatics & life sciences", "Something else"] }) +
          field("r-msg", "Your question or idea", "textarea", { req: 1, full: 1 }) + field("r-link", "Paper, repo or profile link", "url", { full: 1 });
      } },
    consult: { eb: "Consulting", title: "Book a consultation", lead: "Tell us the decision in front of you. We reply within 1 business day to set a time.",
      subj: function (v) { return "Consultation request — " + v("k-name") + (v("k-company") ? ", " + v("k-company") : ""); }, name: "k-name", email: "k-email", send: "Request consultation",
      done: "Received. We'll reply within 1 business day to set up your consultation.",
      html: function () {
        return field("k-name", "Name", "text", { req: 1, auto: "name" }) + field("k-email", "Work email", "email", { req: 1, auto: "email" }) +
          field("k-company", "Company", "text", { req: 1, auto: "organization" }) + field("k-phone", "Phone", "tel", { auto: "tel" }) +
          field("k-industry", "Industry", "select", { opts: INDUSTRIES.map(function (x) { return x.name; }).concat(["Other"]) }) +
          field("k-format", "How would you like to meet?", "select", { opts: ["Video call", "At your office", "At our office"] }) +
          group("k-topic", "What do you want advice on?", "topic", OFFERS.map(function (o) { return o[1]; }).concat(["Not sure yet"])) +
          field("k-msg", "What's the decision in front of you?", "textarea", { req: 1, full: 1 });
      } },
    visit: { eb: "Our office", title: "Plan a visit", lead: "Come and see us in Chhatrapati Sambhajinagar. Pick a day and we'll confirm a time.",
      subj: function (v) { return "Office visit request — " + v("v-name"); }, name: "v-name", email: "v-email", send: "Request a visit",
      done: "Thank you. We'll confirm a time within 1 business day.",
      html: function () {
        return field("v-name", "Name", "text", { req: 1, auto: "name" }) + field("v-email", "Email", "email", { req: 1, auto: "email" }) +
          field("v-phone", "Phone", "tel", { req: 1, auto: "tel" }) + field("v-date", "Preferred date", "date") +
          field("v-time", "Preferred time", "select", { opts: ["Morning", "Afternoon", "Either"] }) + field("v-people", "How many people?", "number") +
          field("v-msg", "What would you like to see or discuss?", "textarea", { full: 1 });
      } }
  };
  function collect(f) {
    var val = function (id) { var el = $(id); return el ? el.value.trim() : ""; }, lines = [], extra = [], fd = new FormData(), kind = f.getAttribute("data-kind"), careers = kind === "careers", F = FORMS[kind], needsDone = !!F;
    var name = F ? val(F.name) : careers ? val("a-name") : val("c-name"), email = F ? val(F.email) : careers ? val("a-email") : val("c-email");
    var subj = F ? F.subj(val) : careers ? "Application: " + val("a-role") + " — " + name : "Project enquiry — " + name + (val("c-company") ? ", " + val("c-company") : "");
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("subject", subj);
    fd.append("from_name", name);
    if (email) fd.append("replyto", email);
    if (F) [].forEach.call(f.querySelectorAll("input[type=hidden][data-l]"), function (h) { if (h.value) { extra.push(h.getAttribute("data-l") + ": " + h.value); fd.append(h.getAttribute("data-l"), h.value); } });
    if (F) [].forEach.call(f.querySelectorAll("fieldset[data-group]:not([disabled])"), function (fs) {
      var n = [].map.call(fs.querySelectorAll("input:checked"), function (c) { return c.value; }).join(", ");
      if (n) { extra.push(fs.getAttribute("data-group") + " " + n); fd.append(fs.getAttribute("data-group"), n); }
    });
    [].forEach.call(f.querySelectorAll(".x-input"), function (el) {
      var label = el.getAttribute("data-l"), v;
      if (el.disabled) return;
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
    return { fd: fd, href: "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(lines.concat(extra).join("\n")) };
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
  function showDone(f, note) {
    var wrap = f.parentNode;
    wrap.innerHTML = '<div class="x-done" tabindex="-1" role="status"><span class="x-ico">' + svg("check") + '</span><h2 class="x-h3">' + esc(f.getAttribute("data-done")) + "</h2>" + (note ? "<p>" + note + "</p>" : "") + '<p>Prefer email? Write to <a href="mailto:' + MAIL + '">' + MAIL + "</a></p></div>";
    wrap.querySelector(".x-done").focus();
  }
  function submitForm(f) {
    var s = f.querySelector("[data-status]"); s.hidden = true; s.innerHTML = "";
    var bad = validate(f); if (bad.length) { bad[0].focus(); return; }
    var d = collect(f);
    if (f.querySelector("[name=botcheck]").checked) { showDone(f); return; }
    if (!keyReady()) {
      // Role and internship forms: hand the application to the email app, and show the success state on the same page.
      var fk = f.getAttribute("data-kind");
      if (/^(job|intern|ipts|iptc)$/.test(fk)) { window.location.href = d.href; showDone(f, "Your email app should open with your " + (/^ipt/.test(fk) ? "registration" : "application") + " filled in. Press send there to finish."); return; }
      sendByMail(f, d.href); return;
    }
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
    if (el.type === "checkbox" && el.closest("fieldset[data-req]") && el.checked && el.name !== "need") { setErr(el.closest("fieldset"), ""); return; }
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
    // Careers filters: open/close the phone sheet, and Clear.
    var o = e.target.closest ? e.target.closest("[data-jfopen],[data-jfclose],[data-jfclear],#jfClear") : null; if (!o) return;
    if (o.hasAttribute("data-jfopen")) jfSheet(true);
    else if (o.hasAttribute("data-jfclose")) jfSheet(false);
    else { [].forEach.call(page.querySelectorAll(".x-jfin"), function (s) { s.value = ""; }); jfApply(true); }
  });
  // Category, Location and Type filter the grouped rows; the state lives in the hash query (#/careers?cat=ai&loc=remote&type=intern).
  function jfApply(write) {
    var list = $("jobList"); if (!list) return;
    var st = {}, q = [], n = 0, on = 0;
    [].forEach.call(page.querySelectorAll(".x-jfin"), function (s) { st[s.getAttribute("data-k")] = s.value; if (s.value) { q.push(s.getAttribute("data-k") + "=" + s.value); on++; } });
    [].forEach.call(list.querySelectorAll(".x-jgroup"), function (g) {
      var k = 0;
      [].forEach.call(g.querySelectorAll("li"), function (li) { var ok = ["cat", "loc", "type"].every(function (x) { return !st[x] || li.getAttribute("data-" + x) === st[x]; }); li.hidden = !ok; if (ok) k++; });
      g.hidden = !k; n += k;
      var gn = g.querySelector(".x-jgroup__n"); if (gn) gn.textContent = k;
    });
    $("roleCount").textContent = n + (n === 1 ? " open position" : " open positions");
    $("jfClear").hidden = !on; $("jfEmpty").hidden = !!n; $("jfN").textContent = on ? " (" + on + ")" : "";
    var done = page.querySelector(".x-jfdone"); if (done) done.textContent = "Show " + n + (n === 1 ? " result" : " results");
    if (write && history.replaceState) { var base = location.hash.split("?")[0] || "#/careers"; history.replaceState(null, "", base + (q.length ? "?" + q.join("&") : "")); }
  }
  function jfInit(query) {
    [].forEach.call(page.querySelectorAll(".x-jfin"), function (s) {
      var m = (query || "").match(new RegExp("(?:^|&)" + s.getAttribute("data-k") + "=([^&]*)")), v = m ? decodeURIComponent(m[1]) : "";
      s.value = [].some.call(s.options, function (op) { return op.value === v; }) ? v : "";
    });
    jfApply(false);
  }
  function jfSheet(open) {
    var sh = $("jfSheet"), b = page.querySelector("[data-jfopen]"), sc = page.querySelector(".x-jfscrim"); if (!sh) return;
    sh.classList.toggle("is-open", open); sc.hidden = !open; b.setAttribute("aria-expanded", open);
    document.documentElement.classList.toggle("x-jf-lock", open);
    if (open) sh.querySelector("select").focus(); else b.focus({ preventScroll: true });
  }
  page.addEventListener("keydown", function (e) { if (e.key === "Escape" && $("jfSheet") && $("jfSheet").classList.contains("is-open")) jfSheet(false); });
  // Role and internship forms: location blocks, the 500-character counter, and Send stays off until the form is valid.
  function jSync(f) {
    var out = f.querySelector('input[name$="-out"]:checked'), yes = !!out && out.value === "Yes";
    [].forEach.call(f.querySelectorAll("[data-show=out]"), function (b) {
      b.hidden = !yes;
      [].forEach.call(b.querySelectorAll("input,select,textarea,fieldset"), function (x) { x.disabled = !yes; if (!yes && x.id && $(x.id + "-e")) setErr(x, ""); });
    });
    // IPT forms: a block shown only for one answer, e.g. data-when="pc-visit=Yes".
    [].forEach.call(f.querySelectorAll("[data-when]"), function (b) {
      var w = b.getAttribute("data-when").split("="), r = f.querySelector('input[name="' + w[0] + '"]:checked'), on = !!r && r.value === w[1];
      b.hidden = !on;
      [].forEach.call(b.querySelectorAll("input,select,textarea,fieldset"), function (x) { x.disabled = !on; if (!on && x.id && $(x.id + "-e")) setErr(x, ""); });
    });
    var w = f.querySelector("textarea[maxlength]"), c = w && $(w.id + "-c"); if (c) c.textContent = w.value.length + " / " + w.getAttribute("maxlength");
    if (f.getAttribute("aria-busy")) return;
    var ok = ![].some.call(f.querySelectorAll(".x-input"), function (el) { return !!check(el); }) &&
      ![].some.call(f.querySelectorAll("fieldset[data-req]:not([disabled])"), function (fs) { return !fs.querySelector("input:checked"); });
    var b = f.querySelector("[type=submit]"); if (b) b.disabled = !ok;
    var r = f.querySelector(".x-jready"); if (r) r.textContent = ok ? "" : "Fill in the required fields to send.";
  }
  function jEvt(e) {
    var el = e.target;
    if (el.classList && el.classList.contains("x-jfin")) { jfApply(true); return; }
    var f = el.closest && el.closest("form.x-jform"); if (!f) return;
    if (/-country$/.test(el.id) && el.value) { var y = f.querySelector('input[name$="-out"][value="' + (el.value === "India" ? "No" : "Yes") + '"]'); if (y) y.checked = true; }
    if (el.type === "radio" && el.checked) { var fs = el.closest("fieldset"); if (fs) setErr(fs, ""); }
    if (/-cvlink$/.test(el.id)) { var fl = f.querySelector("[data-or]"); if (fl && fl.getAttribute("aria-invalid") === "true") setErr(fl, check(fl)); }
    jSync(f);
  }
  page.addEventListener("input", jEvt);
  page.addEventListener("change", jEvt);
  // "Apply" on a role or internship page, and its sticky phone bar: a smooth move to the form on the same page.
  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-jump]") : null; if (!b) return;
    var t = $(b.getAttribute("data-jump")); if (!t) return;
    t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    var h = $("jformTitle"); if (h) h.focus({ preventScroll: true });
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
    var cmT = $("cmTitle"), cmL = $("cmLead"), T0 = cmT.textContent, L0 = cmL.textContent;
    function show(firstField) {
      document.body.style.paddingRight = Math.max(0, innerWidth - document.documentElement.clientWidth) + "px";
      document.documentElement.classList.add("x-cm-lock");
      card.style.transform = ""; card.scrollTop = 0;
      cm.hidden = false;
      void cm.offsetWidth;
      cm.classList.add("is-on");
      var first = matchMedia("(hover: none)").matches ? card : firstField;
      (first || card).focus({ preventScroll: true });
    }
    function openForm(a, F, kind) {
      clearTimeout(closeT);
      opener = a;
      cmT.textContent = F.title; cmL.textContent = F.lead;
      body.innerHTML = '<form class="x-form" novalidate data-to="' + MAIL + '" data-kind="' + kind + '" data-done="' + esc(F.done) + '">' + F.html() + foot(F.send, MAIL) + "</form>";
      // A consultation booked from a service or industry page carries that page along.
      var parts = location.hash.replace(/^#\/?/, "").split("?")[0].split("/"), ctx = parts[1] && ((parts[0] === "services" && findBy(SERVICES, parts[1])) || (parts[0] === "industries" && findBy(INDUSTRIES, parts[1])));
      if (kind === "consult" && ctx) {
        var h = document.createElement("input"); h.type = "hidden"; h.id = "k-about"; h.setAttribute("data-l", "Enquiry from"); h.value = ctx.name;
        body.querySelector("form").insertBefore(h, body.querySelector(".x-hp"));
      }
      from.textContent = ctx && kind === "consult" ? F.eb + " · About: " + ctx.name : F.eb; from.hidden = false;
      show(body.querySelector(".x-input"));
    }
    function open(a) {
      clearTimeout(closeT);
      opener = a;
      cmT.textContent = T0; cmL.textContent = L0;
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
      show($("c-name"));
    }
    function close(instant) {
      if (cm.hidden) return;
      cm.classList.remove("is-on");
      document.documentElement.classList.remove("x-cm-lock");
      document.body.style.paddingRight = "";
      var done = function () { cm.hidden = true; body.innerHTML = ""; card.style.transform = ""; card.style.transition = ""; };
      clearTimeout(closeT);
      if (instant || reduce) done(); else closeT = setTimeout(done, 280);
      if (opener && !instant && document.contains(opener)) { var dt = $("dockTalk"); (!opener.getClientRects().length && dt && dt.getClientRects().length ? dt : opener).focus({ preventScroll: true }); }
      opener = null;
    }
    // Intercept contact links in the page content; leave the contact page itself alone.
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var fa = e.target.closest && e.target.closest("[data-form]"), F = fa && FORMS[fa.getAttribute("data-form")];
      if (F) { e.preventDefault(); openForm(fa, F, fa.getAttribute("data-form")); return; }
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
    about: "The story of PRAVAHAx Systems Engineering, a software, AI and IoT company from Chhatrapati Sambhajinagar, and what our name means.",
    "about/leadership": "Meet the leadership team of PRAVAHAx Systems Engineering, the executives who guide the company and stand behind every engagement.",
    labs: "PRAVAHAx Labs: research in cryptography, diskless Windows and edge detection, with bioinformatics and life sciences planned next.",
    impact: "Teach as we build: PRAVAHAx engineers in classrooms, with coding and electronics, robots, kitchen science, game day, books and leaders' birthdays celebrated in schools.",
    careers: "Careers at PRAVAHAx: open roles and internships at our HQ in Chhatrapati Sambhajinagar, our R&D department in Santa Cruz, USA, and remote. We reply within 1 business day.",
    "careers/life": "Life at PRAVAHAx: the rooms we think in, the trips we take and the small rituals that keep our people curious. Thinking is Technology.",
    contact: "Contact PRAVAHAx Systems Engineering. Tell us what you're building; we reply within 1 business day. hello@pravahax.com · +91 94048 02076.",
    privacy: "How PRAVAHAx Systems Engineering handles the details you send us.",
    terms: "Terms of use for the PRAVAHAx Systems Engineering website.",
    cookies: "PRAVAHAx sets no advertising or tracking cookies.",
    accessibility: "Our commitment to an accessible website for everyone.",
    sitemap: "Sitemap of the PRAVAHAx Systems Engineering website: services, industries, case studies, company pages and legal."
  };
  // Phones: a sticky bottom "Apply" bar on role and internship pages. It hides while the form is on screen.
  var jbarIO = null;
  function setJobBar(j) {
    var old = $("jbar"); if (old) old.remove();
    if (jbarIO) { jbarIO.disconnect(); jbarIO = null; }
    document.documentElement.classList.toggle("x-jobpage", !!j);
    if (!j) return;
    var bar = document.createElement("div");
    bar.className = "x-jbar"; bar.id = "jbar";
    bar.innerHTML = '<div class="x-jbar__t"><strong></strong><small></small></div><button class="x-btn x-btn--primary" type="button" data-jump="jform"></button>';
    bar.querySelector("strong").textContent = j[0]; bar.querySelector("small").textContent = j[1];
    bar.querySelector("button").textContent = j[2]; bar.querySelector("button").setAttribute("aria-label", j[3] || "Apply: go to the application form");
    document.body.appendChild(bar);
    var form = $("jform");
    if (form && "IntersectionObserver" in window) {
      jbarIO = new IntersectionObserver(function (es) { bar.classList.toggle("is-off", es[0].isIntersecting); bar.querySelector("button").tabIndex = es[0].isIntersecting ? -1 : 0; }, { rootMargin: "0px 0px -35% 0px" });
      jbarIO.observe(form);
    }
  }
  function setMeta(sel, v) { var m = document.querySelector(sel); if (m) m.setAttribute("content", v); }
  function route() {
    var h = location.hash;
    // Old in-page anchors from the single About page now have routes of their own.
    if (h === "#beliefs") { location.replace("#/about/beliefs"); return; }
    if (h === "#leadership") { location.replace("#/about/leadership"); return; }
    if (h && h.indexOf("#/") !== 0) return;
    var query = h.split("?")[1] || "";
    var parts = h.split("?")[0].replace(/^#\/?/, "").split("/").filter(Boolean);
    var top = parts[0] || "", isHome = !top, title, html = "", si = -1, jobBar = null;
    if (top === "careers" && parts[1] === "apply" && !parts[2]) { location.replace("#/careers/roles"); return; }
    var key = top === "careers" && parts[1] === "life" ? "careers/life" : top;
    var sub = key === "careers/life" ? parts[2] : parts[1];
    // Role and internship pages are pages of their own, never a jump within Careers.
    if (top === "careers" && /^(role|internship|internships|ipt)$/.test(parts[1] || "")) { key = "careers/" + parts.slice(1).join("/"); sub = ""; }
    if (top === "about") {
      if (/^(leadership|masoom|devang)$/.test(parts[1] || "")) key = "about/leadership";
      if (parts[1] === "leadership") sub = "";
    }
    palClose(true);
    if (!first && key === lastTop && (top === "about" || top === "careers") && !page.hidden && (!sub || page.querySelector('[data-sub="' + sub + '"]'))) { mega(false); if (!menu.hidden) setMenu(false); if ($("jobList")) jfInit(query); jump(sub, true); return; }
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
    else if (top === "about" && !parts[2] && key === "about/leadership") { html = viewLeadership(); title = T("Leadership"); }
    else if (top === "about" && !parts[2] && (!parts[1] || parts[1] === "publications" || parts[1] === "beliefs")) { html = viewAbout(); title = T(parts[1] === "publications" ? "Publications" : "Our story"); if (parts[1] === "publications") desc = "ICT textbook series for Classes 8–10, written by the PRAVAHAx team in Marathi and English for school students."; }
    else if (top === "labs" && !parts[1]) { html = viewLabs(); title = T("PRAVAHAx Labs"); }
    else if (top === "impact" && !parts[1]) { html = viewImpact(); title = T("Teach as we build"); }
    else if (key === "careers/life" && !parts[3] && (!parts[2] || /^(rooms|exhibits|outside|rituals|fine-print)$/.test(parts[2]))) { html = viewLife(); title = T("Life at PRAVAHAx"); }
    else if (top === "careers" && parts[1] === "role" && parts[2] && !parts[3] && findBy(ROLES, parts[2])) { var jr = findBy(ROLES, parts[2]); html = viewRole(jr); title = T(jr.t + " · Careers"); desc = jr.t + " at PRAVAHAx: " + jr.team + ", " + LOCS[jr.loc] + ", " + jr.type + ", " + jr.exp + ". " + jr.about; jobBar = [jr.t, LOCS[jr.loc] + " · " + jr.type, "Apply"]; }
    else if (top === "careers" && parts[1] === "ipt" && !parts[3] && /^(|student|college)$/.test(parts[2] || "")) {
      var ipk = parts[2] || "";
      if (ipk === "student") { html = viewIptStudent(); title = T("IPT registration: Student"); desc = "Register for In-Plant Training (IPT) 2026–27 at PRAVAHAx: 4–6 months of live engineering work for final-year BE/BTech, Diploma, MCA and BSc IT students."; jobBar = ["IPT registration: Student", "4–6 months · Chhatrapati Sambhajinagar", "Register", "Register: go to the student registration form"]; }
      else if (ipk === "college") { html = viewIptCollege(); title = T("IPT registration: College"); desc = "Colleges, TPOs and IPT coordinators: partner with PRAVAHAx for In-Plant Training 2026–27. MoU on request, monthly reports and a campus visit."; jobBar = ["IPT registration: College", "For TPOs and IPT coordinators", "Register", "Register: go to the college registration form"]; }
      else { html = viewIpt(); title = T("In-Plant Training (IPT)"); desc = "In-Plant Training (IPT) 2026–27 at PRAVAHAx: 4–6 months of live engineering work for final-year students, in Chhatrapati Sambhajinagar. Students and colleges can register."; jobBar = ["In-Plant Training 2026–27", "Students and colleges", "Register", "Register: go to the registration options"]; }
    }
    else if (top === "careers" && parts[1] === "internship" && parts[2] && !parts[3] && findBy(INTERNS, parts[2])) { var ji = findBy(INTERNS, parts[2]); html = viewIntern(ji); title = T(ji.t + " · Internships"); desc = ji.t + " at PRAVAHAx: " + LOCS[ji.loc] + ", " + ji.type + ", " + ji.dur + ". " + ji.who; jobBar = [ji.t, LOCS[ji.loc] + " · " + ji.dur, "Apply"]; }
    else if (top === "careers" && parts[1] === "internships" && !parts[2]) { html = viewInterns(); title = T("Internships"); desc = "Internships at PRAVAHAx for students and recent graduates, with a mentor: in Chhatrapati Sambhajinagar, remote, or at our R&D department in Santa Cruz, USA."; }
    else if (top === "careers" && !parts[2] && (!parts[1] || parts[1] === "roles")) { html = viewCareers(); title = T("Careers"); }
    else if (top === "contact" && !parts[1]) { html = viewContact(); title = T("Contact"); }
    else if (top === "sitemap" && !parts[1]) { html = viewSitemap(); title = T(PAGES.sitemap); }
    else if (LEGAL[top] && !parts[1]) { html = viewLegal(top); title = T(LEGAL[top][0]); }
    if (isHome) { title = BASE + " | Less chaos. More flow."; desc = HOME_DESC; }
    else if (!html) { html = view404(top); title = T("Page not found"); desc = HOME_DESC; }
    setMeta('meta[name="description"]', desc); setMeta('meta[property="og:description"]', desc); setMeta('meta[property="og:title"]', title);
    home.hidden = !isHome; page.hidden = isHome;
    page.innerHTML = isHome ? "" : html;
    if (!isHome) fixPos(page);
    setJobBar(jobBar);
    document.documentElement.classList.remove("x-jf-lock");
    if ($("jobList")) jfInit(query);
    [].forEach.call(page.querySelectorAll("form.x-jform"), jSync);
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
      var on = a.getAttribute("data-route").split(" ").indexOf(key === "careers/life" ? "life" : top) > -1;
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
    // Arriving at Our beliefs from another page scrolls smoothly down Our story (jump() keeps it instant under reduced motion).
    var glide = sub === "beliefs";
    if (sub && (top === "about" || top === "careers")) setTimeout(function () { jump(sub, glide); }, 0);
    first = false;
    reveal(isHome ? home : page);
    swipeRows(isHome ? home : page);
    dodge(isHome ? home : page);
    if (isHome) railInit();
  }
  // Leadership spotlight: hover, keyboard focus or tap lifts one card and slides its note out; the others recede.
  // On phones the note opens inside the card; under reduced motion every note is simply shown (CSS) and nothing toggles.
  (function () {
    var ptr = "mouse", kbd = false;
    var narrow = function () { return matchMedia("(max-width: 640px)").matches; };
    var still = function () { return matchMedia("(prefers-reduced-motion: reduce)").matches; };
    function set(g, li) {
      if (!g) return;
      [].forEach.call(g.querySelectorAll(".x-lcard"), function (c) {
        var on = c === li; c.classList.toggle("is-active", on);
        var t = c.querySelector(".x-lcard__trig"); if (t) t.setAttribute("aria-expanded", on ? "true" : "false");
      });
      if (li && !narrow()) { var gr = g.getBoundingClientRect(), r = li.getBoundingClientRect(); li.classList.toggle("is-left", r.left + r.width / 2 > gr.left + gr.width / 2 + 4); }
      g.classList.toggle("is-focusing", !!li);
    }
    var cardOf = function (el) { return el && el.closest ? el.closest(".x-lgrid .x-lcard") : null; };
    document.addEventListener("keydown", function (e) {
      kbd = true;
      var g = page.querySelector(".x-lgrid");
      if (e.key === "Escape" && g && g.classList.contains("is-focusing")) { var a = g.querySelector(".x-lcard.is-active .x-lcard__trig"); set(g, null); if (a && g.contains(document.activeElement)) a.focus(); return; }
      var t = e.target.closest && e.target.closest(".x-lcard__trig");
      if (t && (e.key === "Enter" || e.key === " ") && !still()) { e.preventDefault(); var li = cardOf(t); set(li.parentNode, li.classList.contains("is-active") ? null : li); }
    }, true);
    document.addEventListener("pointerdown", function (e) { ptr = e.pointerType || "mouse"; kbd = false; }, true);
    document.addEventListener("pointerover", function (e) {
      if (e.pointerType !== "mouse" || narrow() || still()) return;
      var li = cardOf(e.target); if (li && !li.classList.contains("is-active")) set(li.parentNode, li);
    });
    document.addEventListener("pointerout", function (e) {
      if (e.pointerType !== "mouse" || narrow()) return;
      var g = e.target.closest && e.target.closest(".x-lgrid");
      if (g && !(e.relatedTarget && g.contains(e.relatedTarget)) && !g.contains(document.activeElement)) set(g, null);
    });
    document.addEventListener("focusin", function (e) {
      if (!kbd || still()) return;
      var t = e.target.closest && e.target.closest(".x-lcard__trig"); if (t) set(cardOf(t).parentNode, cardOf(t));
    });
    document.addEventListener("focusout", function (e) {
      var g = e.target.closest && e.target.closest(".x-lgrid");
      if (g && kbd && !(e.relatedTarget && g.contains(e.relatedTarget))) set(g, null);
    });
    document.addEventListener("click", function (e) {
      var g = page.querySelector(".x-lgrid"); if (!g || still()) return;
      var li = cardOf(e.target);
      if (!li) { if (g.classList.contains("is-focusing")) set(g, null); return; }
      if (e.target.closest("a")) return;
      if (ptr === "mouse" && !narrow()) set(g, li);
      else set(g, li.classList.contains("is-active") ? null : li);
    });
    var lastW = innerWidth;
    addEventListener("resize", function () { if (innerWidth === lastW) return; lastW = innerWidth; var g = page.querySelector(".x-lgrid.is-focusing"); if (g) set(g, null); });
  })();

  addEventListener("hashchange", route);
  route();
})();
;
/* Mobile/tablet redesign, pass 1: runs only while (max-width:1024px) matches. */
(function () {
  var MQ = matchMedia("(max-width:1024px)"), PH = matchMedia("(max-width:600px)");
  var RM = matchMedia("(prefers-reduced-motion: reduce)");
  var root = document.documentElement, $ = function (id) { return document.getElementById(id); };
  var on = function () { return MQ.matches; };
  var cleanups = [];

  /* Header: hide on scroll down, show on scroll up */
  var lastY = scrollY, hraf = 0;
  function hdr() {
    hraf = 0;
    var y = scrollY, dy = y - lastY;
    if (!on() || root.classList.contains("x-menu-open") || root.classList.contains("x-cm-lock") || y < 80 || ($("header").contains(document.activeElement))) root.classList.remove("x-hdr-hide");
    else if (dy > 6) root.classList.add("x-hdr-hide");
    else if (dy < -6) root.classList.remove("x-hdr-hide");
    if (Math.abs(dy) > 6 || y < 80) lastY = y;
  }
  addEventListener("scroll", function () { if (!hraf) hraf = requestAnimationFrame(hdr); }, { passive: true });

  /* Menu backdrop and dock Talk */
  $("menuScrim").addEventListener("click", function () { $("menuClose").click(); });
  $("dockTalk").addEventListener("click", function () {
    if (/^#\/contact(\?|\/|$)/.test(location.hash)) { var n = $("c-name"); if (n) { n.scrollIntoView({ block: "center", behavior: RM.matches ? "auto" : "smooth" }); n.focus({ preventScroll: true }); } return; }
    var f = document.querySelector(".x-fab"); if (f) f.click();
  });
  /* Dock: glass bubble that slides to the current item, and dark glass over dark bands */
  (function () {
    var dock = document.querySelector(".x-dock"); if (!dock) return;
    var bub = document.createElement("span"); bub.className = "x-dock__bubble"; bub.setAttribute("aria-hidden", "true");
    dock.insertBefore(bub, dock.firstChild);
    function place() {
      var a = dock.querySelector('a[aria-current="page"]');
      if (!a || !a.offsetWidth) { bub.classList.remove("is-on"); return; }
      bub.style.width = a.offsetWidth + "px"; bub.style.transform = "translateX(" + a.offsetLeft + "px)";
      bub.classList.add("is-on");
    }
    function settle() { place(); requestAnimationFrame(function () { dock.classList.add("is-ready"); }); }
    var io = null, seen = [];
    function watch() {
      if (io) io.disconnect(); io = null; seen = []; root.classList.remove("x-dock-dark");
      if (!PH.matches || !("IntersectionObserver" in window)) return;
      var h = innerHeight, top = -Math.max(0, h - 84);
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { var k = seen.indexOf(e.target); if (e.isIntersecting && k < 0) seen.push(e.target); else if (!e.isIntersecting && k > -1) seen.splice(k, 1); });
        root.classList.toggle("x-dock-dark", seen.length > 0);
      }, { rootMargin: top + "px 0px -12px 0px", threshold: 0 });
      [].forEach.call(document.querySelectorAll(".x-hero, .x-band--navy, .x-dark:not(.x-ctaband), .x-ctaband .x-cta, .x-foot"), function (el) { io.observe(el); });
    }
    var rt = 0;
    addEventListener("hashchange", function () { clearTimeout(rt); rt = setTimeout(function () { place(); watch(); }, 60); });
    addEventListener("resize", function () { dock.classList.remove("is-ready"); clearTimeout(rt); rt = setTimeout(function () { settle(); watch(); }, 120); });
    if (PH.addEventListener) PH.addEventListener("change", function () { dock.classList.remove("is-ready"); setTimeout(function () { settle(); watch(); }, 0); });
    if (document.readyState === "complete") { settle(); watch(); } else addEventListener("load", function () { settle(); watch(); });
    setTimeout(function () { settle(); watch(); }, 0);
  })();
  document.addEventListener("focusin", function (e) { root.classList.toggle("x-kb", !!(e.target.matches && e.target.matches("input,textarea,select"))); });
  document.addEventListener("focusout", function () { setTimeout(function () { var a = document.activeElement; root.classList.toggle("x-kb", !!(a && a.matches && a.matches("input,textarea,select"))); }, 0); });

  /* Reusable swipe row with dots synced by IntersectionObserver */
  function mrow(row, dark) {
    if (row.hasAttribute("data-mrow")) return null;
    var items = [].slice.call(row.children);
    if (items.length < 2) return null;
    row.setAttribute("data-mrow", ""); row.classList.add("x-mrow");
    var dots = document.createElement("div");
    dots.className = "x-mdots" + (dark ? " x-mdots--dark" : ""); dots.setAttribute("aria-hidden", "true");
    dots.innerHTML = items.map(function () { return "<i></i>"; }).join("");
    row.parentNode.insertBefore(dots, row.nextSibling);
    var ratios = items.map(function () { return 0; }), ds = dots.children;
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { ratios[items.indexOf(e.target)] = e.intersectionRatio; });
      var k = 0; ratios.forEach(function (r, i) { if (r > ratios[k] + 0.01) k = i; });
      [].forEach.call(ds, function (d, j) { d.classList.toggle("is-on", j === k); });
    }, { root: row, threshold: [0, 0.25, 0.5, 0.75, 1] }) : null;
    if (io) items.forEach(function (it) { io.observe(it); }); else ds[0].classList.add("is-on");
    var undo = function () { if (io) io.disconnect(); dots.remove(); row.classList.remove("x-mrow"); row.removeAttribute("data-mrow"); row.scrollLeft = 0; };
    cleanups.push(undo);
    return { row: row, items: items };
  }

  /* Staggered reveal, once */
  var rio = null;
  function reveal(els) {
    if (RM.matches || !("IntersectionObserver" in window)) return;
    if (!rio) rio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); rio.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el, i) {
      if (el.hasAttribute("data-mrv") || el.closest("[data-swipe],[data-mrow]")) return;
      el.setAttribute("data-mrv", ""); el.classList.add("x-mrv"); el.style.transitionDelay = Math.min(i, 5) * 70 + "ms";
      rio.observe(el);
    });
  }
  function stagger(scope) {
    [].forEach.call(scope.querySelectorAll(".x-steps, .x-grid, .x-mind__grid, .x-pgrid, .x-checks"), function (g) { reveal([].slice.call(g.children)); });
  }

  /* Home: industries tiles, promises chips, process timeline */
  var I = (window.PX && window.PX.I) || {};
  function homeIndustries() {
    if ($("mInd") || !window.PX) return;
    var beyond = document.querySelector('#view-home [aria-label="Beyond client work"]'); if (!beyond) return;
    var s = document.createElement("section");
    s.className = "x-sec x-monly"; s.id = "mInd"; s.setAttribute("aria-labelledby", "mIndTitle");
    s.innerHTML = '<div class="x-wrap"><div class="x-head"><div><p class="x-eyebrow">Industries</p><h2 class="x-h2" id="mIndTitle">Built for the sectors that move India.</h2></div></div><ul class="x-mind__grid">' +
      window.PX.INDUSTRIES.map(function (x) { return '<li><a href="#/industries/' + x.slug + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[x.slug] || "") + "</svg><span>" + x.name.replace(/&/g, "&amp;") + "</span></a></li>"; }).join("") +
      '</ul><a class="x-arrow" href="#/industries">All industries <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>';
    beyond.parentNode.insertBefore(s, beyond);
  }
  var tio = null;
  function timeline() {
    var lis = document.querySelectorAll("#process .x-steps li");
    if (!lis.length || tio || !PH.matches) return;
    if (RM.matches || !("IntersectionObserver" in window)) { [].forEach.call(lis, function (l) { l.classList.add("is-lit"); }); return; }
    tio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("is-lit"); else if (e.boundingClientRect.top > 0) e.target.classList.remove("is-lit"); });
    }, { rootMargin: "0px 0px -40% 0px" });
    [].forEach.call(lis, function (l) { tio.observe(l); });
    cleanups.push(function () { tio.disconnect(); tio = null; [].forEach.call(lis, function (l) { l.classList.remove("is-lit"); }); });
  }
  function home() {
    homeIndustries();
    timeline();
  }

  /* Leadership (≤1024px): one roster in hierarchy order, each photo shown once; a row opens the leader sheet (#ls).
     The desktop grid stays in the DOM and is hidden by CSS while [data-roster] is set. */
  var CHEVR = '<svg class="x-roster__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  var pad2 = function (i) { return (i < 9 ? "0" : "") + (i + 1); };
  var LS = (function () {
    var ls = $("ls"), card = ls.querySelector(".x-cm__card"), P = [], cur = 0, closeT = 0;
    var FOC = 'a[href]:not([hidden]),button:not([disabled])';
    function foc() { return [].filter.call(card.querySelectorAll(FOC), function (el) { return el.getClientRects().length > 0; }); }
    function fill(i) {
      var p = P[i], im = $("lsImg"), m = $("lsMail");
      im.src = p.src; im.alt = p.alt;
      $("lsIdx").textContent = pad2(i) + " / " + pad2(P.length - 1);
      $("lsName").textContent = p.name;
      $("lsRole").textContent = p.role;
      $("lsDesc").textContent = p.desc;
      $("lsSign").textContent = p.sign;
      $("lsNote").hidden = !p.desc;
      m.hidden = !p.mail; m.href = p.mail || "mailto:hello@pravahax.com";
      m.querySelector("span").textContent = "Email " + p.name.split(" ")[0];
      m.setAttribute("aria-label", "Email " + p.name + (p.mailT ? ", " + p.mailT : ""));
      $("lsAddr").textContent = p.mailT;
      card.scrollTop = 0;
    }
    function step(d) {
      cur = (cur + d + P.length) % P.length; fill(cur);
      $("lsLive").textContent = P[cur].name + ", " + P[cur].role + ". " + (cur + 1) + " of " + P.length + ".";
    }
    function open(list, i) {
      clearTimeout(closeT);
      P = list; cur = i; fill(i); $("lsLive").textContent = "";
      document.body.style.paddingRight = Math.max(0, innerWidth - document.documentElement.clientWidth) + "px";
      root.classList.add("x-cm-lock");
      card.style.transform = ""; card.style.transition = "";
      ls.hidden = false; void ls.offsetWidth; ls.classList.add("is-on");
      card.focus({ preventScroll: true });
    }
    function close(instant) {
      if (ls.hidden) return;
      ls.classList.remove("is-on");
      root.classList.remove("x-cm-lock"); document.body.style.paddingRight = "";
      var done = function () { ls.hidden = true; card.style.transform = ""; card.style.transition = ""; };
      clearTimeout(closeT);
      if (instant || RM.matches) done(); else closeT = setTimeout(done, 280);
      var row = P[cur] && P[cur].row;
      if (!instant && row && document.contains(row)) row.focus({ preventScroll: true });
    }
    ls.addEventListener("click", function (e) { if (e.target.closest("[data-ls-close]")) close(); });
    $("lsPrev").addEventListener("click", function () { step(-1); });
    $("lsNext").addEventListener("click", function () { step(1); });
    ls.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { e.stopPropagation(); close(); return; }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") { e.preventDefault(); step(e.key === "ArrowLeft" ? -1 : 1); return; }
      if (e.key !== "Tab") return;
      var f = foc(); if (!f.length) { e.preventDefault(); return; }
      var a = document.activeElement;
      if (e.shiftKey && (a === f[0] || a === card)) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    document.addEventListener("focusin", function (e) { if (!ls.hidden && ls.classList.contains("is-on") && !ls.contains(e.target)) card.focus({ preventScroll: true }); });
    // Swipe down (from the handle, or anywhere while the sheet is scrolled to the top) closes it; a sideways swipe on the photo moves to the adjacent leader.
    var y0 = null, x0 = 0, dy = 0, dx = 0, drag = false, onImg = false;
    card.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) { y0 = null; return; }
      y0 = e.touches[0].clientY; x0 = e.touches[0].clientX; dy = dx = 0; drag = false;
      onImg = !!e.target.closest(".x-ls__img");
      if (card.scrollTop > 0 && !e.target.closest(".x-cm__grab")) y0 = null;
    }, { passive: true });
    card.addEventListener("touchmove", function (e) {
      if (y0 === null) return;
      dy = e.touches[0].clientY - y0; dx = e.touches[0].clientX - x0;
      if (!drag && dy > 8 && dy > Math.abs(dx)) { drag = true; card.style.transition = "none"; }
      if (drag) card.style.transform = "translateY(" + Math.max(0, dy) + "px)";
    }, { passive: true });
    card.addEventListener("touchend", function () {
      if (y0 === null) return; y0 = null;
      if (drag) { card.style.transition = ""; if (dy > 90) close(); else card.style.transform = ""; return; }
      if (onImg && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) step(dx < 0 ? 1 : -1);
    });
    card.addEventListener("touchcancel", function () { y0 = null; if (drag) { card.style.transition = ""; card.style.transform = ""; } });
    return { open: open, close: close };
  })();
  function leadership() {
    var g = document.querySelector("#view-page .x-lgrid");
    if (!g || g.hasAttribute("data-roster")) return;
    var P = [].map.call(g.querySelectorAll(".x-lcard"), function (li) {
      var img = li.querySelector(".x-lcard__img img"), m = li.querySelector(".x-lmail"), n = li.querySelector(".x-lnote");
      var sg = n && n.querySelector(".x-lnote__sign"), d = n && n.querySelector("p:not(.x-lnote__sign)");
      return { k: li.getAttribute("data-sub"), name: li.querySelector(".x-h3").textContent, role: li.querySelector(".x-lcard__role").textContent, src: img.getAttribute("src"), alt: img.getAttribute("alt"), desc: d ? d.textContent : "", sign: sg ? sg.textContent : "", mail: m ? m.getAttribute("href") : "", mailT: m ? m.querySelector(".x-lmail__t").textContent : "" };
    });
    if (!P.length) return;
    var r = document.createElement("ul");
    r.className = "x-roster"; r.setAttribute("aria-label", "Leadership team");
    r.innerHTML = P.map(function (p, i) {
      return '<li><button type="button" class="x-roster__row" aria-haspopup="dialog" aria-controls="ls"><span class="x-roster__img"><img src="' + p.src + '" alt="" decoding="async" /></span>' +
        '<span class="x-roster__txt"><span class="x-roster__idx" aria-hidden="true">' + pad2(i) + '</span><span class="x-roster__name"></span><span class="x-roster__role"></span></span>' + CHEVR + "</button></li>";
    }).join("");
    var rows = [].slice.call(r.querySelectorAll(".x-roster__row"));
    P.forEach(function (p, i) { p.row = rows[i]; rows[i].querySelector(".x-roster__name").textContent = p.name; rows[i].querySelector(".x-roster__role").textContent = p.role; });
    g.parentNode.insertBefore(r, g);
    g.setAttribute("data-roster", "");
    r.addEventListener("click", function (e) { var b = e.target.closest(".x-roster__row"); if (b) LS.open(P, rows.indexOf(b)); });
    // Deep links such as #/about/devang scroll to that leader and open the sheet.
    var sub = (location.hash.split("?")[0].split("/")[2] || "").toLowerCase(), si = -1;
    P.forEach(function (p, i) { if (p.k === sub) si = i; });
    if (si > -1) { rows[si].scrollIntoView({ block: "center", behavior: "auto" }); LS.open(P, si); }
    cleanups.push(function () { LS.close(true); r.remove(); g.removeAttribute("data-roster"); });
  }

  /* Pass 2a: inner pages (marked with data-mv for CSS), accordions, footer */
  var PLUS2 = '<svg class="x-macc__i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>', accN = 0;
  function after(el) { var a = [], n = el.nextElementSibling; while (n) { a.push(n); n = n.nextElementSibling; } return a; }
  // Collapse the siblings after `hd` under a button heading; `hd` is hidden and comes back on cleanup.
  function acc(hd, title, cls, keep) {
    var nodes = after(hd); if (!nodes.length || hd.hasAttribute("data-macc")) return;
    var id = "macc" + (++accN), w = document.createElement("div"), hn = keep ? "h3" : "h2";
    w.className = "x-macc" + (cls ? " " + cls : "");
    w.innerHTML = "<" + hn + ' class="x-macc__h"><button type="button" aria-expanded="false" aria-controls="' + id + '"><span></span>' + PLUS2 + "</button></" + hn + '><div class="x-macc__p" id="' + id + '" hidden></div>';
    w.querySelector("span").textContent = title;
    var p = w.lastChild, b = w.querySelector("button");
    nodes.forEach(function (n) { p.appendChild(n); });
    hd.parentNode.insertBefore(w, hd.nextSibling);
    hd.setAttribute("data-macc", ""); if (!keep) hd.style.display = "none";
    b.addEventListener("click", function () { var o = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", o); p.hidden = !o; });
    cleanups.push(function () { nodes.forEach(function (n) { hd.parentNode.insertBefore(n, w); }); w.remove(); hd.removeAttribute("data-macc"); hd.style.display = ""; });
  }
  function unswipe(row) {
    if (!row || !row.classList.contains("x-swipe")) return;
    var bar = row.nextElementSibling; bar = bar && bar.classList.contains("x-swipebar") ? bar : null;
    row.classList.remove("x-swipe"); if (bar) bar.style.display = "none";
    cleanups.push(function () { row.classList.add("x-swipe"); if (bar) bar.style.display = ""; });
  }
  function footAcc() {
    if (!PH.matches) return;
    [].forEach.call(document.querySelectorAll(".x-foot__grid>div:not(.x-foot__brand)>h2"), function (h) { acc(h, h.textContent, "x-macc--foot"); });
  }
  function inner() {
    var p = $("view-page"); if (!p || p.hidden) return;
    var parts = location.hash.split("?")[0].replace(/^#\/?/, "").split("/").filter(Boolean), top = parts[0] || "", mv = "";
    var detail = parts[1] && p.querySelector(".x-band .x-split .x-crumb");
    if ((top === "services" || top === "consulting") && !parts[1]) { mv = top === "services" ? "svcs" : "consult"; unswipe(p.querySelector(".x-indgrid")); }
    else if ((top === "services" || top === "industries") && detail) {
      mv = "detail";
      var g = p.querySelector(".x-sec .x-grid"); if (g) mrow(g);
      [].forEach.call(p.querySelectorAll(".x-sec .x-wrap>.x-head"), function (hd) { var nx = hd.nextElementSibling; if (nx && (nx.matches(".x-steps") || (nx.matches(".x-grid") && !nx.hasAttribute("data-mrow")))) acc(hd, hd.querySelector("h2").textContent); });
      [].forEach.call(p.querySelectorAll(".x-split>div>h2+.x-checks"), function (c) { acc(c.previousElementSibling, c.previousElementSibling.textContent); });
    }
    else if (top === "industries" && !parts[1]) { mv = "inds"; var ig = p.querySelector(".x-indgrid"); unswipe(ig); if (ig) mrow(ig); }
    else if (top === "work" && !parts[1]) { mv = "work"; unswipe(p.querySelector(".x-cases")); }
    else if (top === "work" && p.querySelector(".x-hero--case")) {
      mv = "case";
      var f = p.querySelector(".x-facts"); if (f) { f.classList.add("x-mchips"); cleanups.push(function () { f.classList.remove("x-mchips"); }); }
      if (root.classList.contains("x-overdark")) {
        root.classList.remove("x-overdark");
        cleanups.push(function () { var v = $("view-home").hidden ? $("view-page") : $("view-home"), l = v.firstElementChild; root.classList.toggle("x-overdark", !!l && l.matches(".x-hero,.x-band--navy")); });
      }
    }
    else if (top === "contact") mv = "contact";
    else if (p.querySelector(".x-story2")) { mv = "story"; storyM(p); }
    else if (p.querySelector(".x-imphero")) { mv = "impact"; deck(p.querySelector(".x-pgrid")); light(p.querySelectorAll(".x-steps li")); }
    else if (p.querySelector(".x-labhero")) { mv = "labs"; deck(p.querySelector(".x-labhero .x-labnotes")); deck(p.querySelector(".x-board")); terms(p); }
    else if (p.querySelector(".x-hero--life")) { mv = "life"; deck(p.querySelector(".x-spaces")); deck(p.querySelector("#sec-rituals .x-rituals")); unswipe(p.querySelector(".x-exhs")); terms(p); }
    else if (p.querySelector("#sec-roles")) { mv = "careers"; careersM(p); }
    else if (top === "sitemap" || /^(privacy|terms|cookies|accessibility)$/.test(top)) mv = "read";
    if (mv) { p.setAttribute("data-mv", mv); cleanups.push(function () { p.removeAttribute("data-mv"); }); }
  }

  /* Pass 2b: story, impact, labs, life, careers, reading pages */
  // Swipe deck: phones already get .x-swipe (with dots) from the main script; elsewhere use mrow.
  function deck(el) { if (el && !(PH.matches && el.classList.contains("x-swipe"))) mrow(el); }
  // Turn heading `h` into a toggle; `nodes` move into a panel after it and go back on cleanup.
  function fold(h, nodes, open, pre, sub) {
    if (!h || h.hasAttribute("data-fold")) return;
    nodes = nodes.filter(Boolean); if (!nodes.length) return;
    var id = "mfold" + (++accN), html0 = h.innerHTML, pos = nodes.map(function (n) { return [n.parentNode, n.nextSibling]; });
    var p = document.createElement("div"); p.className = "x-mfold__p"; p.id = id; p.hidden = !open;
    h.setAttribute("data-fold", "");
    h.innerHTML = '<button type="button" class="x-mfold__b" aria-expanded="' + !!open + '" aria-controls="' + id + '">' + (pre || "") + '<span class="x-mfold__t"></span>' + PLUS2 + "</button>";
    var t = h.querySelector(".x-mfold__t"); t.innerHTML = html0;
    if (sub) { var s = document.createElement("small"); s.className = "x-mfold__s"; s.textContent = sub; t.appendChild(s); }
    h.parentNode.insertBefore(p, h.nextSibling);
    nodes.forEach(function (n) { p.appendChild(n); });
    var b = h.firstChild;
    b.addEventListener("click", function () { var o = b.getAttribute("aria-expanded") !== "true"; b.setAttribute("aria-expanded", o); p.hidden = !o; });
    cleanups.push(function () { for (var i = nodes.length - 1; i >= 0; i--) pos[i][0].insertBefore(nodes[i], pos[i][1]); p.remove(); h.innerHTML = html0; h.removeAttribute("data-fold"); });
  }
  function storyM(p) {
    deck(p.querySelector(".x-notesrow"));
    deck(p.querySelector(".x-beliefs"));
    [].forEach.call(p.querySelectorAll(".x-bdeep"), function (s, i) {
      var b = s.querySelector(".x-bdeep__body"); if (!b) return;
      fold(b.querySelector(".x-bdeep__t"), [].slice.call(b.querySelectorAll(".x-bdeep__line,.x-bdeep__lbl,.x-bdeep__list")), i === 0, '<span class="x-mfold__n" aria-hidden="true">0' + (i + 1) + "</span>");
    });
  }
  function terms(p) {
    [].forEach.call(p.querySelectorAll(".x-terms"), function (t) {
      var hd = t.parentNode.querySelector(":scope>.x-head"); if (!hd) return;
      acc(hd, "Read all " + t.querySelectorAll("li").length + " clauses", "x-macc--terms", true);
    });
  }
  function careersM(p) {
    [].forEach.call(p.querySelectorAll(".x-role"), function (r) {
      var meta = r.querySelector(".x-role__meta"), team = meta && meta.firstElementChild;
      fold(r.querySelector(".x-h3"), [meta, r.querySelector(".x-btn")], false, "", team ? team.textContent : "");
    });
  }
  // Vertical timeline whose nodes light as they reach the upper part of the screen.
  function light(lis) {
    if (!lis.length) return;
    var all = function (v) { [].forEach.call(lis, function (l) { l.classList.toggle("is-lit", v); }); };
    if (RM.matches || !("IntersectionObserver" in window)) { all(true); cleanups.push(function () { all(false); }); return; }
    var o = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add("is-lit"); else if (e.boundingClientRect.top > 0) e.target.classList.remove("is-lit"); });
    }, { rootMargin: "0px 0px -40% 0px" });
    [].forEach.call(lis, function (l) { o.observe(l); });
    cleanups.push(function () { o.disconnect(); all(false); });
  }

  function enhance() {
    if (!on()) return;
    var isHome = !$("view-home").hidden;
    footAcc();
    if (isHome) home(); else { leadership(); inner(); }
    stagger(isHome ? $("view-home") : $("view-page"));
  }
  function teardown() {
    cleanups.splice(0).forEach(function (f) { try { f(); } catch (err) {} });
    root.classList.remove("x-hdr-hide");
    [].forEach.call(document.querySelectorAll("[data-mrv]"), function (el) { el.classList.remove("x-mrv"); el.removeAttribute("data-mrv"); el.style.transitionDelay = ""; });
  }
  function routeChange() { cleanups.splice(0).forEach(function (f) { try { f(); } catch (err) {} }); root.classList.remove("x-hdr-hide"); setTimeout(enhance, 0); }
  addEventListener("hashchange", routeChange);
  function mqChange() { teardown(); enhance(); }
  [MQ, PH].forEach(function (m) { if (m.addEventListener) m.addEventListener("change", mqChange); else if (m.addListener) m.addListener(mqChange); });
  enhance();
})();
