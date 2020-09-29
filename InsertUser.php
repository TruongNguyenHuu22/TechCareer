<?php

session_start();

$Username = $_POST['Username'];
$Email = $_POST['Email'];
$Password = $_POST['Password'];

if(!empty($Username) || !empty($Email) || !empty($Password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword ="";
    $dbname = "techcareer";

    //create conection
    $conn= new mysqli($host,$dbUsername,$dbPassword,$dbname);
    if (mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }else{
        $SELECT = "SELECT Email From user Where Email = ? Limit 1";
        $INSERT = "INSERT Into user (Username, Email, Password) value (?,?,?)";

        //Prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt ->bind_param("s", $Email);
        $stmt ->execute();
        $stmt ->bind_result($Email);
        $stmt ->store_result();
        $rnum = $stmt -> num_rows;
        
        if($rnum == 0){
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt ->bind_param("sss", $Username, $Email, $Password);
            $stmt->execute();
            echo "New record inserted successfully";
        } else{
            echo "Someone already register using this Email";
        }
        $stmt ->close();
        $conn->close();


    }
} else{
    echo "All field are required";
    die();
}
?>