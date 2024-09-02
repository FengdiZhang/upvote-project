import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Upvote from "./Upvote";

const UpvotesList = () => {
  const initialSelectedState = useMemo(() => {
    const savedState = localStorage.getItem("isSelected");
    return savedState ? JSON.parse(savedState) : false;
  }, []);

  const initialUpvotes = useMemo(() => {
    const savedUpvotes = localStorage.getItem("upvotes");
    return savedUpvotes ? JSON.parse(savedUpvotes) : [false];
  }, []);

  const [isSelected, setIsSelected] = useState(initialSelectedState);
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  useEffect(() => {
    localStorage.setItem("isSelected", JSON.stringify(isSelected));
    localStorage.setItem("upvotes", JSON.stringify(upvotes));
  }, [isSelected, upvotes]);

  const handleToggle = () => {
    setIsSelected((prev) => !prev);
  };

  const handleAddUpvote = () => {
    setUpvotes((prevUpvotes) => [...prevUpvotes, false]);
  };

  const handleReset = () => {
    setUpvotes([false]);
    setIsSelected(false);
  };

  return (
    <Container>
      <ListContainer>
        <UpvoteWrapper>
          {upvotes.map((_, index) => (
            <Upvote
              key={index}
              onToggle={handleToggle}
              isSelected={isSelected}
            />
          ))}
        </UpvoteWrapper>
        <ButtonGroup>
          <AddButton onClick={handleAddUpvote}>+</AddButton>
          <ResetButton onClick={handleReset}>Reset</ResetButton>
        </ButtonGroup>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
`;

const UpvoteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #f4f6f8;
  color: #343a40;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ResetButton = styled.button`
  padding: 5px 10px;
  background-color: #ff6666;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff3333;
  }
`;

export default UpvotesList;
