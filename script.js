let books = [];

const USERNAME = "admin";
const PASSWORD = "1234";

/* ── Toast (auto-create if not in HTML) ─────────── */
let toastTimer = null;

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("toast")) {
        const t = document.createElement("div");
        t.id = "toast";
        document.body.appendChild(t);
    }
});

function showMessage(msg) {
    document.getElementById("message").innerText = msg;

    const lower = msg.toLowerCase();
    const isError   = lower.includes("invalid") || lower.includes("not found") ||
                      lower.includes("missing")  || lower.includes("enter") ||
                      lower.includes("already")  || lower.includes("not borrowed");
    const isSuccess = lower.includes("success") || lower.includes("added") ||
                      lower.includes("deleted")  || lower.includes("borrowed") ||
                      lower.includes("returned") || lower.includes("found");

    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = msg;
    toast.className = "";
    if (isError)   toast.classList.add("toast-error");
    if (isSuccess) toast.classList.add("toast-success");

    void toast.offsetWidth; // force reflow
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ── Tabs ───────────────────────────────────────── */
function showTab(id) {
    document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");

    document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active-tab"));
    const map = {
        login: "tabLogin", add: "tabAdd", view: "tabView",
        search: "tabSearch", borrow: "tabBorrow",
        delete: "tabDelete", stats: "tabStats"
    };
    const activeBtn = document.getElementById(map[id]);
    if (activeBtn) activeBtn.classList.add("active-tab");

    // hide toast on tab switch
    clearTimeout(toastTimer);
    const toast = document.getElementById("toast");
    if (toast) toast.classList.remove("show");
}

/* ── Login ──────────────────────────────────────── */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === USERNAME && pass === PASSWORD) {
        showMessage("Login Successful ✓");
        ["tabAdd","tabView","tabSearch","tabBorrow","tabDelete","tabStats"]
            .forEach(id => document.getElementById(id).disabled = false);
        showTab("add");
    } else {
        showMessage("Invalid Username or Password");
    }
}

/* ── Add ────────────────────────────────────────── */
function addBook() {
    let title  = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    if (!title || !author) { showMessage("Enter title and author"); return; }
    books.push({ title, author, isBorrowed: false, borrowDays: 0 });
    showMessage("Book added successfully ✓");
    showBooks();
}

/* ── Show ───────────────────────────────────────── */
function showBooks() {
    let text = "📚 Books:\n\n";
    if (books.length === 0) text += "No books!";
    else books.forEach(b => {
        let status = b.isBorrowed ? "Borrowed" : "Available";
        text += `${b.title} by ${b.author} (${status})\n`;
    });
    document.getElementById("display").textContent = text;
}

/* ── Search ─────────────────────────────────────── */
function searchBook() {
    let title = document.getElementById("searchTitle").value.toLowerCase();
    let book  = books.find(b => b.title.toLowerCase().includes(title));
    if (book) showMessage(`Found: ${book.title} by ${book.author}`);
    else      showMessage("Not found");
}

/* ── Borrow ─────────────────────────────────────── */
function borrowBook() {
    let title = document.getElementById("borrowTitle").value.trim();
    let days  = parseInt(document.getElementById("days").value);
    let book  = books.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (!book)           return showMessage("Not found");
    if (book.isBorrowed) return showMessage("Already borrowed");
    if (isNaN(days))     return showMessage("Enter valid days");
    book.isBorrowed = true;
    book.borrowDays = days;
    showMessage("Borrowed ✓");
    showBooks();
}

/* ── Return ─────────────────────────────────────── */
function returnBook() {
    let title = document.getElementById("borrowTitle").value.trim();
    let book  = books.find(b => b.title.toLowerCase() === title.toLowerCase());
    if (!book)            return showMessage("Not found");
    if (!book.isBorrowed) return showMessage("Not borrowed");
    let fine = book.borrowDays * 5;
    book.isBorrowed = false;
    book.borrowDays = 0;
    showMessage(`Returned ✓ — Fine: ${fine} EGP`);
    showBooks();
}

/* ── Delete ─────────────────────────────────────── */
function deleteBook() {
    let title = document.getElementById("deleteTitle").value.trim();
    let index = books.findIndex(b => b.title.toLowerCase() === title.toLowerCase());
    if (index === -1) return showMessage("Not found");
    books.splice(index, 1);
    showMessage("Deleted ✓");
    showBooks();
}

/* ── Stats ──────────────────────────────────────── */
function countBooks() {
    let total     = books.length;
    let borrowed  = books.filter(b => b.isBorrowed).length;
    let available = total - borrowed;
    showMessage(`Total: ${total}  |  Available: ${available}  |  Borrowed: ${borrowed}`);
}

/* ── Borrowed List ──────────────────────────────── */
function listBorrowed() {
    let borrowed = books.filter(b => b.isBorrowed);
    if (borrowed.length === 0) return showMessage("No borrowed books");
    let text = "Borrowed:\n";
    borrowed.forEach(b => { text += `${b.title} (${b.borrowDays} days)\n`; });
    showMessage(text);
}