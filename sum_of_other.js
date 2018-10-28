function sumOfOther(arr) {
	
	var sum=0;

  	for (i=0; i<arr.length; i++) {
    	sum+=arr[i];
  	}

  	var mapped =arr.map((value) => sum - value);
   	return mapped;
	}
document.write(sumOfOther([2,3,4,1]));
