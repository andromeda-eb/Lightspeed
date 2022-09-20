import { useState, useEffect } from "react";
import axios from "axios";

const useSettingsAdapter = ( themeName ) => {
	const db = "/settings-db.json";
	const [bodyColor, setBodyColor] = useState(null);
	const [primaryColor, setPrimaryColor] = useState(null);
	const [textColor, setTextColor] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const source = axios.CancelToken.source();

		const fetchData = async () => {
			await axios.get(db, { cancelToken: source.token})
			.then((response) => {
				const theme = response.data.themes[themeName];
				setBodyColor(theme.body);
				setPrimaryColor(theme.primary);
				setTextColor(theme.text);
			})
			.catch((error) => {
				setError(error);
			}, 1000);
		};

		fetchData();

		return () => {
			source.cancel("axios request cancelled");
		}
	}, [themeName]);

	return {bodyColor, primaryColor, textColor, error};
}

export default useSettingsAdapter;