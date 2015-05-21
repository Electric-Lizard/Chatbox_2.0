<?php
/**
 * Created by IntelliJ IDEA.
 * User: cosysoft
 * Date: 21.05.15
 * Time: 16:46
 */

namespace BackEnd\core;


abstract class Collection {

    public function getModels() {
        echo 'get models';
    }

    public function getModel($id) {
        echo "get $id";
    }

    public function createModel() {
        echo 'create model';
    }

    public function updateModel($id) {
        echo "update $id";
    }

    public function deleteModel($id) {
        echo "delete $id";
    }
}