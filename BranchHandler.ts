class Branch {
    _firstKey: Key;
    _secondKey: Key;
    _thirdKey: Key;

    constructor(firstKey?: Key, secondKey?: Key, thirdKey?: Key) {
        this._firstKey = firstKey;
        this._secondKey = secondKey;
        this._thirdKey = thirdKey;
    }

    get firstKey(): Key {
        return this._firstKey;
    }

    get secondKey(): Key {
        return this._secondKey;
    }

    get thirdKey(): Key {
        return this._thirdKey;
    }

    unpack(): Key[] {
        const keysToUnpack: Key[] = [this.firstKey, this.secondKey, this.thirdKey];
        if (keysToUnpack == null) Yggdrasil.stop("Failure to unpack keys from " + this);
        return keysToUnpack;
    }

    unpackKeyAtValue(num: number): Key {
        let toExport: Key;
        try {
            switch (num) {
                case (1): {
                    toExport = this.firstKey;
                    break;
                }
                case (2): {
                    toExport = this.secondKey;
                    break;
                }
                case (3): {
                    toExport = this.thirdKey;
                    break;
                }
            }
        } catch {
            Yggdrasil.stop("Failure to unpack " + this + " at value: " + num);
        }
        return toExport;
    }
}

class BranchList {
    _keyList: Key[];

    constructor(keyList: Key[]) {
        this._keyList = keyList;
    }

    get keyList(): Key[] {
        return this._keyList;
    }

    unpack(): Key[] {
        const keysToUnpack: Key[] = this.keyList;
        if (keysToUnpack == null) Yggdrasil.stop("Failure to unpack keys from Branch: " + this);
        return keysToUnpack;
    }

    unpackKeyAtValue(num: number): Key {
        let toExport: Key = this.keyList[num];
        if (toExport == null) Yggdrasil.stop("Failure to unpack key list from Branch: " + this);
        return toExport;
    }
}