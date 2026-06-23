/** Production URL — canonical domain on Vercel. */
export const PRODUCTION_URL = "https://sun-nails-uppsala.vercel.app";

const DEV_URL = "http://localhost:3020";

/** Resolves the canonical site URL at build/runtime (Vercel-aware). */
export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") {
    const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (productionHost) {
      return `https://${productionHost}`;
    }
    return PRODUCTION_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_URL;
  }
  return DEV_URL;
}
