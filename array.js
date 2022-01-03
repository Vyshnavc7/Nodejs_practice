var n=require('readline-sync')
a=n.question("Enter the position")
var s=["vyshnav","clevin"]
console.log(s[a])

#a)array manipulation, searching,sorting and splitting

import numpy as npy

print("Array Manipulation:") print("accessing using index")

arr-npy.array(npy.arange(4,24)) for i in range(20):

print(arr[i])

print("Array Slicing:")

print("All elements:",arr[0::])

3

print("Index from other end:",arr[::-1]) print("Alternate elemets starting from index 7:"arr[7::2])

print("Reshaping array:")

arri-arr.reshape(4,5)

print(arr!)

print("Vertical stacking:") a - npy.array([[12,4,5],[22,35,58] [45,33,21]]) b=npy.array([[1,30,55], [2,5,8],[5,3,1]])

print(npy.vstack((a,b)))

print("Searching in an array:") x= npy.where(a=35) print("position of x=",x)

print("Sorting Array a:"npy.sort(a))

print("Splitting Array a:") al.32,a3,a4=npy.split(arr.[4,10,16])

print(al,a2.a3,a4)

print("Splitting along vertical axis into 3 parts:") a5-npy.vsplit(a,3)

print(a5)

#b)broadcasting

import numpy as npy

arri npy.array([2,3,4,6,5,9]).reshape(2,3) print("arr1\n",arrl)

arr2mpy array([100,200,300]).reshape(1,3) print("arr2\n","arr2)

print("sum\n") print(arrl+arr2)

M = npy.ones((2,3))

a = npy.arange(3) print("a\n",a)

print("M\n",M)

print("M+a\n",M+a) anpy.arange(3).reshape((3,1))

b = npy.arange(3)

print("a is:\n",a) print("b is:\n",b) print("a+b is:\n",a+b)

M = npy.ones((3, 2))

a = npy.arange(3)

import numpy as np import matplotlib.pyplot as plt

#Computer x and y coordinates for points on sine and cosine curv xnp.arange(0,3*np.pi, 0.1) print("x",x)

y_sine = np.sin(x) y cosine = np.cos(x)

plt.plot(x, y sine) plt.plot(x, y_cosine)

#plot the points using plt.xlabel('x values') plt.title('plot of sine and cosine functions') plt.legend(['sine', 'cosine'])

plt.ylabel('y values')

plt.show()
