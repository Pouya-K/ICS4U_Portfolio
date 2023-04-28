function codeCopy1(){
	let codeText = 'public abstract class Animal {\n\tpublic String name;\n\tpublic Animal(){\n\t\tname = "Animal";\n\t}\n\tpublic abstract void makeSound();\n\tpublic static void main(String[] args) {\n\t\tAnimal dog = new Dog();\n\t\tdog.makeSound();\n\t}\n}\nclass Dog extends Animal{\n\tpublic Dog(){\n\t\tsuper();\n\t}\n\tpublic void makeSound(){\n\t\tSystem.out.println("WOOF WOOF");\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'interface Animal{\n\tpublic abstract void makeSound();\n\tpublic abstract void goOnWalk();\n}\npublic class Dog implements Animal{\n\tpublic Dog(){\n\t\tsuper();\n\t}\n\tpublic void makeSound(){\n\t\tSystem.out.println("WOOF WOOF");\n\t}\n\tpublic void goOnWalk(){\n\t\tSystem.out.println("I am a dog and went on a walk!.");\n\t}\n\tpublic static void main(String[] args) {\n\t\tAnimal dog = new Dog();\n\t\tdog.makeSound();\n\t\tdog.goOnWalk();\n\t}\n}';
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