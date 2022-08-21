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
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  // [chain.rinkeby], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: '1YkQCuJSPjl5LU4mV_9dS_6P-sIzjDHR', priority: 0 }),
    infuraProvider({ apiKey: '15846464788c4374b845160a4c9457bd', priority: 1 }),
    publicProvider({ priority: 2 }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Summer of WAMO | Web3Dali',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
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
