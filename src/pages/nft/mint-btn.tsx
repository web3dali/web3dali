import { useTranslation } from 'react-i18next'
import Dialog from 'rc-dialog';
import './index.css'
import 'rc-dialog/assets/index.css'
import { etherscanHost } from './config';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { parseEther, parseUnits } from 'ethers/lib/utils';
import { useState } from 'react';

function MintBtn(props: { index: any; numToMint: any; maxMintNum: any; proof: any; contract: any; }) {
  const { t } = useTranslation();
  const { index, numToMint, maxMintNum, proof, contract }  = props;
  const args = [index, 1, maxMintNum, proof];
  console.debug("preSalesMint args: ", args);

  const { config, error: prepareError, isError: isPrepareError } = usePrepareContractWrite({
    ...contract,
    functionName: 'preSalesMint',
    args,
    overrides: {
      value: parseUnits('1', 0),
      gasLimit: parseEther('0.01'),
    }
  })

  console.debug('usePrepareContractWrite', { config, prepareError, isPrepareError });
  
  const { data: mintResult, write: freeMint, isError: isWriteError, error: writeError } = useContractWrite(config)

  console.debug('useContractWrite', { freeMint, isWriteError, writeError, mintResult });

  let { isLoading, isSuccess } = useWaitForTransaction({
    hash: mintResult?.hash,
  });

  // isLoading = true;
  // isSuccess = true;

  const [dialogVisible, setDialogVisible] = useState(true)
  const mintBtnDisabled = !freeMint || isLoading;

  return (
    <>
      <button disabled={mintBtnDisabled} className="btn btn-accent h-[45px] line-height-[45px]" style={{ backgroundColor: mintBtnDisabled ? 'gray' : ''}} onClick={() => { console.debug('freeMint Clicked'); freeMint?.() }}>
        {isLoading ? t('nft.minting') : t('nft.freeMint')}
      </button>
      {isSuccess && (
        <Dialog title={"WAMO NFT MINT"} visible={dialogVisible} className="w-"
          footer={(<div className="btn btn-secondary text-center color-[white]" key="ok" onClick={() => { setDialogVisible(false)}}>OK</div>)}>
          <p>Successfully minted! Check it on <a href={`${etherscanHost}/tx/${mintResult?.hash}`}>Etherscan</a></p>
        </Dialog>
      )}
    </>
  )
}

export default MintBtn
