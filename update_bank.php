<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $data = file_get_contents('php://input');
    $file = 'c:/xampp/htdocs/myproject/banks.json'; // Path to your JSON file

    // Validate the JSON data
    if (json_decode($data) !== null) {
        // Write the data to the JSON file
        if (file_put_contents($file, $data)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to write to file']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>