// tests go here; this will not be compiled when this package is used as an extension.

namespace test {
    let Test = theseus.createProject("Test");

    let keyList:Key[] = [
        new StringKey("a"),
        new StringKey("b")
    ];

    let branchList = yggdrasil.registerBranchWithList(keyList)

    for (let value of branchList.unpack()) {
        Test.log(value.unpack());
    }
}