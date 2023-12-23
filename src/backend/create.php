<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "127.0.0.1";
$username = "root";
$password = "98136989Guilherme#";
$dbname = "alpha_db";

global $conn;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function tableExists($conn, $table) {
    $result = $conn->query("SHOW TABLES LIKE '$table'");
    return $result->num_rows > 0;
}

$tableName = "alpha_table";

if (!tableExists($conn, $tableName)) {
    $createTableSQL = "CREATE TABLE $tableName (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nomeContato VARCHAR(255) NOT NULL,
        dataNascimento VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        profissao VARCHAR(255) NOT NULL,
        telefoneContato VARCHAR(20) NOT NULL,
        celularContato VARCHAR(20) NOT NULL
    )";

    if ($conn->query($createTableSQL) === TRUE) {
        echo "Tabela criada com sucesso!";
    } else {
        echo "Erro ao criar tabela: " . $conn->error;
        exit; 
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

$dadosRecebidos = json_decode(file_get_contents("php://input"), true);

if (isset($dadosRecebidos['nomeContato']) && isset($dadosRecebidos['dataNascimento']) &&
    isset($dadosRecebidos['email']) && isset($dadosRecebidos['profissao']) &&
    isset($dadosRecebidos['telefoneContato']) && isset($dadosRecebidos['celularContato'])) {

    $nomeContato = $conn->real_escape_string($dadosRecebidos['nomeContato']);
    $dataNascimento = $conn->real_escape_string($dadosRecebidos['dataNascimento']);
    $email = $conn->real_escape_string($dadosRecebidos['email']);
    $profissao = $conn->real_escape_string($dadosRecebidos['profissao']);
    $telefoneContato = $conn->real_escape_string($dadosRecebidos['telefoneContato']);
    $celularContato = $conn->real_escape_string($dadosRecebidos['celularContato']);

    $sql = "INSERT INTO $tableName (nomeContato, dataNascimento, email, profissao, telefoneContato, celularContato) VALUES ('$nomeContato', '$dataNascimento', '$email', '$profissao', '$telefoneContato', '$celularContato')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }
} else {
    echo "Dados incompletos ou ausentes.";
}

$conn->close();
?>
