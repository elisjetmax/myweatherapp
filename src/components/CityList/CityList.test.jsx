import { fireEvent, render, screen } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Caracas", country: "Venezuela" },
  { city: "Bogotá", country: "Colombia" },
  { city: "Ciudad de México", country: "México" },
  { city: "Madrid", country: "España" },
  { city: "Lima", country: "Perú" },
];

describe("CityList Render", () => {
  test("CityList Render", async () => {
    const fnClickOnItem = jest.fn();
    render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(6);
  });
});

describe("CityList Actions", () => {
  test("CityList Click On Item", async () => {
    const fnClickOnItem = jest.fn();
    render(<CityList cities={cities} onClickCity={fnClickOnItem} />);
    const items = await screen.findAllByRole("listitem");
    fireEvent.click(items[0]);
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
  });
});
