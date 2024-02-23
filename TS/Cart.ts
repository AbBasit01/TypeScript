// Types
interface CartObject {
  name: string;
  price: number;
  quantity: number;
  discountpercent?: number;
}
//

let shoppingCart: CartObject[] = [
  {
    name: "Apple",
    price: 250,
    quantity: 1,
  },
  {
    name: "Banana",
    price: 250,
    quantity: 1,
  },
  {
    name: "Mango",
    price: 250,
    quantity: 1,
  },
];

// Functions
function totalPrice() {
  let totalCartValue: number = 0;
  shoppingCart.forEach((cartObject: CartObject) => {
    totalCartValue = totalCartValue + cartObject.price;
  });
  console.log("Total Cart Value : ", totalCartValue);
}

// Checkpoint 1 = -2;
//
function add(name: string, price: number, quantity: number) {
  shoppingCart.push({
    name,
    price,
    quantity,
  });
}

function add1(obj: CartObject):void{
  shoppingCart.push(obj);
}

function removeitem(objName: string):void{
    shoppingCart=shoppingCart.filter(o => o.name !== objName)
}

//removeitem('Banana')

console.log(shoppingCart)