import { useState, useEffect } from "react";
import { HomeContainer, InputContainer } from "./Home.style";
import TestSettings from "./test-settings/TestSettings";
import TestInput from "./test-input/TestInput";

const Home = ({ bodyColor, primaryColor, textColor, currentSound }) => {
	const [words, setWords] = useState(null);
	const defaultTime = "30";
	const [time, setTime] = useState(defaultTime);

	return (
		<HomeContainer>
			<TestSettings time={ time } setTime={ setTime } setWords={ setWords } primaryColor={ primaryColor } textColor={ textColor } />
			
			<InputContainer key={ words }>
				{ words && <TestInput words={ words } time={ time } bodyColor={ bodyColor} primaryColor={ primaryColor } textColor={ textColor } currentSound={ currentSound }/> }
			</InputContainer>
		</HomeContainer>
	);
}

export default Home;