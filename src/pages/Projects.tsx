import { useEffect, useState } from "react";
import { GitFork } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Repo {
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

const allCategories = ["all", "open source"];

const Projects = () => {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof allCategories)[number]>("all");

  useEffect(() => {
    const start = Date.now();

    fetch("https://api.github.com/repos/xojw/portfolio")
      .then((res) => res.json())
      .then((data) => {
        const elapsed = Date.now() - start;
        const delay = Math.max(500 - elapsed, 0);

        setTimeout(() => {
          setRepo(data);
          setLoading(false);
        }, delay);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-4">
      <Navbar />

      <main className="flex-1 flex flex-col items-center gap-10 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-ctp-green animate-fade-in">
          Projects
        </h1>

        {/* Categories */}
        <div className="flex gap-3 animate-fade-in">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-ctp-teal text-ctp-base"
                  : "bg-ctp-surface0"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading && (
          <p className="text-xl text-ctp-muted animate-fade-in">
            fetching data...
          </p>
        )}

        {!loading && (
          <div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
          >
            {(selectedCategory === "all" ||
              selectedCategory === "open source") &&
              repo && (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-ctp-muted rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col gap-3 animate-fade-in"
                >
                  <h2 className="text-2xl font-semibold text-ctp-text">
                    {repo.name}
                  </h2>
                  <p className="text-ctp-muted">{repo.description}</p>
                  <div className="flex gap-4 text-sm text-ctp-yellow font-medium">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1">
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              )}

            {selectedCategory === "all" && (
              <a
                href="https://peretas.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-ctp-muted rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col gap-3 animate-fade-in"
              >
                <h2 className="text-2xl font-semibold text-ctp-text">
                  Peretas
                </h2>
                <p className="text-ctp-muted">
                  A community for developers to grow their skills, showcase
                  their work, and participate in hackathons and giveaways.
                </p>
              </a>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
