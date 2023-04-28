function codeCopy1(){
	let codeText = 'String[] arr = {"I", "Love", "CS!"};\nString[] arr2 = new String[3];\narr2[0] = "I";\narr2[1] = "Love";\narr2[2] = "CS!";';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'import java.util.*;\npublic class ArrayTesting {\n\tpublic static void main(String[] args) {\n\t\tArrayList<String> testing = new ArrayList<String>();\n\t\ttesting.add("I");\n\t\ttesting.add("Don\'t");\n\t\ttesting.add("Don\'t");\n\t\ttesting.add("Love");\n\t\ttesting.add("CS");\n\t\tfor(int i = 0; i<testing.size(); i++){\n\t\t\tif(testing.get(i) == "Don\'t"){\n\t\t\t\ttesting.remove(i);\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(testing);\n\t}\n}';
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