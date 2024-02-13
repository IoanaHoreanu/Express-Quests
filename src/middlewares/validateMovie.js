const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const errors = [];
  
    if (title == null) {
      errors.push({ field: "title", message: "The field 'title' is required" });
    } else if (title.length >= 255) {
      errors.push({ field: "title", message: "Should contain less than 255 characters" });
    }
    if (director == null) {
      errors.push({ field: "director", message: "The field 'director' is required" });
    }
    if (year == null) {
      errors.push({ field: "year", message: "The field 'year' is required" });
    }
    if (color == null) {
      errors.push({ field: "color", message: "The field 'color' is required" });
    }
    if (duration == null) {
      errors.push({ field: "duration", message: "The field 'duration' is required" });
    }
  
    if (errors.length) {
      res.status(422).json({ validationErrors: errors });
    } else {
      next();
    }
  };
  
  module.exports = validateMovie;