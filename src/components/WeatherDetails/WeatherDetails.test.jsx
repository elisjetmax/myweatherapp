import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherDetails from "./WeatherDetails";

describe("WeatherDetails Render", () => {
  test("WeatherDetails Render", async () => {
    render(<WeatherDetails humidity={80} wind={10} />);
    const wind = await screen.findByText(/10/);
    const humidity = await screen.findByText(/80/);
    expect(wind).toHaveTextContent("10 km/h");
    expect(humidity).toHaveTextContent("80 %");
  });
});
