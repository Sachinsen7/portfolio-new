import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, Activity } from "lucide-react";

export default function GitHubContributions() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contributionData, setContributionData] = useState(null);
  const githubUsername = "Sachinsen7";

  const customTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  useEffect(() => {
    // Simple timeout so you see loading state briefly
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto py-8 max-w-4xl">
      <div className="flex flex-col items-start gap-4 mb-6">
        <h2 className="text-xl text-start">GitHub</h2>
        <h3 className="text-2xl font-semibold flex items-center">
          <Activity className="h-6 w-6 mr-2 text-accent" />
          Contributions
        </h3>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm text-gray-400">
              Loading contributions...
            </span>
          </div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Github className="h-12 w-12 text-gray-500 mb-3" />
          <p className="text-sm text-gray-400 mb-2">
            Unable to load GitHub contributions
          </p>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      ) : (
        <div className="rounded-lg p-4 border border-gray-700/50">
          <GitHubCalendar
            username={githubUsername}
            theme={customTheme}
            hideColorLegend
            hideMonthLabels={false}
            hideTotalCount
            blockSize={11}
            blockMargin={5}
            fontSize={15}
          />

          <div className="mt-4 text-center text-sm text-gray-400">
            <span>@{githubUsername}</span>
          </div>
        </div>
      )}
    </section>
  );
}
