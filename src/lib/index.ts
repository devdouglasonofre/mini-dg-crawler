// place files you want to import through the `$lib` alias in this folder.

import { GameModel } from "../model/game.model";
import { writable } from "svelte/store";

export const game = writable(new GameModel());

