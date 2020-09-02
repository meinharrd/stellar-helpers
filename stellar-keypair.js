const StellarSdk = require('stellar-sdk')

const pair = StellarSdk.Keypair.random()

console.log(pair.secret(), pair.publicKey())
