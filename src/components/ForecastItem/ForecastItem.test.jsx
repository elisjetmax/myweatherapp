import { render, screen } from "@testing-library/react";
import ForecastItem from "./ForecastItem";

describe("ForecastItem Render", () => {
  test("ForecastItem Render", async () => {
    render(
      <ForecastItem weekDay="Jueves" hour={18} state="sunny" temperature={17} />
    );
    const weekDay = await screen.findByText("Jueves");
    const hour = await screen.findByText("18");
    const temperature = await screen.findByText("17°");
    expect(weekDay).toHaveTextContent("Jueves");
    expect(hour).toHaveTextContent("18");
    expect(temperature).toHaveTextContent("17°");
  });
});
