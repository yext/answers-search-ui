import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a uuid.
 * 
 * @returns {String}
 */
export function uuid() {
    return uuidv4();
}