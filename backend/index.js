import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pruebacrud",
});

app.get("/", (req, res) => {
    res.json("HOLA YA ESTAMOS CONECTADO BACKEND.");
});

app.get("/products", (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/products", (req, res) => {
    const q = "INSERT INTO products(`name`, `slug`, `category`, `sizes`, `colorsOne`, `colorsTwo`, `image`, `price`, `brand`, `countInStock`, `description`, `cover`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.slug,
        req.body.category,
        req.body.sizes,
        req.body.colorsOne,
        req.body.colorsTwo,
        req.body.image,
        req.body.price,
        req.body.brand,
        req.body.countInStock,
        req.body.description,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("el producto ya ha sido creado exitosamente");
    });
});

app.delete("/products/:idproducts", (req, res) => {
    const productId = req.params.idproducts;
    const q = "DELETE FROM products WHERE idproducts = ?";

    db.query(q, [productId], (err, data) => {
        if (err) return res.json(err);
        return res.json("el producto ya ha sido eliminado exitosamente");
    });
});

app.put("/products/:idproducts", (req, res) => {
    const productId = req.params.idproducts;
    const q = "UPDATE products SET `name`= ?, `slug`= ?, `category`= ?, `sizes`= ?, `colorsOne`= ?, `colorsTwo`= ?, `image`= ?, `price`= ?, `brand`= ?, `countInStock`= ?, `description`= ?, `cover`= ? WHERE idproducts = ?";

    const values = [
        req.body.name,
        req.body.slug,
        req.body.category,
        req.body.sizes,
        req.body.colorsOne,
        req.body.colorsTwo,
        req.body.image,
        req.body.price,
        req.body.brand,
        req.body.countInStock,
        req.body.description,
        req.body.cover,
    ];

    db.query(q, [...values, productId], (err, data) => {
        if (err) return res.json(err);
        return res.json("el producto ya ha sido actualizado exitosamente");
    });
});

app.listen(8800, () => {
    console.log("Conectado Al Back-End.");
});