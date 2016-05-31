
function collect_same_elements(collection_a, object_b) {
	var arr_b = object_b.value;
	var arr = new Array();
	var n = 0;
	for(var x=0;x<collection_a.length;x++){
		var obj = collection_a[x];
		for(var i = 0;i<arr_b.length;i++){
			if(arr_b[i]==obj.key){
				arr[n] = obj.key;
				n++;
			}
		}
	}
	return arr;
}

module.exports = collect_same_elements;
