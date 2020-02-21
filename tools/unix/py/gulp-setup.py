import os
import subprocess

def uninstall_global_gulp():
    # Upgrading global gulp (Ask to reinstall y or n)
    print("\nUninstalling global gulp if available...\n")
    cmd = 'npm rm --global gulp;'
    os.system(cmd)
    
def check_node_and_npm():
    # Checking node and npm 
    print("\nChecking node and npm version...\n")
    cmd = 'node --version; npm --version;'
    os.system(cmd)

def install_gulp_cli():
    # Installing gulp cli 
    print("\nInstalling gulpfile,js cli...\n")
    cmd = 'npm install --global gulp-cli;'
    os.system(cmd)

def install_gulp_save_dev():
    # gulp package in your devDependencies
    print("\nInstalling gulp package in your devDependencies...\n")
    cmd = 'npm install --save-dev gulp;'
    os.system(cmd)


# Install

def install():
    check_node_and_npm()
    install_gulp_cli()
    install_gulp_save_dev()
  

# Setup
is_gulp_cli = input("Do you want to update gulp cli (y or n)\n")

if is_gulp_cli == 'y' or is_gulp_cli == 'y':
    uninstall_global_gulp()

install()

print("\nFor usage : https://gulpjs.com/docs/en/getting-started/quick-start\n")
print("\nYou will find project specefic gulp files unser automate/resources folder.\n Just copy the content in gulpfile.js\n\n")








 