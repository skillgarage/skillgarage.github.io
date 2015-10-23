!function(angular,a){"use strict";angular.module("skillgarage",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ngRoute","ngMaterial","ui.router","angular-loading-bar","slugifier","ngMdIcons","app.core","app.rating","app.webapp"])}(angular),angular.module("app.env",[]).constant("API",{name:"production",deploymentUUID:"52e609cf-560d-4b32-b35a-f5b271b6cdcf",href:"http://127.0.0.1:8000/webapp/"}),function(angular,a){"use strict";angular.module("app.core",["app.core.disqus","app.core.slides","app.core.youtube","app.core.gist"])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.config(["cfpLoadingBarProvider",function(a){a.includeSpinner=!1}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.config(["$provide","$locationProvider",function(a,b){}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core.disqus",[]);b.directive("appDisqusComments",["$window","$document",function(a,b){return{restrict:"E",scope:{disqus_shortname:"@disqusShortname",disqus_identifier:"@disqusIdentifier",disqus_title:"@disqusTitle",disqus_url:"@disqusUrl",disqus_category_id:"@disqusCategoryId",disqus_disable_mobile:"@disqusDisableMobile",disqus_config_language:"@disqusConfigLanguage",disqus_remote_auth_s3:"@disqusRemoteAuthS3",disqus_api_key:"@disqusApiKey",readyToBind:"@"},template:'<div id="disqus_thread" style="padding:10px"></div><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>',link:function(b,c,d){if("undefined"==typeof b.disqus_identifier||"undefined"==typeof b.disqus_url)throw"Please ensure that the `disqus-identifier` and `disqus-url` attributes are both set.";b.$watch("readyToBind",function(c){if(angular.isDefined(c)||(c="true"),b.$eval(c))if(a.disqus_shortname=b.disqus_shortname,a.disqus_identifier=b.disqus_identifier,a.disqus_title=b.disqus_title,a.disqus_url=b.disqus_url,a.disqus_category_id=b.disqus_category_id,a.disqus_disable_mobile=b.disqus_disable_mobile,a.disqus_config=function(){this.language=b.disqus_config_language,this.page.remote_auth_s3=b.disqus_remote_auth_s3,this.page.api_key=b.disqus_api_key},a.DISQUS)a.DISQUS.reset({reload:!0,config:function(){this.forum=b.disqus_shortname,this.page.identifier=b.disqus_identifier,this.page.url=b.disqus_url,this.page.title=b.disqus_title,this.language=b.disqus_config_language,this.page.remote_auth_s3=b.disqus_remote_auth_s3,this.page.api_key=b.disqus_api_key}});else{var d=document.createElement("script");d.type="text/javascript",d.async=!0,d.src="//"+b.disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(d)}})}}}]),b.directive("appDisqusCount",["$window",function(a){return{restrict:"E",replace:!1,scope:{disqus_shortname:"@disqusShortname",disqus_identifier:"@disqusIdentifier",disqus_title:"@disqusTitle",disqus_url:"@disqusUrl",readyToBind:"@"},template:'<span class="disqus-comment-count" data-disqus-url="{{disqus_url}}"></span>',link:function(a){if(a.dataUrl=a.disqus_shortname+".disqus.com","undefined"==typeof a.disqus_identifier||"undefined"==typeof a.disqus_url)throw"Please ensure that the `disqus-identifier` and `disqus-url` attributes are both set.";a.$watch("readyToBind",function(b){if(b){var c=document.createElement("script");c.async=!0,c.type="text/javascript",c.src="http://"+a.disqus_shortname+".disqus.com/count.js",(document.getElementsByTagName("HEAD")[0]||document.getElementsByTagName("BODY")[0]).appendChild(c)}})}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core.gist",["gist-embed"]);b.directive("appGist",["$window","$document","$sce",function(a,b,c){return{restrict:"E",scope:{gist:"@",readyToBind:"@"},link:function(a,b,c){if("undefined"==typeof a.gist)throw"Please ensure that the `gist` attribute is set.";a.$watch("readyToBind",function(c){if(angular.isDefined(c)||(c="true"),a.$eval(c)){var d=$('<code data-gist-id="'+a.gist+'">');d.appendTo(b).gist()}})}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core.slides",[]);b.directive("appGoogleSlides",["$window","$document","$sce",function(a,b,c){return{restrict:"E",scope:{slides_url:"@googleSlidesUrl",readyToBind:"@"},template:'<div flex layout="column"><iframe ng-src="{{slides_url_sce}}" class="embed-responsive-item" frameborder="0" scrolling="no" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>',controllerAs:"ctrl",controller:["$scope",function(a){var b={autohide:2,autoplay:1,controls:1,loop:0,playlist:[]};angular.extend(b,a.video_params),a.finalUrl=a.slides_url}],link:function(a,b,d){if("undefined"==typeof a.slides_url)throw"Please ensure that the `slides_url` attribute is set.";a.$watch("readyToBind",function(b){angular.isDefined(b)||(b="true"),a.$eval(b)&&(a.slides_url_sce=c.trustAsResourceUrl(a.finalUrl))})}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.directive("stateReload",["$rootScope",function(a){return{restrict:"A",compile:function(b,c){b.removeAttr("reload-state data-reload-state"),b.on("click",function(b){a.$state.transitionTo(a.$state.current,a.$stateParams,{reload:!0,inherit:!1,notify:!0}),b.preventDefault()})}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core.youtube",[]);b.directive("appYoutube",["$window","$document","$sce",function(a,b,c){return{restrict:"E",scope:{video_url:"@videoUrl",readyToBind:"@"},template:'<div flex layout="column"><iframe ng-src="{{video_url_sce}}" class="embed-responsive-item" frameborder="0" scrolling="no" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"> </iframe></div>',controllerAs:"ctrl",controller:["$scope",function(a){var b={autohide:2,autoplay:1,controls:1,loop:0,playlist:[]};angular.extend(b,a.video_params),a.finalUrl="http://www.youtube.com/embed/"+a.video_url+"?autohide="+b.autohide+"&autoplay="+b.autoplay+"&controls="+b.controls+"&loop="+b.loop}],link:function(a,b,d,e,f){if("undefined"==typeof a.video_url)throw"Please ensure that the `video_url` attribute is set.";a.$watch("readyToBind",function(b){angular.isDefined(b)||(b="true"),a.$eval(b)&&(a.video_url_sce=c.trustAsResourceUrl(a.finalUrl))})}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.run(["$rootScope","$window","$state","loading",function(a,b,c,d){a.$on("$stateChangeStart",function(){}),a.$on("$stateChangeSuccess",function(){b.scrollTo(0,0)})}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.factory("loading",["cfpLoadingBar",function(a){return a}])}(angular),function(angular,a){"use strict";var b=angular.module("app.core");b.service("anchorSmoothScroll",["$document","$window",function(a,b){function c(a,b){return a.pageYOffset?a.pageYOffset:b.documentElement&&b.documentElement.scrollTop?b.documentElement.scrollTop:b.body.scrollTop?b.body.scrollTop:0}function d(a,b){for(var c=b.offsetTop,d=b;d.offsetParent&&d.offsetParent!=a.body;)d=d.offsetParent,c+=d.offsetTop;return c}var e=a[0],f=b;this.scrollDown=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a+f,h=a;b>h;h+=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g+=f,g>b&&(g=b),e++},this.scrollUp=function(a,b,c,d){for(var e=0,f=Math.round(d/25),g=a-f,h=a;h>b;h-=f)setTimeout("window.scrollTo(0, "+g+")",e*c),g-=f,b>g&&(g=b),e++},this.scrollTo=function(a,b){var g=e.getElementById(a);if(g){var h=c(f,e),i=d(e,g),j=i>h?i-h:h-i;if(i-=70,100>j)return void scrollTo(0,i);var k=Math.round(j/100);b=b||(k>20?20:k),i>h?this.scrollDown(h,i,b,j):this.scrollUp(h,i,b,j)}}}])}(angular),function(angular,a){"use strict";angular.module("app.rating",[])}(angular),function(angular,a){"use strict";var b=angular.module("app.rating");b.directive("starRating",[function(){return{restrict:"E",template:'<ul class="star-rating" ng-class="{readonly: readonly}">          <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}"          ng-click="toggle($index)">            <i class="fa fa-star"></i>          </li>          </ul>',scope:{ratingValue:"=ngModel",max:"=?",onRatingSelect:"&?",readonly:"=?"},controllerAs:"ctrl",controller:["$scope",function(a){}],link:function(b,c,d){function e(){b.stars=[];for(var a=0;a<b.max;a++)b.stars.push({filled:a<b.ratingValue})}b.max==a&&(b.max=5),b.toggle=function(c){(b.readonly==a||b.readonly===!1)&&(b.ratingValue=c+1,b.onRatingSelect({rating:c+1}))},b.$watch("ratingValue",function(a,b){b&&e()}),e()}}}])}(angular),function(angular,a){"use strict";angular.module("app.webapp",[])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.config(["$mdThemingProvider","$mdIconProvider",function(a,b){b.fontSet("fa","FontAwesome"),a.theme("default").primaryPalette("indigo").accentPalette("orange")}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.config(["$stateProvider","$urlRouterProvider",function(a,b){var c=a;c.state("webapp",{url:"/",controller:"WebappCtrl",templateUrl:"app/webapp/view/webapp.html"}),c.state("webapp.tutorials",{url:"tutorials/:category/",params:{category:{value:null}},views:{content:{controller:"TutorialsCtrl",templateUrl:"app/webapp/view/tutorials.html"}}}),c.state("webapp.tutorial",{url:":category/:tutorial/",params:{category:{value:null},tutorial:{value:null}},views:{content:{controller:"TutorialCtrl",templateUrl:"app/webapp/view/tutorial.html"}}}),c.state("webapp.about",{url:"about/",views:{content:{controller:"AboutCtrl",templateUrl:"app/webapp/view/about.html"}}}),c.state("webapp.404",{url:"404/",templateUrl:"app/webapp/views/404.html"}),b.otherwise("/")}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.controller("AboutCtrl",["$scope",function(a){}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.controller("TutorialCtrl",["$scope","$location","$window","$http","$state","$stateParams","$mdDialog","DialogSrv",function(a,b,c,d,e,f,g,h){var i="app/api/"+f.tutorial+".json";d.get(i,{cache:!0}).then(function(b){a.tutorial=angular.fromJson(b.data)},function(a){throw a}),a.chapters=[],a.projects=[],a.hangouts=[],a.resources=[],a.selectedIndex=0,a.selectedTabOnChange=function(b){a.chapter=null;var c=a.tutorial.tabs.indexOf(b);a.selectedIndex=c},a.openDialog=function(a,b,c){var d={templateUrl:"app/webapp/template/dialog_google_slides.html"},e={templateUrl:"app/webapp/template/dialog_youtube.html"},f={templateUrl:"app/webapp/template/dialog_gist.html"},g={templateUrl:"app/webapp/template/dialog_disqus.html"};switch(a){case"slides":h.open(b,c,d);break;case"video":h.open(b,c,e);break;case"code":h.open(b,c,f);break;case"disqus":h.open(b,c,g);break;default:h.open(b,c)}return!0},a.getChapters=function(){d.get(a.tutorial.chaptersUrl,{cache:!0}).then(function(b){var c=angular.fromJson(b.data);angular.forEach(c,function(a,b){c[b].id=b+1,c[b].rating=Math.round(5*Math.random())}),a.chapters=c},function(a){throw a})},a.getProjects=function(){d.get(a.tutorial.projectUrl,{cache:!0}).then(function(b){var c=angular.fromJson(b.data);angular.forEach(c,function(a,b){c[b].id=b+1,c[b].rating=Math.round(5*Math.random())}),a.projects=c},function(a){throw a})},a.getHangouts=function(){d.get(a.tutorial.hangoutsUrl,{cache:!0}).then(function(b){var c=angular.fromJson(b.data);angular.forEach(c,function(a,b){c[b].id=b+1,c[b].rating=Math.round(5*Math.random())}),a.hangouts=c},function(a){throw a})},a.getResources=function(){d.get(a.tutorial.resourcesUrl,{cache:!0}).then(function(b){var c=angular.fromJson(b.data);angular.forEach(c,function(a,b){c[b].id=b+1,c[b].rating=Math.round(5*Math.random())}),a.resources=c},function(a){throw a})},a.showTutorialChapter=function(b){a.chapter=a.chapters[b-1],angular.isUndefined(a.chapter)&&e.reload(),$("#webappbox").scrollTop(0)},a.showProjectChapter=function(b){a.chapter=a.projects[b-1],angular.isUndefined(a.chapter)&&e.reload(),$("#webappbox").scrollTop(0)},a.refreshStateParams=function(){var a={category:f.category,tutorial:f.tutorial};e.go(".",a,{notify:!1,reload:!1,location:"replace",inherit:!1})}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.controller("TutorialsCtrl",["$scope","$http","$filter","$state","$stateParams","$mdBottomSheet",function(a,b,c,d,e,f){var g=this;g.tutorialsUrl="app/api/tutorials_items.json",b.get(g.tutorialsUrl,{cache:!0}).then(function(b){var d=angular.fromJson(b.data);"all"==e.category?a.tutorials=c("orderBy")(d,"label"):a.tutorials=c("filter")(d,e.category)},function(a){throw a}),a.goToTutorial=function(a,b){var c={category:e.category,tutorial:a};d.go("webapp.tutorial",c,{notify:!0,reload:!1,location:"replace",inherit:!0})}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.controller("WebappCtrl",["$scope","$state","$stateParams","$timeout","$mdBottomSheet","$mdToast",function(a,b,c,d,e,f){a.showGridBottomSheet=function(c){a.alert="",e.show({templateUrl:"app/webapp/template/sheet_categories.html",controller:"GridBottomSheetCtrl",targetEvent:c}).then(function(a){b.go("webapp.tutorials",{category:a.name})})}}]),b.controller("GridBottomSheetCtrl",["$scope","$mdBottomSheet",function(a,b){a.items=[{name:"backend",label:"Backend",icon:"cloud_circle"},{name:"frontend",label:"Frontend",icon:"web"},{name:"database",label:"Database",icon:"storage"},{name:"mobile",label:"Mobile",icon:"phone_iphone"},{name:"game",label:"Game",icon:"games"},{name:"academic",label:"Academic",icon:"school"},{name:"all",label:"All",icon:"view_module"}],a.listItemClick=function(c){var d=a.items[c];b.hide(d)}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.directive("appChapter",["$parse",function(a){return{restrict:"E",templateUrl:"app/webapp/template/chapter_detail.html",scope:!0,controllerAs:"ctrl",controller:["$scope",function(a){a.rateFunction=function(a){console.log("Rating selected: "+a)}}],compile:function(a,b,c){return{pre:function(a,b,c,d,e){},post:function(a,b,c,d,e){}}}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.directive("appTutorialTabs",["$compile","$http","$stateParams",function(a,b,c){return{restrict:"E",template:"<h1>{{tab}}</h1>",controllerAs:"ctrl",controller:["$scope",function(a){}],link:function(b,c,d,e,f){switch(b.tab=d.tab,b.tab){case"tutorial":c.html('<div display="flex" grow="1" ng-include="\'app/webapp/template/tab_tutorial.html\'"></div>'),b.getChapters();break;case"project":c.html('<div display="flex" grow="1" ng-include="\'app/webapp/template/tab_project.html\'"></div>'),b.getProjects();break;case"hangouts":c.html('<div display="flex" grow="1" ng-include="\'app/webapp/template/tab_hangouts.html\'"></div>'),b.getHangouts();break;case"resources":c.html('<div display="flex" grow="1" ng-include="\'app/webapp/template/tab_resources.html\'"></div>'),b.getResources()}a(c.contents())(b)}}}])}(angular),function(angular,a){"use strict";var b=angular.module("app.webapp");b.factory("DialogSrv",["$rootScope","$mdDialog","$document",function(a,b,c){function d(c,d,e,f){var g={templateUrl:null};angular.extend(g,e);var h=a.$new();h.target&&delete h.target,h.target=d,b.show({templateUrl:g.templateUrl,parent:angular.element(document.body),targetEvent:c,locals:{target:h.target,contentLoaded:!0},bindToController:!0,controllerAs:"ctrl",controller:["$scope","$mdDialog","target","contentLoaded",function(a,b,c,d){a.target=c,a.contentLoaded=d,a.cancel=function(){b.cancel()}}]})}return{open:d}}])}(angular);