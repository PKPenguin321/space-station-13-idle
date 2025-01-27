import { ALL_JOBS } from "@/data/jobs";
import { xpFromLevel } from '@/data/experience'
import { EventBus } from "@/utils/eventBus.js";

/*
BASE_BONUS = 5;
export const ITEM_INTERVALS = [20, 35, 50, 65, 75, 85, 92, 97, 100];
export const ENEMY_INTERVALS = [60, 80, 100];
export const JOB_INTERVALS = [25, 45, 60, 70, 80, 90, 95, 97, 99, 100];
*/

const ACHIEVEMENTS = {
	firstReset: {
		name: "Time Paradox",
		requirement: "Reset the timeline via the Chronosphere for the first time.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with a Black Operations Communicator."
		/*onPurchase(store) {
			store.dispatch(`chrono/resetSimulation`, {}, { root: true });
		}*/
	},
	allAntags: {
		name: "Antagonist Master",
		requirement: "Complete a timeline with each black ops job (not all at once on the same timeline).",
		// TODO: Implement tracking in the state storage in state\achievements.js instead
		tracking: {
			traitorLoop: 1,
			lingLoop: 1,
			cargoniaLoop: 1,
			cultLoop: 1
		},
		//TODO: Icons
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with an additional Black Operations Communicator."
	},
	combatOnly: {
		name: "Master Combatant",
		requirement: "Reset the timeline without ever leveling any non-combat skills past 1.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with level 5 in all combat jobs."

	},
	skillMaster: {
		name: "Skill Master",
		requirement: "Reset the timeline with at least half of the skills at level 50.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with 3 additional bluespace canisters."
	},
	aiMurderer: {
		name: "AI Murderer",
		requirement: "Defeat the AI for the first time.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "A sense of pride and accomplishment."
	},
	assassin: {
		name: "Assassin",
		requirement: "Defeat every enemy in the same timeline (reach 100% enemy completion).",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with 3 additional bluespace canisters."
	},
	doubleMax: {
		name: "Level 100",
		requirement: "Get a skill to level 100. Warning: Boring.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "A sense of pride and accomplishment."
	},
	shitpostMax: {
		name: "Dedicated ???er",
		requirement: "Complete the final task in ???. Warning: Grindy.",
		icon: require('@/assets/art/chrono/bluetime.png'),
		reward: "Start each new timeline with ??? unlocked. A sense of dread and unease. An eternal curse."
	},
}
