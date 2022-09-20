import { useState } from "react";
import { TestSettingsContainer } from "./TestSettings.style";
import SettingsOptions from "./SettingsOptions";
import WordsSettings from "./WordsSettings";
import ParagraphSettings from "./ParagraphSettings";
import CustomSettings from "./CustomSettings";


const TestSettings = ({ time, setTime, setWords, primaryColor, textColor }) => {
	const defaultTest = "words";
	const testOptions = ["words", "paragraphs", "custom"];
	const timeOptions = ["∞","5","15","30","45","60", "90", "120"];
	const [test, setTest] = useState(defaultTest);
	const colors = {
		"easy":"#16a085",
		"medium":"#e2b714",
		"hard":"#f1356d",
		"short":"#16a085",
		"long":"#f1356d"
	}

	const getTestData = () => {
		const words = "words";
		const paragraph = "paragraphs";
		const custom = "custom";

		if(test === words)
			return <WordsSettings setWords={ setWords } colors={ colors } />
		else if(test === paragraph)
			return <ParagraphSettings setWords={ setWords } colors={ colors }/>
		else if (test === custom)
			return <CustomSettings setWords={ setWords }/>
	}
	
	return (
		<TestSettingsContainer>
			<SettingsOptions 
				options={ testOptions }
				currentOption={ test }
				setCurrentOption={ setTest }
				activeColor={ primaryColor } />
			<SettingsOptions
				options={ timeOptions }
				currentOption={ time }
				setCurrentOption={ setTime }
				activeColor={ primaryColor } />
			{ getTestData() }
		</TestSettingsContainer>
	);
}

export default TestSettings;