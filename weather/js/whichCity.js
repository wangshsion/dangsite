/**
 * Created by hxsd on 2016/10/7.
 */
function whichCity(city) {
    var objCity={
        beijing:"北京",
        shanghai:"上海",
        guangzhou:"广州",
        chongqing:"重庆",
        tianjing:"天津",
        nanjing:"南京",
        suzhou:"苏州",
        hangzhou:"杭州",
        shijiazhuan:"石家庄",
        zhengzhou:"郑州",
        wuhan:"武汉",
        changsha:"长沙",
        nanchang:"南昌",
        shengyun:"沈阳",
        changchun:"长春",
        haerbin:"哈尔滨",
        xian:"西安",
        taiyuan:"太原",
        jinan:"济南",
        chengdu:"成都",
        xining:"西宁",
        haikou:"海口",
        guiyang:"贵阳",
        fuzhou:"福州",
        taibei:"台北",
        kunmin:"昆明",
        lasa:"拉萨",
        yinchuan:"银川",
        wulumuqi:"乌鲁木齐",
        huhehaote:"呼和浩特",
        hongkong:"香港",
        aumeng:"澳门",
        shenzhen:"深圳"

    };
    return objCity[city];
}


function whatWeather(type) {
    var weather={
        晴 :"&#xf0030",
        阴 :"&#xe63b",
        多云 :"&#xe632",
        阵雨 :"&#xe623",
        雷阵雨:"&#xf003a",
        小雨 :"&#xf003a",
        中雨 :"&#xe623",
        大雨 :"&#xe68a",
        小雪 :"&#xe698",
        大雪 :"&#xe6a0"
    }
    return weather[type];
}

