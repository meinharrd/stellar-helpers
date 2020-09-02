# Stellar Helpers

A collection of scripts for managing Stellar accounts.

## Install

```bash
$ npm install
```

## Usage

Generate a key pair:
```bash
node stellar-keypair.js
```

Activate an account by adding a starting balance from a funded account (testnet):
```bash
node stellar-create-account.js --secret=SECRET_KEY_OF_FUNDING_ACCOUNT --starting_balance=1.1 --destination=ACCOUNT_ID_OF_RECIPIENT --memo="Creating account" --testnet
```

Make a payment of 10 XLM to an account (testnet):
```bash
node stellar-payment.js --secret=SECRET_KEY_OF_SENDER --amount=10 --destination=ACCOUNT_ID_OF_RECIPIENT --testnet
```

Make a payment of 4.50 EURT to an account:
```bash
node stellar-payment.js --secret=SECRET_KEY_OF_SENDER --amount=4.5 --destination=ACCOUNT_ID_OF_RECIPIENT --asset_code=EURT --asset_issuer=GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S --memo="4.50 EUR for coffee"
```
