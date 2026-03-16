
/**
 * Yggdrasil blocks
 */
//% weight=30 color=#67cfa4 icon="\uf0ac"
namespace yggdrasil {


    /**
     * Creates a new StringKey with the value inside.
     * @param str The string to pack.
     */
    //% block
    export function packStringKey(str: string): StringKey {
        let createdKey = new StringKey(str);
        return createdKey;
    }

    /**
     * Creates a new NumberKey with the value inside.
     * @param num The number to pack.
    */
    //% block
    export function packNumberKey(num: number): NumberKey {
        let createdKey = new NumberKey(num);
        return createdKey;
    }

    /**
     * Creates a new ArrayKey with the value inside.
     * @param array The array to pack.
    */
    //% block
    export function packArrayKey(array: any[]): ArrayKey {
        let createdKey = new ArrayKey(array);
        return createdKey;
    }

    /**
     * Creates a new SpriteKey with the value inside.
     * @param spr The sprite to pack.
    */
    //% block
    export function packSpriteKey(spr: Sprite): SpriteKey {
        let createdKey = new SpriteKey(spr);
        return createdKey;
    }
}