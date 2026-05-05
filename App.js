import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Produtos from "./components/Produtos.js";
import DetalheProdutos from "./components/DetalheProdutos.js";
import Carrinho from "./components/Carrinho.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={estilo.container}>
      <Stack.Navigator>
        <Stack.Screen name = "Lista de Produtos" component={Produtos} />
        <Stack.Screen name = "Detalhe Produtos" component={DetalheProdutos} />
        <Stack.Screen name = "Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const estilo = StyleSheet.create({
  container:{
    backgroundColor: "#e2e2e2",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
})