import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
  title: "Insurance Claims — Coming Soon",
  description: "We help with insurance claims for storm damage.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Insurance Claims Page Coming Soon"
      description="Detailed information about our insurance claim assistance process is on the way. For immediate help with your claim, contact us directly!"
      emoji="🛡️"
    />
  );
}
