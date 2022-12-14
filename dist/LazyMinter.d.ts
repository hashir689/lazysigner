import { BigNumber, Contract } from "ethers";
import { TypedDataSigner } from "@ethersproject/abstract-signer";
/**
 * JSDoc typedefs.
 *
 * @typedef {object} Voucher1155
 * @property {ethers.BigNumber | number} tokenId the id of the un-minted NFT
 * @property {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT
 * @property {string} signer The account who signed the signature
 * @property {string} receiver The intended receiver
 * @property {ethers.BigNumber | number} amount The amount of tokens to mint
 * @property {ethers.BigNumber | number} nonce The unique nonce for the voucher
 * @property {ethers.BytesLike} signature an EIP-712 signature of all fields in the NFTVoucher, apart from signature itself.
 */
export interface Voucher1155 {
    tokenId: string;
    minPrice: BigNumber | number;
    signer: string;
    receiver: string;
    amount: BigNumber | number;
    nonce: BigNumber | number;
    signature?: BigNumber | number;
}
/**
 * JSDoc typedefs.
 *
 * @typedef {object} Voucher721
 * @property {ethers.BigNumber | number} tokenId the id of the un-minted NFT
 * @property {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT
 * @property {string} signer The account who signed the signature
 * @property {string} receiver The intended receiver
 * @property {ethers.BytesLike} signature an EIP-712 signature of all fields in the NFTVoucher, apart from signature itself.
 */
export interface Voucher721 {
    tokenId: string;
    minPrice: BigNumber | number;
    signer: string;
    receiver: string;
    signature?: BigNumber | number;
}
export interface IDomain {
    name: string;
    version: string;
    verifyingContract: string;
    chainId: number | string;
}
/**
 * LazyMinter is a helper class that creates NFTVoucher objects and signs them, to be redeemed later by the LazyNFT contract.
 */
export declare class LazyMinter {
    contract: Contract;
    signer: TypedDataSigner;
    _domain: IDomain | undefined;
    /**
     * Create a new LazyMinter targeting a deployed instance of the LazyNFT contract.
     *
     * @param {Object} options
     * @param {ethers.Contract} contract an ethers Contract that's wired up to the deployed contract
     * @param {ethers.Signer} signer a Signer whose account is authorized to mint NFTs on the deployed contract
     */
    constructor({ contract, signer, }: {
        contract: Contract;
        signer: TypedDataSigner;
    });
    /**
     * Creates a new NFTVoucher object for General 721 and signs it using this LazyMinter's signing key.
     *
     * @param {ethers.BigNumber | number} tokenId the id of the un-minted NFT
     * @param {string} uri the metadata URI to associate with this NFT
     * @param {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero
     *
     * @returns {NFTVoucher}
     */
    createVoucher721(voucher: Voucher721): Promise<{
        signature: string;
        tokenId: string;
        minPrice: number | BigNumber;
        signer: string;
        receiver: string;
    }>;
    /**
     * Creates a new NFTVoucher object for General 721 and signs it using this LazyMinter's signing key.
     *
     * @param {ethers.BigNumber | number} tokenId the id of the un-minted NFT
     * @param {string} uri the metadata URI to associate with this NFT
     * @param {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero
     *
     * @returns {NFTVoucher}
     */
    createVoucher1155(voucher: Voucher1155): Promise<{
        signature: string;
        tokenId: string;
        minPrice: number | BigNumber;
        signer: string;
        receiver: string;
        amount: number | BigNumber;
        nonce: number | BigNumber;
    }>;
    /**
     * @private
     * @returns {object} the EIP-721 signing domain, tied to the chainId of the signer
     */
    _signingDomain(): Promise<IDomain>;
}
