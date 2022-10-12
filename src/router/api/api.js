module.exports = {
  group: {
    prefix: '',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res) => {
        res.send('Hello World!');
      },
    },
  ],
};
