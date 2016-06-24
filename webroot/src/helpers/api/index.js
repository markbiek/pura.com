/**
 * Api helper
 */
import request from 'superagent';

var Api = (function (parent) {
    var self = parent = parent || {};
    var menus = '/wp-json/wp-api-menus/v2/menu-locations/';
    var pages = '/wp-json/rest-functions/v1/pages/';
    var posts = '/wp-json/wp/v2/posts/';
    var frontPage = '/wp-json/rest-functions/v1/homepage';
    var themeOptions = '/wp-json/rest-functions/v1/theme-options';
    self.url = 'http://api.pura.' + window.location.hostname.split('.').splice(1).join('.');

    self.Menu = function (location) {
        return request.get(self.url + menus + location);
    };

    self.Page = function (slug) {
        return request.get(self.url + pages + slug);
    };

    self.FrontPage = () => {
        return request.get(self.url + frontPage);
    };

    self.Post = function (id) {
        return request.get(self.url + posts + id)
    };

    self.Posts = function (page, per_page) {
        return request.get(self.url + posts + '?page=' + page + '&per_page=' + per_page);
    };

    self.ThemeOptions = () => {
        return request.get(self.url + themeOptions);
    };

    return self;
})(Api || {});

export default Api;
