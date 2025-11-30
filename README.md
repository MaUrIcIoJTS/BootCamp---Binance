# Gerador de Carteira Bitcoin (Testnet3) em JavaScript

Este projeto é um **desafio prático** que consiste em criar um **gerador
de carteira Bitcoin HD** utilizando **JavaScript** e as bibliotecas:

-   `bip39` --- geração de frases mnemônicas (seed)
-   `bip32` --- derivação HD (carteiras hierárquicas)
-   `bitcoinjs-lib` --- criação de endereços Bitcoin

A carteira gerada funciona na **Bitcoin Testnet3**, ideal para testes,
estudos e desenvolvimento.

------------------------------------------------------------------------

## Funcionalidades

-   Gera automaticamente:
    -   Frase mnemônica (12 palavras)
    -   Seed derivada da frase
    -   Chave privada (formato WIF)
    -   Endereço Bitcoin Testnet (P2PKH)
-   Utiliza o padrão BIP32/BIP39 para gerar carteiras HD
-   Totalmente funcional para uso na Testnet

------------------------------------------------------------------------

## Tecnologias utilizadas

-   Node.js\
-   bip39\
-   bip32\
-   bitcoinjs-lib

------------------------------------------------------------------------

## 🔧 Alterando a rede (opcional)

Rede principal (Mainnet):

``` js
const network = bitcoin.networks.bitcoin;
const path = "m/44'/0'/0'/0/0"; 
``` 

Ou Native SegWit P2SH (Endereços começando com 3)

```
const path = "m/49'/0'/0'/0/0m"
```
------------------------------------------------------------------------

## Instalação

1.  Clone este repositório:

``` bash
git clone https://github.com/MaUrIcIoJTS/BootCamp---Binance.git
cd seu-repo
```

2.  Instale as dependências:

``` bash
npm install bip32 bip39 bitcoinjs-lib
```

3.  Execute o script:

``` bash
node index.js
```

------------------------------------------------------------------------

## Como funciona o código?

O script:

1.  Gera automaticamente um *mnemonic* usando o **BIP39**

2.  Converte o mnemonic em uma *seed*

3.  Cria uma carteira HD raiz com **BIP32**

4.  Usa o caminho de derivação para Testnet:

        m/49'/1'/0'/0

5.  Deriva a primeira chave externa (`0/0`)

6.  Gera o endereço Bitcoin P2PKH da Testnet

------------------------------------------------------------------------

## ⚠️ Aviso Importante

Esta carteira é gerada na **Testnet3** --- ou seja, não suporta
transações reais.\
Use apenas para estudo e desenvolvimento.

Não utilize esta implementação simples para armazenar valores reais.

------------------------------------------------------------------------
