const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Types = Schema.Types;

const UserSchema = new Schema({
    name: { type: Types.String, require: true },
})

const WalletSchema = new Schema({
    userId: { type: Types.ObjectId, ref: mongoose.model('users', UserSchema) },
    address: { type: Types.String, require: true },
    privateKey: { type: Types.String, require: true },
})

module.exports = {
    User: mongoose.model('users', UserSchema),
    Wallet: mongoose.model('wallets', WalletSchema),
}