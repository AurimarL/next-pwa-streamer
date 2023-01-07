interface IVideo {
  videoID: String;
}
export default function Video({ videoID }: IVideo) {
  return (
    <iframe className="rounded-lg"
      src={`https://www.youtube.com/embed/${videoID}`}
      id="ytplayer"
      typeof="text/html"
      height={"100%"}
      width={"100%"}
    />
  );
}
