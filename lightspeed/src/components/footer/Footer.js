import { FooterContainer } from "./Footer.style";
import {ReactComponent as Github} from "./github.svg";
const Footer = () => {
	const githubURL = "https://github.com/andromeda-eb";
	return (
		<FooterContainer>
			<a href= { githubURL }> <Github /> </a>
		</FooterContainer>
	);
}

export default Footer;