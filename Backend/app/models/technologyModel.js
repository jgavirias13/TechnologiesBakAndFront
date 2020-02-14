const mongoose = require("mongoose");
const Scheema = mongoose.Schema;

const TechnologySchema = new Scheema(
  {
    name: {
      type: String,
      maxLength: 50
    },
    description: {
      type: String
    },
    logo: {
      type: String
    },
    tags: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);

mongoose.model('Technology', TechnologySchema);

module.exports = mongoose.model('Technology');
