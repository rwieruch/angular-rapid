'use strict';

angular.module('myApp.tweet', [
    'myApp.tweet.TweetPageController'
])
.config(function($routeProvider) {
  $routeProvider.when('/tweets', getTweetOverviewPage());
});

function getTweetOverviewPage() {
    return {
        templateUrl: 'src/screens/tweet/tweet-page.tpl.html',
        controller: 'TweetPageController',
        resolve: {
            tweets: function() {
                return {
                    id: 'x',
                    name: 'y'
                };
            }
        }
    };
}