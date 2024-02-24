import Ship from "../classes/Ship";

test("Ship constructor", () => {
  const ship = new Ship("Carrier", 5);
  expect(ship.name).toBe("Carrier");
  expect(ship.length).toBe(5);
  expect(ship.hits).toBe(0);
});

test("Ship hit method", () => {
    const ship = new Ship("Carrier", 5);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test("Ship isSunk method", () => {
    const ship = new Ship("PatrolBoat", 2);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
})
