import { useState, useEffect } from "react";
interface CarouselProps {
	pictures: any[];
}

const Carousel = ({ pictures }: CarouselProps) => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current + 1) % pictures.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [current, pictures.length]);

	return (
		<div className="w-full overflow-hidden">
			<div
				className="flex transition-transform duration-500 ease-in"
				style={{ marginLeft: `calc((100% - 300px) / 2 - ${current * 300}px)` }}
			>
				{pictures.map((picture, index) => (
					<img
						key={index}
						src={picture}
						alt={`carousel-${index}`}
						className={`w-[300px] h-auto ml-${
							index === 0 ? "0" : "300"
						} transform transition-transform duration-500 ease-in ${
							index === current ? "z-10" : "z-0"
						}`}
						style={{
							transform: `translateX(${100 * (index - current)}%)`,
							borderRadius: "10px",
							boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
						}}
					/>
				))}
			</div>

			<div className="flex justify-center gap-4 mt-10">
				{pictures.map((_, index) => (
					<div
						key={index}
						className={`w-4 h-4 rounded-full cursor-pointer ${
							current === index ? "bg-primaryGreen" : "bg-white"
						}`}
						onClick={() => setCurrent(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Carousel;
