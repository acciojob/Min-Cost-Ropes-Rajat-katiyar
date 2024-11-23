function mincost(arr)
{ 
//write your code here
// return the min cost
	if(arr.length === 1) return 0;

	cost heap = arr.slice().sort((a,b) => a-b);

	let totalCost = 0;

	while(heap.length > 1) {
		const rope1 = heap.shift();
		const rope2 = heap.shift();

		const cost = rope1 +rope2;
		totalCost += cost;

		let insertIndex = heap.findIndex(x => x > cosrt);
		if(insertIndex === -1) {
			heap.push(cost);
		}
		else {
			heap.slice(insertIndex, 0, cost);
		}
	}
	return totalCost;
  
}

module.exports=mincost;
