'use strict';

const icon = require('./icon.png');

const phpPlugin = ({term, display, actions}) => {
    display({
        id: 'php',
        icon,
        order: 10,
        title: `Search php.net for ${term}`,
        clipboard: `http://php.net/manual-lookup.php?pattern=${term}&src={referrer:cerebroapp.com}`,
        onSelect: () => actions.open(`http://php.net/manual-lookup.php?pattern=${term}&src={referrer:cerebroapp.com}`)
    })
};

module.exports = {
    fn: phpPlugin,
    icon,
    name: 'Search on php.net',
    keyword: 'php'
}
