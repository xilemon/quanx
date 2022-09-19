let ydtjson = JSON.parse($response.body);
ydtjson = {
    "code": 0,
    "result": {
        "SPEED_VIP_KM4": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "SPEED_VIP_KM4",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        },
        "RELIABLE_VIP_KM4": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "RELIABLE_VIP_KM4",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        },
        "EXAM_SKILL_KM4": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "EXAM_SKILL_KM4",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        },
        "SPEED_VIP_KM1": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "SPEED_VIP_KM1",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        },
        "RELIABLE_VIP_KM1": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "RELIABLE_VIP_KM1",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        },
        "EXAM_SKILL_KM1": {
            "resourceId": null,
            "residualSecond": "0",
            "rightsType": "EXAM_SKILL_KM1",
            "level": 0,
            "description": null,
            "beginTime": "2022-09-17",
            "endTime": "2099-09-17",
            "userBindDeviceList": [],
            "deviceOverflow": "0",
            "status": "2",
            "overdueSecond": "0"
        }
    },
    "msg": "ok"
};
$done({ body: JSON.stringify(ydtjson)
});
