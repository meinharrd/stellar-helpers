const StellarSdk = require('stellar-sdk')

const executeTransaction = async function (secret, operation, memo, testnet) {
  const url = testnet ? 'https://horizon-testnet.stellar.org/' : 'https://horizon.stellar.org/'
  const server = new StellarSdk.Server(url)

  try {
    const keypair = StellarSdk.Keypair.fromSecret(secret)
    const account = await server.loadAccount(keypair.publicKey())

    var options = {
      fee: 100,
      networkPassphrase: testnet ? StellarSdk.Networks.TESTNET : StellarSdk.Networks.PUBLIC
    }

    if (memo) {
      options.memo = StellarSdk.Memo.text(String(memo));
    }

    var transaction = new StellarSdk.TransactionBuilder(account, options)
      .addOperation(operation)
      .setTimeout(60)
      .build()

    transaction.sign(keypair)
    const result = await server.submitTransaction(transaction)
    console.log(result.id)
  } catch(err) {
    if (err.response && err.response.data && err.response.data.extras.result_codes.operations) {
      console.log('Error: ' + err.response.data.extras.result_codes.operations[0])
      process.exit(1)
    }
    console.log(err)
    process.exit(1)
  }
}

module.exports = {
  executeTransaction
}
