from django.db import models

# Create your models here.

class data_registration(models.Model):
    location = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    purpose = models.CharField(max_length=100)
    

class ContactMessage(models.Model):
    full_name = models.CharField(max_length=100)
    email_address = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=50)
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)