function calcular(distancia, combustivel){
    let kml
    if (combustivel === "gasolina") {
        kml = 16;
    } else if (combustivel === "etanol") {
        kml = 11;
    } else {
        return "Combustível inválido. Use 'gasolina' ou 'etanol'.";
    }
    const calc = distancia / kml;
    
    return `Viagem de ${distancia} km. Será necessário ${calc.toFixed(2)} L de ${combustivel}.`
}

module.exports = {
    calcular
}