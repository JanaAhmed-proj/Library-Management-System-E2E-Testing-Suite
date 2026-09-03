# 📚 Library Management System — End-to-End Testing & QA Suite

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Testing Types](https://img.shields.io/badge/Testing-Manual%20%7C%20API%20%7C%20Automation-blue)
![Selenium](https://img.shields.io/badge/Selenium-4.20.0-green)
![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange)

## 📌 Project Overview
This project presents a complete **Software Testing Life Cycle (STLC)** implementation for a full-stack **Library Management System**. The target application handles core library operations including user authentication, book cataloging, search, borrowing/returning workflows, and system statistics.

The objective was to evaluate the system’s functional reliability, API integrity, and UI automation flow, while identifying design weaknesses and bugs through systematic testing strategies.

---

## 🏗️ System Architecture & Stack

### Target Application Architecture
* **Frontend:** HTML5, CSS3, JavaScript (Deployed on GitHub Pages)
* **Backend:** Node.js, Express.js (RESTful APIs)

### Testing & Tooling Stack
* **UI Automation:** Selenium WebDriver (4.20.0), Java 17, Maven, WebDriverManager
* **API Testing:** Postman (REST API validation & response checking)
* **Manual Testing:** Excel Test Cases & Execution Matrix
* **IDE & Editors:** IntelliJ IDEA, VS Code

---

## 🧪 Testing Methodologies Applied

### 1. Manual & Functional Testing
* Designed structured test suites in Excel covering core user workflows: Login, Add Book, View Catalog, Search, Borrow/Return, Delete, and Statistics.
* Applied **Black-Box Testing** techniques to validate input constraints, field boundary values, and system feedback.

### 2. API Testing (Postman)
* Executed **15+ RESTful API test scenarios** covering HTTP endpoints (`POST`, `GET`, `PUT`, `DELETE`).
* Validated status codes, response payloads, authentication boundaries, and error messages.
* **Result:** 100% Pass Rate (15 Passed, 0 Failed).

### 3. Automated UI Testing (Selenium WebDriver + Java)
* Built an automated end-to-end regression flow simulating real-world user interactions:
  1. User Authentication (Login)
  2. Adding new books to catalog
  3. Dynamic searching and catalog display
  4. Book borrowing and return operations
  5. Dashboard/Statistics assertion
  6. Book deletion and cleanup verification

---

## 📊 Test Execution Summary

| Testing Type | Scope / Target | Status | Success Rate / Coverage |
| :--- | :--- | :---: | :---: |
| **Manual Testing** | UI, Functional Workflow, Usability | Completed | High Coverage |
| **API Testing** | Backend REST Endpoints (`/login`, `/books`, `/borrow`, `/return`) | Completed | **100%** (15/15 Passed) |
| **Selenium Automation** | E2E User Journey & Interface Interactions | Completed | 100% Scenario Flow |
| **Functional / Black Box** | Input Validation & Business Logic | Completed | Core Logic Verified |

---

## 🐛 Bug Report & Findings

During testing, several functional bugs and backend architecture weaknesses were documented:

| Bug ID | Title | Description / Impact | Severity |
| :--- | :--- | :--- | :---: |
| **BUG-01** | Duplicate Books Allowed | System allows adding duplicate entries with identical titles and authors without validation. | **Medium** |
| **BUG-02** | Empty Search Handling | Executing a search with an empty field yields *"Book not found"* instead of a validation prompt. | **Low** |
| **BUG-03** | Lack of Unique Identifier (ID) | Books are indexed solely by title rather than a primary key/UUID, causing lookup collisions. | **Medium** |
| **BUG-04** | Global Auth State Variable | Backend manages authentication via global state variables rather than session/token-based auth. | **Medium** |

---

## 🚀 How to Run the Automated Selenium Tests

### Prerequisites
* **Java Development Kit (JDK):** Version 17 or higher
* **Apache Maven:** Installed and configured
* **IDE:** IntelliJ IDEA or Eclipse

### Execution Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project folder:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies and compile:
   ```bash
   mvn clean compile
   ```
4. Run the automated test suite:
   ```bash
   mvn test
   ```

---

## 👥 Project Team & Acknowledgments

* **Prepared by:**
  * Mai Ashraf (ID: 192300095)
  * Malak Mohamed (ID: 192300094)
  * Gana Ahmed (ID: 192300067)
  * Maram Moustafa (ID: 192300280)
  * Menna Allah Mostafa (ID: 192300166)
* **Institution:** Egyptian Chinese University (ECU) — Faculty of Engineering & Technology
* **Supervised by:** Dr. Sabah Saad | **TA:** Fady Roumany
