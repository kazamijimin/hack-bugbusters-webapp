import HeroCarousel from "@/components/HeroCarousel";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  return (
    <div className="">
      <div>
        {/* <HeroCarousel /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}
