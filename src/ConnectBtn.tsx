import { ConnectButton } from '@rainbow-me/rainbowkit';

function ConnectBtn(props: { label: any; }) {
  const { label = 'Connect Wallet' } = props;
  return (
    <div className="connect-btn"><ConnectButton label={label} /></div>
  )
}

export default ConnectBtn
