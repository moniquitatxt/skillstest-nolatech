import Carousel from "../components/Carousel";
import Pic7 from "../assets/Pic7.png";
import Pic8 from "../assets/Pic8.png";
import Pic9 from "../assets/Pic9.png";
import Pic10 from "../assets/Pic10.png";

export const CarouselView = () => {
	const pictures = [Pic7, Pic8, Pic9, Pic10];

	return (
		<div className="bg-treeGreen py-12">
			<div className="max-w-5xl mx-auto">
				<h3 className="h3-white text-center mb-10">
					Lorem ipsum dolor sit amet
				</h3>
				<Carousel pictures={pictures} />
				<div className="flex justify-center my-10">
					<button className="btn-white w-[200px] mt-4 ">VIEW ALL</button>
				</div>
			</div>
		</div>
	);
};
