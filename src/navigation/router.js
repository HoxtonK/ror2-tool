import React from 'react';
import Characters from '../pages/characters';
import Items from '../pages/items'
import HomePage from '../pages/home'
import Bosses from '../pages/bosses'
import Environments from '../pages/environments'
import Chests from '../pages/chests'
import Enemies from '../pages/enemies'
import Challenges from '../pages/challenges';
import Abilities from '../pages/abilities'
import Npcs from '../pages/npcs'
import CommandoPage from '../pages/commandopage'
import HuntressPage from '../pages/huntresspage';
import StatTester from '../pages/stattester';

const routes = {
  "/": () => <HomePage />,
  "/home" : () => <HomePage />,
  "/characters": () => <Characters />,
  "/items": () => <Items />,
  "/environments": () => <Environments />,
  "/enemies": () => <Enemies />,
  "/bosses": () => <Bosses />,
  "/chests": () => <Chests />,
  "/challenges": () => <Challenges />,
  "/abilities": () => <Abilities />,
  "/npcs": () => <Npcs />,
  "/characters/commando":() => <CommandoPage />,
  "/characters/huntress":() => <HuntressPage />,
  "/stat_tester":() => <StatTester />

};

export default routes;