import styled, { keyframes } from "styled-components";

export const TestInputContainer = styled.div`
	display:flex;
	align-items:center;
	flex-direction: column;
	margin: 0 auto;
	position: relative;
	justify-content: center;

	& input[type=text]{
		width: inherit;
		height: inherit;
		position: absolute;
		opacity: 0;
		z-index: 99;
	}
`;

export const ClickToStartContainer = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	z-index: 1;
	color: ${ (props) => props.textColor };
	background-color:transparent;
	backdrop-filter: blur(5px);
`;

const slideRight = keyframes`
	0%{
		transform: translate(-0.3em);
	}
	100%{
		transform: translate(-0.1em);
	}
`;

const slideLeft = keyframes`
	0%{
		transform: translate(0.3em);
	}
	100%{
		transform: translate(-0.1em);
	}
`;

export const TestWords = styled.div`
	display:flex;
	flex-wrap: wrap;
	margin: 0 auto;
	height: 7em;
	width: 35em;
	overflow-y:scroll;
	overflow:hidden;
	font-size:1.5em;
	& div{
		position:relative;
		line-height: 4.2rem;
		position:relative;
		display:flex;
	}

	& span{
		color:#646669;
	}

	& :nth-child(${ (props) => props.currentWordPos }) span:nth-child( ${ (props) => props.currentCharPos }):before{
		content: '';
		animation: ${(props) => props.isBackspace === true? slideLeft : slideRight} 0.25s ease;
		transform: translate(-0.1em);
		background-color: ${ (props) => props.primaryColor };
		overflow:hidden;
		position:absolute;
		border-radius: 1em;
		height: 2em;
		width: 0.13em;
	}
`;

export const RestartButton = styled.button`
	border: none;
	margin: 1.5%;
	cursor: pointer;
	transition: all 0.5s ease;
	z-index: 1;

	& svg {
		stroke: ${ (props) => props.textColor };
	}

	&:hover {
		transform: scale(1.5);
	}
`;