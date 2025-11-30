//importando as dependências
const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

//Definir a rede Bitcoin (testnet)
const network = bitcoin.networks.testnet; //Para usar a rede principal, use bitcoin.networks.bitcoin

//Caminho de derivação padrão para carteiras Bitcoin HD
const path = "m/49'/1'/0'/0"; //Use "m/44'/0'/0'/0/0" para a rede principal

//Criando o mnemonic para a seed (palavras e senha)
let mnemonic = bip39.generateMnemonic(); //Gerar uma nova frase mnemônica
const seed = bip39.mnemonicToSeedSync(mnemonic); //Gerar a seed a partir da frase mnemônica

//Criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network); //Gerar a raiz da carteira HD a partir da seed

//Criando um conta  - par pvt-pub keys

let account = root.derivePath(path); //Derivar a conta usando o caminho definido
let node = account.derive(0).derive(0); //Derivar a primeira chave externa (endereço)
let btcAdress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address; //Gerar o endereço Bitcoin a partir da chave pública

//Logs para exibir as informações da carteira
console.log("Carteira Gerada");
console.log("Endereço BTC: ", btcAdress);
console.log("Chave Privada", node.toWIF());
console.log("seed", mnemonic);
