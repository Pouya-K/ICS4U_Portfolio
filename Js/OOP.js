function codeCopy1(){
	let codeText = 'class Dog{\n\tpublic String name;\n\tpublic Dog(String dogName){\n\t\tname = dogName;\n\t}\n\tpublic Dog(){\n\t\tname = "Steve";\n\t}\n\tpublic void bark(){\n\t\tSystem.out.println(name + " said: WOOF.");\n\t}\n}\nclass Main{\n\tpublic static void main(String[] args) {\n\t\tDog husky = new Dog("Carlo");\n\t\thusky.bark();\n}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'class Dog{\n\tpublic String name;\n\tpublic Dog(String dogName){\n\t\tname = dogName;\n\t}\n\tpublic Dog(){\n\t\tname = "Steve";\n\t}\n\tpublic void bark(){\n\t\tSystem.out.println(name + " said: WOOF.");\n\t}\n}\n\nclass Poodle extends Dog{\n\tpublic Poodle(String poodleName){\n\t\tsuper(poodleName);\n\t}\n\tpublic void bark(){\n\t\tSystem.out.println(this.name + " the Doodle said: WOOF");\n\t}\n}class Main{\n\tpublic static void main(String[] args) {\n\t\tDog husky = new Dog("Carlo");\n\t\thusky.bark();\n\t\tPoodle poodle = new Poodle("Golden");\n\t\tpoodle.bark();\n}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy3(){
	let codeText = 'public class Animal {\n\tpublic String name;\n\tpublic Animal(){\n\t\tname = "Animal";\n\t}\n\tvoid makeSound(){\n\t\tSystem.out.println("What do I say?");\n\t}\n\tpublic static void main(String[] args) {\n\t\tAnimal dog = new Dog();\n\t\tdog.goOnWalk(); //Causes error\n\t\t((Dog) dog).goOnWalk(); //Does not cause error\n\t}\n}\nclass Dog extends Animal{\n\tpublic Dog(){\n\t\tsuper();\n\t}\n\tvoid makeSound(){\n\t\tSystem.out.println("WOOF WOOF");\n\t}\n\tvoid goOnWalk(){\n\t\tSystem.out.println("YIPPEE! I\'m going on a walk!");\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy4(){
	let codeText = 'public class Animal {\n\tpublic String name;\n\tpublic Animal(){\n\t\tname = "Animal";\n\t}\n\tvoid makeSound(){\n\t\tSystem.out.println("What do I say?");\n\t}\n\tpublic static void main(String[] args) {\n\tAnimal[] animals = new Animal[3];\n\tanimals[0] = new Animal();\n\tanimals[1] = new Dog();\n\tanimals[2] = new Cat();\n\tfor(Animal an : animals){\n\t\tan.makeSound();\n\t}\n\t}\n}\nclass Dog extends Animal{\n\tpublic Dog(){\n\t\tsuper();\n\t}\n\tvoid makeSound(){\n\t\tSystem.out.println("WOOF WOOF");\n\t}\n}\nclass Cat extends Animal{\n\tpublic Cat(){\n\t\tsuper();\n\t}\n\tvoid makeSound(){\n\t\tSystem.out.println("Meow Meow");\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function revealAns1(){
	document.getElementById("ans1").style.display = "block";
}
function revealAns2(){
	document.getElementById("ans2").style.display = "block";
}
function revealAns3(){
	document.getElementById("ans3").style.display = "block";
}
