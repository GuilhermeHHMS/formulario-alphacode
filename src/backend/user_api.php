<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "127.0.0.1";
$username = "alpha";
$password = "98136989";
$dbname = "alpha_db";

@$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Trate solicitações OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

$action = isset($_GET['action']) ? $_GET['action'] : '';

switch ($action) {
    case 'create':
        handleCreate();
        break;
    case 'read':
        handleRead();
        break;
    case 'update':
        handleUpdate();
        break;
    case 'delete':
        handleDelete();
        break;
    default:
        echo json_encode(array('error' => 'Ação desconhecida.'));
        break;
}

$conn->close();

function handleCreate() {
    global $conn;

    // Receba a carga útil JSON da solicitação
    $dadosRecebidos = json_decode(file_get_contents("php://input"), true);

    // Verifique se os dados foram recebidos corretamente
    if (isset($dadosRecebidos['nomeContato']) && isset($dadosRecebidos['dataNascimento']) &&
        isset($dadosRecebidos['email']) && isset($dadosRecebidos['profissao']) &&
        isset($dadosRecebidos['telefoneContato']) && isset($dadosRecebidos['celularContato'])) {

        // Obtenha os valores da carga útil
        $nomeContato = $dadosRecebidos['nomeContato'];
        $dataNascimento = $dadosRecebidos['dataNascimento'];
        $email = $dadosRecebidos['email'];
        $profissao = $dadosRecebidos['profissao'];
        $telefoneContato = $dadosRecebidos['telefoneContato'];
        $celularContato = $dadosRecebidos['celularContato'];

        // Crie a tabela se não existir
        $sqlCreateTable = "CREATE TABLE IF NOT EXISTS sua_tabela (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nomeContato VARCHAR(255),
            dataNascimento VARCHAR(255),
            email VARCHAR(255),
            profissao VARCHAR(255),
            telefoneContato VARCHAR(20),
            celularContato VARCHAR(20)
        )";
        
        $conn->query($sqlCreateTable);

        // Insira os dados na tabela
        $sql = "INSERT INTO sua_tabela (nomeContato, dataNascimento, email, profissao, telefoneContato, celularContato)
                VALUES ('$nomeContato', '$dataNascimento', '$email', '$profissao', '$telefoneContato', '$celularContato')";

        if ($conn->query($sql) === TRUE) {
            $resposta = array('mensagem' => 'Dados inseridos com sucesso no MySQL!');
            echo json_encode($resposta);
        } else {
            $resposta = array('erro' => 'Erro ao inserir dados no MySQL: ' . $conn->error);
            echo json_encode($resposta);
        }
    } else {
        $resposta = array('erro' => 'Dados incompletos ou ausentes na solicitação.');
        echo json_encode($resposta);
    }
}

function handleRead() {
    global $conn;

    // Lógica para a operação de leitura
    $sql = "SELECT * FROM sua_tabela";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $rows = array();
        while($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    } else {
        echo json_encode(array('mensagem' => 'Nenhum dado encontrado.'));
    }
}

function handleUpdate() {
    global $conn;

    // Receba a carga útil JSON da solicitação
    $dadosRecebidos = json_decode(file_get_contents("php://input"), true);

    // Verifique se os dados foram recebidos corretamente
    if (isset($dadosRecebidos['id']) && isset($dadosRecebidos['nomeContato']) &&
        isset($dadosRecebidos['dataNascimento']) && isset($dadosRecebidos['email']) &&
        isset($dadosRecebidos['profissao']) && isset($dadosRecebidos['telefoneContato']) &&
        isset($dadosRecebidos['celularContato'])) {

        // Obtenha os valores da carga útil
        $id = $dadosRecebidos['id'];
        $nomeContato = $dadosRecebidos['nomeContato'];
        $dataNascimento = $dadosRecebidos['dataNascimento'];
        $email = $dadosRecebidos['email'];
        $profissao = $dadosRecebidos['profissao'];
        $telefoneContato = $dadosRecebidos['telefoneContato'];
        $celularContato = $dadosRecebidos['celularContato'];

        // Atualize os dados na tabela
        $sql = "UPDATE sua_tabela SET
                nomeContato = '$nomeContato',
                dataNascimento = '$dataNascimento',
                email = '$email',
                profissao = '$profissao',
                telefoneContato = '$telefoneContato',
                celularContato = '$celularContato'
                WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            $resposta = array('mensagem' => 'Dados atualizados com sucesso no MySQL!');
            echo json_encode($resposta);
        } else {
            $resposta = array('erro' => 'Erro ao atualizar dados no MySQL: ' . $conn->error);
            echo json_encode($resposta);
        }
    } else {
        $resposta = array('erro' => 'Dados incompletos ou ausentes na solicitação.');
        echo json_encode($resposta);
    }
}

function handleDelete() {
    global $conn;

    // Receba a carga útil JSON da solicitação
    $dadosRecebidos = json_decode(file_get_contents("php://input"), true);
    error_log(print_r($dadosRecebidos, true));
    // Verifique se os dados foram recebidos corretamente
    if (isset($dadosRecebidos['id'])) {
        $id = $dadosRecebidos['id'];

        try {
            // Use uma declaração preparada para evitar SQL Injection
            $stmt = $conn->prepare("DELETE FROM sua_tabela WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();

            // Verifique se a exclusão foi bem-sucedida
            if ($stmt->affected_rows > 0) {
                $resposta = array('mensagem' => 'Dados excluídos com sucesso no MySQL!');
                echo json_encode($resposta);
            } else {
                $resposta = array('erro' => 'Nenhum registro encontrado para excluir.');
                echo json_encode($resposta);
            }

            $stmt->close();
        } catch (Exception $e) {
            $resposta = array('erro' => 'Erro ao excluir dados no MySQL: ' . $e->getMessage());
            echo json_encode($resposta);
        }
    } else {
        $resposta = array('erro' => 'ID ausente na solicitação.');
        echo json_encode($resposta);
    }
}
?>
