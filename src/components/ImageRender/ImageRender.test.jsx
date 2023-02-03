import { render, screen } from "@testing-library/react";
import ImageRender from "./ImageRender";

describe("ImageRender Render", () => {
  test("ImageRender render", async () => {
    render(<ImageRender svgName="fog" />);
    const image = await screen.findAllByTestId("image-render");
    expect(image).toHaveLength(1);
  });
});
