/* tslint:disable */
/* eslint-disable */
/**
* @param {string} received
* @param {Function} action
* @param {Function} progress
* @param {string} hero_base
* @param {string} required
* @param {string} acc
*/
export function cal(received: string, action: Function, progress: Function, hero_base: string, required: string, acc: string): void;
/**
* 输出要求（由外部传入）
*/
export class HeroAttrsRequired {
  free(): void;
/**
*/
  attack: number;
/**
*/
  crit_power: number;
/**
*/
  crit_rate: number;
/**
*/
  defense: number;
/**
*/
  dmg: number;
/**
*/
  effect_hit_rate: number;
/**
*/
  effect_resist_rate: number;
/**
*/
  max_hp: number;
/**
*/
  speed: number;
/**
*/
  suit_2: BigInt;
/**
*/
  suit_4: BigInt;
}
/**
* 精简的固定式神属性（由外部传入）
*/
export class HeroAttrsStatic {
  free(): void;
/**
*/
  attack: number;
/**
*/
  crit_power: number;
/**
*/
  crit_rate: number;
/**
*/
  defense: number;
/**
*/
  effect_hit_rate: number;
/**
*/
  effect_resist_rate: number;
/**
*/
  max_hp: number;
/**
*/
  speed: number;
}
