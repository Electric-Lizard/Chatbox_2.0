<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 5/20/2015
 * Time: 6:24 AM
 */
namespace BackEnd;
use BackEnd\core\Controller;
use BackEnd\core\Responsible;
use Slim\Route;
use Slim\Slim;

require __DIR__ . '/vendor/autoload.php';

$application = new Responsible();
$application->run();