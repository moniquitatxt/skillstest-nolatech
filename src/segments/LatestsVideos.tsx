import VideoCard from "../components/VideoCard";
import Pic from "../assets/Pic4.png";

export const LatestsVideos = () => {
	// Array containing data for each video
	const videosData = [
		{
			imageSrc: Pic,
			videoLink: "video1.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
		{
			imageSrc: Pic,
			videoLink: "video2.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
		{
			imageSrc: Pic,
			videoLink: "video3.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
		{
			imageSrc: Pic,
			videoLink: "video4.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
		{
			imageSrc: Pic,
			videoLink: "video5.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
		{
			imageSrc: Pic,
			videoLink: "video6.mp4",
			title: "Lorem ipsum dolor sit amet, consetetur",
		},
	];

	return (
		<div className="container-base bg-lightGrey py-12 justify-center">
			<div className="text-center mb-10">
				<h3 className="h3-black">Latest videos</h3>
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
				{videosData.map((video, index) => (
					<VideoCard
						key={index}
						imageSrc={video.imageSrc}
						videoLink={video.videoLink}
						title={video.title}
					/>
				))}
			</div>
			<div className="flex justify-center mt-10">
				<button className="btn-green my-10 md:text-2xl md:px-20 md:py-4 font-medium">
					VIEW ALL
				</button>
			</div>
		</div>
	);
};
