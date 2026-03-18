import { useEffect, useState, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, Activity } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

export default function GitHubContributions() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalContributions, setTotalContributions] = useState(0);
  const { theme } = useContext(ThemeContext);
  const githubUsername = "Sachinsen7";

  // Light theme - white/light colors for better visibility
  const lightTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  };

  // Dark theme - original dark colors
  const darkTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  // Select theme based on current mode
  const customTheme = theme === "light" ? lightTheme : darkTheme;

  // Calculate total contributions for current year
  const selectLastYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentYearContributions = contributions.filter((activity) => {
      const activityYear = new Date(activity.date).getFullYear();
      return activityYear === currentYear;
    });

    // Calculate total count
    const total = currentYearContributions.reduce(
      (sum, activity) => sum + activity.count,
      0
    );
    setTotalContributions(total);

    return contributions;
  };

  useEffect(() => {
    // Simple timeout so you see loading state briefly
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto py-8 max-w-4xl">
      <div className="flex flex-col items-start gap-3 mb-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">GitHub</h2>
        <h3 className="text-xl font-semibold flex items-center sm:text-2xl">
          <Activity className="h-5 w-5 mr-2 text-accent" />
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
            className="interactive-text-link text-sm text-accent"
          >
            View on GitHub →
          </a>
        </div>
      ) : (
        <div className="rounded-2xl p-4 border border-gray-300 dark:border-gray-700/50 bg-white dark:bg-transparent">
          {/* Total Contributions Display */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                @{githubUsername}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 px-3 py-1.5 rounded-lg border border-green-200 dark:border-green-700/30">
              <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-xs font-semibold text-green-700 dark:text-green-300 sm:text-sm">
                {totalContributions.toLocaleString()}
              </span>
              <span className="text-[11px] text-green-600 dark:text-green-400 sm:text-xs">
                contributions in {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <GitHubCalendar
            username={githubUsername}
            theme={customTheme}
            hideColorLegend
            hideMonthLabels={false}
            hideTotalCount
            blockSize={11}
            blockMargin={5}
            fontSize={15}
            transformData={selectLastYear}
          />
        </div>
      )}
    </section>
  );
}
