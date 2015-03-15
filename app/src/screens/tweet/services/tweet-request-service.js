'use strict';

angular.module('myApp.tweet.TweetRequestService', [

]).service('TweetRequestService', TweetRequestService);

function TweetRequestService() {

    this.get = get;

    function get() {
        return {
            id: 'x',
            name: 'yy'
        };
    }
}