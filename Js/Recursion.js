function codeCopy1(){
	let codeText = 'public class Factorial {\n\tpublic static int fact(int n){\n\t\tif(n <= 1) return 1;\n\t\treturn n * fact(n-1);\n\t}\n\tpublic static void main(String[] args) {\n\t\tint num = 5;\n\t\tSystem.out.println("The factorial of " + num + " is " + fact(num));\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'import java.util.*;\npublic class MergeSort {\n\tpublic static void main(String[] args){\n\t\tint[] userArray = {1,5,3,4,2,6};\n\t\tSystem.out.println("Array before sorting " + Arrays.toString(userArray));\n\t\tSystem.out.println("Array after sorting " + Arrays.toString(mergeSort(userArray)));\n\t}\n\tpublic static int[] mergeSort(int[] arr){\n\t\tif(arr.length==1) return arr;\n\t\t//using built in array class methods to split an array into 2\n\t\tint[] arr1= Arrays.copyOfRange(arr, 0, arr.length/2);\n\t\tint[] arr2 = Arrays.copyOfRange(arr, arr.length/2, arr.length);\n\t\tarr1 = mergeSort(arr1);\n\t\tarr2 = mergeSort(arr2);\n\t\treturn merge(arr1, arr2);\n\t}\n\tpublic static int[] merge(int[] arrA, int[] arrB){\n\t\t//Merging two sorted arrays together\n\t\tint[] mergedArr = new int[arrA.length+ arrB.length];\n\t\tint arrAIndex = 0, arrBIndex = 0;\n\t\tfor(int i = 0; i< mergedArr.length; i++){\n\t\t\tif(arrA[arrAIndex]<arrB[arrBIndex]){\n\t\t\t\tmergedArr[i] = arrA[arrAIndex];\n\t\t\t\tarrAIndex++;\n\t\t\t}\n\t\t\telse{\n\t\t\t\tmergedArr[i] = arrB[arrBIndex];\n\t\t\t\tarrBIndex++;\n\t\t\t}\n\t\t\t//One array is larger than the other (all remaining elements are in order)\n\t\t\tif(arrAIndex==arrA.length){\n\t\t\t\twhile(arrBIndex<arrB.length){\n\t\t\t\t\ti++;\n\t\t\t\t\tmergedArr[i] = arrB[arrBIndex];\n\t\t\t\t\tarrBIndex++;\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif(arrBIndex==arrB.length){\n\t\t\t\twhile(arrAIndex<arrA.length){\n\t\t\t\t\ti++;\n\t\t\t\t\tmergedArr[i] = arrA[arrAIndex];\n\t\t\t\t\tarrAIndex++;\n\t\t\t\t}\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\treturn mergedArr;\n\t}\n}';
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