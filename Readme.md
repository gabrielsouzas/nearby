# Nearby - Clube de Benefícios

## Visão Geral

O **Nearby** é um aplicativo de clube de benefícios que permite aos usuários encontrar estabelecimentos próximos e ativar cupons para obter vantagens exclusivas. Com o Nearby, você pode:

- **Encontrar estabelecimentos** parceiros por geolocalização.
- **Ativar cupons** no próprio local do estabelecimento.
- Garantir vantagens em diferentes tipos de estabelecimentos, como alimentação, compras, hospedagem e mais.

O aplicativo foi desenvolvido em **React Native** utilizando o **Expo** para criar uma experiência fluida e responsiva.

---

## Funcionalidades Principais

1. **Tela de Splash**: Apresenta o logotipo e introduz o usuário ao aplicativo.
2. **Tela Inicial**: Explica como o aplicativo funciona e convida o usuário a começar.
3. **Mapa Interativo**: Mostra a localização de estabelecimentos parceiros em um mapa.
4. **Lista de Estabelecimentos**: Exibe os locais próximos com descrição e cupons disponíveis.
5. **Detalhes do Estabelecimento**: Informções detalhadas sobre o estabelecimento e os cupons.
6. **Navegação por Categoria**: Filtra os estabelecimentos por tipo (alimentação, compras, hospedagem, etc.).
7. **QR Code para Resgate**: Possibilita o resgate de cupons diretamente pelo aplicativo.

---

## Instalação

Siga os passos abaixo para clonar e executar o projeto em sua máquina:

### Requisitos

- Node.js (v16 ou superior)
- Expo CLI instalado globalmente

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/suarepositorio/nearby-app.git
   cd nearby-app
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor do Expo:

   ```bash
   npx expo start
   ```

4. Escaneie o QR Code com o aplicativo Expo Go (disponível para Android e iOS) ou emule no seu dispositivo local.

---

## Bibliotecas Utilizadas

### Core

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

### Interface de Usuário

- [Google Fonts](https://github.com/expo/google-fonts): Para uso de fontes personalizadas.
- [Tabler Icons](https://tabler-icons.io/): Biblioteca de ícones para enriquecer a interface.
- [React Navigation](https://reactnavigation.org/): Gerenciamento de navegação.

### Funcionalidades Extras

- [React Native Maps](https://github.com/react-native-maps/react-native-maps): Exibição de mapas.
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/): Obtenção da localização do usuário.
- [React Native QR Code Scanner](https://github.com/moaazsidat/react-native-qrcode-scanner): Para leitura de códigos QR.

---

## Instalação das Bibliotecas

Instale as bibliotecas necessárias:

### Google Fonts

As fontes são carregadas no modo asyncrono.

```shell
npx expo install expo-font @expo-google-fonts/rubik
```

Carregamento no App

```tsx
import { useFonts, Rubik_600SemiBold, Rubik_400Regular } from '@expo-google-fonts/rubik';
```

### Tabler Icons

```bash
npm install @tabler/icons-react-native
```

### React Native Maps

```bash
expo install react-native-maps
```

### Expo Location

```bash
expo install expo-location
```

### QR Code Scanner

```bash
npm install react-native-qrcode-scanner
```

---

## Estrutura do Projeto

```
nearby-app/
├── assets/           # Imagens, ícones e recursos estáticos
├── components/       # Componentes reutilizáveis
├── screens/          # Telas principais do app
├── navigation/       # Configuração de navegação
├── App.js            # Arquivo principal
└── package.json      # Dependências e scripts
```

---

## Contribuição

Fique à vontade para contribuir com melhorias ou novas funcionalidades para o aplicativo.

1. Faça um fork do repositório.
2. Crie uma branch com a sua funcionalidade:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m "Adiciona minha funcionalidade"
   ```
4. Envie para a branch principal:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
