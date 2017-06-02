<?php
return [

      /**
       * The languages available on the website.
       * Each available language must have its own folder inside the content folder.
       * Should be a a valid W3C locale (e.g.: fr || en-GB || zh-Hant-SG).
       * It is also possible to provide or override the default locale strings
       * by providing a configuration array containing one or some of the following keys:
       * 'my' => ['slug' => 'my-slug', 'label' => 'My Language', 'native' => 'Autonym', 'php' => 'my_PHP_locale']
       */
      'available' => [
            'en-GB'
      ],

      /**
       * Language used when the user's choice is undefined
       */
      'default' => 'en-GB',

      /**
       * Hide default language in generated URLs ?
       */
      'hideDefault' => true,
];
