import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Upvote from "./Upvote";

test("should toggle upvote state on click", () => {
  const handleToggle = jest.fn();

  const { getByRole } = render(
    <Upvote onToggle={handleToggle} isSelected={false} />
  );

  const upvoteButton = getByRole("button");

  fireEvent.click(upvoteButton);

  expect(handleToggle).toHaveBeenCalledTimes(1);
});
