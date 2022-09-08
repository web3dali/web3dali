import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'uno.css'
import '@unocss/reset/normalize.css'
import './language/index'
import '@rainbow-me/rainbowkit/styles.css'
import merge from 'lodash.merge'
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  Theme
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
const { chains, provider } = configureChains(
  // [chain.rinkeby], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [chain.mainnet],
  [
    jsonRpcProvider({ rpc: (chain) => ({  http: `https://rpc.ankr.com/eth` }),  priority: 0 }),
    alchemyProvider({ apiKey: '1YkQCuJSPjl5LU4mV_9dS_6P-sIzjDHR', priority: 1 }),
    infuraProvider({ apiKey: '15846464788c4374b845160a4c9457bd', priority: 2 }),
    publicProvider({ priority: 3 }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Summer of WAMO | Web3Dali',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const rainbowTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#44FBDD',
    accentColorForeground: '#000'
  },
  radii: {
    connectButton: '1rem'
  },
  shadows: {
    connectButton: 'none'
  }
} as Theme)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={rainbowTheme}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
