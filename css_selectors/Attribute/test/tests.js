/**
 * HTML/CSS DOM Test, DO NOT CHANGE ANYTHING HERE
 */
describe('Test Suite - Test your Attribute CSS Rules', () => {
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

    it("Test if first DIV element is blue and bold", function () {
        let firstDiv = testDocument.find("body").find("div").first();
        should.exist(firstDiv);
        // We use a dummy meta element to get to computed values of a browser
        let dummyMeta = $("meta");
        dummyMeta.css("color", "blue");
        firstDiv.css("color").should.equal(dummyMeta.css("color"));
        dummyMeta.css("font-weight", "bold");
        firstDiv.css("font-weight").should.equal(dummyMeta.css("font-weight"));
    });
});