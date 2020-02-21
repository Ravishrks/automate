import os
import subprocess

# Project setup

def project_setup(napp, nproject):
    
    # Upgrading pip
    print("\nUpgrading pip...\n")
    cmd = 'pip install --upgrade pip;'
    os.system(cmd)

    # Install Django
    print("\nInstalling django...\n")
    cmd = 'pip install django;'
    os.system(cmd) 

    # Creating django project
    print("\nCreating django project...\n")
    cmd = f'django-admin startproject {nproject};'
    os.system(cmd) 

    # Creating django app
    print("Creating django app...\n")
    cmd = f'cd {nproject}; python3 manage.py startapp {napp};touch {napp}/urls.py;'
    os.system(cmd)
  


# Initila config

check_env = input("Have you setup your virtual enviroment ? (y or n) : ")

if check_env == 'y' or check_env == 'y':
    is_env_active = input("Is virtual env active ? (y or n) : ")

    if is_env_active == 'N' or is_env_active == 'n':
        print("Activate env and run npm command again")

    elif is_env_active == 'Y' or is_env_active == 'y':
        project_name = input("Enter your project name : ") 
        app_name = input("Enter your root app name : ")

        # Setting Project

        project_setup(app_name, project_name)
  

else:
    # create venv using python on root
    print("\nCreating virtual enviroment for python...\n")
    cmd = 'python3 -m venv env;'
    os.system(cmd)
    print("Virtual enviroment created successfully. You would see folder named env. \n\nNow activate your virtual enviroment by entering below command and run npm script again. \n\n\t'source env/bin/activate' \n")

















