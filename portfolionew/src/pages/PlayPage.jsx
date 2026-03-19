import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Eraser,
  Gamepad2,
  Lightbulb,
  RefreshCcw,
  Sparkles,
  Wand2,
} from "lucide-react";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";

const puzzles = [
  {
    id: "monsoon-grid",
    name: "Monsoon Grid",
    difficulty: "Calm start",
    puzzle:
      "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
    solution:
      "534678912672195348198342567859761423426853791713924856961537284287419635345286179",
  },
  {
    id: "night-shift",
    name: "Night Shift",
    difficulty: "Medium",
    puzzle:
      "003020600900305001001806400008102900700000008006708200002609500800203009005010300",
    solution:
      "483921657967345821251876493548132976729564138136798245372689514814253769695417382",
  },
];

const buildBoard = (value) => value.split("").map((cell) => Number(cell));
const buildEmptyNotes = () => Array.from({ length: 81 }, () => []);

function getBoxIndex(index) {
  const row = Math.floor(index / 9);
  const col = index % 9;
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

function isRelatedCell(index, selectedCell) {
  if (selectedCell === null) return false;
  const row = Math.floor(index / 9);
  const col = index % 9;
  const selectedRow = Math.floor(selectedCell / 9);
  const selectedCol = selectedCell % 9;

  return row === selectedRow || col === selectedCol || getBoxIndex(index) === getBoxIndex(selectedCell);
}

export default function PlayPage() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [board, setBoard] = useState(() => buildBoard(puzzles[0].puzzle));
  const [notes, setNotes] = useState(buildEmptyNotes);
  const [selectedCell, setSelectedCell] = useState(null);
  const [notesMode, setNotesMode] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [message, setMessage] = useState("");

  const currentPuzzle = puzzles[puzzleIndex];
  const givens = useMemo(
    () => currentPuzzle.puzzle.split("").map((value) => value !== "0"),
    [currentPuzzle]
  );
  const solution = currentPuzzle.solution.split("").map((value) => Number(value));

  const filledCells = board.filter((value) => value !== 0).length;
  const wrongCells = board.filter(
    (value, index) => value !== 0 && value !== solution[index]
  ).length;
  const isSolved = filledCells === 81 && wrongCells === 0;

  const resetPuzzle = () => {
    setBoard(buildBoard(currentPuzzle.puzzle));
    setNotes(buildEmptyNotes());
    setSelectedCell(null);
    setNotesMode(false);
    setMessage("Board reset.");
  };

  const loadPuzzle = (nextIndex) => {
    setPuzzleIndex(nextIndex);
    setBoard(buildBoard(puzzles[nextIndex].puzzle));
    setNotes(buildEmptyNotes());
    setSelectedCell(null);
    setNotesMode(false);
    setMessage(`Loaded ${puzzles[nextIndex].name}.`);
  };

  const placeValue = (value) => {
    if (selectedCell === null || givens[selectedCell]) {
      return;
    }

    if (notesMode && value !== 0) {
      setNotes((current) =>
        current.map((entry, index) => {
          if (index !== selectedCell) return entry;
          return entry.includes(value)
            ? entry.filter((item) => item !== value)
            : [...entry, value].sort((a, b) => a - b);
        })
      );
      return;
    }

    setBoard((current) =>
      current.map((cell, index) => (index === selectedCell ? value : cell))
    );
    setNotes((current) => current.map((entry, index) => (index === selectedCell ? [] : entry)));
  };

  const fillHint = () => {
    if (selectedCell === null || givens[selectedCell]) {
      setMessage("Select an editable cell first.");
      return;
    }

    setBoard((current) =>
      current.map((cell, index) => (index === selectedCell ? solution[index] : cell))
    );
    setNotes((current) => current.map((entry, index) => (index === selectedCell ? [] : entry)));
    setMessage("Hint added.");
  };

  const checkProgress = () => {
    if (isSolved) {
      setMessage("Solved cleanly. Nice.");
      return;
    }

    if (wrongCells === 0) {
      setMessage(`Looking good. ${81 - filledCells} cells left.`);
      return;
    }

    setMessage(`${wrongCells} cell${wrongCells > 1 ? "s" : ""} need another look.`);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(key)) {
        placeValue(Number(key));
      }

      if (key === "backspace" || key === "delete" || key === "0") {
        placeValue(0);
      }

      if (key === "n") {
        setNotesMode((current) => !current);
      }

      if (selectedCell !== null) {
        const row = Math.floor(selectedCell / 9);
        const col = selectedCell % 9;

        if (event.key === "ArrowRight") setSelectedCell(row * 9 + Math.min(col + 1, 8));
        if (event.key === "ArrowLeft") setSelectedCell(row * 9 + Math.max(col - 1, 0));
        if (event.key === "ArrowDown") setSelectedCell(Math.min(selectedCell + 9, 80));
        if (event.key === "ArrowUp") setSelectedCell(Math.max(selectedCell - 9, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    let sequence = "";

    const handleSecret = (event) => {
      if (event.key.length !== 1) return;
      sequence = `${sequence}${event.key.toLowerCase()}`.slice(-4);

      if (sequence === "coco") {
        setPartyMode((current) => !current);
        setMessage((current) =>
          current === "Secret mode unlocked." ? "Secret mode disabled." : "Secret mode unlocked."
        );
        sequence = "";
      }
    };

    window.addEventListener("keydown", handleSecret);
    return () => window.removeEventListener("keydown", handleSecret);
  }, []);

  useEffect(() => {
    if (!message) return undefined;

    const timeout = setTimeout(() => setMessage(""), 2200);
    return () => clearTimeout(timeout);
  }, [message]);

  useEffect(() => {
    if (isSolved) {
      setMessage("Puzzle solved. Smooth work.");
    }
  }, [isSolved]);

  return (
    <ViewTransitionWrapper
      transitionKey="play-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <ScrollProgress />
          <div className="page-backdrop" aria-hidden="true" />
          <div className="light-dot-pattern" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-32">
            <section className="container mx-auto max-w-6xl px-4 py-10 sm:px-6">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Play
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                  A small Sudoku break, built to feel like part of the portfolio.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                  A playful side room inside the site. Still clean, still intentional, just a
                  little lighter.
                </p>
              </div>

              <AnimatePresence>
                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/85 px-4 py-2 text-sm text-foreground-muted shadow-sm dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <Sparkles className="h-4 w-4 text-accent" />
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                <div
                  className={`relative overflow-hidden rounded-[30px] border p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-5 ${
                    partyMode
                      ? "border-amber-300/50 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_28%),rgba(255,255,255,0.8)] dark:border-amber-300/20 dark:bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.1),transparent_24%),rgba(255,255,255,0.04)]"
                      : "border-gray-200/80 bg-white/78 dark:border-white/10 dark:bg-white/[0.03]"
                  }`}
                >
                  {partyMode && (
                    <>
                      <motion.span
                        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                        className="pointer-events-none absolute right-5 top-4 text-amber-400"
                      >
                        <Sparkles className="h-5 w-5" />
                      </motion.span>
                      <motion.span
                        animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
                        transition={{ duration: 2.1, repeat: Infinity }}
                        className="pointer-events-none absolute bottom-5 left-5 text-pink-400"
                      >
                        <Sparkles className="h-4 w-4" />
                      </motion.span>
                    </>
                  )}

                  <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                        <Gamepad2 className="h-3.5 w-3.5" />
                        Sudoku
                      </div>
                      <h2 className="text-2xl font-semibold text-foreground">{currentPuzzle.name}</h2>
                      <p className="mt-2 text-sm text-foreground-muted">
                        {currentPuzzle.difficulty} puzzle with keyboard support, notes mode, and one hidden trick.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => loadPuzzle((puzzleIndex + 1) % puzzles.length)}
                        className="interactive-surface inline-flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                      >
                        <RefreshCcw className="h-4 w-4 text-foreground-muted" />
                        New Board
                      </button>
                    </div>
                  </div>

                  <div className="mx-auto max-w-[34rem]">
                    <div className="grid grid-cols-9 overflow-hidden rounded-[24px] border border-gray-300 bg-gray-200 dark:border-white/10 dark:bg-white/10">
                      {board.map((value, index) => {
                        const isSelected = index === selectedCell;
                        const isGiven = givens[index];
                        const hasConflict = value !== 0 && value !== solution[index];
                        const isRelated = isRelatedCell(index, selectedCell);
                        const borderClass = [
                          index % 9 === 2 || index % 9 === 5 ? "border-r-[3px]" : "border-r",
                          Math.floor(index / 9) === 2 || Math.floor(index / 9) === 5
                            ? "border-b-[3px]"
                            : "border-b",
                        ].join(" ");

                        return (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedCell(index)}
                            className={`aspect-square min-h-[2.5rem] ${borderClass} relative flex items-center justify-center border-gray-300 text-center transition-colors dark:border-white/10 ${
                              isSelected
                                ? "bg-sky-100 dark:bg-sky-400/20"
                                : isRelated
                                  ? "bg-sky-50/70 dark:bg-white/[0.04]"
                                  : "bg-white/85 dark:bg-[#111214]"
                            } ${hasConflict ? "text-rose-500 dark:text-rose-300" : isGiven ? "text-foreground" : "text-foreground-muted"}`}
                          >
                            {value !== 0 ? (
                              <span
                                className={`font-tech text-base sm:text-lg ${isGiven ? "font-semibold text-foreground" : "font-medium"}`}
                              >
                                {value}
                              </span>
                            ) : notes[index].length ? (
                              <span className="grid h-full w-full grid-cols-3 grid-rows-3 p-1 text-[10px] text-foreground-muted sm:text-[11px]">
                                {Array.from({ length: 9 }, (_, noteIndex) => {
                                  const noteValue = noteIndex + 1;
                                  return (
                                    <span key={noteValue} className="flex items-center justify-center">
                                      {notes[index].includes(noteValue) ? noteValue : ""}
                                    </span>
                                  );
                                })}
                              </span>
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Filled</p>
                      <p className="mt-2 text-xl font-semibold text-foreground">{filledCells}/81</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Errors</p>
                      <p className="mt-2 text-xl font-semibold text-foreground">{wrongCells}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 dark:border-white/10 dark:bg-white/[0.03]">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">Mode</p>
                      <p className="mt-2 text-xl font-semibold text-foreground">
                        {notesMode ? "Notes" : "Write"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[28px] border border-gray-200/80 bg-white/78 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="mb-4 flex items-center gap-2">
                      <Wand2 className="h-4 w-4 text-foreground-muted" />
                      <p className="text-sm font-semibold text-foreground">Controls</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 9 }, (_, index) => (
                        <button
                          key={index + 1}
                          type="button"
                          onClick={() => placeValue(index + 1)}
                          className="interactive-surface rounded-xl border border-gray-200 bg-gray-50/80 py-3 text-base font-medium text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>

                    <div className="mt-3 grid gap-2">
                      <button
                        type="button"
                        onClick={() => setNotesMode((current) => !current)}
                        className={`interactive-surface inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                          notesMode
                            ? "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/[0.12] dark:text-sky-200"
                            : "border-gray-200 bg-gray-50/80 text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        }`}
                      >
                        <Lightbulb className="h-4 w-4" />
                        {notesMode ? "Notes Mode On" : "Enable Notes Mode"}
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => placeValue(0)}
                          className="interactive-surface inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          <Eraser className="h-4 w-4" />
                          Erase
                        </button>
                        <button
                          type="button"
                          onClick={resetPuzzle}
                          className="interactive-surface inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          <RefreshCcw className="h-4 w-4" />
                          Reset
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={checkProgress}
                          className="interactive-surface rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          Check
                        </button>
                        <button
                          type="button"
                          onClick={fillHint}
                          className="interactive-surface rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          Hint
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-gray-200/80 bg-white/78 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-foreground-muted" />
                      <p className="text-sm font-semibold text-foreground">How it works</p>
                    </div>
                    <div className="space-y-3 text-sm leading-relaxed text-foreground-muted">
                      <p>Select a cell, then use the number pad or keyboard.</p>
                      <p>Press <span className="font-tech text-foreground">N</span> to toggle notes mode.</p>
                      <p>Arrow keys move across the board. Backspace clears editable cells.</p>
                      <p>This page also has one tiny hidden mode if you find it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
