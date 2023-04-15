const chemicalSymbols = {
    Sodium: 'Na',
    Hydrogen: 'H',
    Helium: 'He',
    Oxygen: 'O'
};

function getSymbol(name) {
    const symbol = chemicalSymbols[name];
    if (!symbol) {
        console.error(`Symbol not found for element: ${name}`);
        return 'not found';
    }

    return symbol;
}