import { AboutContainer } from "./About.style";
const About = () => {
	return (
		<AboutContainer> 
			Lightspeed is a minimalist typing application that aims to increase typing speed. <br/>
			It is inspired by monkeytype. I chose to create this because I adored the monkeytype <br />
			application and wanted to create my own version and also learn the React library. <br /> <br />
			There are 3 options available: words, paragraphs and custom. <br /> <br />

			Words: Type random words in succession (no punctuation) <br /> <br />

			Paragraphs: Type paragraphs from movies/books (with punctuation) <br /> <br />

			Custom: Create your own input <br /> <br />

			At the end of each test, you will be presented your WPM (words typed per minute) and a graph <br />
			that will describe your WPM and EPM (errors typed per minute) <br /> <br />

			You can also change the theme and the font in the settings page <br />
		</AboutContainer>
	);
}

export default About;