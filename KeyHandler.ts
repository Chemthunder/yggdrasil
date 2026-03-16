/* Central Key class. */
class Key {
    _content: any;

    constructor(content: any) {
        this._content = content;
    }

    private get content(): any {
        return this._content;
    }

    private set content(input: any) {
        this.content = input;
    }

    unpack(): any {
        try {
            return this.content;
        } catch {
            Yggdrasil.stop("Failure to unpack " + this);
        }
    }
}