const request = require("supertest");
const app = require("../index");
const Product = require("../models/product.model");

describe("POST /products", () => {
  it("should create a new product", async () => {
    const mockProduct = { name: "Test Product", price: 9.99 };
    const response = await request(app).post("/products").send(mockProduct);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBe(mockProduct.name);
    expect(response.body.price).toBe(mockProduct.price);
  });

  it("should return 500 if an error occurs while creating product", async () => {
    jest
      .spyOn(Product, "create")
      .mockRejectedValueOnce(new Error("Database error"));

    const mockProduct = { name: "Test Product", price: 9.99 };
    const response = await request(app).post("/products").send(mockProduct);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: "Internal server error" });
  });
});
