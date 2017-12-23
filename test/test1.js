var assert  = require("assert");


// 测试公有函数add
var add = require("../test1.js").add;

it("1加1等于2", function()
{
    var result = add(1, 1);
    assert.equal(result, 2);
});


// 测试私有函数sub
var rewire = require("rewire");
var sub = rewire("../test1.js").__get__("sub");

it("2减1等于1", function()
{
    var result = sub(2, 1);
    assert.equal(result, 1);
});
