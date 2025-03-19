"use client";

export default function VideoSection() {
  const videos = [
    {
      id: "IQamxsBpzmw",
      title: "Cbarrgs - Video 1"
    },
    {
      id: "RJw58nc-edQ",
      title: "Cbarrgs - Video 2"
    },
    {
      id: "lJllyb9Cw7E",
      title: "Cbarrgs - Video 3"
    },
    {
      id: "RYiWRG_CLq0",
      title: "Cbarrgs - Video 4"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto mt-16 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">VIDEOS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
