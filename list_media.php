<?php
header('Content-Type: application/json');

// Define allowed file extensions
$image_extensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
$video_extensions = ['mp4', 'webm', 'ogg', 'avi', 'mov', 'mkv'];

// Get the root directory
$root_dir = $_SERVER['DOCUMENT_ROOT'];

// Initialize arrays to hold media files
$images = [];
$videos = [];

// Scan the root directory
$files = scandir($root_dir);

foreach ($files as $file) {
    // Skip directories
    if (is_dir($root_dir . '/' . $file)) {
        continue;
    }

    $file_extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

    if (in_array($file_extension, $image_extensions)) {
        $images[] = '/' . $file;
    } elseif (in_array($file_extension, $video_extensions)) {
        $videos[] = '/' . $file;
    }
}

// Return the media files as JSON
echo json_encode([
    'images' => $images,
    'videos' => $videos
]);
?>
