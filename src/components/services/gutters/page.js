import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Gutter Installation & Repair",
  description: "Seamless aluminum gutter installation, repair, and cleaning. Same-day quotes available.",
};

export default function Page() {
  return <ServicePageTemplate service={servicesData["gutters"]} />;
}