import styled from "styled-components";

export const FooterContainer = styled.div`
	display:flex;
	align-items:flex-end;
	margin: 0 auto;
	margin-top: auto;

	& svg {
		stroke: #FFF;
		fill: #FFF;
		height:1.5em;
		width: 1.5em;
		transition: 0.5s ease;	
	}

	& svg:hover{
		transform: scale(1.5);
	}
`;