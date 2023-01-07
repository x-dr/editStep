import QQwry from 'qqwry-lite';
import path from 'path';
import maxmind from 'maxmind';
// import path from "path"
const __dirname = path.resolve();
// const db = new QQwry(path: ''); // 自定义IP数据

// const db = new QQwry(path.join(__dirname, 'qqwryip.dat'));

const getip6 = async (ip6) => {
// async function getip(ip6) {
    const lookup = await maxmind.open('./api/GeoLite2-City.mmdb');
    const location = lookup.get(ip6);
    const addr = location.city.names['zh-CN']+location.country.names['zh-CN']
    // console.log(addr);
    return addr
}
const getip4 = async (ip4) => {
  // async function getip(ip6) {
      const lookup = await maxmind.open('./api/qqwry.mmdb');
      const location = lookup.get(ip4);
      // const addr = location.city.names['zh-CN']+location.country.names['zh-CN']
      // console.log(addr);
      return location
  }



const get_ipinfo = async (ip) => {



  var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  var reg6 = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
  // console.log(ip);
  if (!reg.test(ip) && !reg6.test(ip)) return res.send(db.searchIP(req.get('x-forwarded-for')))
  if (reg.test(ip)) {
    const addr = await getip4(ip);
    console.log(addr);
    return addr
    // return res.send(ip+'\n'+addr)
  }
  if (reg6.test(ip)) {
    const addr = await getip6(ip);
    return {ip ,addr}
  }


}

export default get_ipinfo

// export {db, get_ipinfo};

