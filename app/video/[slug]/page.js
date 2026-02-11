"use client";

import { findVideoBySlug, getYouTubeEmbedURL } from "@/components/lib/utils";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import videos from "@/data/videos.json";
import Image from "next/image";
const VideoPage = () => {
  const params = useParams();
  const { slug } = params; // get slug from URL

  const [showFullDesc, setShowFullDesc] = useState(false);
  const video = findVideoBySlug(videos, slug);
  console.log("🚀 ~ VideoPage ~ video:", video);
  return (
    <main className="px-4 py-6 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Primary */}
          <section className="lg:col-span-8">
            {/* Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
              {video && (
                <iframe
                  id="videoPlayer"
                  className="w-full h-full"
                  title={video.videoTitle}
                  src={getYouTubeEmbedURL(video.videoURL)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Info */}
            <div className="mt-4">
              <h1
                id="videoTitle"
                className="text-lg sm:text-xl font-medium leading-snug"
              >
                {video?.videoTitle}
              </h1>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div id="videoMeta" className="text-sm text-gray-400">
                  <span id="viewCount">{video?.views}</span>
                  <span className="mx-1">•</span>
                  <span id="publishTime">{video?.publishedDate}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">
                    <button
                      className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                      type="button"
                      aria-label="Like"
                    >
                      <svg
                        className="w-5 h-5 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                        ></path>
                      </svg>
                      <span
                        id="likeCount"
                        className="text-sm font-medium text-[#e5e5e5]"
                      >
                        {video?.likes}
                      </span>
                    </button>
                    <div className="w-px h-8 bg-[#303030]"></div>
                    <button
                      className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                      type="button"
                      aria-label="Dislike"
                    >
                      <svg
                        className="w-5 h-5 text-gray-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
                        ></path>
                      </svg>
                      <span
                        id="dislikeCount"
                        className="text-sm font-medium text-[#e5e5e5]"
                      >
                        {video?.dislikes}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Channel row */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <Image
                    id="channelAvatar"
                    src={
                      video?.channelAvatar ||
                      "https://yt3.ggpht.com/XRZC_XqZoSUtB_Zo9R0w2vDRqGqVv0lKZTRYI6b-7DPKi32MtByVhxgIokLAguhf7fw__K8o3g"
                    }
                    alt={video?.channelName || "GreatStack avatar"}
                    className="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 flex-shrink-0"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                  <div className="min-w-0">
                    <p
                      id="channelTitle"
                      className="font-medium leading-tight truncate"
                    >
                      {video?.channelName}
                    </p>
                    <p className="text-xs text-gray-400">Publisher</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <div className="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
                  <p
                    id="videoDescription"
                    className={`text-sm text-gray-200 whitespace-pre-line ${
                      showFullDesc ? "" : "line-clamp-3"
                    }`}
                  >
                    {video?.description}
                  </p>
                  <button
                    onClick={() => setShowFullDesc(!showFullDesc)}
                    className="mt-3 text-sm font-medium text-gray-300 hover:text-white"
                    type="button"
                  >
                    {showFullDesc ? "Show less" : "Show more"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Similar Videos */}
          <aside className="lg:col-span-4">
            <h2 className="text-base font-medium mb-4">Similar videos</h2>
            <div id="similarVideos" className="space-y-3" aria-live="polite">
              {/* Example similar video item */}
              <a
                href="details.html?v=5JgsZCtIH_Q"
                className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
              >
                <div className="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                  <img
                    src="https://i.ytimg.com/vi/5JgsZCtIH_Q/hq720.jpg"
                    alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                    12:26
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                    How to Build an ENTIRE iPhone/Android App From Scratch (AI +
                    No code) | Rork AI
                  </p>
                  <p className="text-xs text-gray-400 mt-1 truncate">
                    Ed Hill | AI Automation
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                    <span>40K views</span>
                    <span>•</span>
                    <span>5 months ago</span>
                  </div>
                </div>
              </a>

              {/* You can repeat <a> blocks for other similar videos */}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
