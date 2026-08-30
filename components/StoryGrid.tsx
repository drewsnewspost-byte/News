import { StoryCard } from "@/components/StoryCard";
import type { Story } from "@/lib/types";

export function StoryGrid({ stories, compact = false }: { stories: Story[]; compact?: boolean }) {
  if (stories.length === 0) {
    return <p className="font-sans text-neutral-500">No published comics on this desk yet.</p>;
  }
  return (
    <div className={compact ? "relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" : "relative grid grid-cols-1 gap-10 sm:grid-cols-2"}>
      {stories.map((story) => (
        <StoryCard key={`${story.section}-${story.slug}`} story={story} compact={compact} />
      ))}
    </div>
  );
}
