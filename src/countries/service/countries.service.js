class CountryService {
  getCountries() {
    let filePath = "../../../server/countries.json";
    return fetch(filePath)
      .then((res) => res.json())
      .then((jsonData) => jsonData.data);
  }
}

export default new CountryService();
