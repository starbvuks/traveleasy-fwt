<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$from_name = $_POST['from_name'];
$from_age = $_POST['from_age'];
$from_email = $_POST['from_email'];
$from_message = $_POST['from_message'];
$from_file = $_POST['from_file'];

$conn = new mysqli('localhost', 'root', '', 'traveleasy');

if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

$sql = "INSERT INTO data(from_name, from_age, from_email, from_message, from_file)
VALUES ('$from_name', $from_age, '$from_email', '$from_message', '$from_file')";

// $sql = "INSERT INTO data(from_name, from_age, from_email, from_message, from_file)
// VALUES ('Tets', 25, 'test@gmail.com', 'will this work', 'some-file.jpeg')";

if ($conn->query($sql) == TRUE) {
    echo "Your message has been submitted";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// if ($mysqli_query($conn, $sql)) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }


$conn->close();

// else {
//     $stmt = $conn->prepare("insert into data(from_name, from_age, from_email, from_message, from_file)
//     values(?, ?, ?, ?, ?)");
//     $stmt->bind_param("sissb", $from_name, $from_age, $from_email, $from_message, $from_file);
//     $stmt->execute();
//     echo "Registered Succesfully";

//     $stmt->close();
//     $conn->close();
// }
