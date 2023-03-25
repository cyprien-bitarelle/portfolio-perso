<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/33321e30a3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./assets/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <title>Portfolio - BTS SIO - Cyprien Bitarelle</title>
</head>

<body>
    <div id="loading">
        <div id="loading_figure"></div>
    </div>
    <script src="./script/loading_page.js"></script>

    <nav>
        <p><img src="./assets/projet_cyprien_bitarelle.jpg" alt="Photo de présentation de Cyprien Bitarelle de dos en train de travailler sur un projet."></p>
        <ul>
            <a href="#accueil">
                <li>Accueil</li>
            </a>
            <a href="#presentation">
                <li>Présentation</li>
            </a>
            <a href="#competences">
                <li>Compétences</li>
            </a>
            <a href="#formations">
                <li>Formation - Expériences</li>
            </a>
            <a href="#projets">
                <li>Projets</li>
            </a>
            <a href="#contact">
                <li>Contact</li>
            </a>
        </ul>
        <p id="liens_reseaux">
            <a href="https://www.linkedin.com/in/cyprien-bitarelle/"><i class="fa-brands fa-linkedin reseaux"></i></a>
            <a href="https://github.com/cyprien-bitarelle"><i class="fa-brands fa-github reseaux"></i></a>
        </p>

    </nav>
    <main>
        <section id="accueil">
            <div>
                <div>
                    <h2>Je m'appelle</h2>
                    <div class=" wrapper">
                        <span is="type-async" id="type-text">CYPRIEN</span>
                        <span class="blinking-cursor">_</span>
                    </div>
                </div>
                <p><img id="developpeur" src="./assets/developpement.png"> Développeur Web</p>
            </div>
            <div>
                <p><img src="./assets/ordinateur.gif" id="gif_accueil" alt="Gif d'accueil"></p>
            </div>
        </section>
        <section id="presentation">
            <div id="presentation-gauche">
                <h2>Bonjour,</h2>
                <article>
                    <p id="paragraphe_presentation">Je suis Cyprien Bitarelle, actuellement en formation en
                        informatique plus précisemment en BTS SIO, voici mon Portfolio qui regroupe une grande partie de
                        mes travaux pour ces 2 ans.
                    </p>
                    <span onclick="showMore()" id="show-more">voir plus</span>
                    <span id="trait"></span>
                </article>
                <div>
                    <ul>
                        <li><span class="libelle_presentation">AGE : </span><span class="info_presentation">27
                                ans</span>
                        </li>
                        <li><span class="libelle_presentation">DIPLOME EN COURS :</span><span class="info_presentation">
                                BTS SIO</span></li>
                        <li><span class="libelle_presentation">VILLE : </span><span class="info_presentation">
                                ARLES</span></li>
                    </ul>
                </div>
            </div>
            <div id="presentation-droite">
                <p><img src="" id="extrait-code" alt="Image de code"></p>
                <div class="blue_button">
                    <a target="_blank" href="./assets/Cv-Cyprien-Bitarelle.pdf">CONSULTER MON CV</a>
                </div>
            </div>
        </section>
        <section id="competences">
            <div class="left">
                <h2>MES COMPETENCES</h2>
                <div>
                    <p>
                        Mes formations ainsi que mes expériences professionnelles me permettent d'être dès à présent
                        quelqu'un
                        d'autonome, de polyvalent, de consciencieux. Voici ci-dessous un aperçu de mes compétences
                        techniques :
                    </p>
                    <ul>
                        <li>HTML5, CSS3 <span class="pourcentage">75%</span></li>
                        <div class="container_jauge">
                            <div class="progress"></div>
                        </div>
                        <li>SQL, PHP<span class="pourcentage">60%</span></li>
                        <div class="container_jauge">
                            <div class="progress"></div>
                        </div>
                        <li>CODEIGNITER<span class="pourcentage">60%</span></li>
                        <div class="container_jauge">
                            <div class="progress"></div>
                        </div>
                        <li>JAVASCRIPT<span class="pourcentage">50%</span></li>
                        <div class="container_jauge">
                            <div class="progress"></div>
                        </div>
                        <li>VUE.JS<span class="pourcentage">50%</span></li>
                        <div class="container_jauge">
                            <div class="progress"></div>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="wrapper">
                <div class="right top">
                    <img src="./assets/skills.png">
                    <div id="html" class="blue bulle">
                        <p>HTML</p>
                    </div>
                    <div id="php" class="blue bulle">
                        <p>PHP</p>
                    </div>
                    <div id="mvc" class="grey bulle">
                        <p>MVC</p>
                    </div>
                    <div id="javascript" class="black bulle">
                        <p>JS</p>
                    </div>
                    <div class="blue bulle"></div>
                    <div class="black bulle"></div>
                    <div class="grey bulle"></div>
                </div>
                <div class="right bottom">
                    <h2>SOFT SKILLS</h2>
                    <ul>
                        <li class="soft-skills"><img src="./assets/equipe.png" alt="icone travail d'équipe"> Travail en
                            équipe</li>
                        <li class="soft-skills"><img src="./assets/management.png" alt="icone management"> Management
                        </li>
                        <li class="soft-skills"><img src="./assets/temps.png" alt="icone gestion du temps"> Gestion du
                            temps</li>
                        <li class="soft-skills"><img src="./assets/relation.png" alt="icone relation client"> Relation
                            client</li>
                        <li class="soft-skills"><img src="./assets/decision.png" alt="icone esprit critique et prise de décision"> Esprit
                            critique et prise de décision
                        </li>
                        <li class="soft-skills"><img src="./assets/defi.png" alt="icone défi et challenges"> Aime le
                            défi et les challenges</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="formations">
            <img src="./assets/puce-electronique.png" alt="schéma d'une puce électronique">
            <div>
                <div id="description_mission">
                    <!-- <h3>CNAM - Résurgences</h3>
                    <p>Mai 2021 - Août 2022</p>
                    <p>Formation intégrateur / développeur web</p>
                    <p>Création d'un site internet à destination des assistants. Architecture MVC. Création de la base
                        de données.</p> -->
                </div>
                <div id="chronologie">
                    <div>
                        <div>
                            <div class="annees" id="2015"></div>
                            <p>2015</p>
                        </div>
                        <div>
                            <div class="annees" id="2020"></div>
                            <p>2020</p>
                        </div>
                        <div>
                            <div class="annees" id="2021"></div>
                            <p>2021</p>
                        </div>
                        <div>
                            <div class="annees" id="2022"></div>
                            <p>2022</p>
                        </div>
                        <div>
                            <div class="annees annee-actuelle" id="2023"></div>
                            <p>2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="projets">
            <h2>MES PROJETS</h2>
            <!-- <ul>
                <li>Tous</li>
                <li>En cours</li>
                <li>Terminé</li>
            </ul> -->
            <div id="liste_projets">
                <a href="./projet_meteo/meteo.html" target="_blank">
                    <div class="card">
                        <p class="images-projets"><img src="./assets/projet-meteo.png" alt="Image de mon projet météo réalisé en utilisant l'API OpenWeatherMap"></p>
                        <div class="content">
                            <p>Voici mon tout premier projet javascript réalisé à partir des API OpenWeatherMap et
                                RESTCountries. J'ai aussi utilisé la librairie
                                Leaflet pour afficher la map.
                                Le projet est en Javascript Vanilla.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="./projet_morpion/morpion.html" target="_blank">
                    <div class="card">
                        <p class="images-projets"><img src="./assets/projet-morpion.png" alt="Image de mon projet morpion, réalisé en Javascript">
                        </p>
                        <div class="content">
                            <p>Voici mon deuxième projet en javascript. Il s'agit d'un morpion qui permet à deux
                                personnes de jouer sur le même navigateur.
                                Le design est encore en travaux. </p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
        <section id="contact">
            <div id="questions">
                <h2>Des questions ?</h2>
                <p>N'hésitez pas à me contacter !</p>
                <form id="formulaire" method="post" action="index.php#contact">
                    <div>
                        <input type="text" placeholder="Votre nom" name="nom" id="nom" required>
                        <input type="text" placeholder="Votre prénom" name="prenom" id="prenom" required>
                    </div>
                    <input type="email" placeholder="Votre adresse mail" name="email" id="email" required>
                    <textarea rows="10" placeholder="Votre message" name="message" id="message" required></textarea>
                    <input id="form_button" type="submit" value="Envoyer">
                </form>
                <?php

                use PHPMailer\PHPMailer\PHPMailer;
                use PHPMailer\PHPMailer\SMTP;

                require './vendor/autoload.php';

                if (isset($_POST['message']) && isset($_POST['email']) && isset($_POST['nom']) && isset($_POST['prenom'])) {

                    $mail = new PHPMailer();
                    //Tell PHPMailer to use SMTP
                    $mail->isSMTP();
                    //Set the hostname of the mail server
                    $mail->Host = 'smtp.gmail.com';
                    //Set the SMTP port number:
                    $mail->Port = 465;
                    $mail->SMTPSecure = "ssl";
                    //Whether to use SMTP authentication
                    $mail->SMTPAuth = true;
                    //Username to use for SMTP authentication - use full email address for gmail
                    $mail->Username = '';
                    //Password to use for SMTP authentication
                    $mail->Password = '';
                    $mail->isHTML(true);
                    $mail->addAddress('bitarelle.cyprien@gmail.com');
                    $mail->setFrom("cyprien.bitarelle@gmail.com", $_POST['nom'] . " " . $_POST['prenom']);
                    $mail->addReplyTo($_POST["email"], $_POST['nom'] . " " . $_POST['prenom']);
                    //Set the subject line
                    $mail->Subject = 'Mail recu depuis le formulaire du portfolio.';
                    $mail->Body = $_POST['message'] . "<br>" . $_POST['email'];
                    //send the message, check for errors
                    if ($mail->send()) {
                        echo '<p>Message envoyé ! Merci.</p>';
                    } else {
                        echo '<p>Erreur : ' . $mail->ErrorInfo . "</p>";
                    }
                }

                ?>
            </div>
            <div id="localisation">
                <button id="localisation_button" class="green_button"><i class="fa-regular fa-map"></i> Voir
                    localisation</button>
                <div id="mapid">

                </div>
            </div>

        </section>
    </main>
    <script src="./script/config.js"></script>
    <script src="./script/formation.js"></script>
    <script src="./script/typing_text.js"></script>
    <script src="./script/show-more.js"></script>
    <script src="./script/scroll.js"></script>
    <script src="./script/switch-extrait.js"></script>
    <script src="./script/map.js"></script>
    <script src="./script/skills.js"></script>
</body>