import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native';
import { Container } from "./component/container"
import { useEffect, useState } from 'react';
import axios from "axios";

export default function App() {
  const image = {
    uri:"https://i.pinimg.com/originals/ee/61/b1/ee61b1478bfbfa5feb98d665caff3b5b.png"
  };
  const [apis, setApis] = useState([])

  const getData = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    setApis(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
