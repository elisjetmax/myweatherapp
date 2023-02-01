import React from "react";
import Weather from "./Weather";
import { render, screen } from "@testing-library/react";

describe("Weather Render Test", () => {
  test("Weather Sunny", async () => {
    render(<Weather temperature={10} state="fog" />);
    const temp = await screen.findByRole("heading");
    expect(temp).toHaveTextContent("10");
  });
});
