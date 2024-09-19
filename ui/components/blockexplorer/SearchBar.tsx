import { useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { localhost } from "wagmi/chains";
import { getLocalProvider } from "~~/utils/scaffold-eth";
import DOMPurify from "dompurify";

const provider = getLocalProvider(localhost);
export const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    const sanitizedInput = DOMPurify.sanitize(searchInput);
    if (ethers.utils.isHexString(sanitizedInput)) {
      try {
        const tx = await provider?.getTransaction(sanitizedInput);
        if (tx) {
          router.push(`/blockexplorer/transaction/${sanitizedInput}`);
          return;
        }
      } catch (error) {
        console.error("Failed to fetch transaction:", error);
      }
    }

    if (ethers.utils.isAddress(sanitizedInput)) {
      router.push(`/blockexplorer/address/${sanitizedInput}`);
      return;
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-end mb-5 space-x-3">
      <input
        className="border-primary bg-base-100 text-base-content p-2 mr-2 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
        type="text"
        value={searchInput}
        placeholder="Search by hash or address"
        onChange={e => setSearchInput(e.target.value)}
      />
      <button className="btn btn-sm btn-primary" type="submit">
        Search
      </button>
    </form>
  );
};
