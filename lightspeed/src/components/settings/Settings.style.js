import styled from "styled-components";

export const SettingsContainer = styled.div`
	display:flex;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 50%;
	flex-direction: column;
`;

export const SettingsOptionsContainer = styled.div`
	width: inherit;

	& label {
	
	}
	& select {
		text-align: center;
		float: right;
	}
`;

export const SettingsSaveButton = styled.button`
	color: ${ (props) => props.primaryColor };
	position: relative;
	padding: 1em 1.5em;
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;
	font-size: 18px;
	margin: 2em 0.8em;

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
		border-top-color: ${ (props) => props.primaryColor };
		border-left-color: ${ (props) => props.primaryColor };
	}

	&:after {
		bottom: 0;
		right: 0;
		border-top-color: transparent;
		border-left-color: transparent;	
		border-bottom-color: ${ (props) => props.primaryColor };
		border-right-color: ${ (props) => props.primaryColor };
	}

	&:hover::before, :hover::after {
		width: 100%;
		height: 100%;
	}
`;