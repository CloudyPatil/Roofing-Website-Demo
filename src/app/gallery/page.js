import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
  title: "Gallery — Coming Soon",
  description: "View our portfolio of completed roofing projects.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Gallery Coming Soon"
      description="We're building a stunning gallery of our completed roofing projects. Check back soon to see real before & after transformations!"
      emoji="📸"
    />
  );
}