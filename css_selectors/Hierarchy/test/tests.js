/**
 * HTML/CSS DOM Test, DO NOT CHANGE ANYTHING HERE
 *
 */

describe('Test Suite - Test of Hierarchy CSS Rules', () => {
    let testDocument = null;
    before(function (done) {
        window.onload = function () {
            testDocument = $(document.getElementById("testDom").contentWindow.document);
            done();
        };
    });

    it("Test if setup works", function () {
        let body = testDocument.find("body");
        let dummyMeta = $("meta");
        //Using dummy tag to access browser calculated values
        dummyMeta.css("color","red");
        should.exist(body);
        body.css("color","red");
        body.css("color").should.equal(dummyMeta.css("color"));
        body.css("color","");
    });
});
