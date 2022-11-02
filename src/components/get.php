<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
$data = json_decode(file_get_contents("php://input"));

$email = $_GET['from_email'];
$pass = $_GET['from_message'];
// echo $email;
// echo $pass;

// $_POST = json_decode($rest_json, true);

// $_GET = json_decode($rest_json, true);

// $from_email = $data->from_email;
// $from_pass = $data->from_message;


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "traveleasy";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$method = $_SERVER['REQUEST_METHOD'];

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $from_name = $_SERVER['QUERY_STRING'];
// echo $from_name;


if ($email && $pass) {
    $sql = "SELECT from_name, from_email, from_age FROM data WHERE from_email='$email' AND from_message='$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            // echo array($row["from_name"], $row["from_email"]);
            $data = $row["from_email"];
            // $data = array($row["from_name"], $row["from_email"]);
            // $data = "logged in";.
            echo json_encode($data);
        }
    } else {
        echo "Error";
    }
} else {
    echo "Error";
}


// switch ($method) {
//         case 'POST':
//             $from_name = $_POST['from_name'];
//             break;
//     case 'GET':
//         $from_name = $_GET['from_name'];
//         $sql = "SELECT from_name, from_email FROM data WHERE from_name='$from_name'";
//         $result = $conn->query($sql);

//         if ($result->num_rows > 0) {
//             while ($row = $result->fetch_assoc()) {
//                 echo "Name " . $row["from_name"] . "<br>" . "Email: " . $row["from_email"] . "<br>";
//             }
//         } else {
//             echo 'Error selecting record: ' . $conn->error;
//         }
//         break;
// }

$conn->close();
