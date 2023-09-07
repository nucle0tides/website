import Image from "next/image";
import AngryLove from "./images/angry_love.png";

export const Avatar = () => {
  return (
    <Image src={AngryLove} alt="grr" />
  );
};
