import BaseConverter from 'bs58';

export async function verifyWalletSignature(
  walletAddress: string,
  message: string,
  signature: string
): Promise<boolean> {
  try {
    // Convert base58 signature to Uint8Array
    const signatureBytes = BaseConverter.decode(signature);
    console.log('Signature Bytes:', signatureBytes);

    // Convert message to Uint8Array
    const messageBytes = new TextEncoder().encode(message);
    console.log('Message Bytes:', messageBytes);

    // Convert base58 wallet address to Uint8Array
    const encodedWalletAddress = BaseConverter.decode(walletAddress);
    console.log('Encoded Wallet Address:', encodedWalletAddress);
    
    // Import the public key from the wallet address
    const publicKey = await crypto.subtle.importKey(
      'raw',
      encodedWalletAddress,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['verify']
    );
    console.log('Public Key:', publicKey);

    // Verify the signature
    const isValid = await crypto.subtle.verify(
      { name: 'ECDSA', hash: 'SHA-256' },
      publicKey,
      signatureBytes,
      messageBytes
    );
    console.log('Signature Valid:', isValid);

    return isValid;
  } catch (error) {
    console.error('Signature verification failed:', error);
    return false;
  }
}