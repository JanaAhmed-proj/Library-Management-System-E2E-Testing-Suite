const express = require("express");
const app = express();

app.use(express.json());

let books = [];
let isLoggedIn = false;

/* ---------- AUTH ---------- */
function auth(req, res, next) {

    if (!isLoggedIn) {
        return res.status(403).json({
            message: "Login first"
        });
    }

    next();
}

/* ---------- LOGIN ---------- */
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {

        isLoggedIn = true;

        return res.json({
            success: true,
            message: "Login Successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid Username or Password"
    });
});

/* ---------- ADD BOOK ---------- */
app.post("/books", auth, (req, res) => {

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Missing data"
        });
    }

    books.push({
        title,
        author,
        isBorrowed: false,
        borrowDays: 0
    });

    res.json({
        message: "Book added successfully"
    });
});

/* ---------- GET BOOKS ---------- */
app.get("/books", auth, (req, res) => {
    res.json(books);
});

/* ---------- DELETE BOOK ---------- */
app.delete("/books/:title", auth, (req, res) => {

    let book = books.find(b => b.title === req.params.title);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books = books.filter(b => b.title !== req.params.title);

    res.json({
        message: "Book deleted"
    });
});

/* ---------- BORROW BOOK ---------- */
app.put("/borrow", auth, (req, res) => {

    const { title, days } = req.body;

    let book = books.find(b => b.title === title);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (book.isBorrowed) {
        return res.json({
            message: "Already borrowed"
        });
    }

    book.isBorrowed = true;
    book.borrowDays = days;

    res.json({
        message: "Book borrowed successfully"
    });
});

/* ---------- RETURN BOOK ---------- */
app.put("/return", auth, (req, res) => {

    const { title } = req.body;

    let book = books.find(b => b.title === title);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (!book.isBorrowed) {
        return res.json({
            message: "Not borrowed"
        });
    }

    let fine = book.borrowDays * 5;

    book.isBorrowed = false;
    book.borrowDays = 0;

    res.json({
        message: "Book returned",
        fine
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});