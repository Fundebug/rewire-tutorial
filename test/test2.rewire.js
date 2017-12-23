var assert = require("assert");
var rewire = require("rewire");
var myModule = rewire("../test2.js")
var add = myModule.add;

var fsMock = {
    writeFileSync: function(file, data, option) { /* 啥也不干 */ }
};

myModule.__set__("fs", fsMock);

it("1加1等于2", function()
{
    let result = add(1, 2);
    assert.equal(result, 3);
});