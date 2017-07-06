<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= Page::title() ?></title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">
    <?php Assets::here('stylesheets'); ?>
</head>
<body class="facade facade--welcome">
    <div class="container">
        <div class="facade__sidepanel">
            <div class="facade__content">
                <h1 class="facade__title"><?= Lang::trans('welcome.welcome') ?></h1>
                <div class="facade__text">
                    <p><?= Lang::trans('welcome.success') ?></p>
                    <p><?= Lang::trans('welcome.cms') ?></p>
                    <p>
                        <?= Lang::trans('welcome.info', ['link' => '<a href="https://www.kabas.io" class="link">kabas.io</a>']) ?><br>
                        <?= Lang::trans('welcome.developers', ['link' => '<a href="https://documentation.kabas.io" class="link">' . Lang::trans('welcome.documentation') . '</a>']) ?>
                    </p>
                </div>
                <?= Menu::social() ?>
                <?php if(!$hasAdmins): ?>
                <!-- TODO: Replace the # with a proper link to admin page -->
                <a href="#" class="btn btn--primary"><?= Lang::trans('welcome.account.create') ?></a>
                <?php endif; ?>
            </div>
            <span class="facade__version">Kabas <?= $version ?></span>
        </div>
    </div>
    <canvas id="canvas" class="facade__canvas"></canvas>
    <?php Assets::here('scripts'); ?>
</body>
</html>