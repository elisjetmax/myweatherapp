import { render, screen } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

describe("ForecastItem Render", () => {
  test("ForecastItem Render", async () => {
    const forecastDataItem = {
      dateId: 34534534,
      date: "2023-03-03 18:00:00",
      temp: 30,
      icon: "fog",
      temp_max: 35,
      temp_min: 10,
    };
    render(<ForecastItem forecastDataItem={forecastDataItem} />);
    const temp = await screen.findAllByTestId("temp-value");
    const temp_max = await screen.findAllByTestId("temp-max-value");
    const temp_min = await screen.findAllByTestId("temp-min-value");

    expect(temp[0]).toHaveTextContent(`${forecastDataItem.temp}°`);
    expect(temp_max[0]).toHaveTextContent(`${forecastDataItem.temp_max}°`);
    expect(temp_min[0]).toHaveTextContent(`${forecastDataItem.temp_min}°`);
  });
});
