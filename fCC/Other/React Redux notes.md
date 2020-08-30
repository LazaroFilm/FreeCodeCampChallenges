# React Redux

Two key features:

1. `Provider`
2. `connect`

## Provider

```jsx
<Provider strore={store}>
  <App/>
</Provider>
```

 wrapper component around the React App.

```jsx
class AppWrapper extends React.Component {
  render() {
    return(
      <Provider strore={store}>
        <App/>
      </Provider>
    )
  };
}
```

`Provider` handles `state` and `dispatch` as follows: 

```jsx
const mapStateToProps = (state) => {
  return {
    messages: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message))
    }
  }
}
```

## Connect Redux to React

```jsx
const Connected = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
```

If you don't need one fo the components, replace it with `null`.

