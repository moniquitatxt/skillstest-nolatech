import Menu from "../components/Menu";
import BgImage from "../assets/BgImage.png";
import Time from "../components/Time";

export const Home = () => {
	return (
		<>
			<div
				className="bg-bottom bg-cover h-[100vh]"
				style={{ backgroundImage: `url(${BgImage})` }}
			>
				<Menu />
				<div className="mx-6 md:absolute md:left-[40%] ">
					<h2 className="text-white">LOREM IPSUM</h2>
					<h2 className="bg-white text-black">LOREM IPSUM DOLOR</h2>
					<h2 className="text-white">LOREM IPSUM</h2>

					<button className="btn-green my-20 md:text-2xl md:px-10 md:py-4">
						WHAT IS NEXT
					</button>
				</div>
			</div>
			<Time />
		</>
	);
};
