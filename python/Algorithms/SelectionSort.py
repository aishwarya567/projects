def selectionSort(arr):
     for i in range(len(arr)):
         minimum = i
         for j in range(i+1,len(arr)):
             if arr[j] < arr[minimum]:
                 minimum = j
         arr[i], arr[minimum]  = arr[minimum],arr[i]
lst = [4,3,6,1,0,7]
selectionSort(lst)
print(lst)