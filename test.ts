// tests go here; this will not be compiled when this package is used as an extension.

namespace test {
    let testInit = theseus.createProject("Test");
    let initKey = new InitializerKey(testInit);

    let testKey = new StringKey("wawa");

    let str = testKey.unpack();
    testInit.log(str);
    testLoad();


    function testLoad() {
        let testSprite = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
        `);
        let testSpriteKey = new SpriteKey(testSprite);
        testInit.log(testSprite.toString());

        testBoot(testSpriteKey.unpack());
    }

    function testBoot(sprite: Sprite) {
        controller.moveSprite(sprite);
        testInit.log(sprite.toString());
    }

    let secondTestKey = new StringKey("wawa1");

    let branchTest = new Branch(secondTestKey);

    let strTest = branchTest.unpackKeyAtValue(1);

    testInit.log(strTest.unpack());
}