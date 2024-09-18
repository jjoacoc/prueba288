<?php
// Habilitar CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Incluir el archivo de conexión
require 'conexion.php';

// Leer los datos enviados en el POST (JSON)
$data = json_decode(file_get_contents("php://input"));

// Verificar que los datos no estén vacíos
if(isset($data->nombre) && isset($data->email)) {
    $nombre = $data->nombre;
    $email = $data->email;

    // Preparar la consulta de inserción
    $stmt = $conn->prepare("INSERT INTO tu_tabla (nombre, email) VALUES (:nombre, :email)");
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':email', $email);

    // Ejecutar la consulta
    if($stmt->execute()) {
        echo json_encode(["message" => "Registro insertado correctamente"]);
    } else {
        echo json_encode(["message" => "Error al insertar el registro"]);
    }
} else {
    echo json_encode(["message" => "Datos incompletos"]);
}

// No olvidar cerrar la conexión al final
$conn = null;
?>
