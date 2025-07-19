import { useState } from "react";
import Layout from "../components/Layout";

const mockFavorites = [
  {
    id: "1",
    title: "Steve Jobs by Walter Isaacson",
    action: "read",
    url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
    description:
      "The biography that changed how I think about creativity and technology. Jobs's obsession with perfection and design thinking.",
  },
  {
    id: "2",
    title: "The Social Network",
    action: "watch",
    url: "https://www.imdb.com/title/tt1285016/",
    description:
      "Sorkin's dialogue, Fincher's direction. Shows the ruthless ambition needed to build something that matters.",
  },
  {
    id: "3",
    title: "Paul Graham Essays",
    action: "read",
    url: "http://paulgraham.com/",
    description:
      "Essays on startups, programming, and thinking clearly. Taught me how to write and think about building companies.",
  },
  {
    id: "4",
    title: "Hacker News",
    action: "use",
    url: "https://news.ycombinator.com/",
    description:
      "Where I go to stay current on tech, startups, and interesting ideas. Best comment quality on the internet.",
  },
  {
    id: "5",
    title: "Naval's How to Get Rich",
    action: "listen",
    url: "https://www.youtube.com/watch?v=1-TZqOsVCNM",
    description:
      "Wealth creation wisdom condensed into actionable insights. Changed my relationship with money and business.",
  },
  {
    id: "6",
    title: "Atomic Habits",
    action: "read",
    url: "https://jamesclear.com/atomic-habits",
    description:
      "Practical system for building good habits and breaking bad ones. 1% better every day compounds.",
  },
  {
    id: "7",
    title: "Notion",
    action: "use",
    url: "https://www.notion.so/",
    description:
      "My second brain for organizing thoughts, projects, and knowledge. Replaced multiple apps with one workspace.",
  },
  {
    id: "8",
    title: "Her",
    action: "watch",
    url: "https://www.imdb.com/title/tt1798709/",
    description:
      "Spike Jonze's masterpiece about AI and human connection. Beautiful cinematography and thoughtful storytelling.",
  },
  {
    id: "9",
    title: "Airpods Pro",
    action: "use",
    url: "https://www.apple.com/airpods-pro/",
    description:
      "Noise cancellation that changed my focus. Essential for deep work and quality audio consumption.",
  },
  {
    id: "10",
    title: "The Tim Ferriss Show",
    action: "listen",
    url: "https://tim.blog/podcast/",
    description:
      "Long-form conversations with world-class performers. Lessons from the best in business, investing, and life.",
  },
  {
    id: "11",
    title: "Figma",
    action: "use",
    url: "https://www.figma.com/",
    description:
      "Collaborative design tool that revolutionized how teams create. Intuitive interface meets powerful features.",
  },
  {
    id: "12",
    title: "Spotify Premium",
    action: "use",
    url: "https://www.spotify.com/premium/",
    description:
      "Unlimited music discovery and podcast consumption. Soundtrack to productivity and creativity.",
  },
];

const filterActions = ["all", "read", "watch", "listen", "use"];

export default function Favorites() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? mockFavorites
    : mockFavorites.filter((item) => item.action === activeFilter);

  return (
    <Layout>
      <section className="space-y-6">
        <h2 className="font-semibold tracking-wide text-md uppercase">My favorite things</h2>
        {/* <p className="text-gray-600 pb-10">Museum of cool shit that I fuck with. Hope you enjoy.</p> */}

        <div className="flex flex-wrap gap-2 pt-2 pb-4">
          {filterActions.map((action) => (
            <button
              key={action}
              onClick={() => setActiveFilter(action)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition uppercase ${
                activeFilter === action
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {action}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((fav) => (
            <div
              key={fav.id}
              onClick={() => window.open(fav.url, "_blank")}
              className="cursor-pointer rounded-lg border border-gray-200 p-5 hover:bg-neutral-100 transition"
            >
              <div className="text-sm text-gray-500 uppercase mb-1 tracking-wider">
                {fav.action}
              </div>
              <h3 className="text-blue-600 font-medium text-md mb-1">
                {fav.title}
              </h3>
              <p className="text-gray-800 text-sm">{fav.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
