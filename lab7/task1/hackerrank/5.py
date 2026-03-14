a = list(map(int,input().split()))
b = list(map(int,input().split()))
c = list(map(int,input().split()))
h = 0
for i in c:
    if(i in a):
        h+=1
    elif(i in b):
        h-=1
print(h)