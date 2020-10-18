export const getDataApi = async () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const urlApi = `http://www.mrsoft.by/data.json`;
  const response = await fetch(proxyurl + urlApi);
  const data = await response.json();
  return { ...data };
}
