<?php
$servername = "127.0.0.1";
$username = "root";
$password = "98136989Guilherme#";
$dbname = "alpha_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

$sql = "SELECT * FROM alpha_table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    echo json_encode($rows);
} else {
    echo "Nenhum registro encontrado.";
}

$conn->close();

?>
