class Product {
    private id: string;
    private title: string;
    private price: number;
    private quantity: number;
  
    constructor(id: string, title: string, price: number, quantity: number) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.quantity = quantity;
    }

    public add(title: string, price: number) {
        //TODO
    }

    public update(id: string, title: string, price: number) {
        //TODO
    }
  
    public remove(id: string) {
        //TODO
    }

    public checkAvailable(id: string) {
        //TODO
    } 

    public restock(id: string, quantity: number) {
        //TODO
    }
  }
  
  class Customer {
    private id: string;
    private email: string;
    private password: string;
    private name: string;
  
    constructor(id: string, email: string, password: string, name: string) {
      this.id = id;
      this.email = email;
      this.password = password;
      this.name = name;
    }

    public create(email: string, password: string, name: string) {
        //TODO
    }
  
    public login(email: string, password: string) {
        //TODO
    }

    public updateProfile(id: string, name: string) {
        //TODO
    }
  }
  
  class Orders {
    private id: string;
    private constumerId: string;
    private productId: string;
    private quantity: number;
  
    constructor(id: string, costumerId: string, productId: string, quantity: number) {
      this.id = id;
      this.constumerId = costumerId;
      this.productId = productId;
      this.quantity = quantity;
    }
  
    public makePurchase(costumerId: string, productId: string){
        //TODO
    }

    public addOrder(customer: Customer, product: Product, quantity: number) {
        //TODO
    }
  
    public refund(orderId: string) {
        //TODO
    }
  }
  