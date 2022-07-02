# Petsagram

## Description:

As a pet owner I want to display my pets to the world and be able to show all my pictures of them. Here comes PETSAGRAM with the ability to show them theres also the need to be able to comment and like them.

As a user I want to be able to comment and like pictures of other users as well.

Sign up and start posting.

Deployed Link:


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Gif Demo](#gif-demo)
* [Code Snippets](#code-snippets)
* [Credits](#credits)
* [Contributors](#contributors)
* [License](#license)

## Installation
The following will be the procedure for installing the application and getting the server run
- Start by cloning the repository (SSH)
```
git clone git@github.com:leeshekchun/Petsagram.git
```
- Next perform a npm install in the terminal
```
npm i
```
- Then, create a dotenv file input the following in to an .env file
```
DB_NAME='petsfeed_db'
DB_USER='your_user'
DB_PASSWORD='your_password'
CLOUDINARY_NAME = 'cloudinary_name'
API_KEY = 'api_key'
API_SECRET = 'api_secret'
```
- Now, seed the database using mysql2
```
mysql -u root -p
mysql password
SOURCE db/schema.sql
```
- Once that is all completed, in the terminal start the server
```
node server.js 
```

## Usage

The following application allows the user to:
- Create user's own account
- Create new post and add caption to the image
- Edit caption 
- Delete post


## Gif Demo

<img src="" width=900px>

## Code Snippets

## Credits

| Technologies used|Front-end|Back-end|
| -|-:| -:|
|![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)|![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)|![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)|
|Cloudinary|![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)|![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)|
|||![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)|
|||![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)|
|||![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)|
|||Handlebars|
|||Dotenv|

| Third Party Libraries|
| ------------- |
| [Boostrap](https://getbootstrap.com/) | 
| [Cloudinary](https://cloudinary.com/)

## Contributors
* Alex Canez [LinkedIn]() | [GitHub]()
* Shek Chun Lee [LinkedIn](https://www.linkedin.com/in/shekchunlee/) | [GitHub](https://github.com/leeshekchun)
* Tess Shearer [LinkedIn]() | [GitHub]()

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Alex Canez, Shek Chun Lee, Tess Shearer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.