import styled from "styled-components";

// // export const Wrapper = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   flex-direction: column;
// //   width: 100%;
// //   border-radius: 20px;
// //   height: 100%;
  
// //   button {
// //     border-radius: 0 0 20px 20px;
// //   }
// //   img{
// //     max-height: 250px;
// //     object-fit: cover;
// //     border-radius: 20px 20px 0 0;
// //   }
// //   div{
// //     font-family: Arial, sans-serif;
// //     height: 100%;
// //   }
// //   `; 

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%; // Adjust this to change the size of the item
//   border: 1px solid lightgray;
//   border-radius: 20px;
//   height: 100%;
//   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1); // Add shadow to the item
 
//   background-color: #e8f5e9; // Low saturation green color

//   button {
//     border-radius: 0 0 20px 20px;
//   }

//   img {
//     max-height: 200px;
//     object-fit: cover;
//     border-radius: 20px 20px 0 0;
//   }

//   div {
//     font-family: Arial, Helvetica, sans-serif;
//     padding: 1rem;
//     height: 100%;
//   }
// `;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; // Fixed width similar to .login-container
  border: 1px solid #ddd; // Same border color as .login-container
  border-radius: 4px; // Same border-radius as .login-container
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Same shadow as .login-container

  background-color: #fff; // Same background color as .login-container

  button {
    padding: 10px;
    border: none;
    margin: 10px;
    border-radius: 4px;
    background-color: #5c6bc0; // Button color as in .login-container
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3f51b5; // Button hover color as in .login-container
    }
  }

  img {
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0; // Adjust if you want to match .login-container
  }

  div {
    font-family: Arial, sans-serif; // Matching font from .login-container
    padding: 1rem;
    height: 100%;
  }
`;