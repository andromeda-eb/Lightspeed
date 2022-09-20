import { TestInputInformationContainer } from "./TestInputInformation.style";
import { useState, useEffect } from "react";
import Time from "./Time";
import InputFeedback from "./InputFeedback";

export const TestInputInformation = ({ time, isFinished, setIsFinished, userFeedback, addChartData, inputFocus, primaryColor }) => {
	const [elapsedTime, setElapsedTime] = useState(null);

	useEffect(() => {
		setElapsedTime(0);
	}, [time]);

	return (
		<TestInputInformationContainer>
			<div key={ time }>
				<Time 
					elapsedTime={ elapsedTime }
					setElapsedTime={ setElapsedTime }
					originalTime={ time }
					isFinished={ isFinished }
					setIsFinished={ setIsFinished }
					addChartData={ addChartData }
					inputFocus={ inputFocus }
					primaryColor={ primaryColor }/>
			</div>
			{ inputFocus && <InputFeedback userFeedback={ userFeedback } primaryColor={ primaryColor }/> }
		</TestInputInformationContainer>
	);
}

export default TestInputInformation;