import { useState, useEffect } from "react";
import axios from "axios";

const useWordsAdapter = (difficulty) => {
	const db = "/db.json";
	const [wordArr, setWordArr] = useState(null);
	const [error, setError] = useState(null);

	const getWords = (json, targetDifficulty) => {
		let words = []

		for(let i = 0; i < json.length; ++i)
			if(json[i].difficulty === targetDifficulty)
				words.push(json[i].word + ' ');

		return words;
	}

	const shuffleWords = (words) => {
		let shuffledWords = words.sort(() => Math.random() - 0.5);
		const size = shuffledWords.length;
		const lastWord = shuffledWords[size-1];
		shuffledWords[size-1] = lastWord.substring(0, lastWord.length-1);
		
		return shuffledWords;
	};

	useEffect(() => {
		const source = axios.CancelToken.source();

		const fetchData = async () => {
			await axios.get(db, { cancelToken: source.token })
			.then((response) => {
				const words = getWords(response.data.words, difficulty);
				const shuffledWords = shuffleWords(words);
				setWordArr(shuffledWords);
			})
			.catch((error) => {
				setError(error)
			}, 1000);
		}

		fetchData();

		return () => {
			source.cancel("axios request cancelled");
		}
	}, [difficulty]);

	return {wordArr, error};
}

export default useWordsAdapter;