const postsContainer = document.querySelector('.posts-container');
const renderPosts = (posts) => {
    console.log(posts, 'posts');

    const postTitle = document.createElement('div');
    postTitle.classList.add('back');
    postsContainer.append(postTitle);

    for (let i = 0; i < posts.length; i++) {

        const postGrid = document.createElement('div');
        postGrid.classList.add('post-grid');

        const postGif = document.createElement('div');
        postGif.classList.add('postgif');

        const posterImg = document.createElement('img');
        posterImg.setAttribute('src', posts[i].profile_img);
        postGif.appendChild(posterImg);
        postGrid.append(postGif);

        const posterName = document.createElement('div');
        posterName.classList.add('post-name')
        posterName.textContent = posts[i].username;
        postGrid.append(posterName);

        const photo = document.createElement('div');
        photo.className = 'photo';
        const postImg = document.createElement('img');
        postImg.setAttribute('src', posts[i].post_image);
        photo.appendChild(postImg);
        postGrid.appendChild(photo);

        const heartDiv = document.createElement('div');
        heartDiv.classList.add('heart');

        const heartIcon = document.createElement('i');
        heartIcon.classList.add('ri-heart-line');
        heartDiv.appendChild(heartIcon);
        postGrid.appendChild(heartDiv);

        const chatDiv = document.createElement('div');
        chatDiv.classList.add('chat');

        const chatIcon = document.createElement('i');
        chatIcon.classList.add('ri-chat-1-line')
        chatDiv.appendChild(chatIcon);
        postGrid.appendChild(chatDiv);

        const sendDiv = document.createElement('div');
        sendDiv.classList.add('send');

        const sendIcon = document.createElement('i');
        sendIcon.classList.add('ri-send-plane-line');
        sendDiv.appendChild(sendIcon);
        postGrid.appendChild(sendDiv);

        const bookmarkDiv = document.createElement('div');
        bookmarkDiv.classList.add('bookmark');

        const bookmarkIcon = document.createElement('i');
        bookmarkIcon.classList.add('ri-bookmark-line');
        bookmarkDiv.appendChild(bookmarkIcon);
        postGrid.appendChild(bookmarkDiv);

        const postText = document.createElement('div');
        postText.classList.add('post-text')

        const captionName = document.createElement('b');
        captionName.textContent = posts[i].username;
        postText.append(captionName);

        const caption = document.createElement('span');
        caption.textContent = posts[i].caption;
        postText.append(caption)
        postGrid.append(postText);

        postsContainer.append(postGrid);






    }


}