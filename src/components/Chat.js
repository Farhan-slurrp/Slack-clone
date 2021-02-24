import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

const Chat = ({ dark }) => {
  return (
    <div
      style={
        dark
          ? { background: "#444444", color: "#fff" }
          : { background: "#fff", color: "#000" }
      }
    >
      <Container
        style={
          dark
            ? { borderBottom: "1px solid rgb(255 255 255 / 50%)" }
            : { borderBottom: "1px solid rgb(0 0 0 / 50%)" }
        }
      >
        <Content>
          <Title>
            # clever
            <StarBorderIcon />
          </Title>
          <Desc
            style={
              dark
                ? { color: "rgb(255 255 255 / 80%)" }
                : { color: "rgb(0 0 0 / 80%)" }
            }
          >
            Company-wide announcements and work-based matters
          </Desc>
        </Content>
        <Details>
          Details
          <InfoIcon />
        </Details>
      </Container>
    </div>
  );
};

export default Chat;

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 5px;
  justify-content: center;
  margin: 0 0 0 16px;
  position: relative;
`;

const Title = styled.div`
    display flex;
    align-items: center;
    font-weight: bold;
`;

const Desc = styled.div`
  font-size: 0.8em;
`;

const Details = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 0 0 220px;
  cursor: pointer;
`;
