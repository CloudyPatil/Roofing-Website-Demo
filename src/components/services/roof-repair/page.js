import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Roof Repair Services",
  description: "Fast, reliable roof repairs. Same-day service available. 5-year warranty on all repairs.",
};

export default function Page() {
  return <ServicePageTemplate service={servicesData["roof-repair"]} />;
}