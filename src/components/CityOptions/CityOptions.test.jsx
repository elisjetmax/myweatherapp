import { fireEvent, render, screen } from "@testing-library/react";
import CityOptions from "./CityOptions";

describe("CityOptions Test", () => {
  test("CityOptions Test", async () => {
    const fnClickOnItem = jest.fn();
    render(<CityOptions onSaveCityAsFavorite={fnClickOnItem} />);
    const items = await screen.findAllByRole("listitem");
    fireEvent.click(items[0]);
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
  });
});
