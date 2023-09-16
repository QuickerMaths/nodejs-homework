const expressCallback = (controller) => (req, res, next) => {
  const httpRequest = {
    body: req.body,
    user: req.user,
    params: req.params,
  };

  controller(httpRequest)
    .then((httpResponse) => {
      res.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch(next);
};

export default expressCallback;
