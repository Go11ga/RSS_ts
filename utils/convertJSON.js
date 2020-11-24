/**
  * * Приведение входящего JSON к общему виду
  */
export default function convertJSON(incData) {
  let newsInc = incData.rss.channel[0].item;
	let url = incData.rss.channel[0].link[0];

  newsInc = newsInc.map((el) => {
		let {title, link, pubDate, description, enclosure } = el;
		return {
      title: title[0],
      link: link[0],
      pubDate: pubDate[0],
      description: description[0],
      enclosure: enclosure[0]['$'].url,
      url: url
		}
  });

  return newsInc;
}