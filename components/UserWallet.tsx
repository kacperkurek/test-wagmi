"use client";

import { useSignLogin } from "@/hooks/useSignLogin";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

const UserWallet = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  useSignLogin();
  return address ? (
    <div onClick={() => disconnect()}>
      Connected {address} <br />
      disconnect
    </div>
  ) : (
    <div
      className="h-[66px] p-2 border-b-2 border-black"
      onClick={() => open()}
    >
      Connect Wallet
    </div>
  );
};
export default UserWallet;
