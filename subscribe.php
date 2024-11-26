<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'subscribers.txt'; // File to store emails
        $currentDate = date('Y-m-d H:i:s'); // Timestamp
        
        // Append the email and timestamp to the file
        $entry = $email . " - " . $currentDate . PHP_EOL;
        if (file_put_contents($file, $entry, FILE_APPEND)) {
            echo 'success';
        } else {
            echo 'error';
        }
    } else {
        echo 'invalid';
    }
} else {
    echo 'invalid_method';
}
?>
