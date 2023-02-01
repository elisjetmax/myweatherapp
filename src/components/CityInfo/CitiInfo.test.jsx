import React from "react";
import CityInfo from "./CityInfo";
import { render, screen } from "@testing-library/react";

describe("CityInfo Render", () => {
  test("CityInfo Argentina", async () => {
    const city = "Buenos Aires";
    const country = "Argentina";
    render(<CityInfo city={city} country={country} />);
    const cityAndCountryComponents = await screen.findAllByRole("heading");
    expect(cityAndCountryComponents[0]).toHaveTextContent(city);
    expect(cityAndCountryComponents[1]).toHaveTextContent(country);
  });
});
