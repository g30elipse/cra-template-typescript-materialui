import { lazy } from 'react';

/**
 * Import module lazily with suspense. This method is just a sugar coating
 * over the react lazy method.
 * The relative url given as a file name is converted to be imported from this
 * file path.
 * 
 * @param fileName 
 */
const lazyImport = (fileName: string) => {
    let updatedFileName = fileName.replace(/[^\w]*/, '');
    return lazy(() => (import(`./${updatedFileName}`)))
}

export default lazyImport;