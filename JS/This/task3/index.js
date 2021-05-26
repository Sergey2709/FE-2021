function defer(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}

const sayHi = () => {
    console.log('Hi');
}

const deferredSayHi = defer(sayHi, 3000);

deferredSayHi();

