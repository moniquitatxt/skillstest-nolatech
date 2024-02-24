import Pic5 from "../assets/Pic5.png";
export const ContactUs = () => {
	return (
		<div className="bg-primaryGreen container-base md:flex md:justify-around sm:mx-auto sm:justify-center">
			<div className="md:flex">
				<div className="md:pl-20 py-10 md:mr-[20px] md:w-[50%]">
					<h3 className="sm:mx-auto max-w-[400px] h3-white">
						Lorem ipsum dolor sit amet, conseteur
					</h3>
					<div className="py-10 max-w-[360px] sm:mx-auto">
						<button className="btn-white w-full mt-4 ">
							LOREM IPSUM DOLOR SIT
						</button>
						<button className="btn-white-base bg-primary-green w-full mt-4 outline outline-white outline-1">
							LOREM IPSUM DOLOR SIT AMET
						</button>
					</div>
				</div>
				<div className="md:w-[500px] md:flex md:items-end ">
					<img src={Pic5} alt="imagen" width="480px" className="w-full"></img>
				</div>
			</div>
		</div>
	);
};
