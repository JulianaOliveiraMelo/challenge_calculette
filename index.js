const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.set('views', 'views');

// pour pouvoir accéder facilement aux données POST
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.render('calc');
});

app.post('/calcul', (request, response) => {
    // je vais faire mon calcul
    let leftOp = parseInt(request.body.leftOp, 10);
    let rightOp = parseInt(request.body.rightOp, 10);
    let operation = request.body.operation;
    let result;

    switch (operation) {
        case '+':
            result = leftOp + rightOp;
            break;
        case '-':
            result = leftOp - rightOp;
            break;
        case 'x':
            result = leftOp * rightOp;
            break;
        case '/':
            result = leftOp / rightOp;
            break;
    }

    response.send(`Le résultat de ${leftOp} ${operation} ${rightOp} est ${result}`);
});

app.listen(port, () => console.log(`Server listening on ${port}`));