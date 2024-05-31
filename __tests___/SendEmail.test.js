const { sendEmail } = require("../emailService");

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
