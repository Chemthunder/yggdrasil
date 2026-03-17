enum Colors {
    WHITE, // 1
    RED, // 2
    PINK, // 3
    ORANGE, // 4
    YELLOW, // 5
    DARK_CYAN, // 6
    GREEN, // 7
    DARK_BLUE, // 8
    CYAN, // 9
    PURPLE, // 10
    LIGHT_PURPLE, // 11
    DARK_PURPLE, // 12
    SKIN, // 13
    BROWN, // 14
    BLACK // 15
}

namespace yggdrasil {

    /**
    * Clears a given array.
    * @param array The array to clear.
    */
    //% block
    //% group="Other"
    export function clearArray(array: any[]) {
        for (let value of array) {
            array.removeElement(value);
        }
    }

    /**
       * Parses a color from the Colors enum to a number.
       * @param val The Color to parse.
       */
    //% block
    //% group="Other"
    export function colorToNumber(val: Colors): number {
        let finalizedValue;

        switch (val) {
            case(Colors.WHITE): {
                finalizedValue = 1;
                break;
            }
            case (Colors.RED): {
                finalizedValue = 2;
                break;
            }
            case (Colors.PINK): {
                finalizedValue = 3;
                break;
            }
            case (Colors.ORANGE): {
                finalizedValue = 4;
                break;
            }
            case (Colors.YELLOW): {
                finalizedValue = 5;
                break;
            }
            case (Colors.DARK_CYAN): {
                finalizedValue = 6;
                break;
            }
            case (Colors.GREEN): {
                finalizedValue = 7;
                break;
            }
            case (Colors.DARK_BLUE): {
                finalizedValue = 8;
                break;
            }
            case (Colors.CYAN): {
                finalizedValue = 9;
                break;
            }
            case (Colors.PURPLE): {
                finalizedValue = 10;
                break;
            }
            case (Colors.LIGHT_PURPLE): {
                finalizedValue = 11;
                break;
            }
            case (Colors.DARK_PURPLE): {
                finalizedValue = 12;
                break;
            }
            case (Colors.SKIN): {
                finalizedValue = 13;
                break;
            }
            case (Colors.BROWN): {
                finalizedValue = 14;
                break;
            }
            case (Colors.BLACK): {
                finalizedValue = 15;
                break;
            }
        }

        return finalizedValue;
    }

    /**
       * Sets the border, background, and font colors of the Score and Life UIs, along with an image for the life UI.
       * @param borderColor The color of the borders.
       * @param backgroundColor The color of the background.
       * @param fontColor The color of the font.
       * @param lifeImage The image for the lives in the UI.
       */
    //% block
    //% group="Other"
    export function setUi(borderColor: Colors, backgroundColor: Colors, fontColor: Colors, lifeImage?: Image) {
        info.setBorderColor(colorToNumber(borderColor));
        info.setBackgroundColor(colorToNumber(backgroundColor));
        info.setFontColor(colorToNumber(fontColor));

        if (lifeImage != null) {
            info.setLifeImage(lifeImage);
        }
    }
}