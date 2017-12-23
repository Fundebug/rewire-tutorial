var assert = require("assert");
var add = require("../test2.js").add;

it("1加1等于2", function()
{
    let result = add(1, 2);
    assert.equal(result, 3);
});