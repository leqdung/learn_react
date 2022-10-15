import React from 'react';

const YoutubeItem = (props) => {
  return (
    <div className={`youtube__item ${props.className}`}>
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
};

export default YoutubeItem;
