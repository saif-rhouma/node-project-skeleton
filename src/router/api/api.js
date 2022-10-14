module.exports = {
  group: {
    prefix: '',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: (req, res) => {
        res.json({ items: [{ roleId: 1236, roleName: 'LeadDev' }] });
      },
    },
  ],
};
