const formatCatsIntoIdName = data => {
	return data.reduce((acc, currentValue) => {
		acc.push({
			id: currentValue.id,
			name: currentValue.name
		});
		return acc;
	}, []);
};

const formatCatDetail = data => {
	return data.reduce((acc, currentValue) => {
		const data = {
			photoUrl: currentValue.url,
			id: currentValue.breeds[0].id,
			name: currentValue.breeds[0].name,
			life_span: currentValue.breeds[0].life_span,
			temperament: currentValue.breeds[0].temperament,
			origin: currentValue.breeds[0].origin,
			desc: currentValue.breeds[0].description,
			adaptability: currentValue.breeds[0].adaptability,
			affection_level: currentValue.breeds[0].affection_level,
			child_friendly: currentValue.breeds[0].child_friendly,
			grooming: currentValue.breeds[0].grooming,
			intelligence: currentValue.breeds[0].intelligence,
			health_issues: currentValue.breeds[0].health_issues,
			social_needs: currentValue.breeds[0].social_needs,
			stranger_friendly: currentValue.breeds[0].stranger_friendly
		};
		Object.assign(acc, data);
		return acc;
	}, {});
};

const formatCatImages = data => {
	return data.reduce((acc, currentValue, idx) => {
		acc.push({
			photoUrl: currentValue.url,
			name: `${currentValue.breeds[0].name}-${idx}`,
			id: currentValue.breeds[0].id
		});
		return acc;
	}, []);
};

module.exports = { formatCatsIntoIdName, formatCatDetail, formatCatImages };
