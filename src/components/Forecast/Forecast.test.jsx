import { render, screen } from "@testing-library/react";
import Forecast from "./Forecast";

describe("Forecast Render", () => {
  test("Forecast example", async () => {
    const forecastItemList = [
      {
        dateId: 34534534,
        date: "2023-03-03 13:00:00",
        temp: 20,
        icon: "fog",
        temp_max: 30,
        temp_min: 13,
      },
      {
        dateId: 5345355,
        date: "2023-03-03 18:00:00",
        temp: 30,
        icon: "cloudy",
        temp_max: 35,
        temp_min: 10,
      },
      {
        dateId: 3446,
        date: "2023-03-03 21:00:00",
        temp: 16,
        icon: "clear-day",
        temp_max: 23,
        temp_min: 7,
      },
    ];
    render(<Forecast forecastItemList={forecastItemList} />);
    const forecastItems = await screen.findAllByRole("listitem");
    const testDataItemContainer = await screen.findAllByTestId(
      "forecast-item-container"
    );
    expect(forecastItems).toHaveLength(3);
    expect(testDataItemContainer).toHaveLength(1);
  });
});
