function codeCopy1(){
	let codeText = 'import java.util.*;\npublic class ArrayTesting {\n\tpublic static void main(String[] args) {\n\t\tArrayList<String> testingArr = new ArrayList<>(10);\n\t\ttestingArr.add("I");\n\t\ttestingArr.add("Love");\n\t\ttestingArr.add("CS!");\n\t\ttestingArr.remove(0);\n\t\tSystem.out.println(testingArr.get(0) + testingArr.get(1));\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'import java.util.Arrays;\npublic class ArrayTesting {\n\tpublic static void main(String[] args) {\n\t\tString[] arr = {"I", "Love", "CS!"};\n\t\tSystem.out.println("Array before change: " + Arrays.toString(arr));\n\t\tchange(arr);\n\t\tSystem.out.println("Array after change: " + Arrays.toString(arr));\n\t}\n\tpublic static void change(String[] array){\n\t\tarray[0] = "We";\n\t}\n}';
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