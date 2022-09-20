import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin:0; //
		padding:0; //
		box-sizing: border-box; //
		background-color: ${ (props) => props.bodyColor};
		color: ${ (props) => props.textColor };
		font-size: 1.04em;
		scroll-behaviour: smooth;
	}
`;

export const AppContainer = styled.div`
	min-height: 100vh; //
	display:flex;
	flex-direction: column;
	font-family: ${ (props) => props.font } ;
	padding: 0.5em;
`;
