
<?php
$exampleContent = $_POST['test'];
$postDataRequest = [
'http' => [
'method' => 'POST',
'header' => "Content-type: application/x-www-form-urlencoded",
'user_agent' => "Mozilla/5.0",
'content' => http_build_query([
 'fragment' => $exampleContent,
 'output' => 'soap12'
 ])
]];

$validationUrl = "http://validator.w3.org/check";
$context = stream_context_create($postDataRequest);
$validatorResponse = file_get_contents($validationUrl, false, $context);
/*
 * A summary is returned in the response header
 */
$errorsString = $http_response_header[5];
$warningString = $http_response_header[6];
/*
 * XML output can also be obtained
 */

$warnings =  substr($warningString, 26);
$errors =  substr($errorsString, 24);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <div class="gos">
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
    <div class="mark"></div>
  </div>
<div class="number display-skeleton">/10</div>
</div>
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>

  <script type="text/javascript">
  var warnings = "<?php echo $warnings; ?>";
  var errors = "<?php echo $errors; ?>";

if (errors>9) {errors=9};

 var test = function (errors){
    var rank = 10 - errors;


for (var i = 0; i <= rank; i++) {
(function(i) {
        $(".mark:nth-child("+i+")").addClass('display-skeleton');    

setTimeout(function(){
        $(".mark:nth-child("+i+")").addClass('display animated bounceInDown');
      }, 200*i);

})(i);
    
    setTimeout(function(){
        $('.number').addClass('display animated bounceInDown');
    }, (rank+1)*200);   

    }

  }

  test(errors);

  </script>
</body>
</html>