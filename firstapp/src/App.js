import './App.css';

// import dũ liệu
import { YoutubeData } from './YoutubeData';

function App() {
  // Cách xử lý dữ liệu được trả về ? dùng Map để xử lý
  // có thể dùng Map ngay trong function
  // const numbers = [1, 2, 3, 4, 6, 9];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  // console.log(YoutubeData);
  return (
    <div className='youtube-list'>
      {YoutubeData.map((item, index) => (
        // Kiem tra sự hoạt động của map. chú ý  Cần sử dụng key
        // <div key={item.id}>Hello {index + 1}</div>
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
        />
      ))}
    </div>
  );
}

function YoutubeItem(props) {
  // console.log(props);
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
