# -*- coding: utf-8 -*-
"""
Created on Sun Jan 07 14:14:51 2018

@author: Administrator
"""
num = 12321
num_p = 0
num_t = num
while num != 0:
    print num % 10, num, num_p * 10
    num_p = num_p * 10 + num % 10
    num = num / 10

if num_t == num_p:
    print 'ok'
else:
    print num_t, num_p
    print 'NO'
