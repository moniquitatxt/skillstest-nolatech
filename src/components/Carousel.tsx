import { useState, useEffect } from "react";

interface CarouselProps {
	pictures: string[];
}

const Carousel = ({ pictures }: CarouselProps) => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current + 1) % pictures.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [current, pictures.length]);

	const handlePrev = () => {
		setCurrent((current - 1 + pictures.length) % pictures.length);
	};

	const handleNext = () => {
		setCurrent((current + 1) % pictures.length);
	};

	return (
		<div className="relative w-full overflow-hidden">
			<div
				className="flex transition-transform duration-500 ease-in"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{pictures.map((picture, index) => (
					<img
						key={index}
						src={picture}
						alt={`carousel-${index}`}
						className="w-full h-auto object-cover"
						style={{
							minWidth: "100%",
							maxWidth: "100%",
							height: "auto",
							borderRadius: "10px",
							boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
						}}
					/>
				))}
			</div>

			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
				{pictures.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full cursor-pointer ${
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
