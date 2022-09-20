import { TestResultsContainer, TestResultsInformationContainer, WpmContainer, ElapsedTimeContainer, AccuracyContainer } from "./TestResults.style";
import TestChart from "./TestChart";

const TestResults = ({ correctLetters, errors, chartData, bodyColor, primaryColor, textColor }) => {
	const getAccuracy = () => {
		const total = errors + correctLetters;
		const ans = 100 - (100 * (errors / total));

		if(isNaN(ans))
			return 0;

		return ans.toFixed(2);
	}

	return (
		<TestResultsContainer>
			<TestChart chartData={ chartData } bodyColor={ bodyColor } primaryColor={ primaryColor } textColor={ textColor } /> 
			<TestResultsInformationContainer>
				<WpmContainer>
					<label> WPM: { chartData[chartData.length-1][1] } </label>
				</WpmContainer>
				<ElapsedTimeContainer>
					<label> Time: { chartData[chartData.length-1][0] }s </label>
				</ElapsedTimeContainer>
				<AccuracyContainer>
					<label> Accuracy: { getAccuracy() }%</label>
				</AccuracyContainer>
			</TestResultsInformationContainer>
		</TestResultsContainer>
	);
}

export default TestResults;