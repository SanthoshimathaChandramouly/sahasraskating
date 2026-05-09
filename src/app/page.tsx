import Hero from "@/components/Hero";
import AboutTimeline from "@/components/AboutTimeline";
import SkillsGalaxy from "@/components/SkillsGalaxy";
import MediaGallery from "@/components/MediaGallery";
import AchievementHall from "@/components/AchievementHall";
import AdditionalSections from "@/components/AdditionalSections";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutTimeline />
      <SkillsGalaxy />
      <MediaGallery />
      <AchievementHall />
      <AdditionalSections />
    </main>
  );
}
