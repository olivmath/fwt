"use client";

import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth/useScaffoldWatchContractEvent";
import { notification } from "~~/utils/fwt/notification";

const Debug: NextPage = () => {
  useScaffoldWatchContractEvent({
    contractName: "Counter",
    eventName: "YouCall",
    onLogs: logs => {
      logs.forEach(log => {
        notification.info(
          `Event YouCall triggered:
          Caller: ${log.args.caller}
          Amount: ${log.args.amount} wei`,
          { duration: 6000 }
        );
      });
    },
  });

  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Debug Contracts</h1>
        <p className="text-neutral">
          You can debug & interact with your deployed contracts here.
          <br /> Check{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
