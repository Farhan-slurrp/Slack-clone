import React, { useEffect } from "react";
import styled from "styled-components";
import AddCircleOulineItem from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems, Channels } from "../data/sidebarData";

const Sidebar = ({ dark }) => {
  const darkTheme = dark;

  return (
    <Container
      style={dark ? { background: "#12171d" } : { background: "#3f0e40" }}
    >
      <WorkspaceContainer
        style={
          dark
            ? { borderBottom: "1px solid #fff" }
            : { borderBottom: "1px solid #532753" }
        }
      >
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOulineItem />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItems.map((item, index) => {
          return (
            <MainChannelItem key={index}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          );
        })}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelList>
          {Channels.map((channel, index) => {
            return <Channel key={index}>{channel.name}</Channel>;
          })}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 0 0 19px;
  justify-content: space-between;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 20px 0 0;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding: 8px 0 0 0;
`;

const MainChannelItem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align=items: center;
  padding: 0 0 0 19px;
  cursor: pointer;
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin: 10px 0 0 0;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0 12px 0 19px;
`;

const ChannelList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  margin: 0 0 0 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
