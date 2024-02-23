import Pic6 from "../assets/Pic6.png";
export const ViewAll = () => {
	return (
		<div
			className="md:bg-top md:bg-cover md:h-[110vh] sm:bg-none md:flex sm:mx-auto"
			style={{
				backgroundImage: `url(${Pic6})`,
				backgroundBlendMode: "overlay",
				backgroundColor: "rgba(128, 128, 200, 0.1)",
			}}
		>
			<div className="items-center md:ml-20 md:flex ">
				<div className="md:pl-20 py-10 sm:text-center   md:mr-[20px] ">
					<h2 className="sm:mx-auto max-w-[450px] ">Lorem ipsum dolor sit</h2>
					<p className="sm:mx-auto  max-w-[400px] mt-6">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua.{" "}
					</p>
					<div className="py-10 max-w-[360px] sm:mx-auto">
						<button className="btn-white-base bg-primary-green w-full mt-4 outline outline-white outline-1">
							VIEW ALL
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
