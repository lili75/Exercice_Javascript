function my_max(mon_tab){
	let mon_max = mon_tab[0];

	mon_tab.forEach(function(element){
		if (mon_max < element){
			mon_max = element;
		}
	});
	return mon_max;
};

function vowel_count(my_string){
	let vowel_tab = ['a','e','i','o','u','y'];
	let count = 0;

	for(let i=0; i< my_string.length; i += 1){
		// [1,2,3].includes(2) => true
		if (vowel_tab.includes(my_string[i].toLowerCase()) ){
			count += 1;
		}
	};
	return count;
};

function reverse(my_string){
	return my_string.split("").reverse().join("");
};

