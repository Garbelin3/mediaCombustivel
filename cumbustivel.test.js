
const combustivel = require("./combustivel");

test("Calcular combustível para 300 km usando gasolina", () => {
    expect(combustivel.calcular(300, "gasolina")).toBe(
        "Viagem de 300 km. Será necessário 18.75 L de gasolina."
    );
});
