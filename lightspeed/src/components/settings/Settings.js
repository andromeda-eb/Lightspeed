import { SettingsContainer, SettingsSaveButton } from "./Settings.style";
import SettingsOptions from "./SettingsOptions";
import { useState } from "react";

const Settings = ({ currentTheme, setCurrentTheme, currentFont, setCurrentFont, primaryColor }) => {
	const [newCurrentTheme, setNewCurrentTheme] = useState(currentTheme);
	const [newCurrentFont, setNewCurrentFont] = useState(currentFont);
	const themes = ["default", "matrix", "sunshine", "samurai"];
	const fonts = ["Roboto Mono Regular", "Roboto Mono Thin", "Quicksand Regular", "Sora Regular", "Sora Thin"];

	const updateSettings = () => {
		setCurrentTheme(newCurrentTheme);
		setCurrentFont(newCurrentFont)
	};

	return (
		<SettingsContainer>
			<SettingsOptions title={ "Theme" } options={ themes } currentOption={ currentTheme } setNewOption={ setNewCurrentTheme }/>
			<SettingsOptions title={ "Font" } options={ fonts } currentOption={ currentFont } setNewOption={ setNewCurrentFont }/>
			<SettingsSaveButton onClick={ updateSettings } primaryColor={ primaryColor }>Save</SettingsSaveButton>
		</SettingsContainer>
	);
}

export default Settings;