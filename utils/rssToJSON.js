/**
  * * Конвертация RSS в JSON
  */
export default function rssToJSON(incData) {
  let res;
	let parseString = require('xml2js').parseString;
	parseString(incData, function (err, result) {
		res = result;
  });

	return res;
}
