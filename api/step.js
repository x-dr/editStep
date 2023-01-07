import set_Step from "./xm.js";


const step = async (req, res) => {
    if (req.method === 'POST') {
        const { u, p, s } = req.body;
        // console.log(req.body);
        if (s) {
            const data = await set_Step(u, p, s);
            res.send(data);
        } else {
            const s = Math.floor(20000 - 10000 * Math.random());
            const data = await set_Step(u, p, s);
            res.send(data);
        }
    } else if (req.method === 'GET') {
        const { u, p, s } = req.query;
        if (s) {
            const data = await set_Step(u, p, s);
            res.send(data);
        } else {
            const s = Math.floor(20000 - 10000 * Math.random());
            const data = await set_Step(u, p, s);
            res.send(data);
        }
    }

}

export default step