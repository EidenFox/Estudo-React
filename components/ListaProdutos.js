import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
// import DetalheProdutos from "./DetalheProdutos";

export default function ListaProdutos({ produto}) {
    const navigation = useNavigation();
    const [contador,setContador] = useState(0);


    const adicionar = ()=>{
        if (contador <100)setContador(contador+1);
    };

    const subtrair = ()=>{
        if(contador > 0) setContador(contador-1);
    };



    return (
        <View style = {estilo.card}>

            <Image source={produto.imagem} style={estilo.imagem} 
            />

            <Text style={estilo.tituloTela}>
                {produto.nome}
            </Text>

            <Text style={estilo.texto}>
                R$ {produto.preco}
            </Text>

            <TouchableOpacity style={estilo.botao} onPress={()=>navigation.navigate("Detalhe Produtos", {produto})}>
                <Text style={estilo.botaoTexto}>
                    Detalhes
                </Text>
            </TouchableOpacity>

            <View style={estilo.containerCompra}>
                <TouchableOpacity style={estilo.botaoCompra} onPress={() => subtrair() }>
                    <Text style={estilo.botaoTextoCompra}>-</Text>
                </TouchableOpacity>

                <Text style={estilo.qtd}>
                    {contador}
                </Text>

                <TouchableOpacity style={estilo.botaoCompra} onPress={() => adicionar() }>
                    <Text style={estilo.botaoTextoCompra}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const estilo = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        padding: 18,
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: '#ffffff',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },

      imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
    },

    tituloTela: {
        color: '#1f2937',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 6,
    },

    tituloMeio: {
        fontSize: 14,
        color: '#6b7280',
        fontWeight: '600',
        marginBottom: 6,
    },

    texto: {
        fontSize: 14,
        color: '#374151',
        lineHeight: 20,
        marginBottom: 12,
    },

    atributosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    atributo: {
        fontSize: 12,
        color: '#4b5563',
    },

    botao: {
        backgroundColor: '#16a34a',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },

    botaoTexto: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },

    containerCompra: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    botaoCompra: {
        backgroundColor: '#16a34a',
        padding: 10,
        width: '40%', 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoTextoCompra: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    qtd: {
        backgroundColor: '#a9a9a9',
        padding: 15,
        borderRadius:100,
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
    }
});