import { useMemo } from "react";
import type { StickyColor, StickyNoteData } from "./affinityStickyData";
import { AFFINITY_BOARD_SECTIONS } from "./affinityStickyData";
import { ThemeCarousel, type ThemeCarouselSlide } from "./ThemeCarousel";
import {
  CASE_STUDY_EVIDENCE_BACKGROUND,
  CASE_STUDY_EVIDENCE_FRAME,
} from "./WhatIDidEvidenceFigure";

const STICKY_COLORS: Record<StickyColor, { bg: string; border: string }> = {
  green: { bg: "#d4f4dd", border: "#9fd4ad" },
  yellow: { bg: "#fff5c8", border: "#e8d67a" },
  blue: { bg: "#d8e8ff", border: "#9eb8e8" },
  pink: { bg: "#ffd8e4", border: "#e8a8be" },
  orange: { bg: "#ffe0cc", border: "#e8b08a" },
  purple: { bg: "#e8dcff", border: "#c4a8e8" },
  teal: { bg: "#d4f0ee", border: "#8ec8c2" },
};

const ROTATIONS = [-1.5, -0.75, 0, 0.75, 1.5, -1, 1];

function hashRotation(id: string) {
  let n = 0;
  for (let i = 0; i < id.length; i += 1) n += id.charCodeAt(i);
  return ROTATIONS[n % ROTATIONS.length];
}

function StickyNote({ note }: { note: StickyNoteData }) {
  const palette = STICKY_COLORS[note.color];
  const rotate = hashRotation(note.id);

  return (
    <div
      className={`flex shrink-0 flex-col justify-between rounded-[3px] border p-2.5 shadow-[2px_3px_0_rgba(0,0,0,0.08)] sm:p-3 ${
        note.wide ? "w-[min(100%,280px)] sm:w-[300px]" : "w-[min(100%,200px)] sm:w-[188px]"
      } ${note.tall ? "min-h-[120px] sm:min-h-[148px]" : "min-h-[88px] sm:min-h-[100px]"}`}
      style={{
        backgroundColor: palette.bg,
        borderColor: palette.border,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <p className="text-[11px] leading-[1.45] text-[#1a1a1a] sm:text-[12px] sm:leading-[1.5]">
        {note.text}
      </p>
      {note.attribution ? (
        <p className="mt-2 text-right text-[9px] font-medium text-[#333] sm:text-[10px]">
          {note.attribution}
        </p>
      ) : null}
    </div>
  );
}

function NoteCluster({ notes }: { notes: StickyNoteData[] }) {
  return (
    <div className="flex flex-wrap content-start gap-3 sm:gap-4">
      {notes.map((note) => (
        <StickyNote key={note.id} note={note} />
      ))}
    </div>
  );
}

function buildThemeSlides(): ThemeCarouselSlide[] {
  return AFFINITY_BOARD_SECTIONS.flatMap((section) => {
    const slides: ThemeCarouselSlide[] = [
      {
        id: section.id,
        title: section.title,
        content: (
          <div className="max-h-[min(58vh,640px)] overflow-y-auto overflow-x-hidden pr-1">
            <NoteCluster notes={section.notes} />
          </div>
        ),
      },
    ];

    section.subsections?.forEach((sub) => {
      slides.push({
        id: `${section.id}-${sub.title}`,
        title: sub.title,
        content: (
          <div className="max-h-[min(58vh,640px)] overflow-y-auto overflow-x-hidden pr-1">
            <NoteCluster notes={sub.notes} />
          </div>
        ),
      });
    });

    return slides;
  });
}

export function AffinityFigJamBoard() {
  const themeSlides = useMemo(() => buildThemeSlides(), []);

  return (
    <figure className="min-w-0">
      <div
        className={`${CASE_STUDY_EVIDENCE_FRAME} overflow-hidden`}
        style={{ background: CASE_STUDY_EVIDENCE_BACKGROUND }}
      >
        <div
          className="p-5 sm:p-8 md:p-10"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage:
              "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <ThemeCarousel slides={themeSlides} hint="use arrows to browse each theme" />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--portfolio-text-muted)]/45">
        Affinity synthesis · recreated from interview notes
      </figcaption>
    </figure>
  );
}
