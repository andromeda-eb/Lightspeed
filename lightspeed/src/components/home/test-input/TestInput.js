import { useState, useEffect } from "react";
import HTMLAdapter from "./../../adapters/HTMLAdapter";
import { TestInputContainer, ClickToStartContainer, BlurContainer, TestWords, RestartButton } from "./TestInput.style";
import TestInputInformation from "./test-input-information/TestInputInformation";
import * as helper from "./TestInputHelper";
import TestResults from "./test-results/TestResults";
import { ReactComponent as Restart } from "./icons/restart.svg";

const TestInput = ({ words, time, bodyColor, primaryColor, textColor }) => {
	const [currentWordPos, setCurrentWordPos] = useState(0);
	const [currentCharPos, setCurrentCharPos] = useState(0);
	const [input, setInput] = useState("");
	const [isBackspace, setIsBackspace] = useState(false);
	const [html, setHTML] = useState(null);
	const [isFinished, setIsFinished] = useState(false);
	const [userFeedbackBackspace, userFeedbackError, userFeedbackValid] = ["backspace", "error", "valid"];
	const [userFeedback, setUserFeedback] = useState(null);
	const [correctLetters, setCorrectLetters] = useState(null);
	const [errors, setErrors] = useState(null);
	const [chartData, setChartData] = useState(null);
	const [restart, setRestart] = useState(false);
	const [inputFocus, setInputFocus] = useState(false);

	useEffect(() => {
		setHTML(HTMLAdapter(words));
		setCurrentWordPos(0);
		setCurrentCharPos(0);
		setInput("");
		setIsBackspace(false);
		setIsFinished(false);
		setCorrectLetters(0);
		setErrors(0);
		setChartData([["time", "wpm", "errors"]]);
		setRestart(false);
		setInputFocus(false);
		setUserFeedback(null);

	}, [words, time, restart])
	
	useEffect(() => {
		if(isFinished) return;

		const charElement = helper.returnCharElementIfExists(currentWordPos, currentCharPos);

		if(isBackspace === true) return;

		if(input === '' || !charElement) return;

		const currentWord = words[currentWordPos];
		helper.changeCharElement(charElement, input, currentWord, userFeedbackError, setUserFeedback, userFeedbackValid, correctLetters, setCorrectLetters, errors, setErrors, primaryColor);
		setCurrentCharPos(currentCharPos + 1);
		helper.setNewWord(currentWord, currentWordPos, setCurrentWordPos, setCurrentCharPos, input, setInput, setIsFinished, words, chartData, setChartData, addChartData);
	}, [input])

	const handleKeyDown = (e) => {
		if(isFinished) return;
		
		const backspaceKeycode = 8;
		if(e.keyCode !== backspaceKeycode) {
			setIsBackspace(false)
			return;
		}

		setIsBackspace(true);
		setUserFeedback(userFeedbackBackspace);

		if(currentCharPos > 0)
			setCurrentCharPos(currentCharPos - 1);
	}

	const getWpm = (time) => {
		const minute = 60;
		const validWordSize = 5;
		const wpm = correctLetters / validWordSize;
		const elapsedMinutes = (time / minute) ;
		const ans = parseInt(wpm / elapsedMinutes);

		if(isNaN(ans))
			return 0;

		return ans;
	};

	const getEpm = (time) => {
		const elapsedMinutes = Math.ceil(time / 60);
		
		return Math.floor(errors / elapsedMinutes);
	};

	const addChartData = (time) => {
		if( time === null ) return;

		const wpm = getWpm(time);
		const epm = getEpm(time);
		const accurateWpm = isNaN(wpm - epm) ? 0 : wpm-epm;
		const newData = [time, accurateWpm, errors];
		const newChartData = [...chartData, newData];
		setChartData(newChartData);
	};

	return(
		<TestInputContainer key={ restart }  onFocus={ (e) => setInputFocus(true) } onBlur={ (e) => setInputFocus(false)}>
			{ !inputFocus && 
				<ClickToStartContainer textColor={ textColor}>
					Click to Start
				</ClickToStartContainer>
			}
				{ !isFinished && 
					<div key={ time }>
						<TestInputInformation 
							time={ time }
							isFinished={ isFinished }
							setIsFinished={ setIsFinished }
							userFeedback={ userFeedback }
							addChartData={ addChartData }
							inputFocus={ inputFocus }
							primaryColor={ primaryColor } />
						<TestWords
							id="testWords"
							currentWordPos={ currentWordPos + 1}
							currentCharPos={ currentCharPos + 1}
							isBackspace={ isBackspace }
							primaryColor={ primaryColor }>
								{ html }
								<input
								type="text"
								value={ input }
								onKeyDown={ (e) => handleKeyDown(e) }
								onChange={ (e) => setInput(e.target.value) } />
						</TestWords>
					</div>
				}
			{
				isFinished && <TestResults correctLetters={ correctLetters } errors={ errors } chartData={ chartData } bodyColor={ bodyColor } primaryColor={ primaryColor } textColor={ textColor }/>
			}
			<RestartButton onClick={ (e) => { setRestart(true)} } textColor={ textColor } >
				<Restart />
			</RestartButton>
		</TestInputContainer>
	);
}

export default TestInput;