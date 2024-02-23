import { useEffect, useState } from "react";

// Timer component
const Time = () => {
	// State for days, hours, minutes, and seconds
	const [days, setDays] = useState(170);
	const [hours, setHours] = useState(13);
	const [minutes, setMinutes] = useState(39);
	const [seconds, setSeconds] = useState(0);

	// Effect to handle countdown timer
	useEffect(() => {
		const interval = setInterval(() => {
			// Update seconds
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			// Update minutes
			else if (minutes > 0) {
				setMinutes(minutes - 1);
				setSeconds(59);
			}
			// Update hours
			else if (hours > 0) {
				setHours(hours - 1);
				setMinutes(59);
				setSeconds(59);
			}
			// Update days
			else if (days > 0) {
				setDays(days - 1);
				setHours(23);
				setMinutes(59);
				setSeconds(59);
			}
		}, 1000);
		// Cleanup function to clear interval
		return () => clearInterval(interval);
	}, [days, hours, minutes, seconds]);

	// Return JSX
	return (
		<div className="bg-green-900 text-white p-4">
			<div className="flex justify-between gap-10">
				{/* Header */}
				<h3 className="font-bold text-2xl w-full sm:text-center md:w-1/5">
					Lorem ipsum dolor sit amet, consectetur
				</h3>
				{/* Timer container */}
				<div className="flex justify-center items-center flex-row gap-2 w-full md:w-4/5">
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
			{/* Display time */}
			<p className="font-bold text-4xl">{time}</p>
			{/* Display measure */}
			<p className="text-base text-green-500">{measure}</p>
		</div>
	);
};

// Export Timer component
export default Time;
