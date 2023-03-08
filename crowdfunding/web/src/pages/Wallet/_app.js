import '@/styles/globals.css';
import { Web3Modal } from '@web3modal/react';
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { localhost, mainnet, polygon, arbitrum } from '@wagmi/chains';
import { create } from 'domain';

const chains = [localhost, mainnet, polygon, arbitrum]

const {provider} = configureChains(chains, [
  walletConnectProvider({ projectId: "f0aaa836ea9062cd065f2d98738c714e"}),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "f0aaa836ea9062cd065f2d98738c714e",
    version: "2",
    appName: "rowfunding Platform",
    chains,
  }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  return (
    <>
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
    <Web3Modal
        projectId="f0aaa836ea9062cd065f2d98738c714e"
        ethereumClient={ethereumClient}
      />
    </>
  );
}


