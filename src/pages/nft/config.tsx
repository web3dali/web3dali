import abi from './abi_min.json';

export const env = 'prod';
export const etherscanHost = env == 'prod' ? 'https://etherscan.io' : 'https://rinkeby.etherscan.io';
export const contract = {
  addressOrName: env == 'prod' ? '0x27401F328dFAf19148C874740346e1011ac6b461' : '0x11d06a9fcfbb45037b085a5586799d35e5af7f00',
  contractInterface: abi,
}