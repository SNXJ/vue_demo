const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');
const {
    writeFile
} = require('fs');
/**加载JSON文件 返回对象 */
function loadJson() {
    //地址写死
    let fp = 'koa_all/static/appinfo.json';
    // 判断文件是否存在:
    if (fs.existsSync(fp)) {
        var b = fs.readFileSync(fp, "utf-8")
        var obj = JSON.parse(b);
        return obj;
    } else {
        // 文件不存在:
        console.log(`status====read=404===>`)
        return null;
    }
}

function searchJson(str) {
    //地址写死
    let fp = 'koa_all/static/appinfo.json';
    // 判断文件是否存在:
    if (fs.existsSync(fp)) {
        var b = fs.readFileSync(fp, "utf-8")

        var obj = JSON.parse(b);

        obj.data.info = obj.data.info.filter((item) => {
            return item.id == str ||
                item.name.indexOf(str) > -1 ||
                item.company.indexOf(str) > -1 ||
                item.desc.indexOf(str) > -1
        });
        return obj;
    } else {
        // 文件不存在:
        console.log(`status====read=404===>`)
        return null;
    }
}

function wirteJson(obj) {
    //地址写死
    let fp = 'koa_all/static/appinfo.json';
    var jsonStr = jsonFStringify(obj)
        // 判断文件是否存在:
    if (fs.existsSync(fp)) {
        var b = fs.writeFileSync(fp, jsonStr)
            // console.log(`status====write=200===>${b}`)
            // var obj = JSON.parse(b);
            // return obj;
    } else {
        // 文件不存在:
        console.log(`wirte-status====write==404===>`)
        return null;
    }
}

function fn_searchFiles() {
    return async(ctx, next) => {
        // let rpath = ctx.request.path;
        // let url = ctx.request.url;
        // var request_queryStr = ctx.request.querystring
        var request_query = ctx.request.query //对象
        var search = request_query.search
        if (search == undefined) {
            ctx.response.status = 404;
            await next();
            return
        }
        console.log(`search======>${JSON.stringify(request_query)}===${search}==>`)
            //读取json
        var obj = searchJson(search)
            // 判断文件是否空:
        if (!(Object.keys(obj).length === 0)) {
            ctx.response.body = jsonFStringify(obj);
        } else {
            // 文件不存在:
            console.log(`status=====空===>`)
            ctx.response.status = 404;
        }
        // } else {
        //     // 不是指定前缀的URL，继续处理下一个middleware:
        await next();
        // }
    };
}


// url: 类似 '/static/'
// dir: 类似 __dirname + '/static'
function fn_readFiles() {
    return async(ctx, next) => {
        // let rpath = ctx.request.path;
        // let url = ctx.request.url;
        // var request_queryStr = ctx.request.querystring
        var request_query = ctx.request.query //对象
        var search = request_query.search
        if (search == undefined) {
            ctx.response.status = 404;
            await next();
            return
        }
        console.log(`readfile========>${JSON.stringify(request_query)}===${search}==>`)
            //读取json
        var obj = loadJson()
            // 判断文件是否空:
        if (!(Object.keys(obj).length === 0)) {
            ctx.response.body = jsonFStringify(obj);
        } else {
            // 文件不存在:
            console.log(`status=====空===>`)
            ctx.response.status = 404;
        }
        // } else {
        //     // 不是指定前缀的URL，继续处理下一个middleware:
        await next();
        // }
    };
}

function fn_addPOSTFiles(json) {
    console.log("fn_addPOSTFiles")
    return async(ctx, next) => {
        //post 获取上传json 数据
        var params = ctx.request.body
            // var params = JSON.stringify(request_body)
        console.log(`addPOSTFiles=====str===>====${JSON.stringify(params)}`)
        console.log(`addPOSTFiles=====params222===>====${params.id}====${params.name}`)
        var obj = loadJson()
            // 判断文件是否空:
        if (!(Object.keys(obj).length === 0)) {
            params.id = `${obj.data.info.length}`
                // params.name = `app名字${obj.data.info.length}`
            console.log(`status=====params.id===>${params.id}`)
            obj.data.info.push(params)
            ctx.response.body = jsonFStringify(obj);

            wirteJson(obj)
        } else {
            // 文件不存在:
            console.log(`status=====空===>`)
            ctx.response.status = 404;
            await next();
        }
    };
}

function fn_addFiles(json) {
    return async(ctx, next) => {
        var params = {
            "id": "0",
            "name": "app名字",
            "version": "v001",
            "company": "公司信息",
            "desc": "信息描述.....",
            "remark": "其他信息.....",
            "create_time": "2021-12-17 09:30:08",
            "update_time": "2021-12-17 09:30:08"
        }

        var obj = loadJson()
            // 判断文件是否空:
        if (!(Object.keys(obj).length === 0)) {
            params.id = `${obj.data.info.length}`
            params.name = `app名字${obj.data.info.length}`
            console.log(`status=====params.id===>${params.id}`)
            obj.data.info.push(params)
            ctx.response.body = jsonFStringify(obj);

            wirteJson(obj)
        } else {
            // 文件不存在:
            console.log(`status=====空===>`)
            ctx.response.status = 404;
            await next();
        }
    };
}

function fn_delFiles(delId) {
    return async(ctx, next) => {
        var obj = loadJson()
            // 判断文件是否空:
        if (!(Object.keys(obj).length === 0)) {
            delId = `${obj.data.info.length - 1}`
            console.log(`status=====delId===>${delId}`)
            for (var i = 0; i < obj.data.info.length; i++) {
                if (delId == obj.data.info[i].id) {
                    obj.data.info.splice(i, 1);
                }
            }
            ctx.response.body = jsonFStringify(obj);
            wirteJson(obj)
        } else {
            // 文件不存在:
            console.log(`status=====空===>`)
            ctx.response.status = 404;
            await next();
        }
    };
}

function jsonFStringify(obj) {
    return JSON.stringify(obj, "", "\t")
}


var readFiles = fn_readFiles('app')
var searchFiles = fn_searchFiles('app')
var addFiles = fn_addFiles('jsonStr')
var addPostFiles = fn_addPOSTFiles('jsonStr')
var delFiles = fn_delFiles(`0`)

module.exports = {
    'GET /app/search': searchFiles,
    'GET /app/read': readFiles,
    'GET /app/add': addFiles,
    'POST /app/postadd': addPostFiles,
    'GET /app/del': delFiles
};
// module.exports = staticFiles;