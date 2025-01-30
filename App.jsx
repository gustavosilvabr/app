import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SimpleSignInScreen from "./src/pages/login";
import { LinearGradient } from "expo-linear-gradient";
import Background from "./src/assets/background.jpg";
import { StatusBar } from "expo-status-bar";
import Home from "./src/pages/home/home.jsx";

const Stack = createStackNavigator();

// Simulação de uma tela de splash com indicador giratório
function SplashScreen() {
  return (
    <ImageBackground
      source={Background}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.containerTitle}>
          <Text style={{ color: "#0ACF83" }}>Smart</Text>Hub
        </Text>
        <Text style={styles.containerSubtitle}>FILMES E SERIES</Text>
      </View>
      <SafeAreaView style={styles.splashContainer}>
        <ActivityIndicator size="large" color="#0ACF83" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </SafeAreaView>
      {/* Gradiente para sombreamento */}
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.6)", "rgba(1, 1, 1, 0.1)"]}
        style={StyleSheet.absoluteFillObject} // Preenche o mesmo tamanho da imagem
      />
    </ImageBackground>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Remove os headers de todas as telas
        }}
      >
          <Stack.Screen name="SignIn" component={SimpleSignInScreen} />
          <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  splashContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  containerTitle: {
    fontSize: 32,
    color: "#ffff",
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  containerSubtitle: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
    letterSpacing: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 20,
    color: "#0ACF83",
    zIndex: 1,
    fontWeight: "bold",
  },
  container: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
