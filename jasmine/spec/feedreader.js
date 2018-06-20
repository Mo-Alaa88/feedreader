/* feedreader.js */
$(function() {
   
   describe('RSS Feeds', function() {
       
       it('Defined this', function() {
           expect(allFeeds).toBeDefined();
           expect(allFeeds.length).not.toBe(0);
       });


       it ("URL is Not Empty",function (){
           allFeeds.forEach(function (feed){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
           });
       });

        it ("Name is Not Empty",function (){
           allFeeds.forEach(function(feed){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
           });
        });
   });


   describe("The menu",function(){
   
       // var body = document.body,
       // menu = document.getElementsByClassName(".menu-hidden");
       it("Check Hidden Menu",function(){
           // expect(body.hasClass("menu-hidden")).toBe(true).
           expect($('body').hasClass('menu-hidden')).toEqual(true);
       });

         
       it("the menu display when the menu icon is clicked",function(){
       
           $('.menu-icon-link').click(); // change menu.click();
           expect($('body').hasClass('menu-hidden')).toBe(false); // change expect(body.className).not.toContain("menu-hidden");
           $('.menu-icon-link').click();  // change menu.click();
           expect($('body').hasClass('menu-hidden')).toBe(true);  // change expect(body.className).toContain("menu-hidden");
           
       });
   });

   describe("Initial Entries",function(){

        // https://jasmine.github.io/api/edge/global.html#beforeEach
       beforeEach(function (done) {
           loadFeed(0,function(){
               done();
           });
       });
       it("there is at least a single!!",function(){  //remove done
           expect($('.feed .entry').length).toBeGreaterThan(0);  // put $ instead of document.querySelector
           //done();
       });
   });


   describe("New Feed Selection",function(){
       
       beforeEach(function(done){
           loadFeed(0,function(){
             let  previouFeed = document.querySelector(".feed").innerHTML; // put let
             
                   done();
               });
           });
           
       
       it("loaded",function(){ //remove done
         loadFeed(1,function(){  //new place
         let nextFeed = document.querySelector(".feed").innerHTML; //new place

           expect(previouFeed).not.toBe(nextFeed);
       
           });
       });
   });
 
}());
