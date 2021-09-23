<!DOCTYPE HTML>
<html>
<?php
    
    $cities = array("Nuuk", "Oslo", "Marrakech", "Novosibirsk", "Athen", "Moscow", "København", "Tehran", "Cape Town", "Odense", "Hamburg", "Toronto", "New York", "Palma", "Gauna", "Tabriz", "Dori", "Reykjavik", "Beijing", "Xiamen", "Shanghai", "Hong Kong", "Shiraz", "Paris", "Berlin", "Aarhus", "Tokyo", ª);

    // get random index from array $arrX
$randIndex = array_rand($cities);

// output the value for the random index
$rancity = $cities[$randIndex];

echo $rancity;
?>

</html>