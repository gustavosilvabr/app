import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../../assets/background.jpg";

export default function SimpleSignInScreen() {
  const [hasAccount, setHasAccount] = useState(true);
  const [handleInputUser, setHandleInputUser] = useState("");
  const [handleInputPassword, setHandleInputPassword] = useState("");
  const navigation = useNavigation();
  const usuarios = {
    usuario: "amigo",
    senha: "123",
  };

  function VerificarUsuario() {
    if (
      handleInputUser === usuarios.usuario &&
      handleInputPassword === usuarios.senha
    ) {
      setHasAccount(true);
      navigation.navigate('Home');
    } else {
      alert("Usuário ou senha incorretos");
    }
  }

  const handleWhatsappPress = () => {
    // Link para abrir o WhatsApp
    Linking.openURL(
      "whatsapp://send?phone=+5561992030064&text=Ol%C3%A1,%20quero%20criar%20um%20cadastro"
    );
  };
    
  return (
 
      <ImageBackground
        source={Background}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Gradiente para sombreamento */}
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.6)", "rgba(1, 1, 1, 0.1)"]}
          style={StyleSheet.absoluteFillObject} // Preenche o mesmo tamanho da imagem
        />
        <SafeAreaView style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.label}>Usuário</Text>
              <TextInput
                placeholder="Digite seu usuário"
                placeholderTextColor={"white"}
                style={styles.input}
                value={handleInputUser}
                onChangeText={setHandleInputUser}
              />
            </View>

            <View>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor={"white"}
                secureTextEntry={true}
                style={styles.input}
                value={handleInputPassword}
                onChangeText={setHandleInputPassword}
              />
            </View>
            {/* Botão de Login */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={VerificarUsuario}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            {/* Verificação de cadastro */}
            {!hasAccount && (
              <View style={styles.registerSection}>
                <Text style={styles.registerText}>
                  Ainda não tem cadastro? Clique abaixo para falar com nosso
                  atendente:
                </Text>
                {/* Botão para falar pelo WhatsApp */}
                <TouchableOpacity
                  style={styles.whatsappButton}
                  onPress={handleWhatsappPress}
                >
                  <Text style={styles.whatsappText}>Falar pelo WhatsApp</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerInput: {
    width: "80%",
    gap: 15,
  },
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Fundo levemente translúcido
    borderRadius: 8,
    color: "white",
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: "#0ACF83", // Cor verde (ou sua preferência)
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerSection: {
    marginTop: 15,
    alignItems: "center",
  },
  registerText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  whatsappButton: {
    marginTop: 10,
    backgroundColor: "#25D366", // Cor verde do WhatsApp
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  whatsappText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
