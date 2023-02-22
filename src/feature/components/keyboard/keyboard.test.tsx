import { render } from "@testing-library/react";
import React from "react";
import { Keyboard } from "./keyboard";

describe("Given Keyboard component", () => {
  describe("When it is render", () => {
    test("Then it should numbers keys", () => {
      render(<Keyboard />);
      expect(Keyboard).toHaveBeenCalled();
    });
  });
});
