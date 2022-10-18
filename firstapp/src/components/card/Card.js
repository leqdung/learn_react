import React from 'react';
import styled from 'styled-components';
// const StyledCard = styled.tag(h1,h2...Card) ``;

// bắt đầu code css in js
const StyledCard = styled.div`
  position: relative;
  width: 400px;
  /* margin: 30px; */
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
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 36px);
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const CardAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CardAmount = styled.span`
  font-size: 18px;
  /* font-weight: 600; */
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64%,
    #fc2872 119%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
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
        <CardTop>
          <CardUser>
            <CardAvatar
              src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=768x576&vertical=top'
              alt=''
            />
            <span>@Zendrison</span>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic propective</CardTitle>
          <CardAmount>1200 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
