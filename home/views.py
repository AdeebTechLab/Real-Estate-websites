from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from datetime import datetime
from django.contrib.auth.decorators import login_required
from urllib.parse import quote
from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse
from .models import *
# Create your views here.

def home(request):
    return render(request, "home/home.html")

def properties(request):
    return render(request, "home/properties.html")

def contact(request):
    return render(request, "home/contact.html")

def about(request):
    return render(request, "home/about.html")

def send_location(request):
    if request.method == 'POST':
        location = request.POST.get('location')
        type_val = request.POST.get('type')
        purpose = request.POST.get('purpose')

        raw_message = (
            f"New Inquiry Received!\n\n"
            f"📍 Location: {location}\n"
            f"🏷️ Type: {type_val}\n"
            f"🎯 Purpose: {purpose}"
        )

        encoded_message = quote(raw_message)
        phone_number = "923034909098"
        whatsapp_url = f"https://api.whatsapp.com/send?phone={phone_number}&text={encoded_message}"
        return redirect(whatsapp_url)
    return render(request, 'home.html')

def properties_listing(request):
    return render(request, "home/properties.html")


def contact_message(request):
    if request.method == "POST":
        full_name = request.POST.get('full_name')
        email_address = request.POST.get('email_address')
        phone_number = request.POST.get('phone_number')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        ContactMessage.objects.create(
            full_name=full_name,
            email_address=email_address,
            phone_number=phone_number,
            subject=subject,
            message=message
        )

        email_subject = f"New Contact Message: {subject}"
        
        email_body = f"""There is a new message on your Real Estate Website. Details:\n
        Full Name: {full_name}\n
        Email Address: {email_address}\n
        Phone Number: {phone_number}\n
        Subject: {subject}\n
        Message:\n
        {message}
        """

        try:
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=["mbilawalali850@gmail.com"],
                fail_silently=False,
            )
            messages.success(request, "Your message has been submitted successfully!")
        except Exception as e:
            messages.error(request, f"Error sending email: {e}")

        return redirect('home')
    return render(request, 'home/home.html')