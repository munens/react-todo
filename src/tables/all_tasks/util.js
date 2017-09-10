const mergeSortByDate = (tasks) => {
	if(tasks.length < 2){ 
		return tasks; 
	}
	
	let mid_point = Math.floor(tasks.length / 2);
	let sub_left = mergeSortByDate(tasks.slice(0, mid_point));
	let sub_right = mergeSortByDate(tasks.slice(mid_point));

	return merge(sub_left, sub_right);
}

const merge = (left, right) => {
	let result = [];
	while(left.length > 0 && right.length > 0) {
		result.push(left[0].date < right[0].date ? left.shift() : right.shift());
	}
	return result.concat(left.length ? left : right);
}

export default mergeSortByDate;
