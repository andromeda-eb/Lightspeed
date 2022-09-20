const HTMLAdapter = (words) => {
	let id = 0;
	
	return	words.map((word) => {
			
			const idPrefix = (id++).toString();
			return (
				<div id={ idPrefix } key={ idPrefix }>
					{ convertStringToHTML(word, idPrefix) }
				</div>
			);
		})
	}

const convertStringToHTML = (word, idPrefix) => {
	let idSuffix = 0;
	const wordArr = Array.from(word);

	const htmlArr = wordArr.map((char) => {
		const charId = idPrefix + ',' + (idSuffix++).toString();
		return (<span id={ charId } key={ charId }>{ char }</span>)
	})

	const spaceId = idPrefix + ',' + (idSuffix).toString();
	htmlArr.push((
		<span id={ spaceId } key={ spaceId }>&nbsp;</span>
	));

	return htmlArr;
}

export default HTMLAdapter;