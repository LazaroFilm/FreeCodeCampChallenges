# Redux Notes

Redux is a state management framework.

Can be used with React

## Redux store

```js
const store = Redux.createStore(counterReducer);
```

`store.getState()`

`store.dispatch()`

## reducer

A `reducer` takes `state` and `action` as arguments

```js
cosnt reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN:
      return newState;
    case LOGOUT:
      return differentState;
    default:
      return state;
  }
}
```

`state` is read-only, returns a copy of it, not the original one. (not enforced, so you need to pay attention to it)

That's why you can't use `return state++` as it would modify the original state. Instead use `return state +1`.

In the `reducer` we check the given `action` and return a new `state` or return the original one if nothing has changed. 

### combineReducers

when you have multiple `reducer` you can use `combineReducers()` to gather them in the `store`.

```js
const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
})
```

## Redux Thunk middleware

add this in your Redux store.

```js
Redux.applyMiddleware(ReduxThunk.default);
```

```js
dispatch(requestingData());
dispatch(receivedData(data));
```

## Action type

```js
const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

---

# Redux example

```js
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0 , action) => {
  switch(action.type) {
    case INCREMENT: 
      return state+1;
    case DECREMENT:
      return state-1;
    default:
      return state;
  }
}

const incAction = (message) => {
  return {
    	type: INCREMENT,
    	message
  	};
}

const decAction = () => {
  return {type: DECREMENT};
}

const store = Redux.createStore(counterReducer);
```

