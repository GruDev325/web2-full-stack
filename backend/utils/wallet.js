const ethers = require('ethers')

const createNewWallet = () => {
    const wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        privateKey: wallet.privateKey,
    }
}

module.exports = {
    createNewWallet
}