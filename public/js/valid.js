const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const logBtn = document.getElementById('log-btn');
const error_meesages = document.querySelector('.error_meesage');


class ValidationError extends Error {
  constructor(message, fieldName) {
    super(message);
    this.fieldName = fieldName;
  }
}

const loginSchema = joi.object({
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

logBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email_text = email.value;
  const password_text = password.value;
  const { error } = loginSchema.validate({
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
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email_text,
        password: password_text,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if(data.message === "login sccusseful"){
          window.location.href = "/"
        }
      })
      .catch((error) => {
        console.log("error!!!", error);
      });
  }
});