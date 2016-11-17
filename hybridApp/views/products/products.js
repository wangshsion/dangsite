/**
 * Created by hxsd on 2016/10/26.
 */
angular.module("pens").controller('productController',function ($scope, $http) {
    $http.get('data/productsInfo.json').success(function (data) {
        $scope.productInfo = data;
    });

    // $scope.order = function () {
    //     $scope.productInfo.forEach(data,function () {
    //         alert();
    //     })
    // }
});
