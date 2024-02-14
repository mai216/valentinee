import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import img from '../src/WhatsApp Image 2024-02-14 at 5.33.23 PM.jpeg';


 
 








const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`



  padding: 10px 20px;
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const CardImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const CardMessage = styled.p`
  font-size: 18px;
`;

const HeartAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const HeartIcon = styled(FaHeart)`
  font-size: 48px;
  color: #ff4081;
  animation: ${HeartAnimation} 1s infinite;
`;

const App = () => {
  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(true);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>دوس هنا</Button>
      {showCard && (
        <Card show={showCard}>
          <CardImage src={img} alt="Valentine's Day Card" />
          <CardMessage>Happy Valentine's Day!</CardMessage>
          <HeartIcon />
        </Card>
      )}
    </Container>
  );
};

export default App;