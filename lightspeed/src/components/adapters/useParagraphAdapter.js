import { useState, useEffect } from "react";
import axios from "axios";

const useParagraphAdapter = (length) => {
	const db = "/db.json";
	const [words, setWords] = useState(null);
	const [error, setError] = useState(null);

	const getParagraphs = (json, targetLength) => {
		let validParagraphs = [];

		json.forEach((j) => {
			if(j.length === targetLength)
				validParagraphs.push(j)
		})

		return validParagraphs;
	}

	const getRandomParagraph = (validParagraphs) => {
		const max = validParagraphs.length -1;
		const randomNumber = Math.floor( Math.random() * (max) );
		const randomParagraph = validParagraphs[randomNumber].text;
		return randomParagraph;
	}

	const getWords = (paragraph) => {
		const wordArr = paragraph.split(' ');

		let result = wordArr.map((word) => {
			return word + ' ';
		});

		const size = result.length;
		const lastWord = result[size-1];
		result[size-1] = lastWord.substring(0, lastWord.length-1);

		return result;
	}

	useEffect(() => {
		const source = axios.CancelToken.source();

		const fetchData = async () => {
			await axios.get(db, { cancelToken: source.token })
			.then((response) => {
				const validParagraphs = getParagraphs(response.data.paragraphs, length)
				const randomParagraph = getRandomParagraph(validParagraphs);
				const result = getWords(randomParagraph);
				setWords(result);
			})
			.catch((error) => {
				setError(error)
			}, 1000);
		}

		fetchData();

		return () => {
			source.cancel("axios request cancelled");
		}
	}, [length]);

	return {words, error};
}

export default useParagraphAdapter;


