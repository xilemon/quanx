let ydtjson = JSON.parse($response.body);

ydtjson = {
  "code": 0,
  "msg": "OK",
  "result": {
    "resourceld": "",
    "residualSecond": "0",
    "rightsType": "SPEED_VIP_KM1",
    "level": "0",
    "description": null,
    "beginTime": "2022-09-17",
    "endTime": "2099-09-17",
    "userBindDeviceList": [],
    "deviceOverflow": "0",
    "status": "2",
    "overdueSecond": "0"
  }
};
$done({ body: JSON.stringify(ydtjson) });
