/*======================================
# 驾校一点通01
# @color233 2022.9.9
# url:
# https://raw.githubusercontent.com/xilemon/quanx/main/script/jxedt-checkrights.js

# 重写引用：
# https://raw.githubusercontent.com/xilemon/quanx/main/rewrite/js/jiaxiaoedt_01.file
 ======================================*/
let color233 = JSON.parse($response.body);
{
    color233.result.beginTime = "2022-09-09";
    color233.result.endTime = "2099-09-09";
    color233.result.status = "2";
}
$done({ body: JSON.stringify(color233) });
