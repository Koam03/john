<?php
// list_files.php

header('Content-Type: application/json');

// Specify the assets directory
$directory = __DIR__ . '/';

$files = array();

if ($handle = opendir($directory)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && !is_dir($entry)) {
            $files[] = 'assets/' . $entry;
        }
    }
    closedir($handle);
}

echo json_encode($files);
?>
