import { SettingsOptionsContainer, Option} from "./TestSettings.style";

const SettingsOptions = ({ options, currentOption, setCurrentOption, activeColor }) => {
	return (
		<SettingsOptionsContainer>
			{
				options.map((option) => {
					return (
						<Option
							value={ option }
							onClick={ (e) => setCurrentOption(option) }
							isActive={ currentOption === option ? true : false }
							activeColor={ activeColor }
							key={ option } >
							{ option }
						</Option>
					)
				})
			}
		</SettingsOptionsContainer>
	);
}

export default SettingsOptions;