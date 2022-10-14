import "./App.css";
// viết 1 component đơn giản nhất là Feature() rồi đưa nó ra index

function Feature() {
  return (
    <div>
      <div className="post">
        <img
          src="https://images.unsplash.com/photo-1519929125787-88a2485dc4f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="post imagaa"
          className="post__image"
        />
        <div className="post__content">
          <h3 className="post__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          </h3>
          <p className="post__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            reiciendis magnam nemo nesciunt, repellat asperiores qui vel cumque
            dolore suscipit fugiat rerum ipsa ut fugit aut vitae iure tempora
            enim!
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Feature /> {/**gọi 1 component ra  */}
      <Feature /> {/**gọi 1 component ra  */}
      <Feature /> {/**gọi 1 component ra  */}
    </div>
  );
}

export default App;
