const Yggdrasil = geode.register("Yggdrasil");
let shouldWarn: boolean = false;

/**
 * Yggdrasil blocks
 */
//% groups='["Keys", "Branches", "Spools", "Other"]'
//% weight=30 color=#67cfa4 icon="\uf0ac"
namespace yggdrasil {
    /**
     * Creates a new StringKey with the value inside.
     * @param str The string to pack.
     */
    //% block
    //% group="Keys"
    export function packStringKey(str: string): StringKey {
        let createdKey = new StringKey(str);
        return createdKey;
    }

    /**
     * Creates a new NumberKey with the value inside.
     * @param num The number to pack.
    */
    //% block
    //% group="Keys"
    export function packNumberKey(num: number): NumberKey {
        let createdKey = new NumberKey(num);
        return createdKey;
    }

    /**
     * Creates a new ArrayKey with the value inside.
     * @param array The array to pack.
    */
    //% block
    //% group="Keys"
    export function packArrayKey(array: any[]): ArrayKey {
        let createdKey = new ArrayKey(array);
        return createdKey;
    }

    /**
     * Creates a new SpriteKey with the value inside.
     * @param spr The sprite to pack.
    */
    //% block
    //% group="Keys"
    export function packSpriteKey(spr: Sprite): SpriteKey {
        let createdKey = new SpriteKey(spr);
        return createdKey;
    }

    /**
     * Creates a new FunctionKey with the value inside.
     * @param func The function to pack.
    */
    //% block
    //% group="Keys"
    export function packFunctionKey(func: Function): FunctionKey {
        let createdKey = new FunctionKey(func);
        return createdKey;
    }

    /**
     * Creates a new TilemapKey with the value inside.
     * @param tile The tilemap to pack.
    */
    //% block
    //% group="Keys"
    export function packTilemapKey(tile: tiles.TileMap): TilemapKey {
        let createdKey = new TilemapKey(tile);
        return createdKey;
    }

    /**
     * Creates a new ImageKey with the value inside.
     * @param img The image to pack.
    */
    //% block
    //% group="Keys"
    export function packImageKey(img: Image): ImageKey {
        let createdKey = new ImageKey(img);
        return createdKey;
    }

    /**
     * Creates a new MelodyKey with the value inside.
     * @param mel The melody to pack.
    */
    //% block
    //% group="Keys"
    export function packMelodyKey(mel: music.Melody): MelodyKey {
        let createdKey = new MelodyKey(mel);
        return createdKey;
    }

    /**
     * Creates a new ProjectKey with the value inside.
     * @param project The Project to pack.
    */
    //% block
    //% group="Keys"
    export function packProjectKey(project: Project): ProjectKey {
        let createdKey = new ProjectKey(project);
        return createdKey;
    }

    /**
     * Creates a new MiscKey with the value inside.
     * @param val The value to pack.
    */
    //% block
    //% group="Keys"
    export function packMiscKey(val: any): MiscKey {
        let createdKey = new MiscKey(val);
        return createdKey;
    }

    /**
     * Creates a Branch with the values given.
     * @param key1 The first key to pack.
     * @param key2 The second key to pack.
     * @param key3 The third key to pack.
    */
    //% block
    //% group="Branches"
    export function registerBranch(key1?: Key, key2?: Key, key3?: Key): Branch {
        let createdBranch = new Branch(key1, key2, key3);
        return createdBranch;
    }

    /**
     * Creates a Branch with the list given.
     * @param keyList The list to pack.
    */
    //% block
    //% group="Branches"
    export function registerBranchWithList(keyList: Key[]): BranchList {
        let createdBranch = new BranchList(keyList);
        return createdBranch;
    }

    /**
     * Creates a Spool with the values given.
     * @param contentToPack The data to pack into the Spool.
     * @param spriteToAttachTo The sprite to attach the Spool to, if needed. Optional.
    */
    //% block
    //% group="Spools"
    export function buildSpool(contentToPack: any, spriteToAttachTo?: Sprite): Spool {
        let createdSpool = new Spool(contentToPack);
        if (spriteToAttachTo != null) createdSpool.addTo(spriteToAttachTo);

        if (shouldWarn) {
            Yggdrasil.log("Spools are experimental! Usage of experimental features may cause issues! To disable this message, set the 'shouldWarn' boolean to false.", LogTypes.WARN);
        }
        return createdSpool;
    }

    /**
    * Creates a Spool with the values given.
    * @param contentToPack The key to pack into the Spool.
    * @param spriteToAttachTo The sprite to attach the Spool to, if needed. Optional.
    */
    //% block
    //% group="Spools"
    export function buildKeySpool(contentToPack: Key, spriteToAttachTo?: Sprite): KeySpool {
        let createdSpool = new KeySpool(contentToPack);
        if (spriteToAttachTo != null) createdSpool.addTo(spriteToAttachTo);

        if (shouldWarn) {
            Yggdrasil.log("Spools are experimental! Usage of experimental features may cause issues! To disable this message, set the 'shouldWarn' boolean to false.", LogTypes.WARN);
        }
        return createdSpool;
    }
}