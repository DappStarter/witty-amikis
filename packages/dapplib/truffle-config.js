require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stock repeat pizza honey industry light army gasp'; 
let testAccounts = [
"0xe8c50f1329146f1373551d410625736684dcb1e25a49b9f9d0e1d2b12c5db8f6",
"0x1d335562b76422930ae4511d4fe0c8652a56b0bbcbf13e32a49c6076e43c9d0c",
"0x67938a34b2214b77457b0c60bfd7c93285b1aeed256d0ef3fbcd1822f843a14d",
"0xeb4fdcac41685740b7cb5170671b034425dfad507bb6fd5815cf96ac68b304b3",
"0x86275a085f5da5b95e99023b8be2f664761151c4756fb7c29a9ea931499d5b2d",
"0xce95dea2ff6be214b13b48ffb52adaca9ed37dfcb5048423249316e9dd20c704",
"0xd5731c49e7875e0f26ea8f84ce26ca9d19777b7de060d962e36ba4bad7d30f91",
"0xb861bbe66893646bd46eb8a14d8bde9ca91b7b86785a2ea0b4c1e8aa7298ec33",
"0x25d44c5c2e49a60bef07786c7117dd4a8d4e3eb67423317d8588435500dd6dee",
"0x67c000c7740c593f0fe768bd99071f7964140ba8f729f49bb6694c9df67e5f08"
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
            version: '^0.5.11'
        }
    }
};
