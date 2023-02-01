import { render, screen } from "@testing-library/react";
import Forecast from "./Forecast";

describe("Forecast Render", () => {
  test("Forecast example", async () => {
    const forecastItemList = [
      { hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
      { hour: 6, state: "cloudy", temperature: 18, weekDay: "Viernes" },
      { hour: 12, state: "fog", temperature: 19, weekDay: "Viernes" },
      { hour: 18, state: "rainy", temperature: 17, weekDay: "Viernes" },
      { hour: 6, state: "snowy", temperature: 18, weekDay: "Sábado" },
    ];
    render(<Forecast forecastItemList={forecastItemList} />);
    const forecastItems = await screen.findAllByRole("listitem");
    const testDataItem = await screen.findAllByTestId(
      "forecast-item-container"
    );
    expect(forecastItems).toHaveLength(5);
    expect(testDataItem).toHaveLength(5);
  });
});
