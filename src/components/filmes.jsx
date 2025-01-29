import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import apiFilmesPopular from "../services/api";
import FastImage from 'react-native-fast-image';

export default function Filmes() {
  const [movies, setMovies] = useState([]);

  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
     // Fundo escuro para destacar os filmes
  },
  movieItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#1c1c1e",
    borderRadius: 10,
    alignItems: "center",
  },
  movieImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
