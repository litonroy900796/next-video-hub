import videos from "@/data/videos.json";
import Link from "next/link";

import Header from "@/components/header";
import Image from "next/image";
import { generateSlug } from "@/components/lib/slugify";

export default function HomePage() {
  return (
    <>
      <main className="px-4 py-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${generateSlug(video.videoTitle)}`}
              className="group block transition-transform hover:scale-[1.01]"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
                <Image
                  src={video.thumbnailURL}
                  alt={video.title}
                  layout="fill"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-9 relative h-9">
                    <Image
                      src={video.channelAvatar}
                      alt={video.channel}
                      layout="fill"
                      className=" rounded-full ring-1 ring-white/10"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
                    {video.videoTitle}
                  </h3>
                  <p className="text-xs text-gray-400 mb-0.5">
                    {video.channelName}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{video.views}</span>
                    <span>•</span>
                    <span>{video.publishedDate}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
