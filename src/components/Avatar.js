import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import useInterval from "../hooks/useInterval";
import images from "../assets/images";

const Avatar = ({ ...props }) => {
  const [idx, setImageIdx] = useState(0);

  useInterval(() => {
    const newIdx = idx < images.length - 1 ? idx + 1 : 0;
    setImageIdx(newIdx);
  }, 5000);

  const image = images[idx];
  return <Image src={image} rounded {...props} />;
};

export default Avatar;
