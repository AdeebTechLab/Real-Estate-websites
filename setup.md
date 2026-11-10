# How can we use Django Python Framework in our system

### 1. Install Code Editor 'Visual Studio Code' by following link:

> https://code.visualstudio.com/download


### 2. Install Python in your system by following link:

> https://www.python.org/downloads/


### 3. Create a new folder and go to the vs code and open the terminal, setup the virtual environment by following cmd:
```
python -m venv .venv
```
the last word venv is the name of the environment, so you can also change like python -m venv core

### 4. Activate your environment:
```
.venv\Scripts\Activate.ps1
```
Note: venv is the name of your creating virtual environment, if you create virtual environment using another name like core so you have to run this cmd like 'core\Scripts\Activate.ps1
'
Once activated, you will see (.venv) appear at the beginning of your terminal prompt line.

### 5. Install django:
```
pip install django
```

### 6. You can verify the installation by:
```
python -m django --version

```

### 7. Create a project folder:
```
django-admin startproject myproject .
```
Never forget the last dot and you can also change the project name like 'django-admin startproject demopro .'

### 8. Run the Development Server
```
python manage.py runserver

```
You will se the output like 'http://127.0.0.1:8000/' click on it and view your first django project.

### 9. Create new app using following cmd:
```
python manage.py startapp home
```
The last word is the name of your app so you can change like 'python manage.py startapp accounts'