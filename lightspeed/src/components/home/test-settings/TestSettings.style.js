import styled from "styled-components";

export const TestSettingsContainer = styled.div`
	margin-left: auto;
	display:flex;
	flex-direction:column;
	padding-right: 0.5em;
	height: inherit;
	width: inherit;
`;

export const SettingsOptionsContainer = styled.ul`
	line-height:2.5rem;
`;

export const Option = styled.li`
	display: inline;
	font-weight: bold;
	margin-left: 1em;
	list-style-type: none;
	cursor: pointer;
	color: ${ (props) => props.isActive ? props.activeColor : '' };
	transition: all 0.25s ease;
`;

export const WordsSettingsContainer = styled.div`

`;

export const ParagraphSettingsContainer = styled.div`

`;

export const CustomSettingsContainer = styled.div`
	display:inline;
	line-height: 2.5rem;
	margin-left: 1em;
	cursor: pointer;
`;

export const UserInputContainer = styled.div`
	visibility: ${ (props) => props.isUserInputOpen ? "visible" : "hidden"};
	border: 1px solid white;
	position:absolute;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	width: 50%;
	height: 50%;
	margin: auto auto;
`;

export const OpenUserInputButton = styled.button`
	border: none;
	cursor: pointer;
	
`;

export const CloseButton = styled.button `
	border:none;
	stroke: red;
	margin: 0.5em;
	margin-left: auto;
	cursor: pointer;
	transition: transform 0.5s ease;

	&:hover {
		transform: scale(1.5);
	}
`;

export const UserInputText = styled.textarea`
	width: 100%;
	height: 50%;
	margin-top: auto;
	padding: 0.5em;

`;
export const UserInputSaveButton = styled.button`
	color: #00FFFF;
	position: relative;
	padding: 1em 1.5em;
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;
	font-size: 18px;
	margin: 1em 0.8em;

	&:before, &:after {
		content: "";
		display: block;
		position: absolute;
		width: 20%;
		height: 20%;
		border: 2px solid;
		transition: all 0.6s ease;
		border-radius: 2px;
	}

	&:before {
		top: 0;
		left: 0;
		border-bottom-color: transparent;
		border-right-color: transparent;
		border-top-color: #00FFFF;
		border-left-color: #00FFFF;
	}

	&:after {
		bottom: 0;
		right: 0;
		border-top-color: transparent;
		border-left-color: transparent;	
		border-bottom-color: #00FFFF;
		border-right-color: #00FFFF;
	}

	&:hover::before, :hover::after {
		width: 100%;
		height: 100%;
	}
`;