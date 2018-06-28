
export async function getNews() {
  let result =
    await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=675ffde3e15f42cc842c2d7c3279d5b5').then(response => response.json());
  return result.articles;
}
