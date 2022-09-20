import { InputFeedbackContainer, TypingIconContainer } from "./TestInputInformation.style";
import { ReactComponent as BackspaceIcon } from "./icons/backspace.svg";
import { ReactComponent as ErrorIcon } from "./icons/error.svg";
import { ReactComponent as TypingIcon } from "./icons/typing.svg";

const InputFeedback = ({ userFeedback, primaryColor }) => {
	const [userFeedbackBackspace, userFeedbackError, userFeedbackValid] = ["backspace", "error", "valid"];

	const getTypingIcons = () => {
		return (
			<TypingIconContainer>
				<span> <TypingIcon /> </span>
				<span> <TypingIcon /> </span>
				<span> <TypingIcon /> </span>
			</TypingIconContainer>
		);
	}

	const determineFeedback = () => {
		if(userFeedback === userFeedbackError)
			return <ErrorIcon />
		else if(userFeedback === userFeedbackBackspace)
			return <BackspaceIcon />
		else if(userFeedback === userFeedbackValid)
			return getTypingIcons();
		else
			return "";
	}
	return (
		<InputFeedbackContainer primaryColor={ primaryColor }>
			{ determineFeedback() }
		</InputFeedbackContainer>
	);
}

export default InputFeedback;