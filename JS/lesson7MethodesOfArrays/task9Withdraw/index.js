// Это уже классика!
// Валидатор пройден

const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);

  if (amount > balances[indexOfClient]) {
    return -1;
  }

  return (balances[indexOfClient] - amount);
};
