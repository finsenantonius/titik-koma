import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components";

const BannerHeader = styled(Text)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #24253d;
  margin-bottom: 10px;
`;

const BlogBanner = styled(View)`
  height: 120px;
  background-color: #f2fcf4;
  border-radius: 10px;
  flex-direction: row;
  elevation: 3;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const Text1 = styled(Text)`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #305f72;
`;

const Text2 = styled(Text)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #616161;
  margin-bottom: 4px;
`;

const Button = styled(TouchableOpacity)`
  height: 35px;
  width: 60%
  border-radius: 10px;
  background-color: orange;
  justify-content: center;
  align-items: center
`;

const ButtonText = styled(Text)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.bodySemiBold};
  color: #fff;
`;

const BannerImage = styled(Image)`
  height: 121px;
  width: 80px;
  margin-right: 20px;
`;

export const Banner = ({ navigate, isOffline }) => {
  return (
    <>
      <BannerHeader style={{ display: isOffline ? "flex" : "none" }}>
        Blog
      </BannerHeader>
      <BlogBanner>
        <BannerImage source={require("../../assets/character3.png")} />
        <View style={{ padding: 16 }}>
          <Text1>Update teknologi</Text1>
          <Text2>Bisa dibaca secara offline lho!</Text2>
          <Button onPress={navigate}>
            <ButtonText>Lihat</ButtonText>
          </Button>
        </View>
      </BlogBanner>
    </>
  );
};
