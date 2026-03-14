a = int(input())
b = int(input())
for x in range(a, b + 1):
    root = int(x ** 0.5)
    if root * root == x:
        print(x)
   