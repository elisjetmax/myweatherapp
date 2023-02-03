import React from "react";
import CityInfo from "./CityInfo";
import { render, screen } from "@testing-library/react";

describe("CityInfo Render", () => {
  test("CityInfo Argentina", async () => {
    const city = "Buenos Aires";
    const country = "Argentina";
    render(<CityInfo city={city} country={country} />);
    const cityText = await screen.findByText(city);
    const countryText = await screen.findByText(country);
    expect(cityText).toHaveTextContent(city);
    expect(countryText).toHaveTextContent(country);
  });
});
