import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'uno.css'
import '@unocss/reset/normalize.css'
import './language/index'; 
import '@rainbow-me/rainbowkit/styles.css';
import merge from 'lodash.merge';
import { getDefaultWallets, RainbowKitProvider, lightTheme, Theme } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  // [chain.goerli], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [chain.mainnet],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          // http: 'https://rpc.ankr.com/eth_goerli', // go to https://www.ankr.com/protocol/ to get a free RPC for your network
          http: 'https://rpc.ankr.com/eth',
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Summer of WAMO | Web3Dali',
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

const rainbowTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#44FBDD',
    accentColorForeground: '#000',
  },
  radii: {
    connectButton: '1rem',
  },
  shadows: {
    connectButton: 'none',
  },
} as Theme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={rainbowTheme}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
