import Card from "../components/Card";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";

const cardInformation = [
	{ img: Pic2, alt: "imagen1" },
	{ img: Pic3, alt: "imagen2" },
	{ img: Pic4, alt: "imagen3" },
];

export const LearnMore = () => {
	return (
		<div className="container-base bg-darkWhite py-12 justify-center ">
			<div className="text-center">
				<h3 className="h3-black sm:mb-10">Lorem ipsum</h3>
				<p className="p-black max-w-[600px] mx-auto ">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua.
				</p>
			</div>
			<div className="md:flex justify-center">
				{cardInformation.map((card, index) => (
					<Card
						key={index}
						img={card.img}
						alt={card.alt}
						desc="LOREM IPSUM"
					></Card>
				))}
			</div>
			<div className="flex">
				<button className="btn-transparent justify-center">LEARN MORE</button>
			</div>
		</div>
	);
};
