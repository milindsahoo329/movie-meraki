# Milind Sahoo Front-end

## Project Name - Movie Meraki
## Group Members - Milind Sahoo

### Links -

Heroku Links -

1. frontend - https://msahoo-final-project-frontend.herokuapp.com/
2. backend - https://movietime-backend-sahoom.herokuapp.com/

GitHub Links -

1. frontend - https://github.ccs.neu.edu/NEU-CS5610-SU22/msahoo-frontend-final
2. backend - https://github.ccs.neu.edu/NEU-CS5610-SU22/msahoo-backend-final


### Project Requirements Fulfilled -

1) User interface with data by at least 2 CRUD operations (create, read, update, delete) for at least one database table
  1. Number of database tables - 2
  ![MongoDB](https://media.github.ccs.neu.edu/user/10199/files/9296ad74-86e1-4877-9304-248374d5902f)
  3. CRUD operations -
    a. create playlist
    b. add movie to playlist (update playlist)
    c. delete movie from playlist
    d. read list of movies
    e. read list of top playlists
    f. read list of user playlists
    g. read list of movies in a playlist
    
   ![8 backend apis](https://media.github.ccs.neu.edu/user/10199/files/865de587-1515-4daa-993c-31db4345c058)

2) At least 3 different UI routes (appearing to the user as different pages)
  1. /contents
    ![1 Landing Page](https://media.github.ccs.neu.edu/user/10199/files/66f0dcd6-142f-4cfc-aafe-0772f85be56a)
  2. /top-playlists
    ![2 Top Playlists](https://media.github.ccs.neu.edu/user/10199/files/54c947a9-ae66-4df9-bd23-8b75d65cfb09)
  3. /playlists
    ![4 Create Playlist](https://media.github.ccs.neu.edu/user/10199/files/3e05fa47-0826-46e7-aac3-2f8719bbb644)
  4. /mylist/:id
    ![7 List of contents in playlist](https://media.github.ccs.neu.edu/user/10199/files/71df6a00-71c6-4918-8a33-f43a580f0d54)

3) At least one Bootstrap UI component not featured in the demo application

  Used import { BsRainbow } from 'react-icons/bs'; It is on the navbar on left side of the text MOVIE MERAKI.
  I have not made heavy use of react-bootstrap library as I am using Material UI for my UI - https://mui.com/material-ui/react-list/
  
  ![9 react component](https://media.github.ccs.neu.edu/user/10199/files/93bdb2b0-ea44-40ad-b91f-fee1dacc0639)

4) Different layout and design from the demo application; it should not look like an obvious clone
  I have not used react cards or list components as featured in the demo application. I am making use of the Material UI components.
  
  ![3 On Login](https://media.github.ccs.neu.edu/user/10199/files/3834034c-9313-4150-83c5-30708106b1a5)
  ![5 Create new playlist](https://media.github.ccs.neu.edu/user/10199/files/5cc4907c-0a5d-4f57-9d82-f20b9cb3d9e0) 
  ![6 Add To Playlist](https://media.github.ccs.neu.edu/user/10199/files/08be56a4-5b7c-4c24-8aca-7cf39ec1fd4c)


5) At least one of the following:
3rd party library for React (not including React DnD, unless its use is completely different from the use in the demo project)
GraphQL interface to the database
Significant use of Redux for all state handling (instead of useState)

  1. Used Material UI throughout the application for UI components such as cards, buttons, icons, lists, dialogs (popup boxes)
  2. Used Redux in combination with Redux thunk to handle state. Only Login component does not use redux.
     Also material ui dialogs use states as refreshing the entire redux store is not a good approach for popup components.
     
  ![package json](https://media.github.ccs.neu.edu/user/10199/files/1435d51c-3800-447b-92e8-7925c6e7efb7)


### Basic Functionalities in the App -
1) View list of movies
2) Create a playlists
3) Add movie to playlists
4) delete movie from playlists
5) view top playlists
6) login logout


## Workflow of the Web Application
1) The app displays a list of movies / tv shows on the landing page
2) You can also see Top Playlists on the navbar
3) The playlist can be viewed by clicking on view playlist
4) You have to login to see other features
5) Once you login, you can see Add to Playlist on the Movie cards.
6) On clicking on Add to playlist, it will show you options to add to.
7) You must create your own playlist. To do so, go to My Playlists and click on Create new playlist button
8) Once playlist is created, add movies on it using the landing page. 
9) You can verify it by going to the my playlist tab again and click on view playlist.
10) you can delete movies from your playlist by clicking on the button.

### Iteration 3
1. Add react bootstrap library icons
2. Integrate all the APIs with axios
3. Set up redux dispatch to reload on events
4. Add onlick events for the APIs

## Iteration 2
1. Set up playlists page, contents page
2. Set up Redux
3. Set up Redux Thunk to manage state
4. Integrate Material UI Lists and Icons

## Iteration 1
1. Set up basic react app
2. set up google auth and basic navbar
3. Integrate Material UI cards



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
