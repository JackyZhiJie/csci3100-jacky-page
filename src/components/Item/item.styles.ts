import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   width: 100%;
//   border-radius: 20px;
//   height: 100%;
  
//   button {
//     border-radius: 0 0 20px 20px;
//   }
//   img{
//     max-height: 250px;
//     object-fit: cover;
//     border-radius: 20px 20px 0 0;
//   }
//   div{
//     font-family: Arial, sans-serif;
//     height: 100%;
//   }
//   `; 

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; // Adjust this to change the size of the item
  border: 1px solid lightgray;
  border-radius: 20px;
  height: 100%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1); // Add shadow to the item
 
  background-color: #e8f5e9; // Low saturation green color

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;