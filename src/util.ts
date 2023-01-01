/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/**
 * @param {string} ratio to check if match `number:number` pattern
*/
const isRatio = (ratio: string): boolean => !!ratio.match(/^\d*:\d*$/i);

/**
 * @param {number} width width of the screen size / image
 * @param {number} height height of the screen size / image
 * @param {string} [separator]
 * @returns {string} ratio of `width` and `height`
 * 
 * @example
 *  console.log(toRatio(1920, 1080)); // 16:9
 *  console.log(toRatio(1920, 1080, "/")); // 16/9
 */
const toRatio = (width: number, height: number, separator?: string): string => {
    if (typeof width !== "number" && typeof height !== "number") {
        throw new Error(`ratio (${typeof width}) must be number && width (${typeof height}) must be number`);
    }
    const gcdvalue = gcd(width, height);
    return `${width / gcdvalue}${separator ? separator : ":"}${height / gcdvalue}`;
}

/**
 * @param {string} ratio ratio of screen size / image
 * @param {number} height height of screen size / image
 * @returns {number} `width` of screen size / image
 * 
 * @example
 *  console.log(toWidth("16:9", 1080)); // 1920
 */
const toWidth = (ratio: string, height: number): number => {
    if (typeof ratio !== "string" && typeof height !== "number") {
        throw new Error(`ratio (${typeof ratio}) must be string & height (${typeof height}) must be number`);
    }
    if (!isRatio(ratio)) {
        throw new Error("ratio does not match (number:number)");
    }
    const [aW, aH] = ratio.split(':');
    return ~~((height / +aH) * +aW);
}

/**
 * @param {string} ratio ratio of screen size / image
 * @param {number} width width of screen size / image
 * @returns {number} `height` of screen size / image
 * 
 * @example
 *  console.log(toHeight("16:9", 1920)); // 1080
 */
const toHeight = (ratio: string, width: number): number => {
    if (typeof ratio !== "string" && typeof width !== "number") {
        throw new Error(`ratio (${typeof ratio}) must be string & width (${typeof width}) must be number`);
    }
    if (!isRatio(ratio)) {
        throw new Error("ratio does not match (number:number)");
    }
    const [aW, aH] = ratio.split(':');
    return ~~((width / +aW) * +aH);
}

export {
    toRatio,
    toWidth,
    toHeight
}