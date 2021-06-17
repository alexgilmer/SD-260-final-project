const apiKey = '5114f9c20b4f4536879395b4e0499ce9';

export const search = async (qString) => {
  const baseUrl = `https://api.themoviedb.org/3/search/tv?&api_key=${apiKey}`;
  const response = await fetch(`${baseUrl}&query=${qString}`);
  const data = await response.json();

  return data.results;
};

export const getPopular = async (id) => {
  const baseUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;
  const network = `&with_watch_providers=${id}`;
  const sort = `&sort_by=popularity.desc`;
  const response = await fetch(baseUrl + network + sort);
  const data = await response.json();

  console.log(data);
  return data.results;
}