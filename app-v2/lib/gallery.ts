import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export type GalleryImage = {
  src: string;
  alt: string;
  /** true if the filename contains "-wide" — signals the grid to span an extra column. */
  wide: boolean;
};

/**
 * Reads whatever images exist in public/img/beyond-the-screen/<folder> at
 * build time — the folder is the source of truth, not a hardcoded list, so
 * dropping a new file in and redeploying is the entire workflow. Returns an
 * empty array (not an error) if the folder is empty or missing, so a
 * section with no photos yet just renders its empty state instead of
 * crashing the build.
 */
const ALT_NOUN: Record<string, string> = {
  interiors: "Interior design project",
  cityscape: "Cityscape photograph",
  nature: "Nature photograph",
  cooking: "Cooking photograph",
  paintings: "Digital painting",
};

export function getGalleryImages(folder: string): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "img", "beyond-the-screen", folder);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  // File names are camera numbers ("20210927 144725"), which tell a screen
  // reader nothing, so each photo is named by its category and position.
  const noun = ALT_NOUN[folder.toLowerCase()] ?? "Photograph";
  return files
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort()
    .map((f, i) => {
      const base = path.basename(f, path.extname(f));
      return {
        src: `/img/beyond-the-screen/${folder}/${f}`,
        alt: `${noun} ${i + 1}`,
        wide: /-wide$/i.test(base),
      };
    });
}
