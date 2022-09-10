import React, { useMemo } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const GetStarts = ({ item }) => {
  const numOfStars = useMemo(() => parseInt(item), [item]);

  return (
    <>
      {[...Array(5)].map((_, idx) =>
        idx + 1 <= numOfStars ? (
          <AiTwotoneStar key={idx} size={18} color="#ffa41c" />
        ) : (
          <AiOutlineStar key={idx} size={18} color="#ffa41c" />
        )
      )}
    </>
  );
};

export default GetStarts;
