# [Github search](https://pkminor.github.io/githubsearch/)

Author [Patrick Maina](https://github.com/pkminor)

## Brief Description

Githubsearch is a web application where users can search github users and view their github profile information as well as a list of their repositories.

## User Requirements

The application allows users to do the Following;

- View a default profile on the landing page.
- Enter a github username
- Select search type, either 'user' or 'user repositories'.
- Click the search button to search github by the parameters specified.

## How it works

The application is made with angular 8 and typescript.
It is composed of two model classes: user and repository.
Each user object has a repository property that holds a list of their repositories.
The applicvation has five components [4children and 1 parent].
The application users routing where the router module maps paths to components.

- githubsearch component : parent component
- githubsearch-bar component : defines the applications top bar that displays the application name at the top left. This stays fixed even while the user scrolls past it.

- githubsearch-form : this defines a form where the user can type a search name, select search type and invoke the search action


## Specifications

- User navigating to the applications url
   - The landing page shows a default user profile and a listing of that users' github repositories.

- User searching a name
   - Example input : search type, search username
   - Example output: if search type is 'user' it shows the user profile, if search type is 'user repositories' it shows a listing of the users gihub repositories with a title and a link to the repository

## Installation

## Cloning into master

- Make sure you have all the Requirements or running angular apps installed such as node,npm, tsc and watchman.
- Clone the project into your machine from [https://github.com/pkminor/githubsearch.git](https://github.com/pkminor/githubsearch.git)
- Run ng serve for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## Using the dist directory

- Clone the project into your machine from [https://github.com/pkminor/githubsearch.git](https://github.com/pkminor/githubsearch.git)
- Move into the dist directory and open index.html from your browser, make sure you have internet connection for fast loading of scripts and assets from the online github repository.

## Live demo

To view the page click the link below
- [https://pkminor.github.io/githubsearch/](https://pkminor.github.io/githubsearch/)

## Technology used

- Angular 8
- HTML css
- Typescript

## Known bugs

There are no known bugs. Please submit those you find for correction.

## Contributing

Pull requests are encouraged.

## Licence
This project is licensed under the MIT Open Source license.
