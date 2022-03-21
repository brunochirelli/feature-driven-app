# Feature-Driven App

Repo para servir como uma PoC de como se organizar um app baseado em features
através de context com o provider pattern.

## Sobre o app e execução

O app foi criado com o framework Nextjs para simular as screens de um app comum
já que o router é embutido.

```bash
yarn && yarn dev
```

<br />

## Filosofia

Se baseando no princípio da **feature-driven**, o app foi construído de forma
que pudesse representar a quebra por features de maneira isolada em suas pastas.

Desta maneira, cada pasta pode ter seu próprio owner com todas as suas
necessidades e dependências para que funcione de maneira "isolada".

<br />

## Execução arquitetural

Para montar o app, quebramos o function based em feature based folders onde cada
uma tem suas funções como service, components e providers.

<br />

### Provider

O provider cria o context e envelopa o app, expondo dentro dele um hook para
manipulação dos seus atributos.

<br />

#### Steps

- Cria o context
- Cria o provider
- Cria o hook consumindo o context
- Envelopa o app com o novo provider.

<br />

#### Drawbacks do padrão

O aninhamento de providers pode gerar o chamado **provider hell** porém para se
chegar nesse ponto destaca a necessidade de um gerenciador de estado mais
robusto.

Eu não considero algo danoso pq o aninhamento fica claro, porém é algo a ser
discutido.
