export const withdraw = (clients, balances, client, amount) => {
    if (!Array.isArray(clients) || !Array.isArray(balances)) {
        return `invalid data`;
    }

    let x = clients.indexOf(client);
    if (balances[x] >= amount) {
        return balances[x] -= amount;
    } else{
        return -1;
    } 
}

console.log(withdraw(3, [1400, 87, -6], 'John', 50));