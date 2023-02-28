# contacts list

Live Version: [https://contacts-list-iota.vercel.app/](https://contacts-list-iota.vercel.app/)
<br/>
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

In the project directory, you can run:
</br>
running with react-scripts
### `yarn start`

</br>
running with webpack
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)(react-scripts) [http://localhost:8080](http://localhost:8080)(webpack) to view it in the browser.

## How to run Tests

### `yarn test`

`yarn test` will execute the test cases (files with \*.test.tsx extension)

## Folder structure

`api` contains files to configure and a service file to use of apis. </br></br>
`components` contains small components to make the code reusable and easy to use, integrate, and understand.</br> component files has \*.component.tsx name format.</br></br>
all of components having their ows prop types' interfaces inside of the components file. </br>
any of components which needs more logical (not ui and JSX) code or has been built with smaller components, has its own directory with hook which is containing non-ui codes.</br> the `ComponentName.module.scss` file contains css modules related to the components.</br></br>
`dataTypes` directory contains global data types of different parts of the application. e.g. api response's data types.</br></br>
`screens` contains folders with name of the screens in the application and their own hooks to handle the functionality. also contains css modules related to the screen.</br>
`redux` contains redux configuration and functions, like: store, reducers, slices, etc.</br>
`sharedStyles` contains commonly used css values (in this case colors) to reduce repetition and issues and easyli importing them in scss files.</br>

## Additional notes and comments regarding of different choices

1. redux-toolkit: I think using redux toolkit helps to have a less and readable code which makes it easier to understand the code. also redux-toolkit with having different features and predefined functionalities (e.g. CRUD functions) helps to make the coding faster and having high quality code.

2. using `rem` instead of `px`: by using rem you will have adaptive size to the scale of the system. e.g. fonts using px wont re-scale if you change font size of the system. If you use rem or em their size will change which adds accessability for different group of users.
3. dynamic sizing instead of static sizing (e.g. sizing with view port, percentage, etc): by this choice you will a application which is responsive to different screen sizes, because it will automatically changes the size of the elements based on the size of the screen.
4. added github action: this action will automatically checks for eslint and prettier issues and if there was a problem will let the developer know about it. This action prevents merging of dirty code to the code base.
4. WebPack: have configured the webpack for build processes.
5. SCSS: using SASS to have a better css code on UI part of app.
6. Moving out logics to hooks: makes components cleaner and they will have less amount of code which makes them easier to understand, integrate, and debug.