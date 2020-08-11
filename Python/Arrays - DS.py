# This is part of the Interview Preparation Kit

import math
import os
import random
import re
import sys

# Complete the reverseArray function below.
def reverseArray(a):
    r = []
    for i in range(len(a)):
        r.append(a[len(a)-1-i])
    return r

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = reverseArray(arr)

    fptr.write(' '.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
