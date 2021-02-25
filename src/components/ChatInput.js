import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import LinkIcon from "@material-ui/icons/Link";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FormatSizeIcon from "@material-ui/icons/FormatSize";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const ChatInput = ({ dark }) => {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButton>
            <Send
              style={
                dark
                  ? { color: "rgb(255 255 255 / 70%)" }
                  : { color: "rgb(0 0 0 / 70%)" }
              }
            />
          </SendButton>
        </form>
        <MoreButton
          style={
            dark
              ? {
                  color: "rgb(255 255 255 / 70%)",
                  borderTop: "1px solid rgb(255 255 255 / 20%)",
                }
              : {
                  color: "rgb(0 0 0 / 70%)",
                  borderTop: "1px solid rgb(0 0 0 / 20%)",
                }
          }
        >
          <FlashOnOutlinedIcon />
          <FormatBoldIcon />
          <FormatItalicIcon />
          <CodeOutlinedIcon />
          <LinkIcon />
          <FormatListNumberedIcon />
          <MoreHorizIcon />
          <FormatSizeIcon />
          <TagFacesIcon />
        </MoreButton>
      </InputContainer>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
  height: 90px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;

  form {
    flex: 1;
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background: transparent;
    }

    input:focus {
      outline: none;
    }
  }
`;

const MoreButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
`;

const SendButton = styled.div`
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 0;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 20px;
  }

  :hover {
    background: rgb(0 0 0 / 35%);
  }
`;

const Send = styled(SendIcon)``;
