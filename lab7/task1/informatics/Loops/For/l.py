a = input()
sum = 0
for i in range(0, len(a)):
    sum += int(a[i])*(2**i)
print(sum)
    