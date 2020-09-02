const minimist = require('minimist')
const StellarSdk = require('stellar-sdk')
const stellar = require('./lib/stellar')

const args = minimist(process.argv.slice(2))

const usage = function () {
  console.log('Usage: node stellar-create-account.js --secret=secret --starting_balance=starting_balance --destination=destination [--memo=memo] [--testnet]')
}

if (!args.secret || !args.starting_balance || !args.destination) {
  usage()
  process.exit(1)
}

var options = {
  destination: args.destination,
  startingBalance: String(args.starting_balance)
}

const operation = StellarSdk.Operation.createAccount(options)

stellar.executeTransaction(args.secret, operation, args.memo, args.testnet)
