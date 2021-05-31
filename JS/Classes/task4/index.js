class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    } else {
      return false;
    }
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    } else {
      return false;
    }
  }
}

const shopping1 = new Order(500, 'Zapor', 'Sell');
console.log(shopping1);
shopping1.confirmOrder();
console.log(shopping1);

const shopping2 = new Order(500, 'Zapor', 'Sell');
console.log(shopping2);
