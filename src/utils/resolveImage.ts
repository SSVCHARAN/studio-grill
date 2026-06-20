import fs from 'node:fs';
import path from 'node:path';
import type { ImageSlot } from '../config/images';

const publicDir = path.join(process.cwd(), 'public');

/** Resolve first existing file for a slot; returns public URL path or null */
export function resolveImage(slot: ImageSlot): string | null {
  for (const urlPath of slot.paths) {
    const filePath = path.join(publicDir, urlPath.replace(/^\//, ''));
    if (fs.existsSync(filePath)) {
      return urlPath;
    }
  }
  return null;
}

export function resolveSlot(
  slot: ImageSlot
): { src: string; alt: string } | { placeholder: true; label: string; alt: string } {
  const src = resolveImage(slot);
  if (src) {
    return { src, alt: slot.alt };
  }
  return { placeholder: true, label: slot.label, alt: slot.alt };
}
