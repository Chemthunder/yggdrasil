class Spool {
    _attachedSprite: Sprite;
    _content: any;

    constructor(content: any) {
        this._content = content;
    }

    private get sprite(): Sprite {return this._attachedSprite;}
    private get content(): any { return this._content; }
    
    private set sprite(input: Sprite) {
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

    hasSpool(sprite: Sprite): boolean {
        return this.getSprite() == sprite;
    }

    unravel(): any {
        if (this.getSprite() != null) {
            try {
                return this.content;
            } catch {
                Yggdrasil.stop("Cannot unravel Spool: " + this);
            }
        }
    }
}

class KeySpool {
    _attachedSprite: Sprite;
    _content: Key;

    constructor(content: Key) {
        this._content = content;
    }

    private get sprite(): Sprite {return this._attachedSprite;}
    private get content(): Key { return this._content; }

    private set sprite(input: Sprite) {
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

    hasSpool(sprite: Sprite): boolean {
        return this.getSprite() == sprite;
    }

    unravel(): any {
        if (this.getSprite() != null) {
            try {
                return this.content.unpack();
            } catch {
                Yggdrasil.stop("Cannot unravel Spool: " + this);
            }
        }
    }
}

class BranchSpool {
    _attachedSprite: Sprite;
    _content: Branch;

    constructor(content: Branch) {
        this._content = content;
    }

    private get sprite(): Sprite { return this._attachedSprite; }
    private get content(): Branch { return this._content; }

    private set sprite(input: Sprite) {
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

    hasSpool(sprite: Sprite): boolean {
        return this.getSprite() == sprite;
    }

    unravel(): any {
        if (this.getSprite() != null) {
            try {
                return this.content;
            } catch {
                Yggdrasil.stop("Cannot unravel Spool: " + this);
            }
        }
    }
}