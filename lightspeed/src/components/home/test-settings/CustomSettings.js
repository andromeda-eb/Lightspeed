import { useState, useEffect } from "react";

import { CustomSettingsContainer, OpenUserInputButton, UserInputContainer, CloseButton, UserInputText, UserInputSaveButton } from "./TestSettings.style";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

const CustomSettings = ({ setWords }) => {
	let defaultText = "The quick brown fox jumps over the lazy dog";
	const [isUserInputOpen, setIsUserInputOpen] = useState(false);
	const [userInput, setUserInput] = useState(defaultText);

	useEffect(() => {
		saveInput();
	},[]);

	const handleCloseButton = () => {
		setIsUserInputOpen(false);
		setUserInput(defaultText);
	};

	const convertWords = (trimmedInput) => {
		const words = trimmedInput.split(' ');

		let result = words.map((word) => {
			return word + ' ';
		});

		let size = result.length;
		let lastWord = result[size-1];
		result[size-1] = lastWord.substring(0, lastWord.length-1);

		return result;
	}

	const saveInput = () => {
		const trimmedInput = userInput.trim();
		const words = convertWords(trimmedInput);
		defaultText = trimmedInput;
		setUserInput(trimmedInput);
		setWords(words);
		setIsUserInputOpen(false);
	};

	return (
		<CustomSettingsContainer>
			<OpenUserInputButton onClick={ (e) => setIsUserInputOpen(true) }>Add</OpenUserInputButton>
			<UserInputContainer isUserInputOpen={ isUserInputOpen }>
				<CloseButton onClick={ handleCloseButton }>
					<CloseIcon />
				</CloseButton>
				<label>Enter text and save</label>
				<UserInputText value={ userInput } onChange={ (e) => setUserInput(e.target.value) }/>
				<UserInputSaveButton onClick={ saveInput }>Save</UserInputSaveButton>
			</UserInputContainer>
		</CustomSettingsContainer>
	);
}

export default CustomSettings;