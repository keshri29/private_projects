import { } from "../server.js"
export const checkout = (req,res)=>{
  const  options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
      });

};


