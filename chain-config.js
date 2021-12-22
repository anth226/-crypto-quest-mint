const config = {
    dev: {
        chainId: 31337,
        contractAddress: "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    },
}

// const key = window.location.hostname.indexOf('localhost') > -1 ? 'dev' : 'prod'
const key = 'dev'
module.exports = config[key]