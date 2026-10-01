import "server-only";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I to avoid confusion

function randomSuffix(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return result;
}

/**
 * Generates a human-friendly School ID, e.g. "AMA-2026-K7H2QX".
 * Uniqueness against the database should be enforced by the caller
 * (the `school_id` column has a UNIQUE constraint) — retry on conflict.
 */
export function generateSchoolId(date: Date = new Date()) {
  const year = date.getFullYear();
  return `AMA-${year}-${randomSuffix(6)}`;
}
