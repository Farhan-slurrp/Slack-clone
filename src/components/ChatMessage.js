import React from "react";
import styled from "styled-components";

const ChatMessage = ({ dark }) => {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/women/40.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Danielle
          <span
            style={
              dark
                ? { color: "rgb(255 255 255 / 50%)" }
                : { color: "rgb(97 96 97)" }
            }
          >
            2/23/2021 8:38:55 AM
          </span>
        </Name>
        <Text>This is the best challenge</Text>
      </MessageContent>
    </Container>
  );
};

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover {
    background: rgb(0 0 0 / 10%);
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  margin-right: 8px;

  span {
    margin-left: 8px;
    font-weight: 400;
    font-size: 13px;
  }
`;

const Text = styled.span``;
