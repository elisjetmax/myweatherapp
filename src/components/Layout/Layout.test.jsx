import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout Render", () => {
  test("Layout display", async () => {
    const children = <h1 data-testid="children-item-container">Children</h1>;
    render(<Layout title="Layout Title">{children}</Layout>);
    const testHeader = await screen.findAllByTestId("header-item-container");
    const testMain = await screen.findAllByTestId("main-item-container");
    const testFooter = await screen.findAllByTestId("footer-item-container");
    expect(testHeader).toHaveLength(1);
    expect(testMain).toHaveLength(1);
    expect(testFooter).toHaveLength(1);
  });
});
