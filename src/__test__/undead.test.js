import Undead from "../undead";

// eslint-disable-next-line no-undef
test("check create object Undead", () => {
  const undead = new Undead("Uno");
  const expectedValue = {
    name: "Uno",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  }

  // eslint-disable-next-line no-undef
  expect(undead).toEqual(expectedValue);
});