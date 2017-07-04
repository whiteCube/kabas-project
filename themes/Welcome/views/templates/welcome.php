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
                        <?= Lang::trans('welcome.info', ['link' => '<a href="https://www.kabas.io" class="facade__link">kabas.io</a>']) ?><br>
                        <?= Lang::trans('welcome.developers', ['link' => '<a href="https://documentation.kabas.io" class="facade__link">' . Lang::trans('welcome.documentation') . '</a>']) ?>
                    </p>
                </div>
                <a href="https://www.github.com/WhiteCube" class="facade__social facade__social--gh"><?= Lang::trans('welcome.github') ?></a>
                <a href="https://www.twitter.com/WhiteCube" class="facade__social facade__social--tw"><?= Lang::trans('welcome.twitter') ?></a>
                <a href="#" class="btn btn--primary"><?= Lang::trans('welcome.account.create') ?></a>
            </div>
            <span class="facade__version">Kabas <?= $version ?></span>
        </div>
    </div>
    <canvas id="canvas" class="facade__canvas"></canvas>
    <?php Assets::here('scripts'); ?>
</body>
</html>