import { useEffect, useState } from "react";

const Time = () => {
	const [days, setDays] = useState(170);
	const [hours, setHours] = useState(13);
	const [minutes, setMinutes] = useState(39);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			} else if (minutes > 0) {
				setMinutes(minutes - 1);
				setSeconds(59);
			} else if (hours > 0) {
				setHours(hours - 1);
				setMinutes(59);
				setSeconds(59);
			} else if (days > 0) {
				setDays(days - 1);
				setHours(23);
				setMinutes(59);
				setSeconds(59);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [days, hours, minutes, seconds]);

	return (
		<div className="bg-darkGreen  text-white p-6">
			<div className="flex justify-center items-center">
				<h3 className="font-bold text-2xl w-full md:ml-56 sm:text-center md:w-1/5">
					Lorem ipsum dolor sit amet, consectetur
				</h3>
				<div className="flex justify-center items-center flex-row  w-full md:w-4/5">
					<Container measure={"days"} time={days} />
					<Divider />
					<Container measure={"hours"} time={hours} />
					<Divider />
					<Container measure={"minutes"} time={minutes} />
					<Divider />
					<Container measure={"seconds"} time={seconds} />
				</div>
			</div>
		</div>
	);
};

const Divider = () => {
	return <div className="w-0.5 h-20 bg-primaryGreen"></div>;
};

interface ContainerProps {
	time: number;
	measure: string;
}

const Container = ({ time, measure }: ContainerProps) => {
	return (
		<div className="text-center">
			<p className="font-bold md:text-5xl md:mx-8 sm:mx-2.5 sm:text-2xl">
				{time}
			</p>
			<p className="md:text-base sm:text-xs sm:mx-2.5 text-green-500">
				{measure}
			</p>
		</div>
	);
};

export default Time;
