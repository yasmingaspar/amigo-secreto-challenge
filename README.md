# 🎁 Amigo Secreto - Challenge

Projeto desenvolvido como parte do curso da **Alura** no programa **Oracle Next Education (ONE)**.  
O objetivo é criar uma aplicação simples de sorteio de **Amigo Secreto**, utilizando **JavaScript** para manipulação da DOM e lógica do sorteio.

## ✨ Funcionalidades

- Adição de nomes a uma lista.
- Prevenção de nomes duplicados ou vazios.
- Sorteio automático onde cada pessoa tira outra, sem repetições e sem se sortear.
- Exibição dos resultados na tela.

## 🧠 Lógica do Sorteio

O sorteio é realizado embaralhando a lista de participantes e verificando se **nenhum participante foi sorteado com seu próprio nome**. Caso ocorra, o embaralhamento é refeito até que todos os pares estejam válidos.

## 📋 Estrutura do Código

### `listaAmigos`

Um array que armazena os nomes dos participantes.

### Funções

- `adicionarAmigo()`:  
  Adiciona um novo nome à lista, validando se o campo está vazio ou se o nome já foi inserido.

- `atualizarLista()`:  
  Atualiza visualmente a `<ul>` com os nomes dos participantes adicionados.

- `sortearAmigo()`:  
  Realiza o sorteio embaralhando os nomes e garantindo que ninguém tire a si mesmo.

- `exibirResultado(sorteio)`:  
  Mostra os pares sorteados na tela.

## ✅ Regras de Validação

- O nome não pode estar em branco.
- O mesmo nome não pode ser adicionado mais de uma vez.
- O sorteio só é realizado se houver **pelo menos dois** nomes na lista.
- O sorteio é repetido até garantir que ninguém tire a si mesmo.

## 💡 Como Usar

1. Digite um nome no campo de entrada e clique em **"Adicionar"**.
2. Repita até adicionar todos os participantes.
3. Clique em **"Sortear"** para ver os pares formados.

## 📦 Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- DOM Manipulation

## 📸 Exemplo de Resultado

```text
Ana → Bruno  
Bruno → Carla  
Carla → Ana
