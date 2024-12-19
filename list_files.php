<?php
// list_files.php

// Set the header to return JSON content
header('Content-Type: application/json');

// Specify the directory to scan (root directory)
$directory = __DIR__;

// Initialize an array to hold file names
$files = array();

// Open the directory
if ($handle = opendir($directory)) {
    while (false !== ($entry = readdir($handle))) {
        // Skip current and parent directories
        if ($entry != "." && $entry != ".." && !is_dir($entry)) {
            $files[] = $entry;
        }
    }
    closedir($handle);
}

// Return the file list as JSON
echo json_encode($files);
?>
