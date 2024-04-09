import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import { Button } from "@material-ui/core";
import { baseUrl, postRequestOptions } from "../../common/cookie";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import CheckoutForm from "../Stripe/CheckoutForm";
import { Payment } from "@material-ui/icons";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

// const stripePromise = loadStripe("pk_live_51McXiVIHzRbJKq7fbHv9Nmb0kocd7K9h2HXzV6O1EHbWv4K9FaciqvDmx0v2wgYIQrg6EXYvAL8hB2F1PL37q3Me00W2q0EcPJ");

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  // let [clientSecret, setClientSecret] = useState("");
  // async function handlePayment(event: any, amount: string) {
  //   let url = baseUrl + "initiate-payment";
  //   let formData = new FormData();
  //   formData.append("amount", amount);
  //   let result: any = await axios.post(url, formData, postRequestOptions);
  //   setClientSecret(result.data.clientSecret);
  // }
  const calculateTotal = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  const options = {
    // clientSecret: props.clientSecret,
    amount: 20,
    mode: "payment",
    currency: "usd",
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem key={item.productId} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      {/* <Button variant="contained" color="primary" onClick={(event) => handlePayment(event, calculateTotal(cartItems).toFixed(2))}>
        Checkout
      </Button>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements> */}
    </Wrapper>
  );
};

export default Cart;
