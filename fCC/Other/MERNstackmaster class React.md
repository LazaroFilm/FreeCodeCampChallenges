```
npx create-react-app .
```

`npx` get it online

`.` means the folder itself

`..` means the parent folder

www.gitignore.io

`git add -A`

`git status`

`git commit -m nameOfCommit` (what is the -m???)

`git push origin master`

don't commit Node Module (it can get really big)

OhMyZSH

`npm run build` transpiles React in to server ready code.

`npm start` or `npm run start` live preview of the app. 

`App.test.js` runs through a linter and return errors into console. 

Functional components = stateless components

Class components = stateful compononents (has `this.state={...}`)

You want more stateless components by default (simple functions) 

the Class components are more complex and bulkier but more powerful

If you create a folder for a component you can manage it independently while keeping source folder clean. name your file `index.js`, like that when you inport it into your root `index.js` (your website home) you only need to `import Header form './newFolder'` instead of pointing to the `.js` file. If you import a single file, you don't need to write the `.js` at the end.

***

- import React at the top of your document every time `import React form 'react';`
- your myFunction
- `export default myFunction`

***

You can use JSX fragments instead of `<div></div>` to wrap your site: 

```jsx
<>
	<h1>hello</h1>
</>
```

You can also return an `array [ ]` of elements too instead.  

***

fetch to get some info from a JSON server.

```jsx
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json()))
.then((data) => {
	this.setState({
	comments: data
	})
})
.catch((err) => console.log(err))
```

***

`arr.map(item, index)` there's an optional second attribute.

always have a key set to an individual id so react know if things have changed it can tell which one changed so it doesn't have to updated everything. 

***

you use `componentDidMount()` when you wan to load the page and then as soon as it's loaded it loads that element. 

***

## React Router

Conditional rendering

what the URL reads dictates what to render. 

`npm install react-router-dom` to build for the web

www.reactrouter.com

```jsx
import { BrowserRouter as Router, Link, Route, Switch} form 'react-router-dom'
```

Wrap the entire app in `<Router></Router>`

```JSX
<Router>
	<nav>
		<Link to="/header">Header</Link>
		<Link to="/main">Header</Link>
    <Link to="/footer">Header</Link>
	</nav>
	<Switch>
		<Route exact path="/header" component={Header}/>
    <Route exact path="/main" component={Main}/>
    <Route exact path="/footer" component={Footer}/>
    <Route path="*" component=render={() => {return(<h1>401 error!</h1>)}/>
	</Switch>
</Router>
```

## deploy to a server

In GitHub look for instructions on GitHub for auto deployment.

Or do it manually In the React Readme look for GitHub and follow the instructions there. 

React gets transpiled into basic HTML CSS and JS

## mongoDB

https://robomongo.org/ allows you to visualize it. 

just the the 3T on the right of the page, not the studio

`CRUD`

> Create / Read / Update / Delete 

the 4 actions a user can do on a server. 

- Express

HTTP verbs
GET => a read operation
Post => create 

***

## forms

```jsx
this.setState() {
[e.target.name]: e.target.value
}
```

With this ^ you can capture the input of any `<input name=nameOfInput> ` and update it in `this.state` with the `nameOfInput` 

***

similar to fetch: `npm axios` look into this. 

Fun fun function on www.youtube.com

