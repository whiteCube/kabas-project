<?php

namespace Theme\Welcome\Templates;

use \Auth;
use \Assets;
use Kabas\App;
use Kabas\Controller\TemplateController;

class Welcome extends TemplateController
{
    /**
     * Prepare data to pass to the view
     * @return void
     */
    protected function setup()
    {
        $this->hasAdmins = Auth::hasAdministrators();
        Assets::add('js/welcome.js', 'scripts');
        Assets::add('css/welcome.css', 'stylesheets');
        $this->version = App::VERSION;
    }
}
