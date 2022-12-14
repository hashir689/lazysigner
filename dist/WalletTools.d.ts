import { SigningKey } from "@ethersproject/signing-key";
import { Provider } from "@ethersproject/providers";
import { BytesLike, Wallet, Wordlist } from "ethers";
export declare const createNewWallet: () => Wallet;
export declare const recoverWalletFromMnemonic: (mnemonic: string, path?: string | undefined, wordlist?: Wordlist | undefined) => Wallet;
export declare const recoverWalletFromPrivateKey: (privateKey: BytesLike | SigningKey, provider?: Provider | undefined) => Wallet;
