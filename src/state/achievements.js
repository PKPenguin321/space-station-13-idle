import Vue from 'vue'



import ITEMS from "@/data/items";
import ENEMIES from "@/data/enemies";
import { ALL_JOBS } from "@/data/jobs";
import { MAX_LEVEL } from "@/data/experience";

// pull data from elsewhere

const BASE_JOB_TIME = {};
ALL_JOBS.forEach(job => {
	BASE_JOB_TIME[job.id] = 0;
});

const completion = {
	namespaced: true,
	state: {
		achievementsDone: {
			// achievementNameString
		}
	},
	getters: {
		getAchievement(state, achievementString) {
			return state.achievementsDone.indexOf(achievementString);
		}
	},
	mutations: {
		unlockAchievement(state, achievementString) {
			if (!state.achievementsDone[achievementString]) {
				Vue.set(state.achievementsDone, achievementString);
			}
		}
	}
}

export default completion;