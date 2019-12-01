// https://ticket-m.mtime.cn/api/proxy/ticket/onlineCinemasByCity.api?locationId=290&_=1575108115309

import http from "utils/request"

export const ticketApi = (cityId=290) => http.get({
    url:"/ajax/api/proxy/ticket/onlineCinemasByCity.api",
    data:{
        locationId:cityId,
        _:1575108115309
    }
})