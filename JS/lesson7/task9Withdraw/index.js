// Это уже классика!
// Валидатор пройден

const withdraw = (clients, balances, client, amount) => {
  const x = clients.indexOf(client);

  if (amount > balances[x]) {
    return -1;
  }

  return (balances[x] - amount);
};
