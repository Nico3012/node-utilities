import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** @param {string} importMetaUrl @returns {(relativeUnixPathname: string) => string} */
export const createGetJoinedAbsolutePathname = (importMetaUrl) => {
    const directoryPathname = dirname(fileURLToPath(importMetaUrl));

    /**
     * this function only makes sense for relative paths
     * absolute paths are NEVER platform independent
     * @param {string} relativeUnixPathname - ./dir/file.ext
     * @returns {string} - windows: 'C:\\dir\\file.ext' unix: '/dir/file.ext'
     */
    return (relativeUnixPathname) => {
        return join(directoryPathname, ...relativeUnixPathname.split("/"));
    };
};
