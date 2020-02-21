#!/bin/sh



# Create django prodject named "app"
echo "Creating django project"
django-admin startproject $app
echo \
wait


# create app "main"
echo "Creating django app"
python3 ./$app/manage.py startapp $main
echo \
wait


# Create urls files under main app

touch ./$app/main/urls.py
echo \
wait

# Congratulate

echo "You are ready to go"






