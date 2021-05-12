const withdraw = (clients, balances, client, amount) => {
    let x = clients.indexOf(client);
    if (balances[x] >= amount) {
        return balances[x] -= amount;
    } else{
        return -1;
    } 
}

//example 1:

//input
// withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

//output
//37
//и массив balances должен быть [1400, 37, -6]



//example 2:

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));