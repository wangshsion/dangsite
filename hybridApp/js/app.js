/**
 * Created by hxsd on 2016/10/26.
 */
var pens = angular.module("pens", ['ionic']);
pens.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state("tabs", {
        url: "/tabs",
        templateUrl: "tabs/tabs.html"
    })

        .state("tabs.home", {
            url: "/home",
            views: {"tabs-home": {templateUrl: "views/home/home.html"}}
        })

        .state("tabs.contact", {
            url: "/contact",
            views: {"tabs-contact": {templateUrl: "views/contact/contact.html"}}
        })
        .state("tabs.introduce", {
            url: "/introduce",
            views: {"tabs-introduce": {templateUrl: "views/introduce/introduce.html"}}
        })
        .state("tabs.news", {
            url: "/news",
            views: {"tabs-news": {templateUrl: "views/news/news.html"}}
        })
        .state("tabs.products", {
            url: "/products",
            views: {"tabs-products": {templateUrl: "views/products/products.html"}}
        })

        .state("tabs.details", {
            url: "/details",
            views: {"tabs-products": {templateUrl: "views/details/details.html"}}
        })

        .state("tabs.cart", {
            url: "/cart",
            views: {"tabs-products": {templateUrl: "views/cart/cart.html"}}
        });

    $urlRouterProvider.otherwise("/tabs")

})

pens.controller("pensController", function ($scope, $http) {
    $scope.data = "";
    $http.get("data/products.json").success(function (data) {
        $scope.data = data;
    });

    $scope.data2 = [];

    //获取定单数据
    $scope.userOrder = function (product) {
        $scope.data2.push(product);
        return product;
    };


    $scope.test = function () {
        console.log( $scope.data2)
    }

    $scope.total=0;


    //定单数增加
    // $scope.addOrder = function () {
    //     for(var i = 0; i < $scope.data2.length; i++){
    //         if($scope.data2[i].title == $scope.userOrder.title){
    //            // $scope.data2.quantity+1;
    //
    //         } else{
    //             $scope.data2.splice(0,1,{"title": $scope.userOrder.title, "price":$scope.userOrder.price,"quantity":1});
    //         }
    //     }


    // }

    /*
     * Chriswang
     * 396276123@qq.com
     * 2014.11.28
     * Github:https://github.com/powy1993/fullpage
     */


});