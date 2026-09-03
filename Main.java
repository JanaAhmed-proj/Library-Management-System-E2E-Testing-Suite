package org.example;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class Main {
    public static void main(String[] args) throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.get("https://malakmohamed241.github.io/ApiLibrarySystem1/");
                           //!!!!Login Page!!!!
        driver.manage().window().maximize();
        driver.findElement(By.id("username")).sendKeys("admin");
        driver.findElement(By.id("password")).sendKeys("1234");
        Thread.sleep(1000);
        driver.findElement(By.id("loginBtn")).click();
                         //!!!!ADD BOOK!!!!
        driver.findElement(By.id("tabAdd")).click();
        driver.findElement(By.id("title")).sendKeys("Harry Potter");
        driver.findElement(By.id("author")).sendKeys("J.K.Rowling");
        Thread.sleep(1000);
        driver.findElement(By.id("addBookBtn")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("title")).clear();
        driver.findElement(By.id("author")).clear();
                         //!!!!VIEW PAGE!!!!
        driver.findElement(By.id("tabView")).click();
        Thread.sleep(2000);
                        //!!!! ADD 2 BOOKS!!!!
        driver.findElement(By.id("tabAdd")).click();
        driver.findElement(By.id("title")).sendKeys("The vampire diaries");
        driver.findElement(By.id("author")).sendKeys("LJ Smith");
        Thread.sleep(1000);
        driver.findElement(By.id("addBookBtn")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("title")).clear();
        driver.findElement(By.id("author")).clear();
        driver.findElement(By.id("title")).sendKeys("Lord OF The Rings");
        driver.findElement(By.id("author")).sendKeys("John Ronald");
        Thread.sleep(1000);
        driver.findElement(By.id("addBookBtn")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("title")).clear();
        driver.findElement(By.id("author")).clear();
                           //!!!!VIEW 3 BOOKS
        driver.findElement(By.id("tabView")).click();
        Thread.sleep(2000);
                         //!!!!SEARCHING FOR AN AVAILABLE BOOK!!!!
        driver.findElement(By.id("tabSearch")).click();
        driver.findElement(By.id("searchTitle")).sendKeys("Harry Potter");
        driver.findElement(By.id("searchBtn")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("searchTitle")).clear();
                          //!!!!BORROW PAGE!!!!
        driver.findElement(By.id("tabBorrow")).click();
        driver.findElement(By.id("borrowTitle")).sendKeys("The vampire diaries");
        driver.findElement(By.id("days")).sendKeys("3");
        driver.findElement(By.id("borrowBtn")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("borrowTitle")).clear();
        driver.findElement(By.id("days")).clear();
                           //!!!!STATS PAGE!!!!
        driver.findElement(By.id("tabStats")).click();
        driver.findElement(By.id("statsBtn")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("borrowedListBtn")).click();
        Thread.sleep(2000);
                          //!!!!DELETE BOOK!!!!
        driver.findElement(By.id("tabDelete")).click();
        driver.findElement(By.id("deleteTitle")).sendKeys("Lord OF The Rings");
        driver.findElement(By.id("deleteBtn")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("deleteTitle")).clear();
                        //!!!!SEARCHING FOE A DELETED BOOK!!!!
        driver.findElement(By.id("tabSearch")).click();
        driver.findElement(By.id("searchTitle")).sendKeys("Lord OF The Rings");
        driver.findElement(By.id("searchBtn")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("searchTitle")).clear();
                          //!!!!VIEW AFTER DELETING!!!!
        driver.findElement(By.id("tabView")).click();
        Thread.sleep(2000);
        driver.quit();
    }
}