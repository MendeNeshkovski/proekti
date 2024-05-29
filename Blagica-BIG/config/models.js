module.exports.models = {
  migrate: 'drop', // For development purposes only
  attributes: {
    _id: { type: 'string', columnName: '_id', autoIncrement: true }, // Define _id attribute
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    price: { type: 'number', required: true },
    createdAt: { type: 'number', autoCreatedAt: true },
    updatedAt: { type: 'number', autoUpdatedAt: true }
  },
  dataEncryptionKeys: {
    default: 'ZHucTByUMyPQp5OViJI9THH6b/gZ6I8kWt6DhYFNsyw='
  },
  cascadeOnDestroy: true
};
