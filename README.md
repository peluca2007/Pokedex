# Pokedex

Pokedex web que consome a [PokeAPI](https://pokeapi.co/) para mostrar o nome, o número e o sprite animado de cada Pokémon, sobre uma ilustração de Pokedex.

## Funcionalidades

- Carrega o Pokémon nº 1 ao abrir a página
- Busca por nome ou número no campo de pesquisa
- Botões "Anterior" e "Próximo" para navegar pela numeração (sem passar abaixo do nº 1)
- Exibe o sprite animado da geração V (Black/White) retornado pela API

## Tecnologias

- HTML5 e CSS3
- JavaScript puro (`fetch` com `async/await`)
- PokeAPI

## Como rodar

Não há dependências nem etapa de build: basta abrir o `index.html` no navegador (é preciso estar conectado à internet para acessar a API).

## Estrutura

```
index.html      estrutura da página
css/style.css   estilos e posicionamento sobre a imagem da Pokedex
js/script.js    busca na API e navegação
public/         imagem da Pokedex e favicon
```

## Limitações conhecidas

- A busca por nome precisa ser em letras minúsculas, como a API espera
- Não há mensagem de erro quando o Pokémon não é encontrado
- Depois de buscar por nome, os botões de navegação não sabem o número atual

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).
