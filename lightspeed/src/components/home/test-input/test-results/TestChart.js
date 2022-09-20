import { TestChartContainer } from "./TestResults.style";
import Chart from "react-google-charts";

export const TestChart = ({ chartData , bodyColor, primaryColor, textColor}) => {
	const wpmColor = primaryColor;
	const errorColor = "#f1356d";
	const chartOptions = {
	  	colors: [ wpmColor, errorColor ],
	  	curveType: "function",
	    backgroundColor: bodyColor,
	    chartArea: {
	    	width: "50%"
	    },
	    hAxis: {
	     	title: "Time",
	     	textStyle:{ color: textColor },
	     	titleTextStyle: { color: textColor },
	    	gridlines: { color: "transparent"},
	    	textPosition: "in",
	    	format: "0"
	    },
	    vAxis: {
	     	title: "wpm",
	     	textStyle:{ color: textColor },
	     	titleTextStyle: { color: textColor },
	    	gridlines: { color: "transparent" },
	    	textPosition: "in",
	    	format: "0"
	    },
	    legend: {
			textStyle: { color: textColor }
		}
	 };

	return (
		<TestChartContainer>
			<Chart
			 	chartType="LineChart"
			 	loader={<div>Loading Chart</div>}
			 	data={ chartData }
			  	options={ chartOptions }
			  	rootProps={{ 'data-testid': '1' }}
			/>
		</TestChartContainer>
	);
};

export default TestChart;