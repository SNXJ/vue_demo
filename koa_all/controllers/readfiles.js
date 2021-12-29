const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');
const {
    writeFile
} = require('fs');
/**加载JSON文件 返回对象 */
function loadJson() {
    //地址写死
    let fp = 'koa_all/static/file.json';
    // 判断文件是否存在:
    if (fs.existsSync(fp)) {
        var b = fs.readFileSync(fp, "utf-8")
            // console.log(`status====read=200===>${b}`)
        var obj = JSON.parse(b);
        return obj;
    } else {
        // 文件不存在:
        console.log(`status====read=404===>`)
        return null;
    }
}

function wirteJson(obj) {
    //地址写死
    let fp = 'koa_all/static/file.json';
    var jsonStr = jsonFStringify(obj)
        // 判断文件是否存在:
    if (fs.existsSync(fp)) {
        var b = fs.writeFileSync(fp, jsonStr)
        console.log(`status====write=200===>${b}`)
            // var obj = JSON.parse(b);
            // return obj;
    } else {
        // 文件不存在:
        console.log(`status====write==404===>`)
        return null;
    }
}

// url: 类似 '/static/'
// dir: 类似 __dirname + '/static'
function fn_readFiles(url, dir) {
    return async(ctx, next) => {
        let rpath = ctx.request.path;
        console.log(`readpath========>${rpath}=====>${url}`)
            // 判断是否以指定的url开头:
        if (rpath.startsWith(url)) {
            //读取json
            var obj = loadJson()
                // 判断文件是否空:
            if (!(Object.keys(obj).length === 0)) {
                ctx.response.body = `
                <p>查询</p>
                <p>${obj.error}</p>
                <a href="http://localhost:8080/add/">添加</a>
                <a href="http://localhost:8080/del/">删除</a></br>
                <pre>${jsonFStringify(obj)}</pre>`;
            } else {
                // 文件不存在:
                console.log(`status=====空===>`)
                ctx.response.status = 404;
            }
        } else {
            // 不是指定前缀的URL，继续处理下一个middleware:
            await next();
        }
    };
}

function fn_addFiles(json) {
    return async(ctx, next) => {
        var params = {
            "id": "3",
            "name": "app名字03",
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
            //id 加1
            params.id = `${obj.data.info.length}`
            console.log(`status=====params.id===>${params.id}`)
            obj.data.info.push(params)
            ctx.response.body = `
            <p>添加</p>
                <p>${obj.error}</p>
                <a href="http://localhost:8080/add/">添加</a>
                <a href="http://localhost:8080/del/">删除</a></br>
                <pre>${jsonFStringify(obj)}</pre>`;
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
            ctx.response.body = `
               <p>删除</p>
                <p>${obj.error}</p>
                <a href="http://localhost:8080/add/">添加</a>
                <a href="http://localhost:8080/del/">删除</a></br>
                <pre>${jsonFStringify(obj)}</pre>`;
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


var readFiles = fn_readFiles('/read/', '/static')
var addFiles = fn_addFiles('jsonStr')
var delFiles = fn_delFiles(`0`)

module.exports = {
    'GET /read': readFiles,
    'GET /add': addFiles,
    'GET /del': delFiles
};
// module.exports = staticFiles;