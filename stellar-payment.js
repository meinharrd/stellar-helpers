const minimist = require('minimist')
const StellarSdk = require('stellar-sdk')
const stellar = require('./lib/stellar')

const args = minimist(process.argv.slice(2))

const usage = function () {
  console.log('Usage: node stellar-payment.js --secret=secret --amount=amount --destination=destination [--asset_code=asset_code] [--asset_issuer=asset_issuer] [--memo=memo] [--testnet]')
}

if (!args.secret || !args.amount || !args.destination) {
  usage()
  process.exit(1)
}

var options = {
  destination: args.destination,
  amount: String(args.amount)
}

if (args.asset_code && args.asset_issuer) {
  options.asset = new StellarSdk.Asset(args.asset_code, args.asset_issuer)
} else {
  options.asset = StellarSdk.Asset.native()
}

const operation = StellarSdk.Operation.payment(options)

stellar.executeTransaction(args.secret, operation, args.memo, args.testnet)
