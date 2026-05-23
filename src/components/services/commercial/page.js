import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Commercial Roofing",
  description: "TPO, EPDM, and commercial roof systems. Minimal business disruption with flexible scheduling.",
};

export default function Page() {
  return <ServicePageTemplate service={servicesData["commercial"]} />;
}