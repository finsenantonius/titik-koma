import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components";

const CardContainer = styled(TouchableOpacity)`
  padding: 16px;
  border-bottom-width: 0.5px;
  border-color: grey;
`;

const Author = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 12px;
  color: #000;
  margin-bottom: 4px;
  color: #0e4a86;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const TitleContainer = styled(View)`
  width: 80%;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  font-size: 16px;
  color: #000;
`;

const Thumbnail = styled(Image)`
  height: 50px;
  width: 50px;
`;

const DatePublish = styled(Text)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.body};
  color: #616161;
`;

export const BlogCard = ({ data, navigate }) => {
  return (
    <CardContainer onPress={navigate}>
      <Author>{data.newsAuthor}</Author>
      <Wrapper>
        <TitleContainer>
          <Title>{data.newsTitle}</Title>
        </TitleContainer>
        <Thumbnail source={{ uri: data.newsThumbnail }} />
      </Wrapper>
      <DatePublish>{data.newsUploadDate}</DatePublish>
    </CardContainer>
  );
};
