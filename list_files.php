<?php
// list_files.php

header('Content-Type: application/json');

// Define allowed file extensions
$allowedExtensions = [
    'images' => ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'tif', 'webp', 'svg', 'ai', 'psd', 'xcf', 'blend', 'obj', 'fbx', 'stl'],
    'videos' => ['mp4', 'webm', 'mov', 'avi'],
    'audio'  => ['mp3', 'wav', 'aac'],
    'documents' => ['pdf', 'docx', 'xlsx', 'pptx', 'txt'],
    'archives'  => ['zip', 'rar', '7z']
];

// Combine all allowed extensions into a single array for easy checking
$allAllowed = array_merge(...array_values($allowedExtensions));

// Get the current directory
$dir = __DIR__;

// Scan the directory for files
$files = array_diff(scandir($dir), array('.', '..'));

// Filter files based on allowed extensions
$mediaFiles = [];

foreach ($files as $file) {
    $filePath = $dir . DIRECTORY_SEPARATOR . $file;
    if (is_file($filePath)) {
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        if (in_array($ext, $allAllowed)) {
            $mediaFiles[] = $file;
        }
    }
}

// Return the list as JSON
echo json_encode($mediaFiles);
?>