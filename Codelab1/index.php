<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Test</title>
</head>
<body>

<?php
$tinggi = 5; // Tinggi segitiga

// Mencetak segitiga terbalik
for ($i = $tinggi; $i >= 1; $i--) {
    // Cetak spasi
    for ($j = $tinggi - $i; $j > 0; $j--) {
        echo "&nbsp;";
    }
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>"; 
}

// Tambahkan pemisah antara segitiga
echo "<br>";

$tinggi = 5; // Tinggi segitiga

// Mencetak segitiga biasa
for ($i = 1; $i <= $tinggi; $i++) {
    // Cetak spasi
    for ($j = $tinggi - $i; $j > 0; $j--) {
        echo "&nbsp;";
    }
    // Cetak bintang
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "<br>"; 
}
?>

</body>
</html>