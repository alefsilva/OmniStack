module.exports = {
    store(req, res) {
        const { username } = req.body;
        console.log('username: ', username);
        return res.json({ok: true});
    }
};
