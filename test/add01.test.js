/*global it */

var add = require("../add1.js");
var assert  = require("assert");

it("1加1等于2", function()
{
    var sum = add(1, 1);
    assert.equal(sum, 2);
});