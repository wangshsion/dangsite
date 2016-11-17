/**
 * Created by hxsd on 2016/10/23.
 */
angular.module("myFilter",[]).filter("pagerFilter", function () {
    return function (contentList, pageNum, pageSize) {
        var startIndex=(pageNum-1)*pageSize;
        return contentList.slice(startIndex,startIndex+pageSize);
    }
})