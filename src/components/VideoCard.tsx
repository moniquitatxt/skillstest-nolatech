import { FaPlayCircle } from "react-icons/fa";
interface VideoCardProps {
	imageSrc: any;
	title: string;
	videoLink: string;
}

const VideoCard = ({ imageSrc, videoLink, title }: VideoCardProps) => {
	return (
		<div className="text-center flex flex-col items-center justify-center gap-0">
			<div
				style={{ backgroundImage: `url(${imageSrc})` }}
				className="bg-no-repeat bg-center bg-contain h-[250px] w-full flex items-center justify-center"
			>
				<a href={videoLink} target="_blank" rel="noopener noreferrer">
					<FaPlayCircle
						className="text-3xl cursor-pointer"
						style={{ color: "white" }}
					/>
				</a>
			</div>
			<p className="text-base mt-6 font-medium w-full">{title}</p>
		</div>
	);
};
export default VideoCard;
