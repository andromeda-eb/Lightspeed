export const returnCharElementIfExists = (currentWordPos, currentCharPos) => {
	const charPos = currentWordPos.toString() + ',' + currentCharPos.toString();
	const charElement = document.getElementById(charPos);
	return charElement;
}

export const changeCharElement = (charElement, input, currentWord, userFeedbackError, setUserFeedback, userFeedbackValid, correctLetters, setCorrectLetters, errors, setErrors, primaryColor,  keypressSound, errorSound) => {
	const lastInputChar = input.charAt(input.length-1);
	const correspondingWordChar = currentWord.charAt(input.length-1);

	if(lastInputChar === correspondingWordChar){
		charElement.style.color= primaryColor;
		setCorrectLetters(correctLetters + 1);
		setUserFeedback(null);
		setUserFeedback(userFeedbackValid);

		if(keypressSound)
			keypressSound.play();
	}
	else{
		setUserFeedback(userFeedbackError);
		setErrors(errors + 1);

		if(errorSound)
			errorSound.play();

		if(correspondingWordChar === ' '){
			charElement.style.backgroundColor = "#CC0000";
			charElement.style.opacity = "0.2";
		}
		else
			charElement.style.color="#CC0000";
	}
}

export const setNewWord = (currentWord, currentWordPos, setCurrentWordPos, setCurrentCharPos, input, setInput, setIsFinished, words, chartData, setChartData, addChartData) => {
	if(input.length < currentWord.length) return;

	setCurrentWordPos(currentWordPos + 1)
	setCurrentCharPos(0);
	setInput("");

	if(currentWordPos === words.length-1){
		setIsFinished(true);
		chartData.pop();
		setChartData(chartData);
		addChartData(chartData.length-1)
	}

	ScrollWordIntoView(currentWordPos, words);
}

const ScrollWordIntoView = (currentWordPos, words) => {
	if(currentWordPos === words.length-1) return;

	const nextWordId = (currentWordPos+1).toString();
	const nextWord = document.getElementById(nextWordId)
	const options = {block:"center"};
	nextWord.scrollIntoView(options)
}