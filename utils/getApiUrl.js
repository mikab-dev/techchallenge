const { API_URL } = require("../constants");

const getArgonautesApiUrl = () => {
  return `${API_URL}/argonautes`;
};

export default getArgonautesApiUrl;
