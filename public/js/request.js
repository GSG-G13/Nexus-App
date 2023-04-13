const loginForm = document.getElementById('login-form');
const createBtn = document.querySelector('.create-btn');
const createPostSection = document.querySelector('.create-post-section');
const overlay = document.querySelector('.overlay');

const shareBtn = document.getElementById('share-post-btn')
const imageInput = document.querySelector('.image-url-input')
const captionInput = document.querySelector('.caption-input')

if(createBtn) {
  createBtn.addEventListener('click', () => {
    createPostSection.classList.add('active')
    overlay.classList.add('active')
  })

}

if(overlay){

  overlay.addEventListener('click', () => {
    createPostSection.classList.remove('active')
    overlay.classList.remove('active')
    
    imageInput.value = ''
    captionInput.value = ''
  })
}


if(shareBtn) {

  shareBtn.addEventListener('click', () => {
    fetch('/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        imageURL: imageInput.value,
        captionInput: captionInput.value,
        userId: 1
      })
    })
    .then(res => res.json())
    .then(data => console.log(data.post));
    
    createPostSection.classList.remove('active')
    overlay.classList.remove('active')
    
    imageInput.value = ''
    captionInput.value = ''
  })
  
}

if(loginForm) {

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
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    () => {
      fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        return  window.location.href = '/';
      
      })
      .catch((err) => console.log(err))
  
  
    }
  ).catch(error => console.log({error}))
})

}