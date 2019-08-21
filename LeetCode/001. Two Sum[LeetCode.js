var twoSum = function(nums, target) {
    const map = new Map();
	for (let [index, elem] of nums.entries()) {
		if(!map.has(elem)) {
			map.set(elem, index);
		}
		if (map.has(target - elem) && index !== map.get(target - elem)) {
			return [map.get(target - elem) index];
		}
	}
};