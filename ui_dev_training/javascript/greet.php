<?php 
	

	if(isset($_GET['fname']) && isset($_GET['lname'])) {
		$fname = htmlspecialchars($_GET['fname']);
		$lname = htmlspecialchars($_GET['lname']);

		$fullname = $fname . " " . $lname;

		if($fullname) {
			echo("hello $fullname, welcome to ajax!");
		} else {
			echo("welcome guest!")
		}
	}
?>