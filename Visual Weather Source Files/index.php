<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Weather Visualizer</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.js"></script>



        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <link rel="stylesheet" href="style.css">
    </head>
    <body>



        <nav class="navbar navbar-default" id="nav_bar">
            <div class="container">
                <div class="navbar-header">
                    <a href="index.php" class="navbar-brand navbar-link weather">
                        <img src="images/logowhite.png" class="img-responsive" id="logo" alt="">
                    </a>
                
                </div>

            </div>
        </nav>


        <! video header: ref: https://startbootstrap.com/snippets/video-header/ >
        <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
            </video>
            <div class="container h-100">
                            <h2  id="colheaderText">Revolutionizing Weather Apps.</h2>
                            <h2 id="colsubheaderText">Welcome to <i>Visual Weather</i>. </h2>
                            <p>Cutting-edge. Innovating. Alive. Experience real-time weather from near and far in an intuitive, responsive and aesthetic way. <i>Visual Weather</i> lets you - the curious weather enthusiast - explore nature from your favourite web-browser. Enjoy!</p>
                

                    <div class="first"><button type="button" id="goToVisuals">Let's Go!</button></div>

                </div>
            </div>
        </header>




        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>   



        <?php

        $cities = array("Nuuk", "Oslo", "Marrakech", "Novosibirsk", "Athen", "Moscow", "København", "Tehran", "Cape Town", "Odense", "Hamburg", "Toronto", "New York", "Palma", "Gauna", "Tabriz", "Dori", "Reykjavik", "Beijing", "Xiamen", "Shanghai", "Hong Kong", "Shiraz", "Paris", "Berlin", "Aarhus");

        // get random index from array $arrX
        $randIndex = array_rand($cities);

        // output the value for the random index
        $rancity = $cities[$randIndex];


        ?>
        <div class="visuals">
            <div class="jumbotron" style=>
                <h2 class="text-center" id="colheaderTextLow" style="font-size:40px; font-weight:600;">Let's Visualize!</h2>
                <h2 class="text-center" id="colsubheaderText">Enter Any City <h2>
                    <input id="textbox" type="text" value="<?php echo htmlentities($rancity); ?>" />
                    
                    <button onclick='city()' id="visualizeBtn">Visualize!</button>
                    <p>Pick your favourite city, type it in, press 'Visualize!' and experience <i>Visual Weather</i>.</p>


                    <script>
                        var input = document.getElementById("textbox");
                        input.addEventListener("keyup", function(event) {
                            if (event.keyCode === 13) {
                                event.preventDefault();
                                document.getElementById("visualizeBtn").click();
                            }
                        });
                    </script>
                    </div>


                    <script src="sketch.js"></script>
                    <script src="scroll.js"></script>

                    </div>


                </body>

            </html>
