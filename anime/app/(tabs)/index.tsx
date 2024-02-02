import { Link } from "expo-router";
import { ImageBackground, Text, View, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react"; 

export default function Page() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime`)
      .then((res) => res.json())
      .then(({data}) => {
        setData(data);
      });
  }, []);
  return (
    <View  style={styles.container}>
    {data?.length >0 && 
      <ImageBackground source={{ uri: `${data[0].attributes.posterImage.large}` }} style={styles.bgimage} resizeMode="cover">
        <Image source="file:///Users/HP233696/Downloads/Vector.png"/>
      </ImageBackground>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgimage: {
    height: 400,
  }
})