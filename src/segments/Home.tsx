import Menu from "../components/Menu";
import BgImage from "../assets/BgImage.png";
import Time from "../components/Time";

export const Home = () => {
	return (
		<>
			<div
				className="bg-bottom bg-cover h-[90vh] shadow-inner "
				style={{ backgroundImage: `url(${BgImage})` }}
			>
				<Menu />
				<div className="absolute left-[40%] ">
					<h2 className="text-white">LOREM IPSUM</h2>
					<h2 className="bg-white text-black">LOREM IPSUM DOLOR</h2>
					<h2 className="text-white">LOREM IPSUM</h2>

					<button className="btn-green">WHAT IS NEXT</button>
				</div>
			</div>
			<Time />
		</>
	);
};
