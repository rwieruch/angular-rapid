'use strict';

angular.module('myApp.tweet.TweetPageController', [
    'myApp.tweet.TweetRequestService'
]).controller('TweetPageController', TweetPageController);

function TweetPageController($scope, tweets, TweetRequestService) {

}