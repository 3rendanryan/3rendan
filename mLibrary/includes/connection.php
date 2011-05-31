<?php require("constants.php"); ?>
<?php
// 1. CREATE DATABASE CONNECTION
$connection = mysql_connect(DB_SERVER, DB_USER, DB_PASS);
    if (!$connection) {
        die("Database connection failed: " . mysql_error());
    }
// 2. SELECT DB TO USE
$db_select = mysql_select_db(DB_NAME,$connection);
    if (!$db_select) {
        die("Database connection failed: " . mysql_error());
    }
?>