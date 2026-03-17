class Spool {
    _attachedSprite: Sprite;
    _content: any;

    constructor(content: any) {
        this._content = content;
    }

    get sprite(): Sprite {return this._attachedSprite;}
    get content(): any { return this._content; }
    
    set sprite(input: Sprite) {
        this._attachedSprite = input;
    }

    addTo(spriteToAdd: Sprite) {
        this.sprite = spriteToAdd;
    }

    removeFrom() {
        this.sprite = null;
    }

    getSprite(): Sprite {
        return this.sprite;
    }
}

class KeySpool {
    _attachedSprite: Sprite;
    _content: Key;

    constructor(content: Key) {
        this._content = content;
    }

    get sprite(): Sprite {return this._attachedSprite;}
    get content(): Key { return this._content; }

    set sprite(input: Sprite) {
        this._attachedSprite = input;
    }

    addTo(spriteToAdd: Sprite) {
        this.sprite = spriteToAdd;
    }

    removeFrom() {
        this.sprite = null;
    }

    getSprite(): Sprite {
        return this.sprite;
    }
}