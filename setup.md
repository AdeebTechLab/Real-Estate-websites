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

# Django Project GitHub & Deployment Setup Guide

This guide outlines all the steps required to securely configure, push, and prepare your Django project (`Real-Estate-websites`) for GitHub and future deployment.

### 1. Fix the Virtual Environment (If the Project Was Moved)

If you moved your project folder to a new directory or drive and encounter a `pip` launcher path error, remove the old virtual environment and create a fresh one:

```powershell
# Deactivate and delete the old virtual environment
deactivate
Remove-Item -Recurse -Force .env

# Create and activate a new virtual environment
python -m venv .env
.\.env\Scripts\activate

# Install required packages
pip install django python-dotenv
```

*(Note: Reinstall any additional packages your project uses, such as `pillow`.)*

### 2. Secure Your `SECRET_KEY`

Avoid hardcoding your `SECRET_KEY` directly in `settings.py` before pushing to GitHub. Store it in a local environment file instead:

1. Create a file named **`.env.local`** in the root directory of your project and add your secret key:
   ```text
   SECRET_KEY=django-insecure-isl__@tr$do)^f2l61ie7a758)r$+9=8v%d#8e2m_ev5*s!y4(
   DEBUG=True
   ```

2. Open **`myproject/settings.py`** and add the following imports and loader at the very top of the file:
   ```python
   import os
   from pathlib import Path
   from dotenv import load_dotenv

   # Load environment variables from .env.local
   load_dotenv('.env.local')
   ```

3. Replace the hardcoded `SECRET_KEY` line in `settings.py` with:
   ```python
   SECRET_KEY = os.getenv('SECRET_KEY')
   ```

### 3. Configure the `.gitignore` File

Create a **`.gitignore`** file in your project's root folder to prevent virtual environments, secret keys, local databases, and cache files from being uploaded to GitHub:

```text
# Virtual Environment
.env/
venv/

# Secret Environment Variables
.env.local

# Python Cache Files
__pycache__/
*.py[cod]

# Local Database
db.sqlite3

# Media Uploads (Optional)
home/static/media/
```

### 4. Generate `requirements.txt`

Generate a `requirements.txt` file in the root directory so hosting platforms know which dependencies to install:

```powershell
python -m pip freeze > requirements.txt
```

### 5. Test the Local Server

Run the development server locally to verify that the environment variables and dependencies work without errors:

```powershell
python manage.py runserver
```

### 6. Push to GitHub Using GitHub Desktop

1. Open **GitHub Desktop** and select your `Real-Estate-websites` repository.
2. Check the **Changes** tab on the left to verify that only essential project files (`home/`, `myproject/`, `manage.py`, `requirements.txt`, `.gitignore`, `setup.md`, `README.md`) are listed.
3. Enter a commit message in the **Summary** field at the bottom left (e.g., `Initial Django project setup`).
4. Click **Commit to main**.
5. Click **Push origin** (or **Publish repository**) at the top bar to upload your project to GitHub.