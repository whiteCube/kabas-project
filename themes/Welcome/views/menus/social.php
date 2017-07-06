<?php foreach($items as $item): ?> 
    <a href="<?= $item->target ?>" class="icon-link icon-link--<?= $item->icon ?>"><?= $item->label ?></a>
<?php endforeach; ?>