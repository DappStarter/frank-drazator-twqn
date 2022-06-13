require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stone decrease magnet equip inner knee metal gentle'; 
let testAccounts = [
"0x23217a3cf4a39ff342ca9fc44077a69c1c9ec3c3e5aa468e9af4cbc29a6991b8",
"0x1af0bad769ab32bd57a8dac072702c8e41f11b62920fe459746a4a9dd376fd9a",
"0x714dab45d1b46723e5dae1037d6351beba863b8747c367eafa77d2d4775885b9",
"0x6e7d8220603efbc0a4d24ec8fd799942c25f027d60f576d343a31538b2a30fb3",
"0x32b4b92207d0e92762f25cd05a7648e7c457e9fa4f12132cf08a3ab6c6a72ec6",
"0x7259ad8d5bac017a35984fbcc60b41927c17f271730ee93473416f204e679a50",
"0x30e9983268a20f0b13b133ec9df22d3c90abf2b371f109d51973be31b7abcfe0",
"0x66e7d6e8b24deee43cc2e484c98189d9777b1f8da51b495c91056cbd0430b7f9",
"0xff6b11d626ae1ee924fc6f34b8bb5c231d8a03ebe0ea61685ed3458d6dc8114c",
"0xaf04322810878853ea8c73c0bcdb5ce2990087fd6ffdd61ef64d118090601dc6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

