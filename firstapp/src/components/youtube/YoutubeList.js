import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';

const YoutubeList = (props) => {
  return (
    <div className='youtube-list'>
      {/* dung props.children : muốn truyền thêm props children vào component */}
      {props.children};
      {YoutubeData.map((item, index) => {
        let newClass = '';
        if (index === 1) newClass = 'abc';
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title}
            author={item.author}
            className={newClass}
          />
        );
      })}
    </div>
  );
};

export default YoutubeList;
