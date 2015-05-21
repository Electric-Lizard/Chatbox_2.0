<?php
/**
 * Created by IntelliJ IDEA.
 * User: User
 * Date: 5/20/2015
 * Time: 6:24 AM
 */
namespace backEnd;
use Slim\Route;
use Slim\Slim;

require __DIR__ . '/vendor/autoload.php';

Route::setDefaultConditions(array(
    'model' => '^(posts|users)$'
));

$app = new Slim();

$app->group('/:model', function($model) use($app) {
    $handler = new Handler($model);
    $app->get('/', array($handler, 'getModels'));
    $app->get('/:id', array($handler, 'getModel'));
    $app->post('/', array($handler, 'createModel'));
    $app->put('/:id', array($handler, 'updateModel'));
    $app->delete('/:id', array($handler, 'deleteModel'));
});