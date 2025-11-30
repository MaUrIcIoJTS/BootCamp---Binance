# BootCamp---Binance

Aqui está inserido o primeiro desafio do bootcamp Binance sem interface.

-Foi criado um gerador de carteiras, um projeto bem prático utilizando um gerador de carteira BTC HD e JavaScript e as bibliotecas:

 .bip 39: Geração de frases mnemônicas (seeds)
 
 .bip 32: Derivação HD (carteiras hierárquicas) 
 
 .bitcoinjs.lib: Criação de endereços BTC
 
-A carteira foi criada para a rede testnet3, porém caso queira alterar a rede basta alterar as consts para:

 const network = bitcoin.networks.bitcoin
 
 const path =  m/44'/0'/0'/0/0.
 
 ____________________________//____________________________

 Funcionalidades

 -Gera automaticamente:
 
  .Frase mnemonica (12 palavras)
  
  .Seed derivada da frase
  
  .chave privada (formato WIF)
  
  .endereço Bitcoin Testnet (P2PKH)
  
  .padrão BIP32/BIP39 para gerar as carteiras HD

  Tecnologias Utilizadas:

   .Node.js
   
   .bip39
   
   .bip32
   
   .bitcoinjs-lib

 ____________________________//____________________________

 Instalação:

 1. Clona esse repositório aqui:
    git clone https://github.com/MaUrIcIoJTS/BootCamp---Binance.git

 2. Instala as dependências:
    npm install bip32 bip39 bitcoinjs-lib

 3. Execute o script:
    node index.js


Como funciona:

1. Gera automaticamente um mnemonic usando o BIP39
2. Converte o mnemonic em uma seed
3. Cria uma carteira HD raiz com BIP32
4. Usa o caminho de derivação testnet: m/49'/1'/0'/0
5. Deriva a primeira chave externa (0/0)
6. Gera o endereço BTC P2PKH da testet.


 
 


