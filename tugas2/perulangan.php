<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Bilangan</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Form Input Bilangan</h2>
        <form method="POST">
            <label for="bilangan">Masukkan bilangan bulat positif:</label>
            <input type="number" id="bilangan" name="bilangan" min="1" required>
            <button type="submit">Proses</button>
        </form>

        <div class="result">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $n = intval($_POST["bilangan"]);
                cetakBilangan($n);
            }

            function cetakBilangan($n) {
                for ($i = 1; $i <= $n; $i++) {
                    if ($i % 4 == 0 && $i % 6 == 0) {
                        echo "Pemrograman Website 2024<br>";
                    } elseif ($i % 5 == 0) {
                        echo "2024<br>";
                    } elseif ($i % 4 == 0 && $i % 6 != 0) {
                        echo "Pemrograman<br>";
                    } elseif ($i % 6 == 0 && $i % 4 != 0) {
                        echo "Website<br>";
                    } else {
                        echo "$i<br>";
                    }
                }
            }
            ?>
        </div>
    </div>
</body>
</html>
