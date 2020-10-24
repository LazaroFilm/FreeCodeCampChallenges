# JSON API and Ajax

**JSON** = **J**ava**S**cript **O**bject **N**otation

**API** = **A**pplication **P**rogramming **I**nterface

**Ajax** = **A**synchronous **J**ava**S**cript **A**nd **X**ML\

____

Wait for your DOM to be loaded before doing this function:

```js
document.addEventListener('DOMContentLoaded', function(){};
```

`JSON.parse` transforms the string recieved into a JSON object. 

## Requesting external data

### Using XMLHttpRequest

`XMLHttpRequest()` 's properties are:

```js
.open("GET", "/url/goes/here.json", true) // initializes the request (type of request, url, is it asynchronous ?)
.send();
.onload = function(){
	const json = JSON.parse(req.responseText)};
	document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
```

### Using fetch()

This is easier.

```js
fetch("/url/goes/here.json")
	.then(response => response.json())
	.then(data => {
  	document.getElementById('message').innerHTML - JSON.stringify(data);
})
```

## JSON

a JSON file is an `[array]` containing `{objects}` that hold` "key" : "value"` with key attributes and value string or array or whatever you want.

### Get geolocation

```js
navigator.geolocation.getCurrentPosition(function(position) {});
```

## Post data with XHR

```js
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);
```