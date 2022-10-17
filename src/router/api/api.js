const { resolveAfter2Seconds } = require('../../../playground');

module.exports = {
  group: {
    prefix: '',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      validator: [],
      handler: async (req, res) => {
        const result = await resolveAfter2Seconds();
        res.json({ items: [{ roleId: 1236, roleName: 'LeadDev' }], result });
      },
    },
    {
      method: 'get',
      path: '/test',
      handler: (req, res) => {
        res.json({ items: [{ roleId: 1236, roleName: 'LeadDev' }] });
      },
    },
  ],
};
