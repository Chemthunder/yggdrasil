class Branch {
    // storing multiple keys and transporting them.

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
        return keysToUnpack;
    }



    unpackKeyAtValue(num: number): Key {
        let toExport: Key = null;

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
            Yggdrasil.stop("Failure to unpack Key at value: " + num);
        }

        return toExport;
    }
}

class BranchList {
    // storing multiple keys and transporting them.
    _keyList: Key[];

    constructor(keyList: Key[]) {
        this._keyList = keyList;
    }


    get keyList(): Key[] {
        return this._keyList;
    }

    unpack(): Key[] {
        const keysToUnpack: Key[] = this.keyList;
        return keysToUnpack;
    }

    unpackKeyAtValue(num: number): Key {
        let toExport = null;

        toExport = this.keyList[num];
        return toExport;
    }
}