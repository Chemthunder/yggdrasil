// tests go here; this will not be compiled when this package is used as an extension.

namespace test {
    let Test = geode.register("Test");

    let keyList: Key[] = [
        new StringKey("a"),
        new StringKey("b")
    ];

    let branchList = yggdrasil.registerBranchWithList(keyList)

    for (let value of branchList.unpack()) {
        Test.log(value.unpack());
    }

    let testTarget = sprites.create(img`
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

    let testKey = yggdrasil.packStringKey("wawa");

    let testSpool = yggdrasil.buildKeySpool(testKey);

    testSpool.addTo(testTarget);

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        if (testSpool.getSprite() != null) {
            Test.log(testSpool.unravel());
            testSpool.removeFrom();
        }
    });
}