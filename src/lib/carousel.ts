import fs from "node:fs";
import path from "node:path";

const CAROUSEL_DIR = path.join(process.cwd(), "public/images/carousel");
const IMAGE_PATTERN = /\.(png|jpe?g|webp|gif|avif)$/i;

export function getCarouselImages(): string[] {
  if (!fs.existsSync(CAROUSEL_DIR)) return [];

  return fs
    .readdirSync(CAROUSEL_DIR)
    .filter((file) => IMAGE_PATTERN.test(file))
    .sort()
    .map((file) => `/images/carousel/${file}`);
}

export function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Each deck contains every image exactly once, in random order. */
export function buildMarqueeSequence(
  images: string[],
  deckCount: number,
): string[] {
  if (images.length === 0) return [];

  return Array.from({ length: deckCount }, () => shuffle(images)).flat();
}
