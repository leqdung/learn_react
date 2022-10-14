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
//App là  parent component: trong quan hệ cha con liên quan đến props
function App() {
  return (
    <div>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        avatar="https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Title awesom"
        author="LeQDung"
      />
    </div>
  );
}

//minh họa props bằng youtube item component
// mục đích của props là để thay đổi ảnh bìa, tên người, title,avatar ==> props sinh ra để được truyền vào chỗ cần thay đổi trong component
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube__item">
      <div className="youtube__image">
        <img src={props.image} alt="youtube image" />
      </div>
      <div className="youtube__footer">
        <img src={props.avatar} alt="" className="youtube__avata" />
        <div className="youtube__infor">
          <h3 className="youtube__title">{props.title}</h3>
          <h4 className="youtube__author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
}
export default App;
