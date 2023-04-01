export function validation(userData, errors, setError) {
  const regEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const psswdRegEx = /^(?=.*\d).{6,10}$/;

  if (userData.email.length > 35) {
    setError({ ...errors, email: "Cannot be longer than 35 characters" });
  } else if (!regEx.test(userData.email)) {
    setError({
      ...errors,
      email: "Must be in email format ('you@something.com')",
    });
  } else if (userData.email.length < 1) {
    setError({ ...errors, email: "Cannot be empty" });
  } else if (!psswdRegEx.test(userData.password)) {
    setError({
      password: "Password must include a number and have 6 to 10 characters",
    });
  } else setError({});
}
