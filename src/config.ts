export const config = {
  // Contract Address ======================================== //
  contract_address: '0xb7D405BEE01C70A9577316C1B9C2505F146e8842',
  //
  // uncomment the 2 lines above to use local images instead of retrieving images from ipfs for each tweet
  use_local_images: true,
  local_image_path: './token_images/',
  //
  // this is a configuration for the phunk bid demo extension
  local_bids_image_path: './bids_images/',
  //
  // Fiat Conversion Currency ================================ //
  // Available Options: ====================================== //
  // usd, aud, gbp, eur, cad, jpy, cny ======================= //
  currency: 'usd',
  // Message ================================================= //
  // Available Parameters: =================================== //
  // <tokenId> ==================== Token ID of transfered NFT //
  // <ethPrice> ================= Value of transactions in eth //
  // <fiatPrice> =============== Value of transactions in fiat //
  // <txHash> =========================== The transaction hash //
  // <from> ===================================== From address //
  // <to> ========================================= To address //
  saleMessage: 'V3 Phunk #<tokenId> was sold for <ethPrice> (<fiatPrice>)\n\nfrom: <from>\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\nhttps://x2y2.io/eth/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\nhttps://looksrare.org/collections/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\n\n#v3Phunks #Phunks #NFT',
  bidMessage: 'V3 Phunk #<tokenId> received a bid for <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\nhttps://x2y2.io/eth/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\nhttps://looksrare.org/collections/0xb7D405BEE01C70A9577316C1B9C2505F146e8842/<tokenId>\n',
  // Prefer ENS over 0x address (Uses more Alchemy requests) = //
  // Available Options: ====================================== //
  // true, false ============================================= //
  ens: true,
  // Include free mints in tweets ============================ //
  // Available Options: ====================================== //
  // true, false ============================================= //
  includeFreeMint: false,
};
