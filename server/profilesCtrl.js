exports.getProfiles = (req, res, next) => {
  req.app.get('db').getProfiles().then(function (profiles) {
    res.status(200).send(profiles);
  }).catch(err => console.log(err))
}