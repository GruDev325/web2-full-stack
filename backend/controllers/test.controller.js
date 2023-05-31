const { User, Wallet } = require("../models/test.model");
const { createNewWallet } = require("../utils/wallet");
const mockData = require("../mock/test.json");

async function createWallet(req, res) {
    const { userId } = req.query;

    let wallet = await Wallet.findOne({userId: userId})
    console.log(wallet)
    if(wallet) {
        return res.status(200).json("already created wallet")
    }

    const { address, privateKey } = createNewWallet();
    const newWallet = new Wallet({
        userId, address, privateKey
    })

    await newWallet.save();
    return res.status(200).json("created wallet successfully")
}

async function getUserInfo(req, res) {
    const { userId } = req.query;
    const user = await User.findOne({_id: userId});
    if(user) {
        const wallet = await Wallet.findOne({userId: userId});
        return res.status(200).json({
            userId: userId,
            name: user.name,
            address: wallet.address
        })
    }
    return res.status(200).json("user not found");
}

async function getWalletContents(req, res) {
    const { userId } = req.query;
    return res.status(200).json(mockData);
}


async function createUser(req, res) {
    const { name } = req.query;
    let user = await User.findOne({name})
    if(user) {
        return res.status(200).json({
            result: "already created user"
        })
    }

    const newUser = new User({
        name
    })

    await newUser.save()
    return res.status(200).json({
        userId: newUser._id,
        result: "created user successfully"
    })
}

module.exports = {
    createWallet,
    createUser,
    getUserInfo,
    getWalletContents,
}