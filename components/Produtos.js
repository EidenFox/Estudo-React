import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

import ListaProdutos from "./ListaProdutos.js";
// import DetalheProdutos from "./DetalheProdutos";

export default function Produtos( {navigation} ) {
  const [quantidades, setQuantidades] = useState({});

  const listaProdutos =
    [
      {
        id: 1,
        nome: "Tênis Esportivo",
        descricao: "Tênis confortável para corrida",
        preco: "299.90",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/55999999999",
        createdAt: "2026-03-10T18:54:02.000Z",
        updatedAt: "2026-03-10T18:54:02.000Z",
        CategoriumId: 1,
        Categorium: {
          id: 1,
          nome: "Grão",
          createdAt: "2026-02-24T20:07:10.000Z",
          updatedAt: "2026-02-24T20:07:10.000Z"
        }
      },
      {
        id: 2,
        nome: "Arroz Branco 5kg",
        descricao: "Arroz branco tipo 1 pacote de 5kg",
        preco: "29.90",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:06:38.000Z",
        updatedAt: "2026-03-10T19:06:38.000Z",
        CategoriumId: 1,
        Categorium: {
          id: 1,
          nome: "Grão",
          createdAt: "2026-02-24T20:07:10.000Z",
          updatedAt: "2026-02-24T20:07:10.000Z"
        }
      },
      {
        id: 3,
        nome: "Leite Integral 1L",
        descricao: "Leite integral longa vida caixa 1 litro",
        preco: "4.99",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:06:45.000Z",
        updatedAt: "2026-03-10T19:06:45.000Z",
        CategoriumId: 2,
        Categorium: {
          id: 2,
          nome: "Laticínios",
          createdAt: "2026-03-10T19:04:33.000Z",
          updatedAt: "2026-03-10T19:04:33.000Z"
        }
      },
      {
        id: 4,
        nome: "Refrigerante Cola 2L",
        descricao: "Refrigerante sabor cola garrafa de 2 litros",
        preco: "8.50",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:06:54.000Z",
        updatedAt: "2026-03-10T19:06:54.000Z",
        CategoriumId: 3,
        Categorium: {
          id: 3,
          nome: "Bebidas",
          createdAt: "2026-03-10T19:04:40.000Z",
          updatedAt: "2026-03-10T19:04:40.000Z"
        }
      },
      {
        id: 5,
        nome: "Banana Prata 1kg",
        descricao: "Banana prata fresca vendida por kg",
        preco: "5.49",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:07:01.000Z",
        updatedAt: "2026-03-10T19:07:01.000Z",
        CategoriumId: 4,
        Categorium: {
          id: 4,
          nome: "Hortifruti",
          createdAt: "2026-03-10T19:04:48.000Z",
          updatedAt: "2026-03-10T19:04:48.000Z"
        }
      },
      {
        id: 6,
        nome: "Pão Francês",
        descricao: "Pão francês fresco produzido diariamente",
        preco: "12.90",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:07:05.000Z",
        updatedAt: "2026-03-10T19:07:05.000Z",
        CategoriumId: 5,
        Categorium: {
          id: 5,
          nome: "Padaria",
          createdAt: "2026-03-10T19:04:52.000Z",
          updatedAt: "2026-03-10T19:04:52.000Z"
        }
      },
      {
        id: 7,
        nome: "Detergente Líquido 500ml",
        descricao: "Detergente neutro para lavagem de louças",
        preco: "2.99",
        imagem: "https://placehold.co/150",
        link_externo: "https://wa.me/5544999999999",
        createdAt: "2026-03-10T19:07:09.000Z",
        updatedAt: "2026-03-10T19:07:09.000Z",
        CategoriumId: 6,
        Categorium: {
          id: 6,
          nome: "Limpeza",
          createdAt: "2026-03-10T19:04:58.000Z",
          updatedAt: "2026-03-10T19:04:58.000Z"
        }
      }
    ];
    
  const alterarQuantidade = (id, operacao) => {
    setQuantidades(prev => {
      const atual = prev[id] || 0;
      let novaQtd = (operacao === 'soma' ? atual + 1 : atual - 1);
      
      if (novaQtd < 0) novaQtd = 0;

      return { ...prev, [id]: novaQtd };
    });
  };
  

  const irParaCarrinho = () => {
    const itensSelecionados = listaProdutos.filter(p => quantidades[p.id] > 0).map(p => ({ ...p, quantidade: quantidades[p.id] }));

    
    navigation.navigate("Carrinho", { itens: itensSelecionados });
  };


// Flatlist
  const renderItem = ({item}) => (
    <ListaProdutos
      produto={item}
      quantidade={quantidades[item.id] || 0}
      adicionar={() => alterarQuantidade(item.id, 'soma')}
      subtrair={() => alterarQuantidade(item.id, 'subtrair')}
    />
  );

   
  return (
    <View style={estilos.container}>

      {/* Substituido pelo flatlist */}

          {/* <ScrollView contentContainerStyle={estilos.scrollContent}>
            {
              listaProdutos.map((item) => (
                <ListaProdutos
                  key={item.id}
                  produto={item}
                  quantidade={quantidades[item.id] || 0}
                  adicionar={() => alterarQuantidade(item.id, 'soma')}
                  subtrair={() => alterarQuantidade(item.id, 'subtrair')}
                />
              ))
            }
          </ScrollView> */}


      <FlatList 
        data={listaProdutos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={estilos.scrollContent}
      />

      <TouchableOpacity style={estilos.botaoFixo} 
        onPress={() => irParaCarrinho()}
      >
        <Text style={estilos.textoBotao}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6'
  },

  scrollContent: {
    paddingBottom: 100
  },

  botaoFixo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});