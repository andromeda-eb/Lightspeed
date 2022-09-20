import { Link } from "react-router-dom";
import { useState } from "react";
import { NavContainer, NavButton, NavLinkContainer, NavLink } from "./Nav.style";


import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as KeyboardIcon } from "./icons/keyboard.svg";
import { ReactComponent as AboutIcon } from "./icons/about.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings.svg";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

const Navbar = ({ primaryColor, textColor }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [firstRotation, secondRotation, thirdRotation] = [10,50,90];

	return (
		<NavContainer primaryColor={ primaryColor } textColor={ textColor }>
			<NavButton onClick={ (e) => setIsNavOpen(!isNavOpen) }>
				{ !isNavOpen ? <MenuIcon /> : <CloseIcon className="closeNav" /> }
			</NavButton>
			<NavLinkContainer>
				<NavLink isNavOpen={ isNavOpen } rotation={ firstRotation }>
					<Link to='/' > <KeyboardIcon /> </Link>
				</NavLink>
				<NavLink isNavOpen={ isNavOpen } rotation={ secondRotation }>
					<Link to='/about' > <AboutIcon /> </Link>
				</NavLink>				
				<NavLink isNavOpen={ isNavOpen } rotation={ thirdRotation }>
					<Link to='/settings' > <SettingsIcon /> </Link>
				</NavLink>
			</NavLinkContainer>
			<h1>Lightspeed</h1>
		</NavContainer>
	);
}

export default Navbar;