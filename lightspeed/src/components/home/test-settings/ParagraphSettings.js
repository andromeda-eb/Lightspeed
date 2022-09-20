import { ParagraphSettingsContainer } from "./TestSettings.style";
import SettingsOptions from "./SettingsOptions";
import { useState, useEffect } from "react";
import useParagraphAdapter from "./../../adapters/useParagraphAdapter";

const ParagraphSettings = ({setWords, colors }) => {
	const lengths = ["short", "medium", "long"];
	const defaultLength = lengths[0];
	const [length, setLength] = useState(defaultLength)
	const {words, error} = useParagraphAdapter(length);
	
	useEffect(() => {
		if(error) return;

		setWords(words);
	});

	return (
		<ParagraphSettingsContainer>
			<SettingsOptions 
				options={ lengths }
				currentOption={ length }
				setCurrentOption={ setLength }
				activeColor={ colors[length] }>
			</SettingsOptions>
		</ParagraphSettingsContainer>
	);
}

export default ParagraphSettings;