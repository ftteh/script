import os
os.fork() #2
os.fork() #4
os.fork() #8
os.fork() #16
os.fork() #32
os.fork() #64
os.fork() #128
os.fork() #256
print os.popen('php -r ' + \
		'"echo file_get_contents(\'http://192.168.38.1/e.php\');"').read()
