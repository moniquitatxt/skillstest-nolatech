interface CardProps {
	img: any;
	alt: string;
	desc: string;
}

const Card = ({ img, alt, desc }: CardProps) => {
	return (
		<div className="text-center my-10 justify-center mx-3 ">
			<img src={img} alt={alt} width={480} className="max-h-[480px] w-full" />
			<div className="max-w-[480px] mx-auto">
				<p className="bg-primary-green py-4 font-semibold text-lg">{desc}</p>
			</div>
		</div>
	);
};

export default Card;
