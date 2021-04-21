![Badge](https://img.shields.io/badge/--COOL-yellow.svg)

# Thoughts-Reactions

* [Link to GitHub](https://github.com/nchow18)
* [Email]:(mailto:emailme@nathanchow.ca)
* [Link to HEROKU](https://thoughts-reactions.herokuapp.com)

## Summary

This is a tutorial on how to use thoughts-reactions APP.  The app was created for users to created thoughts, and also apply reactions to each other.  Each user is able to have a friends list, where each friend can be added and removed.

## Table of Contents

- [Installation](#installation)
- [Adding Users](#adding-users)
- [Display Users](#display-users)
- [Removing Users](#removing-users)
- [Adding Thoughts](#adding-thoughts)
- [Adding Reactions](#adding-reactions)
- [Removing Reaction](#removing-reaction)
- [Removing Thought](#removing-thought)
- [Adding Friend](#adding-friend)
- [Removing Friend](#removing-friend)

## Installation

To begin, in your `cmd` line, enter the following into your desired local machine folder:

```git clone git@github.com:nchow18/thoughts-reactions.git```

After git files have been cloned to your folder, in `cmd` line enter the following to install all required dependencies:

`npm i`

Once installed, you will require Mongoose:

`npm install mongoose`

To start your server, in your `cmd` line:

`npm start`

Visit Insomnia Core to begin `GET, POST, PUT, DELETE` requests with `http://localhost:3001/`

* [VIDEO for INSTALLATION](https://youtu.be/ru26_uo6rAA)

## Adding users

Insomnia Core: `http://localhost:3001/api/users`

Method: `POST`

```
JSON
{
    "userName": "FirstTestUser",
    "email": "TestingUSER@gmail.com"
}
```

* [VIDEO to ADDING Users](https://youtu.be/ru26_uo6rAA?t=46)

## Display users

Insomnia Core: `http://localhost:3001/api/users/`

Method: `GET`

* [VIDEO to DISPLAYING Users](https://youtu.be/ru26_uo6rAA?t=85)

## Removing users

Insomnia Core: `http://localhost:3001/api/users/:id`

Method: `DELETE`

* [VIDEO to REMOVING Users](https://youtu.be/ru26_uo6rAA?t=116)

## Adding Thoughts

Insomnia Core: `http://localhost:3001/api/thoughts/:userId/`

Method: `POST`

```
JSON
{
	"thoughtBy": "First Thought Today",
	"thoughtBody": "WOW this is awesome!!"
}
```

* [VIDEO to ADDING thoughts](https://youtu.be/ru26_uo6rAA?t=171)

## Adding Reactions

Insomnia Core: `http://localhost:3001/api/thoughts/:userId/:thoughtId`

Method: `PUT`

```
JSON
{
	"reactionBody": "This is the first REACTION!!!!!",
	"reactionBy": "David"
}
```

* [VIDEO to ADDING reactions](https://youtu.be/ru26_uo6rAA?t=244)

## Removing Reactions

Insomnia Core: `http://localhost:3001/api/thoughts/:userId/:thoughtId/:reactionId`

Method: `DELETE`

* [VIDEO to DELETING reaction](https://youtu.be/ru26_uo6rAA?t=361)

## Removing Thought

Insomnia Core: `http://localhost:3001/api/thoughts/:userId/:/thoughtId`

Method: `DELETE`

* [VIDEO to DELETING thoughts](https://youtu.be/ru26_uo6rAA?t=440)

## Adding Friend

Insomnia Core: `http://localhost:3001/api/friends`

Method: `POST`

```
JSON
{
    "friendName": "First Friend!"
}
```

* [VIDEO to ADDING friends](https://youtu.be/ru26_uo6rAA?t=500)

## Removing Friend

Insomnia Core: `http://localhost:3001/api/friends/:friendId`

Method: `DELETE`

* [VIDEO to DELETING friend](https://youtu.be/ru26_uo6rAA?t=539)