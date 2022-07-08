import { HardhatUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-deploy'

const INFURA_API_KEY = ''
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  typechain: {
    outDir: './src/config/contracts/types',
    target: 'ethers-v5'
  },
  networks: {
    hardhat: {},
    ethmain: {
      url: `https://mainnet.infura.io/ws/v3/${INFURA_API_KEY}`,
      chainId: 1,
      accounts: []
    },

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 4,
      accounts: []
    },
    hecotest: {
      url: 'https://http-testnet.hecochain.com',
      chainId: 256,
      accounts: [],
      gas: 2100000,
      gasPrice: 8000000000
    },
    hecomain: {
      url: 'https://http-mainnet.hecochain.com',
      chainId: 128,
      accounts: []
    },
    bsctest: {
      url: 'https://data-seed-prebsc-2-s1.binance.org:8545/',
      accounts: []
    },
    bscmain: {
      url: 'https://bsc-dataseed4.ninicoin.io/',
      chainId: 56,
      accounts: []
    }
  },
  namedAccounts: {
    deployer: 0,
    test01: 1,
    test02: 2,
    test03: 3,
    test04: 4,
    test05: 5,
    test06: 6
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
    deployments: './deployments'
  },
  mocha: {
    timeout: 0
  },
  etherscan: {
    apiKey: {
      hecotest: '',
      hecomain: '',
      bscmain: '',
      bsctest: ''
    },
    customChains: [
      {
        network: 'hecotest',
        chainId: 256,
        urls: {
          apiURL: 'https://api-testnet.hecoinfo.com/api',
          browserURL: 'https://testnet.hecoinfo.com'
        }
      },
      {
        network: 'hecomain',
        chainId: 128,
        urls: {
          apiURL: 'https://api.hecoinfo.com/api',
          browserURL: 'https://hecoinfo.com'
        }
      },
      {
        network: 'bscmain',
        chainId: 56,
        urls: {
          apiURL: 'https://api.bscscan.com/api',
          browserURL: 'https://bscscan.com'
        }
      },
      {
        network: 'bsctest',
        chainId: 97,
        urls: {
          apiURL: 'https://api-testnet.bscscan.com/api',
          browserURL: 'https://testnet.bscscan.com'
        }
      }
    ]
  }
}

export default config
