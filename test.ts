// tests go here; this will not be compiled when this package is used as an extension.

namespace test {
    let testInit = theseus.createProject("Test");

    let testKey = new StringKey("wawa");

    let str = testKey.unpack();
    testInit.log(str);
}