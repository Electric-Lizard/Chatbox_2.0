<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 5/20/2015
 * Time: 6:24 AM
 */
namespace BackEnd;
use BackEnd\core\Controller;
use Slim\Route;
use Slim\Slim;

require __DIR__ . '/vendor/autoload.php';

Route::setDefaultConditions(array(
    'collection' => '^(posts|users)$'
));

$app = new Slim();

$app->group('/:collection', function($collectionName) use($app) {
    $collection = Controller::getCollection($collectionName);
    $app->get('/', array($collection, 'getModels'));
    $app->get('/:id', array($collection, 'getModel'));
    $app->post('/', array($collection, 'createModel'));
    $app->put('/:id', array($collection, 'updateModel'));
    $app->delete('/:id', array($collection, 'deleteModel'));
});