import os
import subprocess, shlex
import time


# create venv using python on root
# print("Creating virtual enviroment for python")
# cmd = 'python3 -m venv envv;'
# os.system(cmd)

def act():
    os.system('/bin/bash  --rcfile env/bin/activate')
    os.system('pip install django')

# act()
time.sleep(2.4)
print("Slept")
os.system('touch sleep.py')
# Activating Enviroment
print("Activating Enviroment")
# cmd = 'python3 ./envv/bin/python'
cmd = 'source  ./env/bin/activate'

subprocess.call(['source  ./env/bin/activate'], shell = True)

subprocess.Popen('source  ./env/bin/activate', shell = True)

# os.system('pip install django')

os.system('/bin/zsh')


