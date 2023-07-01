import { test, expect } from "@playwright/test";

test("homepage has title and links to login page", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/coffee tracker/);

  // create a locator
  const anchor = page.getByRole("link", {name: "Login" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(anchor).toHaveAttribute("href", "/login");
});
