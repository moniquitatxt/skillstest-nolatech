import Pic from "../assets/Pic1.png";

export const AboutUs = () => {
	return (
		<div className="container-base md:flex md:justify-around sm:mx-auto sm:justify-center">
			<div className="md:flex md:justify-center md:max-w-[1000px] md:mx-auto">
				<div className="mr-[20px] md:w-[50%]">
					<h3 className="h3-black">
						Lorem ipsum <br /> dolor sit amet
					</h3>
					<p className="p-black">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
						et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit
					</p>
				</div>
				<div className="md:w-[50%] ">
					<img
						src={Pic}
						alt="imagen"
						width="480px"
						className="w-full sm:p-10"
					/>
				</div>
			</div>
		</div>
	);
};
