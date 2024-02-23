import { CiStreamOn } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";

const LiveBar = () => {
	return (
		<div className="bg-primary-green flex justify-center mx-auto">
			<div className="bg-customRed p-1.5">
				<a href="/" className="flex font-semibold">
					LIVE
					<CiStreamOn className="ml-2" size={"24px"} />
				</a>
			</div>
			<span className="p-1.5">Lorem ipsum dolor sit amet</span>
			<div className="py-1.5 px-4 bg-hoverGreen">
				<a href="/" className="flex  font-semibold">
					JOIN NOW!
					<FaRegCirclePlay className="pt-1 ml-2" size={"18px"} />
				</a>
			</div>
		</div>
	);
};

export default LiveBar;
