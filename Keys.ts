/* All main Key classes. */
class StringKey extends Key {
    _str: string;
    constructor(str: string) {
        super(str);
        this._str = str;
    }
}
class NumberKey extends Key {
    _num: number;
    constructor(num: number) {
        super(num);
        this._num = num;
    }
}
class ArrayKey extends Key {
    _array: any[];
    constructor(array: any[]) {
        super(array);
        this._array = array;
    }
}
class SpriteKey extends Key {
    _sprite: Sprite;
    constructor(sprite: Sprite) {
        super(sprite);
        this._sprite = sprite;
    }
}
class FunctionKey extends Key {
    _function: Function;
    constructor(func: Function) {
        super(func);
        this._function = func;
    }
}
class MiscKey extends Key {
    _misc: any;
    constructor(misc: any) {
        super(misc);
        this._misc = misc;
    }
}
class TilemapKey extends Key {
    _tilemap: tiles.TileMap;
    constructor(tilemap: tiles.TileMap) {
        super(tilemap);
        this._tilemap = tilemap;
    }
}
class ImageKey extends Key {
    _img: Image;
    constructor(img: Image) {
        super(img);
        this._img = img;
    }
}
class MelodyKey extends Key {
    _melody: music.Melody;
    constructor(melody: music.Melody) {
        super(melody);
        this._melody = melody;
    }
}
class ProjectKey extends Key {
    _init: Project;
    constructor(init: Project) {
        super(init);
        this._init = init;
    }
}