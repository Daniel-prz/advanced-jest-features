const { fetchData } = require("../dataFetcher");
const { sendEmail } = require("../emailService");

describe("fetchData", () => {
  it("returns fetched data", () => {
    const url = "webdomain.com";
    fetchData(url).then((data) => {
      expect(data).toBe("Fetched data from " + url);
    });
  });
});


jest.mock("../emailService");
sendEmail.mockImplementation(() => "mock email sent");


describe("sendEmail", () => {
  it("is called with correct parameters", () => {
    sendEmail("Recipient", "Business", "blah blah");
    expect(sendEmail).toHaveBeenCalledWith(
      "Recipient",
      "Business",
      "blah blah"
    );
  });
});
