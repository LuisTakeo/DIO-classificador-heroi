const { describe } = require("yargs");
const main = require("./main");
console.log(main);

test("xp 5000 should return Prata", () => {
  const heroi = new main.Heroi("Superman", 5000, "");
  expect(main.classificarHeroi(heroi)).toBe("Prata");
});
test("xp 5001 should return Ouro", () => {
  const heroi = new main.Heroi("Superman", 5001, "");
  expect(main.classificarHeroi(heroi)).toBe("Ouro");
});
