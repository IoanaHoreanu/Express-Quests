const validateUser = (req, res, next) => {
    const { firstname, lastname, email, city, language } = req.body;
    const errors = [];
  
    const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;
  
    if (firstname == null) {
      errors.push({ field: "firstname", message: "The field 'firstname' is required" });
    }
    if (lastname == null) {
      errors.push({ field: "lastname", message: "The field 'lastname' is required" });
    }
    if (email == null) {
      errors.push({ field: "email", message: "The field 'email' is required" });
    } else if (!emailRegex.test(email)) {
      errors.push({ field: 'email', message: 'Invalid email' });
    }
    if (city == null) {
      errors.push({ field: "city", message: "The field 'city' is required" });
    }
    if (language == null) {
      errors.push({ field: "language", message: "The field 'language' is required" });
    }
  
    if (errors.length) {
      res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  };
  
  module.exports = validateUser;