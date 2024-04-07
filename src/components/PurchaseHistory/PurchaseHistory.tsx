import { Wrapper } from "./PurchaseHistory.styles";

const PurchaseHistory = () => {
  return (
    <Wrapper>
      <h2>Purchase History</h2>
      <ul>
        <li>
          <p>Product Name: Product 1</p>
          <p>Purchase Date: 2022-01-01</p>
        </li>
        <li>
          <p>Product Name: Product 2</p>
          <p>Purchase Date: 2022-01-02</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default PurchaseHistory;
