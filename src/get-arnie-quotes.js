const { httpGet } = require("./mock-http-interface");

const fetchSingleQuote = async (url) => {
  const response = await httpGet(url);

  // Possible TODO - JSON parsing error handling (skipped this as the Tips said to keep solution as simple as possible)
  const body = JSON.parse(response.body);

  if (response.status === 200) {
    return {
      "Arnie Quote": body.message,
    };
  } else {
    return {
      FAILURE: body.message,
    };
  }
};

const getArnieQuotes = async (urls) => {
  const quotes = urls.map((url) => fetchSingleQuote(url));

  return Promise.all(quotes);
};

module.exports = {
  getArnieQuotes,
};
