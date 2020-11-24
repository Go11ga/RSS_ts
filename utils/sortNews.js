/**
  * * Сортировка массива новостей по времени публикации
  */
export default function sortNews(arr){
  return arr.sort((a,b) => {
    let c = new Date(a.pubDate);
    let d = new Date(b.pubDate);

    return d - c;
  });
}

