import { CiStreamOn } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";

const LiveBar = () => {
	return (
		<div className="bg-primary-green flex justify-center md:text-2xl mx-auto">
			<div className=" flex items-center bg-customRed p-1.5 px-4">
				<a href="/" className="flex font-semibold tracking-widest">
					LIVE
				</a>
				<CiStreamOn className="ml-2" size={"24px"} />
			</div>
			<span className="p-1.5">Lorem ipsum dolor sit amet</span>
			<div className="flex items-center py-1.5 px-4 bg-hoverGreen">
				<a href="/" className="flex  font-semibold">
					JOIN NOW!
				</a>
				<FaRegCirclePlay className="ml-2" size={"24px"} />
			</div>
		</div>
	);
};

export default LiveBar;
