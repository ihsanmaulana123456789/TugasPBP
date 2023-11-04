const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.json({
        nameWin_inLosail: 'Andrea dovizioso',
        nameWin_inAutodromo: 'Cal crutclow',
        nameWin_inDejerez: 'Valentino rossi',
        nameWin_inMugello: 'Andrea dovizioso',
        countryAndrea: 'Italy',
        countryCal: 'UK',
        countryValentino: 'Italy',
        cirquitLoc: 'Losail(Qatar),Autodromo(Argentina),De jerez(Spain),Mugello(Italy)'
    });
});

app.get('/country', (req, res) => {
    res.send('<h1>Italy,UK,</h1>');
});

app.get('/name', (req, res) => {
    res.send('<h1>Andrea dovizioso,cal crutclow,valentino rossi</h1>');
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Bad request</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
