import Pic5 from "../assets/Pic5.png";
export const ContactUs = () => {
	return (
		<div className="md:flex">
			<div className="bg-primaryGreen flex flex-col">
				<h3 className="h3-white">Lorem ipsum dolor sit amet, conseteur</h3>

				<button className="btn-white w-[328px] ">LOREM IPSUM DOLOR SIT</button>
				<button className="bg-primary-green btn-white-base outline outline-white outline-1">
					LOREM IPSUM DOLOR SIT AMET
				</button>
			</div>
			<img src={Pic5} alt="imagen"></img>
		</div>
	);
};
