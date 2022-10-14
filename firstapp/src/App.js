import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1542719089-75ed3c483a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="image"
          className="post__image"
        />
        <h3 className="post__title">This is awesome title </h3>
        <p className="post__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          earum maiores. Ex libero molestiae possimus temporibus eligendi
          dolorum sint. Fuga corrupti delectus sed beatae aspernatur blanditiis
          quidem, odio laudantium perferendis.
        </p>
      </div>
    );
  }
}

export default App;
