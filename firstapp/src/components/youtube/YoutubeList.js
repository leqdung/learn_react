import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';

const YoutubeList = () => {
  return (
    <div className='youtube-list'>
      {YoutubeData.map((item, index) => {
        let newClass = '';
        if (index === 1) newClass = 'abc';
        // const newClass = index === 1 ? 'abc' : ''; đây là viết tắt xử lý newClass
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            //xử lý trường hợp nếu truong dữ lieu bị null
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
