/*
Spools are ways of retrieving functions or smth idfk
ways of transforming a constant into a static or smth?

attatching keys to sprites. sort of like CCA's entity components;
*/


class Spool {
    attachedSprite: Sprite;
    _content: any;

    constructor(content: any) {
        this._content = content;
    }

    get sprite(): Sprite {
        return this.attachedSprite;
    }

    get content(): any {
        return this._content;
    }

    addTo(sprite: Sprite) {
        this.attachedSprite = sprite;
        console.log(this.attachedSprite.toString());
    }
}

let testTarget = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`);

let testSpool = new Spool("a");

testSpool.addTo(testTarget);

