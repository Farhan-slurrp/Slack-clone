import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";

const Header = ({ dark, toggleDark }) => {
  return (
    <Container
      style={dark ? { background: "#12171d" } : { background: "#3f0e40" }}
    >
      <Main>
        <Button onClick={toggleDark}>
          {dark ? (
            <ToggleOnIcon style={{ width: "100%", height: "100%" }} />
          ) : (
            <ToggleOffIcon style={{ width: "100%", height: "100%" }} />
          )}
        </Button>
        <AccessTimeIcon />
        <SearchContainer>
          <Search
            style={
              dark
                ? { boxShadow: "inset 0 0 0 1px rgb(255 255 255 )" }
                : { boxShadow: "inset 0 0 0 1px rgb(104 74 104)" }
            }
          >
            <input type="text" placeholder="Search.." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>Farhan Ahmad</Name>
        <UserImg>
          <img src="https://i.imgur.com/6VBx3io.png" alt="user" />
        </UserImg>
      </UserContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  background-color: #350d36;
  color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px 0 16px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  width: 2em;
  position: absolute;
  left: 1em;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    background: transparent;
    border: none;
    border-radius: 6px;
    color: white;
    padding: 4px 8px 4px 8px;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImg = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;
