function createMessenger() {

  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

let messenger1 = createMessenger();
messenger1.sendMessage('Bob');

let messenger2 = createMessenger();
messenger2.setMessage('Good job'.bold());
messenger2.sendMessage('Bob');

let messenger3 = createMessenger();
messenger3.setSender('Gromcode'.bold());
messenger3.sendMessage('Bob');
