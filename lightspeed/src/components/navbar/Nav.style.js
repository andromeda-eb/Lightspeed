import styled from "styled-components";

export const NavContainer = styled.div`
	position: relative;
	z-index: 100;
	min-height:9em;
	min-width: 20.4em;
	padding: 0.5em;

	& h1 {
		text-align: center;
		font-size: 2em;
		color: ${ (props) => props.primaryColor};
	}

	& svg {
		fill: ${ (props) => props.textColor };
		stroke: ${ (props) => props.textColor };
		transition: 0.5s ease;
		height: 1.5em;
		width: 1.5em;
	}

	& svg:hover {
		transform: scale(1.5);
	}
`;

export const NavButton = styled.button`
	position: absolute;
	width: 1.5em;
	height: 1.5em;
	stroke: #FFF;
	border:none;
	cursor: pointer;
	margin-top: 1em;
	margin-left: 1em;
`;

export const NavLinkContainer = styled.div`
	
`;

export const NavLink = styled.div`
	& a {
		display: block;
		position: absolute;
		opacity: ${ (props) => props.isNavOpen === true ? 1 : 0};
		transform: rotate( ${ (props) => (props.isNavOpen ? props.rotation : -25) }deg) translate(5.75em) rotate( ${ (props) => props.isNavOpen ? (props.rotation * -1) : -25}deg);
		-webkit-transition: all 0.3s ease-out;
  		-moz-transition: all 0.3s ease-out;
  		transition: all 0.3s ease-out;
	}

`;