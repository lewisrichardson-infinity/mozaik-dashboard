import React   from 'react'
import Mozaik  from 'mozaik/browser'
import github  from 'mozaik-ext-github'
import time    from 'mozaik-ext-time'


const MozaikComponent = Mozaik.Component.Mozaik
const ConfigActions   = Mozaik.Actions.Config

Mozaik.Registry.addExtensions({
    github,
    time
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
