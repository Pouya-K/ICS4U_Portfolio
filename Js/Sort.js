function codeCopy1(){
	let codeText = 'public class Search {\n\tpublic static int search(int[] arr, int target){\n\t\tfor(int i = 0; i<arr.length; i++){\n\t\t\tif(arr[i] == target){\n\t\t\t\treturn target;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\tpublic static void main(String[] args) {\n\t\tint[] arr = {10,5,8,9,2,3,4};\n\t\tSystem.out.println("The target is found at index " + search(arr, 5));\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy2(){
	let codeText = 'public class Search {\n\tpublic static int binarySearch(int[] arr, int target){\n\t\tint left = 0;\n\t\tint right = arr.length - 1;\n\t\twhile (left <= right) {\n\t\t\tint middle = left + (right - left) / 2;\n\t\t\tif (arr[middle] == target) {\n\t\t\t\treturn middle;\n\t\t\t}\n\t\t\tif (arr[middle] < target) {\n\t\t\t\tleft = middle + 1;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tright = middle - 1;\n\t\t\t}\n\t\t}\n\t\treturn -1;\n\t}\n\tpublic static void main(String[] args) {\n\t\t\tint[] arr = {2, 3, 4, 10, 40};\n\t\t\tSystem.out.println("Element is present at index " + binarySearch(arr, 10));\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy3(){
	let codeText = 'import java.util.*;\npublic class Sort {\n\tpublic static void sort(int arr[]){\n\t\tint n = arr.length;\n\t\tfor (int i = 1; i < n; ++i) {\n\t\t\tint temp = arr[i];\n\t\t\tint j = i - 1;\n\t\t\twhile (j >= 0 && arr[j] > temp) {\n\t\t\t\tarr[j + 1] = arr[j];\n\t\t\t\tj = j - 1;\n\t\t\t}\n\t\t\tarr[j + 1] = temp;\n\t\t}\n\t}\n\tpublic static void main(String[] args) {\n\t\tint[] arr = {120, 34, 2, 129, 4, 230};\n\t\tSystem.out.println("Unsorted array: " + Arrays.toString(arr));\n\t\tsort(arr);\n\t\tSystem.out.println("Sorted array: " + Arrays.toString(arr));\n\t}\n}';
	navigator.clipboard.writeText(codeText);
}
function codeCopy4(){
	let codeText = 'import java.util.*;\npublic class Sort {\n\tpublic static void sort(int arr[]){\n\t\tfor(int i = 0; i<arr.length-1; i++){\n\t\t\tint index = i;\n\t\t\tfor(int j = i + 1; j < arr.length; j++){\n\t\t\t\tif(arr[j] < arr[index]){\n\t\t\t\t\tindex = j;\n\t\t\t\t}\n\t\t\t}\n\t\t\tint temp = arr[i];\n\t\t\tarr[i] = arr[index];\n\t\t\tarr[index] = arr[i];\n\t\t}\n\t}\n\tpublic static void main(String[] args) {\n\t\tint[] arr = {120, 34, 2, 129, 4, 230};\n\t\tSystem.out.println("Unsorted array: " + Arrays.toString(arr));\n\t\tsort(arr);\n\t\tSystem.out.println("Sorted array: " + Arrays.toString(arr));\n\t}\n}';
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