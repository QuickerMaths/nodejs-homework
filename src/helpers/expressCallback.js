const expressCallback = (controller) => (req, res, next) => {
  const httpRequest = {
    body: req.body,
    file: req.file,
    user: req.user,
    params: req.params,
    query: req.query,
  };

  controller(httpRequest)
    .then((httpResponse) => {
      res.status(httpResponse.statusCode).send(httpResponse.body);
    })
    .catch(next);
};

export default expressCallback;
