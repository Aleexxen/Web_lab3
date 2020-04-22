const object1 = {
  name: 'Boris',
  weight: 15,
}

const object2 = {
  name: 'Boris',
  weight: 15,
}

const object3 = {
  name: 'Rex',
  weight: 20,
}

// Реализуйте функцию isEquivalent

const isEquivalent = (obj1, obj2) =>{
  if (obj1 === obj2){
		return true
	}else if((typeof obj1 === 'object' && obj1 !==null)&&(typeof obj2 === 'object' && obj2 !==null)){
		if(Object.keys(obj1).length !== Object.keys(obj2).length){
			return false
}

for(let el in obj1){
	if(obj2.hasOwnProperty(el)){
		if(!isEquivalent(obj1[el],obj2[el])){
			return false
		}
	}else{
		return false
	}
	}
	return true
}else{
	return false
}
	}

console.log(isEquivalent(object1, object2)) // true
console.log(isEquivalent(object1, object3)) // fals
