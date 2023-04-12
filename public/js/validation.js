const test = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email_error = document.querySelector("#email_error");
const username_error = document.querySelector("#username_error");
const password_error = document.querySelector("#password_error");
const error_meesages = document.querySelectorAll(".error_meesage");

// to get the field name  and show error in it
class ValidationError extends Error {
  constructor(message, fieldName) {
    super(message);
    this.fieldName = fieldName;
  }
}
const signupSchema = joi.object({
  username: joi
    .string()
    .alphanum()
    .required()
    .error(() => new ValidationError("Username is required ! ", "username")),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required()
    .error(
      () =>
        new ValidationError(
          "Use a working email address, so you can receive our messages!",
          "email"
        )
    ),
  password: joi
    .string()
    .min(5)
    .max(30)
    .required()
    .error(
      () =>
        new ValidationError(
          "Your password is too easy to guess: you can improve it by adding additional uppercase letters, lowercase letters, or numbers.",
          "password"
        )
    ),
});

test.addEventListener("submit", (e) => {
  e.preventDefault();
  const email_text = email.value;
  const username_text = username.value;
  const password_text = password.value;

  const { error } = signupSchema.validate({
    username: username_text,
    email: email_text,
    password: password_text,
  });

  if (error) {
    if (error.fieldName === "email") {
      email_error.classList.remove("error_meesage_hidden");
      email_error.textContent = error.message;
    } else if (error.fieldName === "password") {
      password_error.classList.remove("error_meesage_hidden");
      password_error.textContent = error.message;
    }
  } else {
    error_meesages.forEach((item) => {
      item.classList.add("error_meesage_hidden");
    });
    // send the data to the backend
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username_text,
        email: email_text,
        password: password_text,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if(data.message === "signup sccusseful"){
          window.location.href = "/login"
        }
      })
      .catch((error) => {
        console.log("error!!!", error);
      });
  }
});
