/**
 * Generate URL-friendly slug from video title
 * @param {string} title - The video title
 * @returns {string} - URL-friendly slug
 */
export function generateSlug(title) {
  return title
    ?.toLowerCase()
    ?.replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    ?.trim()
    ?.replace(/\s+/g, "-") // Replace spaces with hyphens
    ?.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    ?.substring(0, 100); // Limit length to 100 characters
}
