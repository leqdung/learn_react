import './App.css';
// Viết css cho các thành phần trong component
// Viết trực tiếp vào function component hoặc viết vào file riêng App.css
// =========
// App() là  parent component: trong quan hệ cha con liên quan đến props
function App() {
  return (
    <div className='youtube-list'>
      <YoutubeItem
        image='https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        avatar='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
        title='Title awesome'
        author='leQdung'
      />
      <YoutubeItem
        image='https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        avatar='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
        title='Title awesome'
        author='leQdung'
      />
      <YoutubeItem
        image='https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        avatar='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
        title='Title awesome'
        author='leQdung'
      />
      <YoutubeItem
        image='https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        avatar='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
        title='Title awesome'
        author='leQdung'
      />
    </div>
  );
}

// minh họa props : dung youtube item component
// mục đích của props : là để thay đổi ảnh bìa, tên người, title,avatar ==> props sinh ra để được truyền vào chỗ cần thay đổi trong component
// {data}:  tat cả các dữ liệu đều được lưu trong dấu
function YoutubeItem(props) {
  console.log(props);
  return (
    <div className='youtube__item'>
      <div className='youtube__image'>
        <img src={props.image} alt='youtube image' />
      </div>
      <div className='youtube__footer'>
        <img src={props.avatar} alt='' className='youtube__avata' />
        <div className='youtube__infor'>
          <h3 className='youtube__title'>
            {/* Tạo trường hợp nếu trường không có dữ liệu sẽ hiện ra thông báo */}
            {props.title || 'This is exembail title'}
          </h3>
          <h4 className='youtube__author'>
            {/* Tạo trường hợp nếu truong không có dữ liệu sẽ hiện ra thông báo */}
            {props.author || 'not found the author'}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default App;
