export function firstError(errors) {
  const keys = Object.keys(errors);
  return errors[keys[0]].errors[0].message;
}
