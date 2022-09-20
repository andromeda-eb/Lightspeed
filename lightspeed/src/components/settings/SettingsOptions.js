import { SettingsOptionsContainer } from "./Settings.style";

const SettingsOptions = ({ title, options, currentOption, setNewOption}) => {
	return (
		<SettingsOptionsContainer>
			<label> { title }: </label>
			<select onChange={ (e) => setNewOption(e.target.value)}>
				{
					options.map((option)=> {
						return (<option selected={option === currentOption ? "selected" : ""} key={ option } value={ option }>{ option }</option>);
					})
				}
			</select>
		</SettingsOptionsContainer>
	);
}

export default SettingsOptions;