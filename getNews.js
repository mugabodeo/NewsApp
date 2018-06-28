// here we creating a function in charge of making a request to our api
//we're using fetch which makes an http request to our api and using
// a promise to get the reponse
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

export async function getNews() {
  let result =
    await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=675ffde3e15f42cc842c2d7c3279d5b5').then(response => response.json());
  return result.articles;
}
