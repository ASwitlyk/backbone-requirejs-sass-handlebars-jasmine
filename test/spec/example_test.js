describe("Load RequireJS modules using Jasmine 2.0 async", function() {

  // Each spec within this suite shares the same "this" object

  beforeEach(function(done) {

    // point that to shared this object
    var that = this;

    require(['jquery', 'backbone'], function($, backbone) {
      // share AMD loaded variables
      that.$ = $;
      that.Backbone = backbone;
      done();
    });

  });

  it("Should load dependencies", function() {
    expect(this.$).toBeDefined();
    expect(this.Backbone).toBeDefined();
  });

});
