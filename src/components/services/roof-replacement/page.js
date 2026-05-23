import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Roof Replacement Services",
  description: "Premium roof replacement with lifetime warranty. GAF Certified installers. 1-2 day installation.",
};

export default function Page() {
  return <ServicePageTemplate service={servicesData["roof-replacement"]} />;
}