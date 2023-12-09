// Error handling function
export const extractErrorInfo = (error) => {
  let res = {};
  res.data = error.response.data;
  res.status = error.response.status;
  res.headers = error.response.headers;
  return res;
};
