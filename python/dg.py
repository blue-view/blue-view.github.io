def p(n):
    if n == 0 or n == 1:
        return 1
    else:
       return n * p(n - 1)

print p(6)
