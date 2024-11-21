<?php
header('Content-Type: application/json');

$file = 'c:/xampp/htdocs/myproject/banks.json'; // Path to your JSON file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $data = file_get_contents('php://input');

    // Log the received data for debugging
    error_log('Received JSON: ' . $data);

    // Validate the JSON data
    if (json_decode($data) !== null) {
        // Write the data to the JSON file
        if (file_put_contents($file, $data)) {
            echo json_encode(['status' => 'success']);
        } else {
            error_log('Failed to write to file: ' . $file);
            echo json_encode(['status' => 'error', 'message' => 'Failed to write to file']);
        }
    } else {
        error_log('Invalid JSON received: ' . $data);
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
    }
} else {
    error_log('Invalid request method: ' . $_SERVER['REQUEST_METHOD']);
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>