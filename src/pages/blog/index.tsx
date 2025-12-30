import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  categories: string[];
  href: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why I Prefer Linux Over Windows as a Developer",
    description:
      "A personal take on why Linux gives me freedom, customization, and trust as a developer compared to Windows.",
    categories: ["linux", "cybersecurity"],
    href: "/blog/posts/linuxasadev",
  },
  
];

const allCategories = Array.from(
  new Set(blogPosts.flatMap((post) => post.categories))
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col px-4">
      <Navbar />

      <main className="flex-1 pt-28 pb-8 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-ctp-green text-center mb-8 animate-fade-in">
          Blog
        </h1>

        <div className="relative mb-6 w-full max-w-md mx-auto animate-fade-in-delay-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-ctp-surface0 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ctp-lavender transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8 justify-center animate-fade-in-delay-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === null
                ? "bg-ctp-teal text-ctp-base"
                : "bg-ctp-surface0"
            }`}
          >
            All
          </button>
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

        <div className="space-y-6 animate-fade-in-delay-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={post.href}
              className="block bg-ctp-surface0 rounded-xl p-6 hover:bg-ctp-surface1 transition-colors animate-fade-in-up"
            >
              <h2 className="text-2xl font-semibold text-ctp-green mb-2">
                {post.title}
              </h2>
              <p className="text-foreground mb-2">{post.description}</p>
              <div className="flex gap-2 flex-wrap">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-ctp-surface1 rounded-lg text-sm text-ctp-lavender"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </Link>
          ))}

          {filteredPosts.length === 0 && (
            <p className="text-gray-400 text-center">No posts found.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
