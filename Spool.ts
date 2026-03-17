class BaseSpool { // used for compat
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(str: string) {
        this.name = str;
    }
}

class Spool extends BaseSpool {
    _attachedSprite: Sprite;
    _content: any;

    constructor(content: any) {
        super("Spool");
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

class KeySpool extends BaseSpool {
    _attachedSprite: Sprite;
    _content: Key;

    constructor(content: Key) {
        super("KeySpool");
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