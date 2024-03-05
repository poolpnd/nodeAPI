const moongose = require("mongoose");

const ProductSchema = new moongose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
); // allows to have createdAt and updatedAt fields`

const Product = moongose.model("Product", ProductSchema); // in db, it will make lowercase and add 's' at the end

module.exports = Product;
