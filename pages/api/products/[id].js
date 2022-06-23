import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";
import axios from "axios";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
 await dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      console.log("Successfully Added Product");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(201).json("Successfully Deletd Product");
      console.log("Successfully Deletd Product");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
