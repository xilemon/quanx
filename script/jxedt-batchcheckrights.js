/*======================================
# 驾校一点通01
# @color233 2022.9.9
# url:
# https://raw.githubusercontent.com/xilemon/quanx/main/script/jxedt-batchcheckrights.js

# 重写引用：
# https://raw.githubusercontent.com/xilemon/quanx/main/rewrite/js/jiaxiaoedt_01.txt
 ======================================*/

let color233 = JSON.parse($response.body);
{
    color233.result.SPEED_VIP_KM4.beginTime = "2022-09-09";
    color233.result.SPEED_VIP_KM4.endTime = "2099-09-09";
    color233.result.SPEED_VIP_KM4.status = "2";

    color233.result.RELIABLE_VIP_KM4.beginTime = "2022-09-09";
    color233.result.RELIABLE_VIP_KM4.endTime = "2099-09-09";
    color233.result.RELIABLE_VIP_KM4.status = "2";

    color233.result.RELIABLE_VIP_KM1.beginTime = "2022-09-09";
    color233.result.RELIABLE_VIP_KM1.endTime = "2099-09-09";
    color233.result.RELIABLE_VIP_KM1.status = "2";

    color233.result.SVIP_LIVECAMP.beginTime = "2022-09-09";
    color233.result.SVIP_LIVECAMP.endTime = "2099-09-09";
    color233.result.SVIP_LIVECAMP.status = "2";

    color233.result.VIP.beginTime = "2022-09-09";
    color233.result.VIP.endTime = "2099-09-09";
    color233.result.VIP.status = "2";

    color233.result.SVIP.beginTime = "2022-09-09";
    color233.result.SVIP.endTime = "2099-09-09";
    color233.result.SVIP.status = "2";

    color233.result.SPEED_VIP_KM1.beginTime = "2022-09-09";
    color233.result.SPEED_VIP_KM1.endTime = "2099-09-09";
    color233.result.SPEED_VIP_KM1.status = "2";

    color233.result.SPEED_VIP_KM2.beginTime = "2022-09-09";
    color233.result.SPEED_VIP_KM2.endTime = "2099-09-09";
    color233.result.SPEED_VIP_KM2.status = "2";

    color233.result.SPEED_VIP_KM3.beginTime = "2022-09-09";
    color233.result.SPEED_VIP_KM3.endTime = "2099-09-09";
    color233.result.SPEED_VIP_KM3.status = "2";
}
$done({ body: JSON.stringify(color233) });
