# Documentação do Projeto

## Introdução
Este projeto consiste em um aplicativo desenvolvido em React Native que utiliza várias funcionalidades da biblioteca, incluindo StyleSheet, Text, View, StatusBar, TextInput, Platform, Pressable, ScrollView, ActivityIndicator, Alert e Keyboard. Além disso, integra-se com a API da OpenAI para gerar texto com base em roteiros fornecidos pelo usuário.

## Pré-requisitos
Antes de iniciar, é necessário ter o ambiente de desenvolvimento React Native configurado em sua máquina. Certifique-se de ter o Node.js instalado, bem como o React Native CLI e todas as dependências necessárias para o desenvolvimento de aplicativos móveis.

## Instalação
1. Clone o repositório do projeto para sua máquina local.
  - https://github.com/Bruno-TL/appRoteiroDeViajem.git
3. Navegue até o diretório do projeto.
  - cd nameProject
4. Instale as dependências executando o comando:
    ```
    npm install
    ```
5. Certifique-se de que você tenha acesso a uma chave de API válida da OpenAI para utilizar os serviços de geração de texto.

## Como Executar
Para executar o aplicativo em um dispositivo móvel ou em um emulador, siga os passos abaixo:

### Android
1. Certifique-se de que um emulador Android esteja em execução ou que um dispositivo Android esteja conectado via USB e com a depuração USB ativada.
2. Execute o seguinte comando:
    ```
    npx expo run-android
    ```

### iOS
1. Certifique-se de que um emulador iOS esteja em execução ou que um dispositivo iOS esteja conectado via USB.
2. Execute o seguinte comando:
    ```
    npx expo run-ios
    ```

## Componentes Utilizados
- **StyleSheet**: Utilizado para estilizar os componentes do aplicativo de acordo com as diretrizes de design.
- **Text**: Componente para exibição de texto na interface do usuário.
- **View**: Utilizado para agrupar e organizar outros componentes.
- **StatusBar**: Componente para controlar a barra de status do dispositivo.
- **TextInput**: Componente de entrada de texto.
- **Platform**: Utilizado para detectar a plataforma em que o aplicativo está sendo executado.
- **Pressable**: Componente que detecta pressões do usuário.
- **ScrollView**: Utilizado para criar uma área rolável de conteúdo.
- **ActivityIndicator**: Indicador de atividade para mostrar o progresso de uma operação.
- **Alert**: Utilizado para exibir caixas de diálogo modais com mensagens.
- **Keyboard**: Utilizado para interagir com o teclado do dispositivo.

## Integração com a API da OpenAI
O aplicativo integra-se com a API da OpenAI para gerar texto com base em roteiros fornecidos pelo usuário. Para utilizar esse recurso, é necessário possuir uma chave de API válida da OpenAI e fazer solicitações para a endpoint apropriada da API.

## Contribuições
Contribuições são bem-vindas! Se você identificar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).
