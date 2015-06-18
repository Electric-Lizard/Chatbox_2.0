<?php
/**
 * Created by IntelliJ IDEA.
 * User: username
 * Date: 6/18/15
 * Time: 9:13 PM
 */

namespace BackEnd\core;


use Slim\Slim;

class Router {
    public $actionResult;
    protected $routeHandler;
    protected static $RouteMap = [
        '/:collection' => [
            ['GET', '/', 'getModels'],
            ['GET', '/:id', 'getModel'],
            ['POST', '/', 'createModel'],
            ['PUT', '/:id', 'updateModel'],
            ['DELETE', '/:id', 'deleteModel']
        ]
    ];

    public function __construct() {
        $this->routeHandler  = new Slim();
    }

    public function route($map = null, $root = '') {
        if (is_null($map)) {$map = self::$RouteMap;}
        foreach ($map as $key => $value) {
            if(is_string($key)) {
                $root .= $key;
                $this->{__FUNCTION__}($value, $root);
            } else {
                $action = $value[2];
                $this->routeHandler->map($root.$value[1], function($collection, $modelId) use ($action) {
                    $this->handleRoute($collection, $modelId, $action);
                })->via($value[0]);
            }
        }
    }

    protected function handleRoute($collection, $modelId, $action) {
        $collection = self::getCollection($collection);
        return $this->actionResult = $collection->{$action}($modelId);
    }

    protected static function getCollection($collection) {
        $collection[0] = strtoupper($collection[0]);
        return new $collection();
    }
}