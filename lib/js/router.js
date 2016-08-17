var _ = require('lodash');
window.$ = window.jQuery = require('jquery');


var Backbone = require('backbone')
var $body = $('body');
var HomeView = require('./views/Home')
var humanArr = [
	{
		name: 'Fetus',
    	age: 0,
    	child: '1'
    },
    {
		name: 'one',
    	age: 1,
    	child: '2'
    },
    {
		name: 'two',
    	age: 2,
    	child: '3'
    },
    {
		name: 'three',
    	age: 3,
    	child: '4'
    }
]
var Human = Backbone.Model.extend({
  defaults: {
    name: 'Fetus',
    age: 0,
    child: ''
  },
  initialize: function(){
    
  }
});
var baby  = new Human({child:'first'});   

var humanCollection = Backbone.Collection.extend({
	model:Human
	
})
    
module.exports = Backbone.Router.extend({

    routes: {
        "riki2": "home",
        "riki": "home2",
        "": "home",
    },

    home: function () {
    	 homeView =  HomeView.extend({
    	 	render: function () {
		        this.$el.html(require("./templates/container.hbs")({}));
		        //this.listView = new EmployeeListView({collection: this.employeeList, el: $(".scroller", this.el)});
		        console.log('after render');
		        return this;
		    }
    	 });
    	 var riki= new homeView({})
    	 $body.append(riki.$el)
        console.log("home2222");
    },
    home2: function () {
    	
    	var huCollection = new humanCollection();
    	_.each(humanArr,function(v){
    		huCollection.add(new Human(v))		
    	})
    	
    	
    	
    	homeView = new HomeView({model:baby,title:'home 2',collection:huCollection});
        console.log("home 2");
        
        $body.append(homeView.el)
    },
});


//curl -b rik2.txt 'https://login.bloomberg.com/login' -H 'Cookie: optimizelyEndUserId=oeu1470190695073r0.7958508710457008; bb_country=CA|1470795496473; oo_inv_percent=0; optimizelySegments=%7B%224375847448%22%3A%22false%22%2C%224391854435%22%3A%22direct%22%2C%224373366517%22%3A%22none%22%2C%224384716416%22%3A%22gc%22%7D; optimizelyBuckets=%7B%226549101020%22%3A%220%22%7D; opt=no-opt; quote_redesign=2; quote_redesign_tm=1470190721; bbg_origin=beta; al_wgt=B; al_wgt_tm=1470190721; article_page_bars=0; article_page_bars_tm=1470190721; markets_video_tab_test=lock; markets_video_tab_tm=1470190721; most_popular_test=A; most_popular_tm=1470190721; rr_reco_201309=t2bb02; rr_reco_201309_tm=1470190721; home_quick_reco_201310_tm=1470190721; regional_201401_time=1470367104; video_reco_201402_bucket=cfu; video_reco_201402_time=1470190721; oven_charts_time=1470190721; conviva_precision_live=a; conviva_precision_live_tm=1470190721; conviva_precision_vod=h; conviva_precision_vod_tm=1470190721; last_merge_req=29824cb5-57ea-430f-af43-4557fdc6b731|D810FCB0ACF1432BAF5EAABB61C3D7D6; _bloomberg_on_rails_session=BAh7BjoPc2Vzc2lvbl9pZCIlNGVkZGU4MTI2NDYzMWVhNTIwZDc3NDQyNTdiYTEwMDg%3D--6f242f25dd6e4d28927ce696a89c305e8de7b9f6; return_to=; SRV2=J05; SRV=JPX01; breg_disqus=eyJpZCI6IiIsInVzZXJuYW1lIjoiIiwiZW1haWwiOiIifQ%3D%3D%3Ad2d07575bb3c13a851cc29fef3c7e8dbe2d2765d%3A1470372469%3ARrnLLM2NlH778pGksrAOpo075Lute2tZx9JxQU9gZScJhk8kfrDiAu9uZj0KP9f1; _registration_session=BAh7CDoPc2Vzc2lvbl9pZCIlMzQwMjcyOTZlOWI0Y2Y5NjBmNDMyMTY1NWYwNjAzYzc6EF9jc3JmX3Rva2VuSSIxbWg2VEppdnlhb0dsdDVodGRBNDJENnE5YkFOcm1nV0c4Y01vNjlrbmxsMD0GOgZFRkkiCmZsYXNoBjsHRklDOidBY3Rpb25Db250cm9sbGVyOjpGbGFzaDo6Rmxhc2hIYXNoewAGOgpAdXNlZHsA--b821f2759c85894099b1c8fe738570cef883ea16; fsr.s={"v":1,"rid":"de35430-94722828-90bf-a71d-2af79","ru":"http://www.bloomberg.com/","r":"www.bloomberg.com","st":"","cp":{"registered_user":"5d3a89ad-ac96-4542-9f0a-4cffcf2ab79f"},"to":5,"c":"http://www.bloomberg.com/markets/watchlist","pv":9,"lc":{"d1":{"v":9,"s":true,"e":9}},"cd":1,"f":1470372480938,"sd":1}; bdfpc=001.5382797029.1470190699; force_re_auth=false; agent_id=dffbf434-2fe7-4171-90dd-2fccfee97cb0; session_id=984077ec-5f1c-43fe-92a7-bd0d8699a388; session_key=7dc1f2d3-ac2f-5710-828e-4eb4dba6d73e; comScore=bb_linkname=Sign%20In&bb_linkpos=Submitted&bb_linktype=bloomberg' -H 'Origin: https://login.bloomberg.com' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.8,af;q=0.6' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.108 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Cache-Control: max-age=0' -H 'Referer: https://login.bloomberg.com/login' -H 'Connection: keep-alive' -H 'DNT: 1' --data 'authenticity_token=mh6TJivyaoGlt5htdA42D6q9bANrmgWG8cMo69knll0%3D&user_session%5Bemail%5D=frederick.rosales%40gmail.com&user_session%5Bpassword%5D=rosales1&user_session%5Bremember_me%5D=0' --compressed