import React from 'react';
import styled from 'styled-components';
// const StyledCard = styled.tag(h1,h2...Card) ``;

// bắt đầu code css in js
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 18px;
`;
const CardImg = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  border: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
// kết thúc code css in js
const Card = () => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg //bọc image vào để sau này hình này có thể là 1 link
          src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=768x576&vertical=top'
          alt='image'
        />
      </CardImage>
      <CardContent>
        <div>
          <img
            src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=768x576&vertical=top'
            alt=''
          />
          <span>@Zendrison</span>
        </div>
        <div>256</div>
        <div>
          <h3>Cosmic propective</h3>
          <span>1200 PSL</span>
        </div>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
