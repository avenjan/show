<?php
    //Check the "name" of the field for the presence of the filling
    if(trim($_POST['name']) == '') {
        $hasError = true;
    } else {
        $name = trim($_POST['name']);
    }

    //Check the "email" of the field for the presence of the filling
    if(trim($_POST['email']) == '')  {
        $hasError = true;
    } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
        $hasError = '<strong>Error!</strong> Please enter a valid email address';
    } else {
        $email = trim($_POST['email']);
    }

    //Check the "message" of the field for the presence of the filling
    if(trim($_POST['message']) == '') {
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $message = stripslashes(trim($_POST['message']));
        } else {
            $message = trim($_POST['message']);
        }
    }

	//Check the "subject" of the field for the presence of the filling
	if(trim($_POST['subject']) == '') {
		$hasError = true;
	} else {
		$subject = trim($_POST['subject']);
	}
	
    //If there is no error, send the email
    if(!$hasError) {
        $emailTo = 'spacetemplates@gmail.com'; //Put your own email address here
        $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $message";
        $headers = "From: ".$name." <".$email.">\r\nReply-To: ".$email."";
		$headers = 'From: www.yoursite.com <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

        $sent = mail($emailTo, $subject, $body, $headers);
        if ($sent) {
                //If message is sent
                echo "SEND"; 
            } else {
                //If errors are found
                echo "<strong>Error!</strong> Required fields are not filled or filled incorrectly, please send a check and try again."; 
            }
    } else {
        echo $hasError; //If errors are found
    }
?>