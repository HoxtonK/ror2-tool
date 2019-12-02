import React from 'react';
import Characters from '../pages/characters';
import Items from '../pages/items'
import HomePage from '../pages/home'
import Bosses from '../pages/bosses'
import Environments from '../pages/environments'
import Chests from '../pages/chests'
import Enemies from '../pages/enemies'
import Logs from '../pages/logs'
import Challenges from '../pages/challenges';
import Abilities from '../pages/abilities'
import Npcs from '../pages/npcs'

const routes = {
  "/": () => <HomePage />,
  "/home" : () => <HomePage />,
  "/characters": () => <Characters />,
  "/items": () => <Items />,
  "/environments": () => <Environments />,
  "/enemies": () => <Enemies />,
  "/logs": () => <Logs />,
  "/bosses": () => <Bosses />,
  "/chests": () => <Chests />,
  "/challenges": () => <Challenges />,
  "/abilities": () => <Abilities />,
  "/npcs": () => <Npcs />

};

export default routes;