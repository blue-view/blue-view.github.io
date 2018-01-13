# -*- coding: utf-8 -*-
"""
Created on Sun Jan 07 14:00:08 2018

@author: Administrator
"""
x = 2
count = 0
while count < 50:
    for i in range(2, x):
        if x % i == 0:
            break
    else:
        print x, 'is a prime'
        count += 1
    x += 1
