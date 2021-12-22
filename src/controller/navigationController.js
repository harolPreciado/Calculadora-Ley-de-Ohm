
const navigationController = {
    getHome: (req, res) => {
        res.locals.voltaje = req.body.voltaje;
        res.locals.corriente = req.body.corriente;
        res.locals.resistencia = req.body.resistencia;
        res.locals.potencia = req.body.potencia;

        let inVoltaje = res.locals.voltaje;
        let inResistencia = res.locals.resistencia;
        let inCorriente = res.locals.corriente;
        let inPotencia = res.locals.potencia;

        // Voltaje
        if (inCorriente && inResistencia) res.locals.voltaje = inCorriente * inResistencia;
        else if(inPotencia && inCorriente) res.locals.voltaje = inPotencia/inCorriente; 
        else if(inPotencia && inResistencia) res.locals.voltaje = Math.sqrt(inPotencia*inResistencia);

        // Resistencia
        if (inVoltaje && inCorriente) res.locals.resistencia = inVoltaje * inCorriente;
        else if(inPotencia && inVoltaje) res.locals.resistencia = (inVoltaje * inVoltaje) / inPotencia;
        else if(inPotencia && inCorriente) res.locals.resistencia = inPotencia / (inCorriente * inCorriente);

        // Corriente
        if (inVoltaje && inResistencia) res.locals.corriente = inVoltaje / inResistencia;
        else if(inPotencia && inVoltaje) res.locals.corriente = inPotencia / inVoltaje;
        else if(inPotencia && inResistencia) res.locals.corriente = Math.sqrt(inPotencia/inResistencia);

        // Potencia
        if (inCorriente && inResistencia) res.locals.potencia = (inCorriente * inCorriente) * inResistencia;
        else if(inVoltaje && inCorriente) res.locals.potencia = inVoltaje / inCorriente;
        else if(inVoltaje && inResistencia) res.locals.potencia = (inVoltaje * inVoltaje) / inResistencia;



        res.render('index', { title: "Calculadora Ley de Ohm" })
    } 
}

module.exports = navigationController