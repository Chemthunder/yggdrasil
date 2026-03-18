const Yggdrasil = geode.register("Yggdrasil");
let shouldWarn: boolean = false;

// group="Create"
// blockId=spritescreate block="sprite %img=screen_image_picker of kind %kind=spritekind"
// expandableArgumentMode=toggle
// blockSetVariable=mySprite
// weight=100 help=sprites/create



/**
 * Yggdrasil allows for easy transfers of variables, and so much more.
 */
//% groups='["Keys", "Branches", "Spools", "Other"]'
//% weight=30 color=#67cfa4 icon="\uf0ac"
namespace yggdrasil {
    /**
     * Creates a new StringKey with the value inside.
     * @param str The string to pack.
     */
    //% block="pack string key with $str"
    //% blockId=yggstringkey
    //% str.defl=contents
    //% weight=97
    //% blockSetVariable=myStringKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packStringKey(str: string): StringKey {
        let createdKey = new StringKey(str);
        return createdKey;
    }

    /**
     * Creates a new NumberKey with the value inside.
     * @param num The number to pack.
    */
    //% block="pack number key with $num"
    //% blockId=yggnumberkey
    //% num.defl=0
    //% weight=96
    //% blockSetVariable=myNumberKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packNumberKey(num: number): NumberKey {
        let createdKey = new NumberKey(num);
        return createdKey;
    }

    /**
     * Creates a new BooleanKey with the value inside.
     * @param bool The boolean to pack.
    */
    //% block="pack boolean key with $bool"
    //% blockId=yggbooleankey
    //% bool.defl=true
    //% weight=95
    //% blockSetVariable=myBooleanKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packBooleanKey(bool: boolean): BooleanKey {
        let createdKey = new BooleanKey(bool);
        return createdKey;
    }

    /**
     * Creates a new ArrayKey with the value inside.
     * @param array The array to pack.
    */
    //% block="pack array key with $array"
    //% blockId=yggarraykey
    //% array.defl=myArray
    //% blockSetVariable=myArrayKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packArrayKey(array: any[]): ArrayKey {
        let createdKey = new ArrayKey(array);
        return createdKey;
    }

    /**
     * Creates a new SpriteKey with the value inside.
     * @param spr The sprite to pack.
    */
    //% block="pack sprite key with $sprite"
    //% blockId=yggspritekey
    //% sprite.defl=mySprite
    //% weight=94
    //% blockSetVariable=mySpriteKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packSpriteKey(sprite: Sprite): SpriteKey {
        let createdKey = new SpriteKey(sprite);
        return createdKey;
    }

    /**
     * Creates a new FunctionKey with the value inside.
     * @param func The function to pack.
    */
    //% block="pack function key with $func"
    //% blockId=yggfunctionkey
    //% func.defl=myFunction
    //% weight=56
    //% blockSetVariable=myFunctionKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packFunctionKey(func: Function): FunctionKey {
        let createdKey = new FunctionKey(func);
        return createdKey;
    }

    /**
     * Creates a new TilemapKey with the value inside.
     * @param tile The tilemap to pack.
    */
    //% block="pack tilemap key with $tilemap"
    //% blockId=yggtilemapkey
    //% tile.defl=myTilemap
    //% weight=48
    //% blockSetVariable=myTilemapKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packTilemapKey(tile: tiles.TileMap): TilemapKey {
        let createdKey = new TilemapKey(tile);
        return createdKey;
    }

    /**
     * Creates a new ImageKey with the value inside.
     * @param img The image to pack.
    */
    //% block="pack image key with $img"
    //% blockId=yggimagekey
    //% img.defl=myImage
    //% weight=93
    //% blockSetVariable=myImageKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packImageKey(img: Image): ImageKey {
        let createdKey = new ImageKey(img);
        return createdKey;
    }

    /**
     * Creates a new MelodyKey with the value inside.
     * @param mel The melody to pack.
    */
    //% block="pack melody key with $melody"
    //% blockId=yggmelodykey
    //% melody.defl=myMelody
    //% weight=50
    //% blockSetVariable=myMelodyKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packMelodyKey(melody: music.Melody): MelodyKey {
        let createdKey = new MelodyKey(melody);
        return createdKey;
    }

    /**
     * Creates a new ProjectKey with the value inside.
     * @param project The Project to pack.
    */
    //% block="pack Project key with $project"
    //% blockId=yggprojectkey
    //% project.defl=Project
    //% advanced=true
    //% weight=53
    //% blockSetVariable=myProjectKey
    //% expandableArgumentMode=toggle
    //% group="Keys"
    export function packProjectKey(project: Project): ProjectKey {
        let createdKey = new ProjectKey(project);
        return createdKey;
    }

    /**
     * Creates a new MiscKey with the value inside.
     * MiscKeys can contain any form of variable.
     * @param val The value to pack.
    */
    //% block="pack misc key with $value"
    //% blockId=yggmisckey
    //% val.defl=myValue
    //% advanced=true
    //% weight=55
    //% blockSetVariable=myMiscKey
    //% expandableArgumentMode=toggle
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
    //% block="register a branch with $key1, $key2, $key3"
    //% blockId=yggbranchdefault
    //% key1.defl=myKey
    //% key2.defl=myKey2
    //% key3.defl=myKey3
    //% blockSetVariable=myBranch
    //% expandableArgumentMode=toggle
    //% group="Branches"
    export function registerBranch(key1?: Key, key2?: Key, key3?: Key): Branch {
        let createdBranch = new Branch(key1, key2, key3);
        return createdBranch;
    }

    /**
     * Creates a Branch with the list given.
     * @param keyList The list to pack.
    */
    //% block="register a branch with a $keyList"
    //% blockId=yggbranchlist
    //% keyList.defl=myKeyList
    //% blockSetVariable=myBranch
    //% expandableArgumentMode=toggle
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
    //% block="build a spool with $value attached to $sprite"
    //% blockId=yggspooldefault
    //% value.defl=myValue
    //% sprite.defl=mySprite
    //% blockSetVariable=mySpool
    //% expandableArgumentMode=toggle
    //% group="Spools"
    export function buildSpool(value: any, sprite?: Sprite): Spool {
        let createdSpool = new Spool(value);
        if (sprite != null) createdSpool.addTo(sprite);

        if (shouldWarn) {
            Yggdrasil.log("Spools are experimental! Usage of experimental features may cause issues! To disable this message, set the 'shouldWarn' boolean to false.", LogTypes.WARN);
        }
        return createdSpool;
    }

    /**
    * Creates a Spool with the values given.
    * @param contentToPack The key to pack into the Spool.
    * @param sprite The sprite to attach the Spool to, if needed. Optional.
    */
    //% block="build a spool with $key attached to $sprite"
    //% blockId=yggspoolkey
    //% value.defl=myValue
    //% sprite.defl=mySprite
    //% blockSetVariable=mySpool
    //% expandableArgumentMode=toggle
    //% group="Spools"
    export function buildKeySpool(value: Key, sprite?: Sprite): KeySpool {
        let createdSpool = new KeySpool(value);
        if (sprite != null) createdSpool.addTo(sprite);

        if (shouldWarn) {
            Yggdrasil.log("Spools are experimental! Usage of experimental features may cause issues! To disable this message, set the 'shouldWarn' boolean to false.", LogTypes.WARN);
        }
        return createdSpool;
    }
}