const { fetchData } = require("../dataFetcher");


describe("fetchData", () => {
  it("returns fetched data", () => {
    const url = "webdomain.com";
    fetchData(url).then((data) => {
      expect(data).toBe("Fetched data from " + url);
    });
  });
});



