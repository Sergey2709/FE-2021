const callbackPrompt = {
    message: 'Give me your phone number',
    showPrompt() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDefferedPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
}

callbackPrompt.showDefferedPrompt(3000);

