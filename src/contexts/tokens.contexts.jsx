import { createContext, useState } from "react";

export const TokensContext = createContext({
  isGetTokens: false,
  setIsGetTokens: () => null,
});

export const TokensProvider = ({ children }) => {
  const [isGetTokens, setIsGetTokens] = useState(false);
  const value = { isGetTokens, setIsGetTokens };
  return (
    <TokensContext.Provider value={value}>{children}</TokensContext.Provider>
  );
};
