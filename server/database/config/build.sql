BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE
    users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(250) NOT NULL,
        profile_img TEXT,
        password TEXT NOT NULL,
        email TEXT
    );

CREATE TABLE
    posts(
        id SERIAL PRIMARY KEY,
        post_image TEXT NOT NULL,
        caption TEXT,
        likes INTEGER DEFAULT 0,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    users(
        username,
        profile_img,
        password,
        email
    )
VALUES (
        'Amal-Mousa',
        'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
        '123',
        'user@gmail.com'
    ), (
        'Heleena',
        'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
        '456',
        'user1@gmail.com'
    ), (
        'Ahmed',
        'https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg',
        '789',
        'user2@gmail.com'
    ), (
        'Mohammed',
        'https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg',
        '111',
        'user3@gmail.com'
    );

INSERT INTO
    posts(post_image, caption, user_id)
VALUES (
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e03d1100592439.5f0c715cd41f7.jpg',
        'info here lets see how far it goes Im sure this is enough for a bio info here lets see how far it goes Im sure this is enough  for a bioinfo here lets see how far it goes Im sure this is enough for a bio',
        1
    ), (
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e03d1100592439.5f0c715cd41f7.jpg',
        'info here lets see how far it goes Im sure this is enough for a bio info here lets see how far it goes Im sure this is enough  for a bioinfo here lets see how far it goes Im sure this is enough for a bio',
        2
    ), (
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e03d1100592439.5f0c715cd41f7.jpg',
        'special Delicious coffe, order now',
        3
    ), (
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e03d1100592439.5f0c715cd41f7.jpg',
        'special Delicious coffe, order now',
        1
    ), (
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e03d1100592439.5f0c715cd41f7.jpg',
        'special Delicious coffe, order now',
        4
    );

COMMIT;

-- C:/Users/Amal/Desktop/G13/month2/week6/Nexus-App/server/database/config/build.sql

-- postgres://nex:123456@localhost:5432/nexuus2