import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  
  h1{
    background-color: rgba(0,0,0,0);
    font-size: 2rem;
  }
  background-color: rgba(0,0,0,.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: wheat;
`;

const Container = styled.div`
  z-index: 2;
  position: relative;
  margin-bottom: 550px;
  width: 100%;
  height: 100%;
  background-image: url('/images/family.png');
  background-size: cover;
  background-position: center;
  background-color: rgba(0,0,0,.2);
  justify-content: center;

`;

const MenuItem = styled.p`
  margin: 10px 0;
  background-color: rgba(0,0,0,0);
  font-size: 1.2rem;
`;

const FoodAndDrinkMenu: React.FC = React.forwardRef((props, ref) => {
    const menuItems = [
        "Hamburger",
        "Pizza",
        "Steak",
        "Sushi",
        "Burrito",
        "Taco",
        "Pasta",
        "Fried Chicken",
        "Hot Dog",
        "French Fries",
        "Onion Rings",
        "Milkshake",
        "Iced Tea",
        "Lemonade",
        "Soda",
        "Coffee",
        "Beer",
        "Wine",
        "Cocktail",
        "Water",
    ];

    return (
        <Container>
        <MenuWrapper>
            <h1 ref={ref}>Food and Drink Menu</h1>
            {menuItems.map((item) => (
                <MenuItem key={item}>{item}</MenuItem>
            ))}
        </MenuWrapper>
        </Container>
    );
});

export default FoodAndDrinkMenu;