import { WordsSettingsContainer } from "./TestSettings.style";
import SettingsOptions from "./SettingsOptions";
import { useState, useEffect } from "react";
import useWordsAdapter from "./../../adapters/useWordsAdapter";

const WordsSettings = ({setWords, colors }) => {
	const difficulties = ["easy", "medium", "hard"];
	const defaultDifficulty = difficulties[0];
	const [difficulty, setDifficulty] = useState(defaultDifficulty);
	const {wordArr, error} = useWordsAdapter(difficulty);

	useEffect(() => {
		if(error) return;
		
		setWords(wordArr);
	});

	return (
		<WordsSettingsContainer>
			<SettingsOptions 
				options={ difficulties }
				currentOption={ difficulty }
				setCurrentOption={ setDifficulty }
				activeColor={ colors[difficulty] } />
		</WordsSettingsContainer>
	);
}

export default WordsSettings;