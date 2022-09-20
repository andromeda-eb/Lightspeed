import styled, { keyframes } from "styled-components";

export const TestInputInformationContainer = styled.div`
	display:flex;
	min-height: 3em;
`;

export const TimeContainer = styled.div`
	color: ${ (props) => props.primaryColor };
	font-size: 1.5em;
`;

export const InputFeedbackContainer = styled.div`
	margin-left: auto;

	& svg {
		fill: ${ (props) => props.primaryColor };
		width: 2em;
		height: 2em;
	}
`;

const TypingAnimation = keyframes`
	0% {
		transform: translate(0,0);
	}
	50% {
		transform: translate(0,-100%)
	},
	100% {
		transform: translate(0,0%);
	}
`;
export const TypingIconContainer = styled.div`
	& svg {
		width: 0.5em;
		height: 0.5em;
		margin-right: 0.5em;
	}

	& span:nth-child(1) svg{
		animation: ${ TypingAnimation } 1s ease infinite;
	}

	& span:nth-child(2) svg{
		animation: ${ TypingAnimation } 1s ease infinite;
		animation-delay: 0.2s;
	}

	& span:nth-child(3) svg{
		animation: ${ TypingAnimation } 1s ease infinite;
		animation-delay: 0.4s;
	}
`;