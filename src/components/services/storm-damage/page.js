import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { servicesData } from "@/lib/services-data";

export const metadata = {
  title: "Storm Damage Repair",
  description: "24/7 emergency storm damage response. We handle your insurance claim from start to finish.",
};

export default function Page() {
  return <ServicePageTemplate service={servicesData["storm-damage"]} />;
}