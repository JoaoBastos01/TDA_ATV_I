# Trabalho I - Desenvolvimento de Aplicativos Moveis

Projeto desenvolvido para a atividade 1 da disciplina de Topicos em Desenvolvimento de Aplicativos.

O aplicativo foi construido com React Native, Expo e Expo Router, seguindo a organizacao usada nas aulas: telas dentro de `app`, componentes reutilizaveis em `components`, dados mockados em `data`, tipos em `types` e estilos compartilhados em `styles`.

## Aplicativo de referencia

A referencia escolhida foi o iFood.

A interface nao tenta copiar o aplicativo original de forma identica, mas usa o mesmo tipo de fluxo visual e funcional:

- Tela inicial com endereco, campo de busca, categorias e lista de produtos.
- Cards de produtos com imagem, nome, restaurante, avaliacao, tempo de entrega e preco.
- Tela de detalhes com imagem grande, descricao, ingredientes, quantidade e total.
- Tela de checkout com endereco, forma de pagamento, resumo do pedido e confirmacao.

## Stack utilizada

- React Native
- Expo
- Expo Router, baseado em React Navigation
- TypeScript
- `FlatList` para listagem de produtos
- `expo-image` para exibicao das imagens
- `@expo/vector-icons` para icones

## Como rodar o projeto

Entre na pasta do projeto:

```bash
cd TrabalhoI
```

Instale as dependencias:

```bash
npm install
```

Rode no navegador:

```bash
npm run web
```

Depois abra o endereco exibido pelo Expo no terminal. Normalmente sera:

```text
http://localhost:8081
```

Para rodar no celular com Expo Go:

```bash
npm start
```

Em seguida, leia o QR Code exibido pelo terminal usando o aplicativo Expo Go.

Tambem existem scripts para emuladores:

```bash
npm run android
npm run ios
```

Observacao: `npm run ios` depende de ambiente compativel com iOS/macOS.

## Telas implementadas

### 1. Home/listagem

Arquivo: `app/index.tsx`

Funcionalidades:

- Exibe cabecalho inspirado em app de delivery.
- Permite filtrar produtos por busca textual.
- Permite filtrar por categoria.
- Renderiza produtos com `FlatList`.
- Ajusta a grade conforme a largura da tela:
  - 1 coluna em telas pequenas.
  - 2 colunas em telas medias.
  - 3 colunas em telas maiores.

### 2. Detalhes do produto

Arquivo: `app/product/[id].tsx`

Funcionalidades:

- Recebe o `id` do produto por parametro de navegacao.
- Exibe imagem, restaurante, avaliacao, entrega, descricao e ingredientes.
- Permite aumentar ou diminuir a quantidade.
- Calcula o total conforme a quantidade.
- Navega para o checkout levando `id` e `quantity` por parametros.

### 3. Checkout

Arquivo: `app/checkout.tsx`

Funcionalidades:

- Recebe `id` e `quantity` por parametros de navegacao.
- Exibe endereco mockado.
- Permite selecionar forma de pagamento mockada.
- Exibe resumo do pedido.
- Calcula itens, entrega, taxa de servico e total.
- Mostra confirmacao local do pedido, sem backend.

## Dados mockados

Todos os dados estao em:

```text
data/products.ts
```

O projeto usa arrays locais para simular:

- Categorias.
- Produtos.
- Restaurantes.
- Precos.
- Avaliacoes.
- Tempo de entrega.
- Taxa de entrega.
- Descricoes e ingredientes.

Nao ha backend, banco de dados, `fetch`, `axios` ou consumo de API externa. As unicas URLs externas sao imagens estaticas usadas nos cards e detalhes dos produtos.

## Estrutura principal

```text
TrabalhoI/
  app/
    _layout.tsx
    index.tsx
    checkout.tsx
    product/
      [id].tsx
  components/
    category-chip.tsx
    product-card.tsx
    section-title.tsx
  data/
    products.ts
  styles/
    shared-styles.ts
  types/
    product.ts
  package.json
  README.md
```

## Requisitos do enunciado atendidos

| Requisito                                     | Status   |
| --------------------------------------------- | -------- |
| React Native                                  | Atendido |
| Expo                                          | Atendido |
| Tres telas principais                         | Atendido |
| App inspirado em e-commerce/marketplace       | Atendido |
| Interface proxima ao app original             | Atendido |
| Componentizacao adequada                      | Atendido |
| Boas praticas de layout e organizacao         | Atendido |
| Uso de`FlatList` ou equivalente             | Atendido |
| Uso de imagens                                | Atendido |
| Navegacao entre telas                         | Atendido |
| Fluxo funcional entre as 3 telas              | Atendido |
| Passagem de dados por parametros de navegacao | Atendido |
| Dados mockados                                | Atendido |
| Sem backend ou APIs externas                  | Atendido |
| Codigo organizado e legivel                   | Atendido |
| Responsividade                                | Atendido |

## Validacao realizada

Foram executados os comandos:

```bash
npm run lint
npx tsc --noEmit
```

Ambos passaram sem erros.

O projeto tambem foi iniciado com Expo Web e respondeu corretamente em `http://localhost:8081`.

## Observacoes

- O projeto foi pensado para mobile, mas tambem funciona bem no navegador.
- A responsividade foi implementada usando `useWindowDimensions`.
- A navegacao foi feita com rotas do Expo Router:
  - `/`
  - `/product/[id]`
  - `/checkout`
- A confirmacao do pedido e apenas local, pois o enunciado nao solicita backend real.
