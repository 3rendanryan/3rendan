    <div class="footer">
        <a class="footer_linkButton" href="about.php">About PC Library Mobile</a>
        <a class="fFooter" href="index.php">Home</a>
        <a class="footer_linkButton" href="tel:4018651993" accesskey="0">Call the Library</a>
    </div>
</body>
</html>
<?php
    //5. close connection
    if (isset($connection)) {
        mysql_close($connection);
    }
?>