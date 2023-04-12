const loginForm = document.getElementById('login-form');
console.log(loginForm);
const createBtn = document.querySelector('.create-btn');
const createPostSection = document.querySelector('.create-post-section');
const overlay = document.querySelector('.overlay');

const shareBtn = document.getElementById('share-post-btn')
const imageInput = document.querySelector('.image-url-input')
const captionInput = document.querySelector('.caption-input')

// createBtn.addEventListener('click', () => {
//   createPostSection.classList.add('active')
//   overlay.classList.add('active')
// })

// overlay.addEventListener('click', () => {
//   createPostSection.classList.remove('active')
//   overlay.classList.remove('active')

//   imageInput.value = ''
//   captionInput.value = ''
// })

// shareBtn.addEventListener('click', () => {
//   fetch('/posts', {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       imageURL: imageInput.value,
//       captionInput: captionInput.value,
//       userId: 1
//     })
//   })
//     .then(res => res.json())
//     .then(data => console.log(data.post));

//   createPostSection.classList.remove('active')
//   overlay.classList.remove('active')

//   imageInput.value = ''
//   captionInput.value = ''
// })

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');

  const data = {
    email: email.value,
    password: password.value,
  };

  fetch('/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
})

fetch("/posts")
  .then((res) => res.json())
  .then((data) => renderPosts(data.data.posts))
  .catch((err) => console.log(err))