"use client";
import { useSession } from "next-auth/react";
import videos from "../data/videos.json";
import VideoGrid from "./components/VideoGrid";

export default function Home() {
  const Freevideos = videos.map((e) => e).filter((e) => e.payd === false);
  const Payvideos = videos.map((e) => e).filter((e) => e.payd === true);

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex flex-col gap-2">
        <section>
          <VideoGrid VideosId={Freevideos} />
        </section>
        <section className="bg-slate-400 p-2">
          {status === "authenticated" && (
            <>
              <VideoGrid VideosId={Payvideos} />
            </>
          )}
        </section>
      </div>
    );
  }
  return (
    <>
      <section>
        <VideoGrid VideosId={Freevideos} />
        <div className="mt-8">
          <h1 className="text-center">You need to make Login to SEE MORE 😎</h1>
        </div>
      </section>
    </>
  );
}
