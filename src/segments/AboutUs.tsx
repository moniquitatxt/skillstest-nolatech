import Pic from "../assets/Pic1.png";

export const AboutUs = () => {
	return (
		<div className="container-base md:flex md:w-full ">
			<div className="mr-[20px]">
				<h3 className="h3-black">Lorem ipsum dolor sit amet</h3>
				<p className="p-black">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
					sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
					dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
					et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
					takimata sanctus est Lorem ipsum dolor sit
				</p>
			</div>
			<img
				src={Pic}
				alt="imagen"
				width="480px"
				className="max-h-[480px] sm:w-full sm:p-10"
			/>
		</div>
	);
};
