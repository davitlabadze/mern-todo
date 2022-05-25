
## `Table of Contents`

* [ About The App](#about)
* [ Prerequisites](#pre)
* [ Dependencies](#dependencies)
* [ Install and Run](#iar)

<a name="about"></a>

## `About the application`
To Do is a task management app that helps you stay organized and manage your daily routine. Take notes, record collections, plan an event or set reminders to increase your productivity and focus on what is important to you.

## `App looks like`
!['alt'](readme/screen.png)

<a name="pre"></a>

## `Prerequisites`

### <a href="https://nodejs.org/en/" target="_blank"><img style="float:left; margin-right:10px" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> v16.13.0 and up
</a> 

### <a href="https://www.mongodb.com/" target="_blank"><img style="float:left; margin-right:10px" src="https://img.shields.io/badge/mongodb-339933?style=for-the-badge&logo=mongodb&logoColor=white"/> db version v3.6.8 </a> 


<a name="dependencies"></a>

## `Dependencies`

| name  | version |
| ------------- | ------------- |
| cors  | ^2.8.5  |
| dotenv  | ^16.0.1  |
| express | ^4.18.1 |
| mongoose | ^6.3.3 |
| nodemon | ^2.0.16 |
| @heroicons/react| ^1.0.6 |
| tailwindcss| ^3.0.24 |


<a name="iar"></a>

## `Install and Run`

Download [ZIP](https://github.com/davitlabadze/mern-todo/archive/refs/heads/master.zip) or Clone repository

```bash
git clone https://github.com/davitlabadze/mern-todo.git
```
### `Setup Backend`

Enter the backend directory Use this command `cd backend`

#### `Copy .env file`
```bash
cp .env.example .env
```

#### `Install Node modules`

```bash
npm install
```

#### `Run server`

```bash
npm start
```

### `Setup Frontend`

Go to the frontend directory Use this command `cd ../frontend`

#### `Copy .env file`
```bash
cp .env.example .env
```

#### `Install Node modules`

```bash
npm install
```

#### `Run server`

```bash
npm start
```


