import time

nemo = ['cloud','door','fish','nemo']

def findNemo(array):
    start_time = time.time()
    for i in array:
        if i == 'nemo':
            print('Found Nemo')
    print((time.time() - start_time))
findNemo(nemo)
