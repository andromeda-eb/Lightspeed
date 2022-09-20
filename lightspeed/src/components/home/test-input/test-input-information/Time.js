import { useState, useEffect } from "react";
import { TimeContainer } from "./TestInputInformation.style";

const Time = ({ elapsedTime, setElapsedTime, originalTime, isFinished, setIsFinished, addChartData, inputFocus, primaryColor }) => {
	const [time, setTime] = useState(null);
	const infinity = "∞";
	let finalWpm = false;

	useState(() => {
		if(originalTime !== infinity)
			setTime( parseInt(originalTime));
		else
			setTime(originalTime)
	}, []);

	useEffect(() => {
		if(isFinished || time < 0 || !inputFocus) return;

		addChartData(elapsedTime);

		if(time <= 0)
			setIsFinished(true);

		
		const intervalId = setInterval(() => {
			if(originalTime !== infinity)
				setTime(time-1);
			
			setElapsedTime(elapsedTime + 1);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [elapsedTime, inputFocus]);

	return (
		<TimeContainer primaryColor={ primaryColor }>
			{ time }
		</TimeContainer>
	);
}

export default Time;