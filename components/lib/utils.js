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
