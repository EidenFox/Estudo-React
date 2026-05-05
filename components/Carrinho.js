import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";

export default function Carrinho({ route, navigation }) {
    const { itens } = route.params || { itens: [] };

    const Total = () => {
        return itens.reduce((acc, item) => acc + (parseFloat(item.preco) * item.quantidade), 0).toFixed(2);
    };

    const finalizarCompra = () => {
        Alert.alert("Sucesso", "Compra finalizada com sucesso", [
            { text: "OK", onPress: () => navigation.navigate("Lista de Produtos") }
        ]);
        console.log ("funcionou")
        navigation.navigate("Lista de Produtos")
    };

    return (
        <ScrollView contentContainerStyle={estilo.container}>
            {itens.map(item => (
                <View key={item.id} style={estilo.item}>
                    <Text style={estilo.nome}>{item.nome}</Text>
                    <Text>{item.quantidade}x R$ {item.preco}</Text>
                    <Text style={estilo.subtotal}>Subtotal: R$ {(item.quantidade * parseFloat(item.preco)).toFixed(2)}</Text>
                </View>
            ))}

            <View style={estilo.totalContainer}>
                <Text style={estilo.totalTexto}>Total Geral: R$ {Total()}</Text>
                <TouchableOpacity style={estilo.botaoFinalizar} onPress={finalizarCompra}>
                    <Text style={estilo.botaoTextoFinalizar}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const estilo = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e2e2e2' 
    },

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    subtotal: {
        fontWeight: '600',
        color: '#16a34a'

    },

    totalContainer: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 12,
        alignItems: 'center'

    },

    totalTexto: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20

    },

    botaoFinalizar: {
        backgroundColor: '#2563eb',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center'

    },

    botaoTextoFinalizar: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16

    }
});