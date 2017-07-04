<?php

namespace Theme\Welcome\Templates;

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
        // TODO: Check if admin account exists to toggle "Create my account" button
        // TODO: Make a menu for social links
        Assets::add('js/welcome.js', 'scripts');
        Assets::add('css/welcome.css', 'stylesheets');
        $this->version = App::VERSION;
    }
}
