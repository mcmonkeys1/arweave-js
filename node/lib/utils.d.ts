export declare type Base64UrlString = string;
export declare function concatBuffers(buffers: Uint8Array[] | ArrayBuffer[]): Uint8Array;
export declare function b64UrlToString(b64UrlString: string): string;
export declare function bufferToString(buffer: Uint8Array | ArrayBuffer): string;
export declare function stringToBuffer(string: string): Uint8Array;
export declare function stringToB64Url(string: string): string;
export declare function b64UrlToBuffer(b64UrlString: string): Uint8Array;
export declare function bufferTob64(buffer: Uint8Array): string;
export declare function bufferTob64Url(buffer: Uint8Array): string;
export declare function b64UrlEncode(b64UrlString: string): string;
export declare function b64UrlDecode(b64UrlString: string): string;
