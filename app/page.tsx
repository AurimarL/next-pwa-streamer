import VideoGrid from "./components/VideoGrid";
import videos from "../data/videos.json";

export default function Home() {
  const Freevideos = videos.map((e) => e).filter((e) => e.payd === false);
  const Payvideos = videos.map((e) => e).filter((e) => e.payd === true);
  return (
    <div className="flex flex-col gap-2">
      <section>
        <VideoGrid VideosId={Freevideos} />
      </section>
      <section className="bg-slate-400 p-2">
        <VideoGrid VideosId={Payvideos} />
      </section>
    </div>
  );
}
