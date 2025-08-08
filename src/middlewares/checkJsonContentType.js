function checkJsonContentType(req, res, next) {
  if (!req.is('application/json')) {
    return res.status(415).json({
      error: 'Content-Type deve ser application/json'
    });
  }
  next();
}

module.exports = checkJsonContentType;
