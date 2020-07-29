import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import useInterval from '../hooks/useInterval';
import pius from '../assets/images/da boi.jpg';
import pius3 from '../assets/images/da boi 3.jpg';

const Avatar = ({ ...props }) => {
  const [idx, setImageIdx] = useState(0);
  const images = [pius, pius3];

  useInterval(() => {
    const newIdx = idx < images.length - 1 ? idx + 1 : 0;
    setImageIdx(newIdx);
  }, 3000);

  const image = images[idx];
  return (
    <Image
      src={image}
      rounded
      {...props}
    />
  );
};

export default Avatar;
