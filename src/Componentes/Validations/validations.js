const Validation = ({
  title,
  image,
  summary,
  healthScore,
  analyzedInstructions,
  diets,
  dieta
}) => {
  const errors = {};

  if (title.length < 1) errors.title = "The Recipe name is incorrect";
  if (image.length < 1) errors.image = "Please add a URL";
  if (summary.length < 1)
    errors.summary =
      "Please write a brief summary of the recipe you want to add";
  if (healthScore > 100 || healthScore < 0)
    errors.healthScore =
      "Add the healthy score that you consider. It must be between 0 and 100.";
  if (analyzedInstructions.length < 1)
    errors.analyzedInstructions = "Write the instructions in order";
  if (dieta.length < 1) errors.dieta = "Type of Diet";
  return errors;
};

export default Validation;
