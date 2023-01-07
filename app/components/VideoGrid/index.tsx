import Ivideo from "../../../types/Ivideo";
import Video from "../../../ui/Video";

interface IVideoGrid {
  VideosId: Ivideo[];
}

export default function VideoGrid({ VideosId }: IVideoGrid) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {VideosId.map((id, k) => {
        return (
          <div key={k}>
            <Video videoID={id.link} />
          </div>
        );
      })}
    </div>
  );
}
