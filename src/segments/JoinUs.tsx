import JoinUsPic from "../assets/JoinUs.png";

export const JoinUs = () => {
	return (
		<div
			className="bg-cover h-[110vh] p-20 shadow-inner "
			style={{ backgroundImage: `url(${JoinUsPic})` }}
		>
			<div className="md:absolute md:left-[55%] md:pr-20 sm:justify-center flex flex-col">
				<h3 className="h3-white">JOIN US.</h3>
				<p className="p-white">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
				</p>
				<div className="mb-4 flex">
					<input className="w-1/2 mr-2" type="text" placeholder="Name" />
					<input className="w-1/2 ml-2" type="text" placeholder="Surname" />
				</div>

				<div className="mb-4 flex">
					<input className="w-1/2 mr-2" type="text" placeholder="Phone" />
					<input className="w-1/2 ml-2" type="email" placeholder="Email" />
				</div>

				<input className="w-full" placeholder="Department" />

				<textarea
					className="w-full p-3 text-lg font-semibold my-4 rounded-md bg-white placeholder-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
					placeholder="Message"
					rows={4}
				/>
				<div className="mb-4 sm:flex sm:flex-col sm:justify-center">
					<button className="bg-primary-green btn-white-base md:px-20">
						I'M IN
					</button>
					<p className="p-white">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
					</p>
				</div>
			</div>
		</div>
	);
};
