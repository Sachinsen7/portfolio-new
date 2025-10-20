import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, Activity } from "lucide-react";

export default function GitHubContributions() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [contributionData, setContributionData] = useState(null);
    const [colorScheme, setColorScheme] = useState('light');

    // Your GitHub username - replace with your actual username
    const githubUsername = "Sachinsen7";

    // Detect theme changes
    useEffect(() => {
        const updateColorScheme = () => {
            setColorScheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        };

        // Initial check
        updateColorScheme();

        // Listen for theme changes
        const observer = new MutationObserver(updateColorScheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    // Custom theme to match your website colors
    const customTheme = {
        light: [
            '#ebedf0',
            '#9be9a8',
            '#40c463',
            '#30a14e',
            '#216e39'
        ],
        dark: [
            '#161b22',
            '#0e4429',
            '#006d32',
            '#26a641',
            '#39d353'
        ]
    };

    const handleLoad = (data) => {
        console.log('GitHub data loaded:', data);
        setContributionData(data);
        setLoading(false);
        setError(false);
    };

    const handleError = (err) => {
        console.error('GitHub data error:', err);
        setLoading(false);
        setError(true);
    };

    return (
        <section
            className="container mx-auto py-8 max-w-4xl"
            aria-labelledby="github-heading"
        >
            <div className="flex flex-col items-start gap-4 mb-6">
                <h2 id="github-heading" className="text-xl text-start">
                    GitHub
                </h2>
                <h3 className="text-2xl font-semibold text-foreground flex items-center">
                    <Activity className="h-6 w-6 mr-2 text-accent" aria-hidden="true" />
                    Contributions
                </h3>
            </div>

            <div className="bg-glass backdrop-blur rounded-lg p-4 sm:p-6 border border-glass-border">
                {loading && (
                    <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                        <span className="ml-3 text-sm text-foreground-muted">
                            Loading contributions...
                        </span>
                    </div>
                )}

                {error && (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                        <Github className="h-12 w-12 text-foreground-muted mb-3" />
                        <p className="text-sm text-foreground-muted mb-2">
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
                )}

                <div className={loading || error ? "hidden" : "block"}>
                    <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <Github className="h-5 w-5 text-foreground-muted" />
                            <span className="text-sm font-medium text-foreground">
                                @{githubUsername}
                            </span>
                        </div>
                        <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:underline flex items-center gap-1"
                        >
                            View Profile
                            <Github className="h-3 w-3" />
                        </a>
                    </div>

                    <div className="overflow-x-auto">
                        <GitHubCalendar
                            username={githubUsername}
                            colorScheme={colorScheme}
                            fontSize={12}
                            blockSize={12}
                            blockMargin={3}
                            hideColorLegend={false}
                            hideMonthLabels={false}
                            hideTotalCount={false}
                            loading={loading}
                            errorMessage="Unable to load contributions"
                            onLoad={handleLoad}
                            onError={handleError}
                            theme={customTheme}
                            style={{
                                color: 'var(--foreground)',
                                fontSize: '12px'
                            }}
                        />
                    </div>

                    {/* Display contribution stats if data is available */}
                    {contributionData && (
                        <div className="mt-4 p-4 bg-glass/50 rounded-lg border border-glass-border">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-foreground-muted">
                                    Total contributions in the last year:
                                </span>
                                <span className="font-semibold text-accent">
                                    {contributionData.total?.lastYear || 0}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="mt-4 flex items-center justify-between text-xs text-foreground-muted">
                        <span>Less</span>
                        <div className="flex items-center gap-1">
                            {[0, 1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className="w-2 h-2 rounded-sm"
                                    style={{
                                        backgroundColor: level === 0
                                            ? 'hsl(var(--muted))'
                                            : `hsl(var(--accent) / ${0.2 + (level * 0.2)})`
                                    }}
                                />
                            ))}
                        </div>
                        <span>More</span>
                    </div>
                </div>
            </div>

            {/* GitHub Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-glass backdrop-blur rounded-lg p-4 border border-glass-border text-center">
                    <div className="text-lg font-semibold text-foreground">
                        {new Date().getFullYear()}
                    </div>
                    <div className="text-sm text-foreground-muted">Current Year</div>
                </div>

                <div className="bg-glass backdrop-blur rounded-lg p-4 border border-glass-border text-center">
                    <div className="text-lg font-semibold text-accent">
                        <Github className="h-5 w-5 inline mr-1" />
                        Active
                    </div>
                    <div className="text-sm text-foreground-muted">Developer</div>
                </div>

                <div className="bg-glass backdrop-blur rounded-lg p-4 border border-glass-border text-center">
                    <div className="text-lg font-semibold text-foreground">
                        365
                    </div>
                    <div className="text-sm text-foreground-muted">Days Tracked</div>
                </div>
            </div>
        </section>
    );
}