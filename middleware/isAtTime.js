const isAtTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hours = date.getHours();
  if (hours >= 9 && hours <= 17 && day >= 1 && day <= 5) {
    return next();
  }
  return res
    .status(400)
    .send(
      "<h2 style=`background-color:white;color:red;text-align:center;margin:5%;`>You are not authorized rightnow!</h2>"
    );
};
module.exports = isAtTime;
