import { generateSlug } from "./slugify";

export function findVideoBySlug(videos, slug) {
  return (
    videos.find((video) => generateSlug(video.videoTitle) === slug) || null
  );
}

export function getYouTubeEmbedURL(url) {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}?rel=0`;
}

export function getSimilarVideos(videos, currentVideo, limit = 6) {
  if (!currentVideo || !currentVideo.categories) return [];

  const currentCategories = currentVideo.categories;
  console.log("🚀 ~ getSimilarVideos ~ currentCategories:", currentCategories);

  // Calculate similarity score for each video
  const videosWithScores = videos
    .filter((video) => video.videoTitle !== currentVideo.videoTitle)
    .map((video) => {
      const matchingCategories = video.categories.filter((cat) => {
        return currentCategories.includes(cat);
      });
      console.log(
        "🚀 ~ getSimilarVideos ~ matchingCategories:",
        matchingCategories,
      );
      return {
        ...video,
        similarityScore: matchingCategories.length,
      };
    })
    .filter((video) => video.similarityScore > 0) // Only videos with at least 1 matching category
    .sort((a, b) => b.similarityScore - a.similarityScore); // Sort by similarity

  return videosWithScores.slice(0, limit);
}
