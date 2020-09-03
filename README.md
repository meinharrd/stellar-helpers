# Stellar Helpers

A collection of scripts for managing Stellar accounts.

## Install

```bash
$ npm install
```

## Usage

**Generate a key pair:**
```bash
$ node stellar-keypair.js
```
Outputs a secret key followed by the corresponding public account ID, for example:
`SBXXXXXXXXXXXXYJWRXEER7W7ZVTFZBF3S3GJKXQ5PJNEARYS677QWVJ GAXXXXXXXXXXXXIUUI5OMTULLU5SYB3EDTDLJB54LGVHRW3QEPAYDS5B`

The key pair can be used for all Stellar networks (public, testnet, others).

**Activate an account by adding a starting balance from a funded account (testnet):**
```bash
$ node stellar-create-account.js --secret=SECRET_KEY_OF_FUNDING_ACCOUNT --starting_balance=1.1 --destination=ACCOUNT_ID_OF_RECIPIENT --memo="Creating account" --testnet
```
Outputs a transaction ID on success, for example:
`4a261121cca088f40e503de4a19ba10f216bdf083149fcc21e8934705b98b8ac`

**Make a payment of 10 XLM to an account (testnet):**
```bash
$ node stellar-payment.js --secret=SECRET_KEY_OF_SENDER --amount=10 --destination=ACCOUNT_ID_OF_RECIPIENT --testnet
```
Outputs a transaction ID on success.

**Make a payment of 4.50 EURT to an account:**
```bash
$ node stellar-payment.js --secret=SECRET_KEY_OF_SENDER --amount=4.5 --destination=ACCOUNT_ID_OF_RECIPIENT --asset_code=EURT --asset_issuer=GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S --memo="4.50 EUR for coffee"
```
Outputs a transaction ID on success.
