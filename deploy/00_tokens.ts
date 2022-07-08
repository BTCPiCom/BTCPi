import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from 'hardhat'

const df: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, run } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  // deploy SpacePi
  const args = ['BTCPi Token', 'BTCPi', 18, ethers.utils.parseEther('21000000')]
  const BtcPi = await deploy('BtcPi', {
    from: deployer,
    args
  })
  console.log('BTCPi address: ', BtcPi.address)

  await run('verify:verify', {
    address: BtcPi.address,
    constructorArguments: args,
    contract: 'contracts/btcpi.sol:BtcPi'
  })
  console.log('token verify success')
}

df.tags = ['Tokens']
export default df
