import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './Rating.scss';

const Rating = () => {
  const [clicked, setClicked] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });
  const handleStarClick = starNum => {
    switch (starNum) {
      case 'star5':
        setClicked({ star5: true, star4: true, star3: true, star2: true, star1: true });
        break;
      case 'star4':
        setClicked({ star5: false, star4: true, star3: true, star2: true, star1: true });
        break;
      case 'star3':
        setClicked({ star5: false, star4: false, star3: true, star2: true, star1: true });
        break;
      case 'star2':
        setClicked({ star5: false, star4: false, star3: false, star2: true, star1: true });
        break;
      default:
        setClicked({ star5: false, star4: false, star3: false, star2: false, star1: true });
        break;
    }
  };
  return (
    <span>
      {!clicked.star1 ? (
        <AiOutlineStar size='2rem' onClick={() => handleStarClick('star1')} />
      ) : (
        <AiFillStar size='2rem' onClick={() => handleStarClick('star1')} />
      )}
      {!clicked.star2 ? (
        <AiOutlineStar size='2rem' onClick={() => handleStarClick('star2')} />
      ) : (
        <AiFillStar size='2rem' onClick={() => handleStarClick('star2')} />
      )}
      {!clicked.star3 ? (
        <AiOutlineStar size='2rem' onClick={() => handleStarClick('star3')} />
      ) : (
        <AiFillStar size='2rem' onClick={() => handleStarClick('star3')} />
      )}
      {!clicked.star4 ? (
        <AiOutlineStar size='2rem' onClick={() => handleStarClick('star4')} />
      ) : (
        <AiFillStar size='2rem' onClick={() => handleStarClick('star4')} />
      )}
      {!clicked.star5 ? (
        <AiOutlineStar size='2rem' onClick={() => handleStarClick('star5')} />
      ) : (
        <AiFillStar size='2rem' onClick={() => handleStarClick('star5')} />
      )}
    </span>
  );
};

export default Rating;
