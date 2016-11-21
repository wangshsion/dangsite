/**
 * Created by hxsd on 2016/10/6.
 */

var $={
   ajax: function(url,success,err){     //url:请求的资源地址，success：成功后执行的函数
       //
       var xhr=this.createXHR();        //实例化一个异步请求对象
       xhr.open('GET',url,true);                //打开请求

       xhr.onreadystatechange=function () {      //处理返回的结果
           if(xhr.readyState==4){                //判断服务器是否有返回值
               if(xhr.status==200){              //再判断是否为正常状态
                   success(xhr.responseText);   //将返回值做为实参给success;
               }else if(xhr.status==404){       //如果服务器返回的结果为404
                   if(err){                     //如果用户少传了一个参数,就不为第二个函数err传递实参
                       err(xhr.status);
                   }

               }
           };
       };

       xhr.send(null);       //发送请求
   },

    getJSON: function(url,success,err){     //url:请求的资源地址，success：成功后执行的函数
        //
        var xhr=this.createXHR();        //实例化一个异步请求对象
        xhr.open('GET',url,true);                //打开请求

        xhr.onreadystatechange=function () {      //处理返回的结果
            if(xhr.readyState==4){                //判断服务器是否有返回值
                if(xhr.status==200){              //再判断是否为正常状态
                    if(success){
                        success(JSON.parse(xhr.responseText));   //将返回值做为实参给success;
                    }

                }else{
                    err(xhr.status);
                }
            };
        };

        xhr.send(null);       //发送请求
    },

    createXHR:function () {
        var xhr;//创建一个ajax请求的关键对象
        try{        //尝试创建一个标准的XML对象
            xhr=new XMLHttpRequest();
        }catch(e){  //如果不支持上面的标准方式
            try{        //尝试IE的一个低版本
                xhr=new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e){
                try{     //尝试IE的另一个低版本
                    xhr=new ActiveXObject("Microsoft.XMLHTTP");
                }catch(e){  //版本太老
                    xhr=null;
                }
            }
        }
        return xhr;
    }
};



