

const VideoPlayer = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="rounded-lg overflow-hidden shadow-lg w-80">
        <video
          src="/Video.mp4" // Replace with your video URL
          autoPlay
          loop
          muted
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
