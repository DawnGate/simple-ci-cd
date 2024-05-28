import React from "react";
import { describe, expect, it } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";

import App from "../src/App.tsx";

describe("App", async () => {
  it("Check app render", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeDefined();
  });

  it("Check action", () => {
    render(<App />);

    const button = screen.getByTestId("button-count");

    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
  });
});
