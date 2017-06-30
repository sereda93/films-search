import isNumeric from './isHumeric';

const sortLetters = (a, b, orderType) => {
	let result;

	if (orderType === 'asc') {
		result = String(a).toLowerCase() < String(b).toLowerCase() ? -1 : 1;
	} else {
		result = String(a).toLowerCase() > String(b).toLowerCase() ? -1 : 1;
	}

	return result;
};

const sortNumeric = (a, b, orderType) => {
	let result;

	if (orderType === 'asc') {
		result = a < b ? -1 : 1;
	} else {
		result = a > b ? -1 : 1;
	}

	return result;
};

export default function sortFilms(a, b, orderBy, orderType) {
	let sortRes;

	if (isNumeric(a[orderBy]) && isNumeric(b[orderBy])) {
		sortRes = sortNumeric(a[orderBy], b[orderBy], orderType);
	} else {
		sortRes = sortLetters(a[orderBy], b[orderBy], orderType);
	}

	return sortRes;
};