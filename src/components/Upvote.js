import React from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const Upvote = ({ onToggle, isSelected }) => {
  const handleClick = () => {
    onToggle();
  };

  const arrowColor = isSelected ? "#253CF2" : "#343A40";

  return (
    <UpvoteContainer
      role="button"
      isSelected={isSelected}
      onClick={handleClick}
    >
      <FaArrowUp color={arrowColor} />
    </UpvoteContainer>
  );
};

const UpvoteContainer = styled.div.attrs((props) => ({
  role: "button",
}))`
  background-color: ${(props) => (props.isSelected ? "#E5E8FD" : "#F4F6F8")};
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
`;

export default Upvote;
