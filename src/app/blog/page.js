import ComingSoon from "@/components/shared/ComingSoon";

export const metadata = {
  title: "Blog — Coming Soon",
  description: "Roofing tips, guides, and industry insights.",
};

export default function Page() {
  return (
    <ComingSoon
      title="Blog Coming Soon"
      description="We're preparing helpful articles, tips, and guides about roofing care, repairs, and replacement. Stay tuned!"
      emoji="📖"
    />
  );
}