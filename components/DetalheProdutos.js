import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function DetalheProdutos({ route, navigation }) {
  const {produto} = route.params;
  return (
    <ScrollView contentContainerStyle={estilo.container}>

      <Image source={{uri:produto.imagem}} style={estilo.imagem} />
      
      <Text style={estilo.titulo}>{produto.nome}</Text>
     
      <Text style={estilo.descricao}>R$ {produto.preco}</Text>

      <TouchableOpacity style={estilo.botaoVoltar} onPress={()=>navigation.goBack()}>
        <Text style={estilo.botaoVoltarTexto}>Voltar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoLinha: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  infoDestaque: {
    backgroundColor: '#e5e7eb',
    color: '#374151',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 5,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 22,
    textAlign: 'justify',
    marginBottom: 15,
  },
  atributosContainer: {
    width: '100%',
    marginBottom: 20,
  },
  atributo: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 4,
  },
  botaoCTA: {
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botaoVoltar: {
    backgroundColor: '#6b7280',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  botaoVoltarTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});