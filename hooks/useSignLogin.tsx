"use client";
import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";

import { useAccount, useSignMessage, useDisconnect } from "wagmi";

export const useSignLogin = () => {
  const { address } = useAccount();

  const {
    data: accessToken,
    signMessage,
    isError,
    isPending,
    isSuccess,
  } = useSignMessage();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (address) {
      signMessage({ message: "Login to your account" });
    }
  }, [address]);

  useEffect(() => {
    if (isError) {
      disconnect();
    }
  }, [isError, disconnect]);
};
