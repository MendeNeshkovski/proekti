module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    description: { type: 'string' },
    category: { type: 'string', isIn: ['male', 'female', 'kids'] },
    size: { type: 'string' },
    price: { type: 'number', required: true }
  },
  primaryKey: '_id', // Specify _id as the primary key
  dontUseObjectIds: true // Ensure that object IDs are not used
};
