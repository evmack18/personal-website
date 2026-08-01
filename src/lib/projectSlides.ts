import fs from "node:fs";
import path from "node:path";

const PROJECTS_DIR = path.join(process.cwd(), "public/images/projects");
const SLIDE_PATTERN = /\.(png|jpe?g|webp|gif|avif|mp4|mov|webm)$/i;
const VIDEO_PATTERN = /\.(mp4|mov|webm)$/i;

export type ProjectSlideMedia = {
  src: string;
  type: "image" | "video";
};

function extractTrailingNumber(filename: string): number {
  const match = filename.match(/(\d+)\.[^.]+$/);
  return match ? Number(match[1]) : 0;
}

function getSlideType(filename: string): "image" | "video" {
  return VIDEO_PATTERN.test(filename) ? "video" : "image";
}

export function getProjectSlides(slug: string): ProjectSlideMedia[] {
  const dir = path.join(PROJECTS_DIR, slug);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((file) => SLIDE_PATTERN.test(file));

  const slidesByNumber = new Map<number, string>();

  for (const file of files) {
    const slideNumber = extractTrailingNumber(file);
    const existing = slidesByNumber.get(slideNumber);

    if (!existing) {
      slidesByNumber.set(slideNumber, file);
      continue;
    }

    if (VIDEO_PATTERN.test(file) && !VIDEO_PATTERN.test(existing)) {
      slidesByNumber.set(slideNumber, file);
    }
  }

  return Array.from(slidesByNumber.entries())
    .sort(([a], [b]) => a - b)
    .map(([, file]) => ({
      src: `/images/projects/${slug}/${encodeURIComponent(file)}`,
      type: getSlideType(file),
    }));
}
