<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "127.0.0.1";
$username = "root";
$password = "insira-sua-senha";
$dbname = "seu_db";

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

$dadosRecebidos = json_decode(file_get_contents("php://input"), true);

if (isset($dadosRecebidos['id'])) {

    $id = $conn->real_escape_string($dadosRecebidos['id']);

    $sql = "DELETE FROM alpha_table WHERE id = '$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Registro excluído com sucesso!";
    } else {
        echo "Erro ao excluir registro: " . $conn->error;
    }
} else {
    echo "ID ausente.";
}

$conn->close();

?>
