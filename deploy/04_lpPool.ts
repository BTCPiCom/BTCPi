import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const df: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, run } = hre
  const { deploy } = deployments
  const currentBlock = await ethers.provider.getBlockNumber()

  const { deployer } = await getNamedAccounts()
  const tokenAddress = '0x4aaad68be1a2ac9886b72b9dae474f3edd2132d9'
  const startBlock = currentBlock + 200
  const spaceStationV2 = await deploy(
    'MineStake',
    {
      from: deployer,
      args: [
        tokenAddress,
        startBlock
      ],
      log: true
    }
  )
  console.log('MineStake address: ', spaceStationV2.address)
  // wait for the contract to be deployed
  await sleep(5000)

  await run('verify:verify', {
    address: spaceStationV2.address,
    constructorArguments: [tokenAddress, startBlock],
    contract: 'contracts/MineStake.sol:MineStake'
  })
  console.log('MineStake contract opensource success!')
}
export default df
df.tags = ['lpPool'] 
