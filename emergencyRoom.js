const emergencyRoom = {trauma:50, heartAttack:50}

const fillBed = (type) => {
	if(emergencyRoom[type]) {
		emergencyRoom[type]--;
		console.log(`Room successfully alloted\n total ${emergencyRoom[type]} room available for ${type} now`);
	} else {
		console.log('no room is available');
	}
}
