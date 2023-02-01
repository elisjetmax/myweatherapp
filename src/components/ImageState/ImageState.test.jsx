import { render, screen } from "@testing-library/react";
import ImageState from "./ImageState";

describe("ImageState Render", () => {
  test("ImageState render", async () => {
    render(<ImageState state="cloudy" size="4rem" />);
    const image = await screen.findAllByRole("img");
    expect(image).toHaveLength(1);
  });
});
