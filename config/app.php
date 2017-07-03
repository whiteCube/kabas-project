<?php

/*
|--------------------------------------------------------------------------
| Application configuration
|--------------------------------------------------------------------------
|
| Here is defined the core application base configuration such as
| what type of driver is used to access data (ex JSON, mysql).
|
*/

return [

      /**
       * Defines the errors display. When set to true, A customized Whoops
       * will be used to display dumps and exceptions. If set to false, the default
       * public error pages will be shown. You can make your own error pages.
       * @var bool
       */
      "debug" => true,

      /**
       * The default driver used to get your site's data in the content
       * folders. Only JSON is supported at the moment.
       * @var string
       */
      'driver' => 'json',

      /**
       * The driver used by Intervention Image (gd | imagick)
       */
      'imageDriver' => 'gd',

      /**
       * Aliases for classes
       * @var array
       */
      'aliases' => [
            'Assets' => Kabas\Utils\Assets::class,
            'Benchmark' => Kabas\Utils\Benchmark::class,
            'Lang' => Kabas\Utils\Lang::class,
            'Menu' => Kabas\Utils\Menu::class,
            'Meta' => Kabas\Utils\Meta::class,
            'Page' => Kabas\Utils\Page::class,
            'Part' => Kabas\Utils\Part::class,
            'Session' => Kabas\Utils\Session::class,
            'Text' => Kabas\Utils\Text::class,
            'Url' => Kabas\Utils\Url::class
      ],
];
