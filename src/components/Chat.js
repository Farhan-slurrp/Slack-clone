import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = ({ dark }) => {
  return (
    <Container
      style={
        dark
          ? { background: "#444444", color: "#fff" }
          : { background: "#fff", color: "#000" }
      }
    >
      <Header
        style={
          dark
            ? { borderBottom: "1px solid rgb(255 255 255 / 50%)" }
            : { borderBottom: "1px solid rgb(0 0 0 / 50%)" }
        }
      >
        <Channel>
          <ChannelName># clever</ChannelName>
          <ChannelInfo
            style={
              dark
                ? { color: "rgb(255 255 255 / 80%)" }
                : { color: "rgb(0 0 0 / 80%)" }
            }
          >
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage dark={dark} />
      </MessageContainer>
      <ChatInput dark={dark} />
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 65px auto min-content;
`;

const Header = styled.div`
  padding: 0 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Channel = styled.div``;

const ChannelName = styled.div`
  font-weight: 700;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  font-size: 13px;
  margin-top: 8px;
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  ${"" /* gap: 0.2em; */}
`;

const Info = styled(InfoOutlinedIcon)`
  margin-left: 0.3em;
  cursor: pointer;
`;

const MessageContainer = styled.div``;
