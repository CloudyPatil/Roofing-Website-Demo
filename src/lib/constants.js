export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || "ProRoof Experts",
  phone: process.env.NEXT_PUBLIC_PHONE || "+15551234567",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(555) 123-4567",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@proroof.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "123 Main Street, Dallas, TX",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+15551234567",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  hours: "Mon–Sat: 7AM–6PM",
  emergency: "24/7 Emergency Service",
  license: "#TX-12345",
  rating: "4.9",
  reviews: "300+",
  projects: "500+",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/roof-replacement" },
  { label: "About", href: "/about" },
  { label: "Free Inspection", href: "/free-inspection" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  { id: "roof-replacement", title: "Roof Replacement", description: "Complete tear-off and brand new roof installation.", href: "/services/roof-replacement" },
  { id: "roof-repair", title: "Roof Repair", description: "Fast repairs for leaks and storm damage.", href: "/services/roof-repair" },
  { id: "storm-damage", title: "Storm Damage", description: "Emergency response for hail and wind damage.", href: "/services/storm-damage" },
  { id: "commercial", title: "Commercial Roofing", description: "Flat and commercial roof systems for businesses.", href: "/services/commercial" },
  { id: "inspection", title: "Free Inspection", description: "100% free professional roof inspection.", href: "/free-inspection" },
  { id: "gutters", title: "Gutter Services", description: "Installation and repair of gutters & downspouts.", href: "/services/gutters" },
];