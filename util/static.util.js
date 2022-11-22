exports.STATICDATA = {
  status: ["Active", "Blocked", "Deleted"],
};

exports.statusResponses = {
  SUCC_MSG: {
    status: 200,
    message: "sucess",
  },
  BAD_RQST: {
    status: 400,
    message: "bad request",
  },
  CREATION_FAILED: {
    status: 302,
    message: `Creation Failed`,
  },
};
