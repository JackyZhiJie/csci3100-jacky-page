import { useQuery } from "react-query";
import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Item from "./Item/item";
import { Wrapper, StyledButton } from "../App.styles";
//For those drawers
import Cart from "./Cart/Cart";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory";
import RewardPoints from "./RewardPoint/RewardPoint";
import { InputAdornment, TextField, Select, MenuItem, Icon } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
//For those icons
import { Dialog, IconButton } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import HistoryIcon from "@material-ui/icons/History";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
//Social Media Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
//mui styles
import { makeStyles } from "@material-ui/core/styles";
//logo
import logo from "../img/logo.png";

//Types
export type CartItemType = {
  // id: number;
  // category: string;
  // description: string;
  // image: string;
  // price: number;
  // title: string;
  // amount: number;
  // reviews: string[];
  productId: string;
  description: string;
  price: number;
  reviews: string[];
  average_review_rate: number;
  image_link: string;
  //myAdd
  amount: number;
  title: string;
};

// const getProducts = async (): Promise<CartItemType[]> => {
//   return await (await fetch("https://fakestoreapi.com/products")).json();
// };

//mui styles
const useStyles = makeStyles({
  drawerPaper: {
    width: "500px", // Set the width of the drawer
    overflowX: "hidden", // Hide horizontal scroll
    borderRadius: "15px",
  },

  select: {
    "& .MuiSelect-root": {
      borderRadius: "15px",
    },
  },

  dialog: {
    borderRadius: "15px",
    border: "1px solid #FF4500",
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
    },
  },

  item: {
    borderRadius: "15px",
  },

  menuItem: {
    "& .MuiMenuItem-root": {
      borderRadius: "15px",
    },
  },

  iconButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },

  headerSection: {
    position: "sticky",
    justifyContent: "center",
    top: 0,
    zIndex: 100,
    backgroundColor: "#efefef",
    marginBottom: "50px",
  },
});

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]); //[] is empty array of CartItemType
  const [openDialog, setOpenDialog] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  //reward point
  const [rewardPoint, setRewardPoint] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  // const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);
  let data = [
    {
      productId: "1",

      description: "Big and red",
      price: 20,
      reviews: ["This is good", "sadasd"],
      average_review_rate: 2,
      image_link: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      //myAdd
      title: "T-shirt-A",
      amount: 0,
    },
    {
      productId: "2",
      description: "Small and blue",
      price: 30,
      reviews: ["This is bad", "sadasd"],
      average_review_rate: 3,
      image_link: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      //myADd
      title: "T-shirt-B",
      amount: 0,
    },
    {
      productId: "3",
      description: "Ugly and yellow",
      price: 20,
      reviews: ["Don't study CS", "fucked"],
      average_review_rate: 5,
      image_link: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      //myAdd
      title: "T-shirt-C",
      amount: 0,
    },
  ];
  console.log(data);

  //mui styles
  const classes = useStyles();

  const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.productId === clickedItem.productId);
      if (isItemInCart) {
        return prev.map((item) =>
          item.productId === clickedItem.productId
            ? { ...item, amount: item.amount + 1 } //... means keep the rest of the properties same
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.productId === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  const [category, setCategory] = useState("");

  // if (isLoading) return <LinearProgress />;
  // if (error) return <div>Something went wrong...</div>;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  return (
    <Wrapper>
      {/* This the header section */}
      <div className={classes.headerSection}>
        <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: "100px", height: "100px" }} />
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            variant="outlined"
            style={{ marginBottom: "20px" }}
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Select value={category} onChange={handleChange} displayEmpty inputProps={{ "aria-label": "Without label" }} className={classes.select}>
                    <MenuItem value="" disabled className={classes.menuItem}>
                      All categories
                    </MenuItem>
                    <MenuItem value="T-shirts" className={classes.menuItem}>
                      T-shirts
                    </MenuItem>
                    <MenuItem value="Bracelets" className={classes.menuItem}>
                      Bracelets
                    </MenuItem>
                    <MenuItem value="Gadgets" className={classes.menuItem}>
                      Gadgets
                    </MenuItem>
                  </Select>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ marginLeft: "auto" }}>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)} classes={{ paper: classes.drawerPaper }}>
              <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={(id: string) => handleRemoveFromCart(id)} />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
              <Badge badgeContent={getTotalItems(cartItems)} color="error">
                <AddShoppingCart />
              </Badge>
            </StyledButton>
            <IconButton onClick={handleOpenDialog}>
              <MessageIcon />
            </IconButton>
            <Dialog open={openDialog} onClose={handleCloseDialog} PaperProps={{ className: classes.dialog }}>
              <div>
                <h1>Dialog Box</h1>
                <p>This is a dialog box</p>
                <button onClick={handleCloseDialog}>Close</button>
              </div>
            </Dialog>
            <Drawer anchor="right" open={historyOpen} onClose={() => setHistoryOpen(false)} classes={{ paper: classes.drawerPaper }}>
              <PurchaseHistory />
            </Drawer>
            <IconButton onClick={() => setHistoryOpen(true)}>
              <HistoryIcon />
            </IconButton>
            {/* Reward Point */}
            <Drawer anchor="right" open={rewardPoint} onClose={() => setRewardPoint(false)} classes={{ paper: classes.drawerPaper }}>
              <RewardPoints />
            </Drawer>
            <IconButton onClick={() => setRewardPoint(true)}>
              <LoyaltyIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <Grid container spacing={2}>
        {data?.map((item) => (
          <Grid item key={item.productId} xs={12} sm={4}>
            <Item
              item={{
                ...item,
                reviews: item.reviews || [], // add default value if reviews is not available
                amount: item.amount || 0, // add default value if amount is not available
              }}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.iconButtonContainer}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </a>
      </div>
    </Wrapper>
  );
};

export default App;
