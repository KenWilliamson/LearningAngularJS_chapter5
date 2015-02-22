describe("Blog Application Test", function(){
    it("should test the main blog page", function(){
        
        browser.get("http://localhost:8383/AngularJsBlogChapter5/");
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        
        //gets the blog list
        var blogList = element.all(by.repeater('blogPost in blogList'));
        
        //test the size of the blogList
        expect(blogList.count()).toEqual(2);
        
        
        browser.get("http://localhost:8383/AngularJsBlogChapter5/#!/blogPost/1");
        expect(browser.getTitle()).toEqual("AngularJS Blog");
        
        //gets the comment list
        var commentList = element.all(by.repeater('comment in blogEntry.comments'));
        
        //checks the size of the commentList
        expect(commentList.count()).toEqual(2);
        
        
    });
});