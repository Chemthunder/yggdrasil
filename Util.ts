enum Colors {
    WHITE,
    RED,
    PINK,
    ORANGE,
    YELLOW,
    DARK_CYAN,
    GREEN,
    DARK_BLUE,
    CYAN,
    PURPLE,
    LIGHT_PURPLE,
    DARK_PURPLE,
    SKIN,
    BROWN,
    BLACK
}

/*
1 = white,
2 = red,
3 = pink,
4 = orange,
5 = yellow,
6 = dark cyan,
7 = green,
8 = dark blue,
9 = cyan,
10 = purple,
11 = light purple,
12 = dark purple,
13 = skin,
14 = brown,
15 = black
*/



namespace yggdrasil {
    export function clearArray(array: any[]) {
        for (let value of array) {
            array.removeElement(value);
        }
    }

    export function colorToNumber(val: Colors): number {
        let finalizedValue;

        switch (val) {
            case(Colors.WHITE): {
                finalizedValue = 1;
            }
            case (Colors.RED): {
                finalizedValue = 2;
            }
            case (Colors.PINK): {
                finalizedValue = 3;
            }
            case (Colors.ORANGE): {
                finalizedValue = 4;
            }
            case (Colors.YELLOW): {
                finalizedValue = 5;
            }
            case (Colors.DARK_CYAN): {
                finalizedValue = 6;
            }
            case (Colors.GREEN): {
                finalizedValue = 7;
            }
            case (Colors.DARK_BLUE): {
                finalizedValue = 8;
            }
            case (Colors.CYAN): {
                finalizedValue = 9;
            }
            case (Colors.PURPLE): {
                finalizedValue = 10;
            }
            case (Colors.LIGHT_PURPLE): {
                finalizedValue = 11;
            }
            case (Colors.DARK_PURPLE): {
                finalizedValue = 12;
            }
            case (Colors.SKIN): {
                finalizedValue = 13;
            }
            case (Colors.BROWN): {
                finalizedValue = 14;
            }
            case (Colors.BLACK): {
                finalizedValue = 15;
            }
        }

        return finalizedValue;
    }

    export function setUi(borderColor: Colors, backgroundColor: Colors, fontColor: Colors, lifeImage?: Image) {
        info.setBorderColor(colorToNumber(borderColor));
        info.setBackgroundColor(colorToNumber(backgroundColor));
        info.setFontColor(colorToNumber(fontColor));

        if (lifeImage != null) {
            info.setLifeImage(lifeImage);
        }
    }
}